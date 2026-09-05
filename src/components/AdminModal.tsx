import React, { useState, useEffect } from 'react';
import {
  X,
  Shield,
  ShieldCheck,
  KeyRound,
  Users,
  Copy,
  Check,
  ExternalLink,
  Plus,
  RefreshCw,
  Mail,
  Smartphone,
  Lock,
  Unlock,
  AlertTriangle,
  FileText,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  PAYMENT_CONFIG,
  DEFAULT_CONFIRMATION_CODES,
  getAllValidConfirmationCodes,
  verifyConfirmationCode,
  registerNewConfirmationCode,
  saveAppConfirmation,
  ensureActiveSubscription,
  isAppLockEnforced,
  setAppLockEnforced
} from '../services/subscriptionService';
import { UserSubscription } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (sub: UserSubscription) => void;
  onLogout?: () => void;
  onOpenGate?: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose, onSuccess, onLogout }) => {
  const [adminCodeInput, setAdminCodeInput] = useState('');
  const [showAdminCode, setShowAdminCode] = useState(false);
  const [showSystemCodes, setShowSystemCodes] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [logoutMessage, setLogoutMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Generator state
  const [newRecipient, setNewRecipient] = useState('');
  const [customPrefix, setCustomPrefix] = useState('GARAL-');
  const [generatedCode, setGeneratedCode] = useState('');

  // Lock enforcement state
  const [lockEnforced, setLockEnforced] = useState(false);

  // Logs & codes
  const [subscriberLogs, setSubscriberLogs] = useState<any[]>([]);
  const [codeHistory, setCodeHistory] = useState<any[]>([]);

  useEffect(() => {
    if (isOpen) {
      // Admin session is verified via session storage so it requires code when opened in new context
      const sessionActive = sessionStorage.getItem('pharmacies_ci_admin_auth');
      if (sessionActive === 'true') {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLockEnforced(isAppLockEnforced());
      loadData();
    } else {
      setAuthError('');
      setLogoutMessage('');
      setAdminCodeInput('');
    }
  }, [isOpen]);

  const loadData = () => {
    try {
      const logs = JSON.parse(localStorage.getItem('pharmacies_ci_subscription_logs') || '[]');
      setSubscriberLogs(logs);

      const history = JSON.parse(localStorage.getItem('pharmacies_ci_code_history') || '[]');
      setCodeHistory(history);
    } catch {
      // fallback
    }
  };

  if (!isOpen) return null;

  const handleAdminLogin = (e?: React.FormEvent, directCode?: string) => {
    if (e) e.preventDefault();
    setAuthError('');
    setLogoutMessage('');

    const targetCode = (directCode || adminCodeInput).trim().toUpperCase();
    const res = verifyConfirmationCode(targetCode);

    if (res.valid && res.role === 'admin') {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem('pharmacies_ci_admin_auth', 'true');
        saveAppConfirmation(targetCode, 'admin');
      } catch (e) {
        console.error(e);
      }
      const sub = ensureActiveSubscription(targetCode, 'Administrateur Pharmacies CI', '+225 0700000000');
      if (onSuccess) {
        onSuccess(sub);
      }
    } else {
      setAuthError('Code administrateur incorrect ou non autorisé.');
    }
  };

  const handleGenerateCode = () => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const code = `${customPrefix.trim().toUpperCase()}${randomSuffix}`;
    registerNewConfirmationCode(code, newRecipient || 'Nouvel Adhérent');
    setGeneratedCode(code);
    setNewRecipient('');
    loadData();
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const handleToggleLock = (val: boolean) => {
    setLockEnforced(val);
    setAppLockEnforced(val);
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    setAdminCodeInput('');
    setAuthError('');
    setShowAdminCode(false);
    setLogoutMessage('Code administrateur verrouillé. Votre session administrateur est désormais fermée.');
    try {
      sessionStorage.removeItem('pharmacies_ci_admin_auth');
      localStorage.removeItem('pharmacies_ci_app_confirmed');
    } catch (e) {
      console.error(e);
    }
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-sm sm:text-base flex items-center gap-1.5">
                <span>Espace Administration & Codes</span>
                <span className="text-[10px] bg-emerald-500/30 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-400/20">
                  CI-225
                </span>
              </h2>
              <p className="text-[11px] text-slate-300">
                Supervision : {PAYMENT_CONFIG.managerName} & {PAYMENT_CONFIG.beneficiaryName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-white/10 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {!isAuthenticated ? (
            /* Login Gate for Admin */
            <div className="max-w-md mx-auto py-6 space-y-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-700 shadow-sm">
                <Lock className="h-7 w-7" />
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900">
                  Code administrateur requis
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                  Veuillez entrer le <strong>code administrateur officiel (Max adiko Clovis Garal)</strong> pour déverrouiller l'accès à la gestion des codes et aux journaux.
                </p>
              </div>

              {logoutMessage && (
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-center gap-2 animate-in fade-in">
                  <Lock className="h-4 w-4 text-amber-600 shrink-0" />
                  <span className="font-semibold">{logoutMessage}</span>
                </div>
              )}

              <form onSubmit={handleAdminLogin} className="space-y-3 pt-2">
                <div>
                  <div className="relative">
                    <input
                      type={showAdminCode ? 'text' : 'password'}
                      value={adminCodeInput}
                      onChange={(e) => setAdminCodeInput(e.target.value.toUpperCase())}
                      placeholder="Entrez le code administrateur..."
                      autoFocus
                      className="w-full text-center text-lg tracking-widest font-black uppercase rounded-2xl border-2 border-slate-300 px-12 py-3 text-slate-900 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-hidden transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowAdminCode(!showAdminCode)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1 transition cursor-pointer"
                      title={showAdminCode ? 'Masquer la saisie' : 'Afficher la saisie'}
                    >
                      {showAdminCode ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {authError && (
                    <p className="text-xs text-red-600 font-semibold mt-2 flex items-center justify-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                      <span>{authError}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-600/20 active:scale-98 transition cursor-pointer"
                >
                  Déverrouiller l'administration
                </button>
              </form>

              {/* Direct Contacts for Code */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Obtenir le code auprès des responsables :</span>
                </p>
                <div className="space-y-1 text-[11px] text-slate-600">
                  <div>
                    <strong>Max adiko Clovis Garal</strong> (Marketing, Abidjan) :{' '}
                    <a
                      href={`mailto:${PAYMENT_CONFIG.marketingEmail}?subject=Demande%20de%20code%20de%20confirmation%20Admin`}
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      {PAYMENT_CONFIG.marketingEmail}
                    </a>
                  </div>
                  <div>
                    <strong>{PAYMENT_CONFIG.managerName}</strong> (Général) :{' '}
                    <a
                      href={`mailto:${PAYMENT_CONFIG.notificationEmail}?subject=Demande%20de%20code%20de%20confirmation%20Admin`}
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      {PAYMENT_CONFIG.notificationEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div className="space-y-6">

              {/* Status Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white font-bold">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-emerald-950">
                      Session Administrateur Validée
                    </h3>
                    <p className="text-xs text-emerald-800">
                      Autorisé par <strong>Max adiko Clovis Garal</strong> • Abidjan, CI
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={PAYMENT_CONFIG.wavePayUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1DA1F2] hover:bg-blue-600 text-white font-bold text-xs shadow-xs transition"
                  >
                    <span>Guichet Wave CI</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={handleAdminLogout}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs transition cursor-pointer active:scale-95"
                    title="Déconnexion immédiate et verrouillage du code administrateur"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    <span>Déconnexion & Verrouiller Admin</span>
                  </button>
                </div>
              </div>

              {/* Toggle Mandatory Lock for the App */}
              <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                    {lockEnforced ? <Lock className="h-4 w-4 text-amber-600" /> : <Unlock className="h-4 w-4 text-emerald-600" />}
                    <span>Verrouillage strict de l'application (Par défaut désactivé)</span>
                  </div>
                  <p className="text-xs text-slate-600 max-w-md">
                    Par défaut, l'utilisateur consulte librement l'application pour voir les pharmacies et décider de s'abonner. Le code de confirmation lui est transmis par M. Max adiko Clovis Garal après son paiement (1 000 FCFA).
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggleLock(!lockEnforced)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    lockEnforced ? 'bg-emerald-600' : 'bg-slate-300'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      lockEnforced ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Code Generator Tool */}
              <div className="rounded-2xl border border-slate-200 p-4 space-y-3 bg-white shadow-xs">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <Plus className="h-4 w-4 text-emerald-600" />
                    <span>Générer un code de confirmation pour un adhérent</span>
                  </h4>
                  <span className="text-[11px] text-slate-500 font-mono">Signé : Max Garal</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={newRecipient}
                    onChange={(e) => setNewRecipient(e.target.value)}
                    placeholder="Nom ou Téléphone adhérent"
                    className="rounded-xl border border-slate-300 px-3 py-2 text-xs focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                  />
                  <input
                    type="text"
                    value={customPrefix}
                    onChange={(e) => setCustomPrefix(e.target.value.toUpperCase())}
                    placeholder="Préfixe (Ex: GARAL-)"
                    className="rounded-xl border border-slate-300 px-3 py-2 text-xs font-mono uppercase focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={handleGenerateCode}
                    className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
                  >
                    Générer & Enregistrer
                  </button>
                </div>

                {generatedCode && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-emerald-800 text-[11px] block">Nouveau code actif :</span>
                      <strong className="text-base font-mono tracking-wider text-emerald-950 font-black">
                        {generatedCode}
                      </strong>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(generatedCode)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition"
                      >
                        {copiedCode === generatedCode ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        <span>{copiedCode === generatedCode ? 'Copié !' : 'Copier'}</span>
                      </button>

                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          `Bonjour, voici votre code de confirmation officiel Pharmacies CI envoyé par Max adiko Clovis Garal : *${generatedCode}*. Entrez-le dans l'application pour activer votre accès.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition"
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        <span>Envoyer WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Master & Active Codes List */}
              <div className="rounded-2xl border border-slate-200 p-4 space-y-3 bg-white">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <KeyRound className="h-4 w-4 text-slate-700" />
                    <span>Codes maîtres et reconnus par le système</span>
                  </h4>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowSystemCodes(!showSystemCodes)}
                      className="flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900 font-bold px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
                    >
                      {showSystemCodes ? <EyeOff className="h-3.5 w-3.5 text-slate-500" /> : <Eye className="h-3.5 w-3.5 text-slate-500" />}
                      <span>{showSystemCodes ? 'Masquer' : 'Révéler'}</span>
                    </button>
                    <span className="text-[11px] text-slate-500">
                      {getAllValidConfirmationCodes().length} codes
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {getAllValidConfirmationCodes().map((code) => (
                    <div
                      key={code}
                      className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono"
                    >
                      <span className="font-bold text-slate-900">
                        {showSystemCodes ? code : '••••••••'}
                      </span>
                      <button
                        onClick={() => handleCopy(code)}
                        className="text-slate-400 hover:text-emerald-700 transition p-1 cursor-pointer"
                        title="Copier le code"
                      >
                        {copiedCode === code ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subscriber Submissions Logs */}
              <div className="rounded-2xl border border-slate-200 p-4 space-y-3 bg-white">
                <div className="flex items-center justify-between">
                  <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <Users className="h-4 w-4 text-slate-700" />
                    <span>Dernières adhésions & notifications envoyées</span>
                  </h4>
                  <button
                    onClick={loadData}
                    className="text-slate-500 hover:text-emerald-700 flex items-center gap-1 text-xs"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    <span>Actualiser</span>
                  </button>
                </div>

                {subscriberLogs.length === 0 ? (
                  <p className="text-xs text-slate-500 italic py-2">
                    Aucune adhésion enregistrée pour l'instant dans ce navigateur.
                  </p>
                ) : (
                  <div className="space-y-2 max-h-56 overflow-y-auto pr-1 text-xs">
                    {subscriberLogs.map((log: any, idx: number) => {
                      const sub: UserSubscription = log.subscription;
                      return (
                        <div
                          key={idx}
                          className="p-3 rounded-xl border border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                        >
                          <div>
                            <strong className="text-slate-900">{sub.userName || 'Adhérent'}</strong>
                            <span className="text-slate-500 ml-2">({sub.phone})</span>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {sub.commune} • N° {sub.memberId} • {sub.priceCFA} FCFA ({sub.paymentMethod})
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                              Notifié à M. Sanogo
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Pharmacies CI • Direction & Marketing</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
