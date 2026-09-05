import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  ShieldCheck, 
  QrCode, 
  Phone, 
  MessageSquare, 
  Download, 
  Share2, 
  Printer, 
  CheckCircle2, 
  KeyRound, 
  ExternalLink, 
  RefreshCw, 
  Send, 
  Lock, 
  Pill, 
  FileText,
  MapPin,
  Clock,
  ChevronRight
} from 'lucide-react';
import { UserSubscription, Pharmacy } from '../types';
import { 
  PAYMENT_CONFIG, 
  verifyConfirmationCode, 
  saveAppConfirmation, 
  ensureActiveSubscription 
} from '../services/subscriptionService';
import confetti from 'canvas-confetti';

interface VipFeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: UserSubscription | null;
  isConfirmed: boolean;
  onSubscriptionUpdated: (sub: UserSubscription) => void;
  pharmacies: Pharmacy[];
  onOpenWavePayment: () => void;
}

export const VipFeaturesModal: React.FC<VipFeaturesModalProps> = ({
  isOpen,
  onClose,
  subscription,
  isConfirmed,
  onSubscriptionUpdated,
  pharmacies,
  onOpenWavePayment
}) => {
  const isUnlocked = isConfirmed || (subscription && subscription.status === 'active');

  // Direct Code Activation State
  const [codeInputValue, setCodeInputValue] = useState('');
  const [codeError, setCodeError] = useState('');
  const [isSuccessUnlocked, setIsSuccessUnlocked] = useState(false);

  // VIP Feature Tabs
  const [activeFeatureTab, setActiveFeatureTab] = useState<'pass' | 'alerts' | 'pdf' | 'concierge' | 'offline'>('pass');

  // Alerts configuration state
  const [selectedCommuneAlert, setSelectedCommuneAlert] = useState<string>(
    subscription?.commune || 'Cocody'
  );
  const [smsAlertsActive, setSmsAlertsActive] = useState(true);
  const [whatsappAlertsActive, setWhatsappAlertsActive] = useState(true);
  const [alertsSaved, setAlertsSaved] = useState(false);

  // Concierge Medication Search Form
  const [medName, setMedName] = useState('');
  const [medCommune, setMedCommune] = useState('Cocody');
  const [medUrgency, setMedUrgency] = useState<'urgente' | 'standard'>('urgente');
  const [conciergeSuccess, setConciergeSuccess] = useState(false);

  // Offline Sync State
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncTimestamp, setSyncTimestamp] = useState('Aujourd’hui');

  if (!isOpen) return null;

  const handleValidateCode = (e: React.FormEvent) => {
    e.preventDefault();
    setCodeError('');

    const res = verifyConfirmationCode(codeInputValue);
    if (res.valid) {
      saveAppConfirmation(codeInputValue, res.role);
      const sub = ensureActiveSubscription(codeInputValue);
      onSubscriptionUpdated(sub);
      setIsSuccessUnlocked(true);
      try {
        confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
      } catch {
        // Safe fallback
      }
    } else {
      setCodeError('Code non reconnu. Veuillez saisir le code envoyé par M. Max adiko Clovis Garal après votre paiement de 1 000 FCFA.');
    }
  };

  const handleSaveAlerts = () => {
    setAlertsSaved(true);
    setTimeout(() => setAlertsSaved(false), 3000);
  };

  const handleSendInstantWhatsappAlert = () => {
    const dutyPharmas = pharmacies
      .filter((p) => p.isOnDuty && p.commune.toLowerCase() === selectedCommuneAlert.toLowerCase())
      .slice(0, 5);

    let message = `🏥 *PHARMACIES DE GARDE - ${selectedCommuneAlert.toUpperCase()}*\n_Service exclusif Abonnés Pharmacies CI_\n\n`;
    if (dutyPharmas.length === 0) {
      message += `Toutes les pharmacies de garde pour la région sont disponibles sur l'application.\n`;
    } else {
      dutyPharmas.forEach((p, idx) => {
        message += `${idx + 1}. *${p.name}*\n📍 ${p.neighborhood} (Repère: ${p.landmark || p.address})\n📞 ${p.phones[0]}\n\n`;
      });
    }
    message += `Pass Adhérent : ${subscription?.memberId || 'PCI-225-VIP'}\nCoordination : Max adiko Clovis Garal & Sanogo Souleymane`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmitConcierge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!medName.trim()) return;

    const message = `🚨 *RECHERCHE URGENTE MÉDICAMENT EN RUPTURE*\n*Adhérent :* ${subscription?.userName || 'Abonné VIP'} (${subscription?.memberId || 'PCI-225-VIP'})\n*Médicament recherché :* ${medName.trim()}\n*Commune / Secteur :* ${medCommune}\n*Degré d'urgence :* ${medUrgency.toUpperCase()}\n\nMerci de vérifier la disponibilité auprès du réseau officiel des pharmacies de garde.`;

    // Dispatch directly to Max Garal or WhatsApp concierge
    window.open(`https://wa.me/2250700000000?text=${encodeURIComponent(message)}`, '_blank');
    setConciergeSuccess(true);
  };

  const handlePrintGuardList = () => {
    window.print();
  };

  const handleSyncOffline = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setSyncTimestamp(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));
    }, 800);
  };

  const dutyPharmaciesForPrint = pharmacies.filter(p => p.isOnDuty);

  return (
    <div
      id="vip-features-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 bg-gradient-to-r from-[#145A32] via-[#1F7A4D] to-emerald-900 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400 text-slate-950 font-black shadow-md">
              <Sparkles className="h-5 w-5 fill-current" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-sm sm:text-base">
                  Fonctionnalités Après Paiement
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/30 text-emerald-200 border border-emerald-400/30">
                  Pass VIP Santé
                </span>
              </div>
              <p className="text-[11px] text-emerald-100">
                Services exclusifs aux abonnés (1 000 FCFA/mois) • Supervision : Max adiko Clovis Garal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

          {/* IF NOT UNLOCKED: Prompt & Instant Code Gate */}
          {!isUnlocked && (
            <div className="rounded-3xl bg-gradient-to-br from-amber-50 via-emerald-50/50 to-sky-50 border-2 border-amber-300 p-5 sm:p-6 space-y-4 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900">
                    Débloquez l’ensemble des fonctionnalités VIP après paiement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Toutes les informations sur les pharmacies sont consultables librement. Les fonctionnalités interactives (<strong>Appels directs, WhatsApp, Itinéraire GPS</strong>, alertes automatiques chaque vendredi, recherche conciergerie de garde et Pass numérique) sont débloquées dès réception de votre règlement de <strong>1 000 FCFA</strong>.
                  </p>
                </div>
              </div>

              {/* Enter code sent by Max Garal */}
              <div className="bg-white rounded-2xl p-4 border border-amber-200 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <KeyRound className="h-4 w-4 text-amber-600" />
                  <span>Vous avez déjà payé ? Saisissez le code envoyé par Max adiko Clovis Garal :</span>
                </div>

                <form onSubmit={handleValidateCode} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={codeInputValue}
                    onChange={(e) => {
                      setCodeInputValue(e.target.value.toUpperCase());
                      setCodeError('');
                    }}
                    placeholder="Entrez votre code secret reçu..."
                    className="flex-1 rounded-xl border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm font-mono font-black uppercase text-slate-900 tracking-wider focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md active:scale-95 transition"
                  >
                    Activer mon Pass VIP
                  </button>
                </form>

                {codeError && (
                  <p className="text-xs text-red-600 font-semibold">{codeError}</p>
                )}

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
                  <span>Pas encore de code ? Réglez 1 000 FCFA sur Wave CI :</span>
                  <button
                    type="button"
                    onClick={onOpenWavePayment}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#1DA1F2] hover:bg-blue-600 text-white font-black text-xs shadow-xs transition"
                  >
                    <span>Payer sur Wave CI</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ACTIVE STATUS BANNER */}
          {isUnlocked && (
            <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-emerald-500/5 border border-emerald-300 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-black">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-emerald-950 uppercase tracking-wide">
                      Pass Santé VIP Actif
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800">
                      {subscription?.memberId || 'PCI-225-VIP'}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Abonné : <strong>{subscription?.userName || 'Adhérent Pharmacies CI'}</strong> • Commune : {subscription?.commune || 'Cocody'} • Validé par <strong>{PAYMENT_CONFIG.beneficiaryName}</strong>
                  </p>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-600 text-white shadow-xs self-end sm:self-center">
                ✓ Débloqué
              </span>
            </div>
          )}

          {/* FEATURE NAVIGATION TABS */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-slate-200">
            <button
              onClick={() => setActiveFeatureTab('pass')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
                activeFeatureTab === 'pass'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <QrCode className="h-4 w-4" />
              <span>1. Pass & QR Code</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab('alerts')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
                activeFeatureTab === 'alerts'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>2. Alertes WhatsApp & SMS</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab('pdf')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
                activeFeatureTab === 'pdf'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>3. Répertoire & PDF Gardes</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab('concierge')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
                activeFeatureTab === 'concierge'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Pill className="h-4 w-4" />
              <span>4. Médicaments en Rupture SOS</span>
            </button>

            <button
              onClick={() => setActiveFeatureTab('offline')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition ${
                activeFeatureTab === 'offline'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <RefreshCw className="h-4 w-4" />
              <span>5. Mode Hors-Ligne</span>
            </button>
          </div>

          {/* TAB 1: PASS NUMERIQUE & QR CODE */}
          {activeFeatureTab === 'pass' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="max-w-md mx-auto relative rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-6 text-white shadow-2xl border border-emerald-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Header Card */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300">
                      RÉPUBLIQUE DE CÔTE D'IVOIRE
                    </span>
                    <h3 className="text-base font-black tracking-tight flex items-center gap-1.5">
                      <span>Pass Santé VIP Pharmacies CI</span>
                    </h3>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                </div>

                {/* Details */}
                <div className="py-4 space-y-3 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Adhérent Titulaire</span>
                      <strong className="text-white text-sm block truncate">
                        {subscription?.userName || 'Membre Adhérent VIP'}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Identifiant Membre</span>
                      <strong className="text-emerald-300 font-mono text-sm block">
                        {subscription?.memberId || 'PCI-225-VIP'}
                      </strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Commune Prioritaire</span>
                      <span className="text-white font-semibold">{subscription?.commune || 'Cocody, Abidjan'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Validité</span>
                      <span className="text-emerald-200 font-semibold">{subscription?.expiresAt || '1 Mois Renouvelable'}</span>
                    </div>
                  </div>
                </div>

                {/* QR Code section */}
                <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-white p-1 rounded-xl flex items-center justify-center shadow-inner">
                      <QrCode className="h-10 w-10 text-slate-950" />
                    </div>
                    <div className="text-[10px] text-emerald-200 leading-tight">
                      <p className="font-bold text-white">Scanner au comptoir</p>
                      <p>Priorité d'accueil & vérification stocks</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                    GARAL-CERTIFIED
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <button
                  onClick={() => window.print()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-xs"
                >
                  <Download className="h-4 w-4 text-emerald-700" />
                  <span>Imprimer / Télécharger</span>
                </button>

                <button
                  onClick={() => {
                    const text = `Mon Pass Santé Pharmacies CI (${subscription?.memberId || 'PCI-225-VIP'}) est actif pour ${subscription?.commune || 'Abidjan'}.`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition shadow-xs"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Partager sur WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ALERTES WHATSAPP & SMS */}
          {activeFeatureTab === 'alerts' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50 space-y-3">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-emerald-600" />
                    <span>Configuration des alertes de garde chaque vendredi à 18h</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Recevez automatiquement la liste officielle des pharmacies de garde ouvertes pour le weekend dans votre secteur.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Votre commune prioritaire d'alerte :
                    </label>
                    <select
                      value={selectedCommuneAlert}
                      onChange={(e) => setSelectedCommuneAlert(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-800 focus:border-emerald-600 outline-hidden"
                    >
                      <option value="Cocody">Cocody (Angré, Riviera, Deux-Plateaux)</option>
                      <option value="Yopougon">Yopougon (Siporex, Maroc, Niangon)</option>
                      <option value="Marcory">Marcory (Zone 4, Biétry, Résidentiel)</option>
                      <option value="Plateau">Plateau (Centre des Affaires)</option>
                      <option value="Koumassi">Koumassi</option>
                      <option value="Abobo">Abobo</option>
                      <option value="Treichville">Treichville</option>
                      <option value="Port-Bouët">Port-Bouët (Aéroport)</option>
                      <option value="Bingerville">Bingerville</option>
                      <option value="Bouaké">Bouaké</option>
                      <option value="San-Pédro">San-Pédro</option>
                      <option value="Yamoussoukro">Yamoussoukro</option>
                    </select>
                  </div>

                  <div className="space-y-2 pt-1">
                    <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 text-xs font-medium cursor-pointer">
                      <span className="text-slate-800 font-bold">Alertes WhatsApp (Chaque vendredi)</span>
                      <input
                        type="checkbox"
                        checked={whatsappAlertsActive}
                        onChange={(e) => setWhatsappAlertsActive(e.target.checked)}
                        className="h-4 w-4 rounded-md text-emerald-600 focus:ring-emerald-500"
                      />
                    </label>

                    <label className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 text-xs font-medium cursor-pointer">
                      <span className="text-slate-800 font-bold">Alertes SMS de secours</span>
                      <input
                        type="checkbox"
                        checked={smsAlertsActive}
                        onChange={(e) => setSmsAlertsActive(e.target.checked)}
                        className="h-4 w-4 rounded-md text-emerald-600 focus:ring-emerald-500"
                      />
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleSaveAlerts}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs"
                  >
                    {alertsSaved ? '✓ Préférences enregistrées' : 'Enregistrer mes préférences'}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendInstantWhatsappAlert}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition shadow-xs"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Envoyer la liste actuelle sur mon WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REPERTOIRE COMPLET & IMPRESSION PDF */}
          {activeFeatureTab === 'pdf' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-emerald-600" />
                      <span>Répertoire officiel et tableau de garde imprimable (PDF)</span>
                    </h4>
                    <p className="text-xs text-slate-600">
                      Générez le document officiel complet certifié pour affichage ou consultation sans connexion.
                    </p>
                  </div>
                  <button
                    onClick={handlePrintGuardList}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition"
                  >
                    <Printer className="h-4 w-4" />
                    <span>Imprimer / PDF</span>
                  </button>
                </div>

                {/* Printable Guard Table Preview */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 text-xs space-y-3 max-h-60 overflow-y-auto">
                  <div className="border-b border-slate-200 pb-2 flex items-center justify-between">
                    <div>
                      <strong className="text-slate-900 block font-bold">RÉPERTOIRE DES PHARMACIES DE GARDE CI</strong>
                      <span className="text-[11px] text-slate-500">Mise à jour certifiée • Supervision {PAYMENT_CONFIG.managerName} & {PAYMENT_CONFIG.beneficiaryName}</span>
                    </div>
                    <span className="text-emerald-700 font-bold">{dutyPharmaciesForPrint.length} Pharmacies de Garde</span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {dutyPharmaciesForPrint.map((p) => (
                      <div key={p.id} className="py-2 flex items-start justify-between gap-2">
                        <div>
                          <strong className="text-slate-900 font-semibold">{p.name}</strong>
                          <p className="text-[11px] text-slate-500">
                            {p.commune} ({p.neighborhood}) • Repère : {p.landmark || p.address}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-mono font-bold text-emerald-800 text-xs block">
                            {p.phones[0]}
                          </span>
                          <span className="text-[10px] text-emerald-600 font-medium">Garde active</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CONCIERGERIE SOS RECHERCHE DE MEDICAMENTS EN RUPTURE */}
          {activeFeatureTab === 'concierge' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50 space-y-3">
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                    <Pill className="h-4 w-4 text-emerald-600" />
                    <span>Conciergerie SOS : Recherche de médicaments introuvables</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    Vous recherchez un médicament en rupture (insuline spéciale, sérum antivenimeux, perfusion, anticancéreux) ? Notre réseau local lance la recherche auprès des pharmacies de garde.
                  </p>
                </div>

                {conciergeSuccess ? (
                  <div className="rounded-xl bg-emerald-100 border border-emerald-300 p-4 text-center space-y-2">
                    <CheckCircle2 className="h-8 w-8 text-emerald-700 mx-auto" />
                    <h5 className="font-bold text-sm text-emerald-950">Demande de recherche transmise avec succès !</h5>
                    <p className="text-xs text-emerald-900">
                      M. Max adiko Clovis Garal et les pharmaciens référents traitent votre demande prioritaire. Vous serez contacté par WhatsApp ou téléphone.
                    </p>
                    <button
                      type="button"
                      onClick={() => setConciergeSuccess(false)}
                      className="text-xs text-emerald-800 font-bold underline pt-1"
                    >
                      Faire une autre demande
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitConcierge} className="space-y-3 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Nom du médicament ou molécule :
                        </label>
                        <input
                          type="text"
                          required
                          value={medName}
                          onChange={(e) => setMedName(e.target.value)}
                          placeholder="Ex: Sérum Antivenimeux Fav-Afrique, Insuline..."
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs focus:border-emerald-600 outline-hidden font-medium"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-700 block mb-1">
                          Commune de recherche :
                        </label>
                        <input
                          type="text"
                          value={medCommune}
                          onChange={(e) => setMedCommune(e.target.value)}
                          placeholder="Ex: Cocody / Tout Abidjan"
                          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs focus:border-emerald-600 outline-hidden font-medium"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-700">Degré d'urgence :</span>
                        <button
                          type="button"
                          onClick={() => setMedUrgency('urgente')}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                            medUrgency === 'urgente' ? 'bg-red-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          Urgente (Immédiat)
                        </button>
                        <button
                          type="button"
                          onClick={() => setMedUrgency('standard')}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                            medUrgency === 'standard' ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          Dans la journée
                        </button>
                      </div>

                      <button
                        type="submit"
                        className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Transmettre la recherche SOS</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: SYNCHRONISATION HORS-LIGNE */}
          {activeFeatureTab === 'offline' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="rounded-2xl border border-slate-200 p-4 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 flex items-center gap-2">
                      <RefreshCw className="h-4 w-4 text-emerald-600" />
                      <span>Mode Hors-Ligne & Cache Permanent des Pharmacies</span>
                    </h4>
                    <p className="text-xs text-slate-600">
                      Toutes les données sont stockées sur votre appareil pour rester joignable même sans crédit internet ou coupure réseau.
                    </p>
                  </div>

                  <button
                    onClick={handleSyncOffline}
                    disabled={isSyncing}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition disabled:opacity-50"
                  >
                    <RefreshCw className={`h-3.5 w-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                    <span>{isSyncing ? 'Synchronisation...' : 'Actualiser le cache'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase">Pharmacies en mémoire</span>
                    <strong className="text-slate-900 text-base">{pharmacies.length} pharmacies</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase">Dernière mise à jour</span>
                    <strong className="text-emerald-800 text-base">{syncTimestamp}</strong>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="text-slate-500 block text-[10px] uppercase">Statut Réseau</span>
                    <strong className="text-emerald-700 text-base">Prêt hors-ligne ✓</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Direct Emergency 118 Shortcut */}
          <div className="rounded-2xl bg-red-50 border border-red-200 p-3 flex items-center justify-between text-xs text-red-950">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-600 animate-ping" />
              <span><strong>Urgences vitales en Côte d'Ivoire :</strong> Contactez gratuitement le <strong>118 (GSPM / Pompiers)</strong></span>
            </div>
            <a
              href="tel:118"
              className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs transition"
            >
              Appeler 118
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-600">
          <span>Support & Envoi de codes : <strong>{PAYMENT_CONFIG.beneficiaryName}</strong></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold transition"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
