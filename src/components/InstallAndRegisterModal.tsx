import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Smartphone, 
  UserCheck, 
  Sparkles, 
  Share, 
  PlusSquare, 
  CheckCircle2, 
  ShieldCheck, 
  QrCode, 
  ArrowRight, 
  Phone, 
  MapPin, 
  WifiOff, 
  BellRing,
  HelpCircle,
  Share2,
  ExternalLink,
  Mail
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { UserSubscription, PaymentMethod } from '../types';
import confetti from 'canvas-confetti';
import { PAYMENT_CONFIG, recordSubscriptionAndNotify, verifyConfirmationCode, saveAppConfirmation } from '../services/subscriptionService';

interface InstallAndRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: UserSubscription | null;
  onSaveSubscription: (sub: UserSubscription) => void;
}

export const InstallAndRegisterModal: React.FC<InstallAndRegisterModalProps> = ({
  isOpen,
  onClose,
  subscription,
  onSaveSubscription
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  
  // Steps: 'install' -> 'register' -> 'success'
  const [currentStep, setCurrentStep] = useState<'install' | 'register' | 'success'>(
    subscription ? 'success' : 'install'
  );
  
  // Registration form state
  const [fullName, setFullName] = useState(subscription?.userName || '');
  const [phoneNumber, setPhoneNumber] = useState(subscription?.phone || '');
  const [commune, setCommune] = useState(subscription?.commune || 'Cocody');
  const [membershipType, setMembershipType] = useState<'free' | 'vip1000'>('vip1000');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('wave');
  const [receiveWhatsApp, setReceiveWhatsApp] = useState(true);
  const [receiveSMS, setReceiveSMS] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [hasTriggeredInstall, setHasTriggeredInstall] = useState(false);
  const [notificationUrls, setNotificationUrls] = useState<{ mailToUrl: string; whatsAppUrl: string } | null>(null);
  const [codeDirectInput, setCodeDirectInput] = useState('');
  const [codeDirectError, setCodeDirectError] = useState('');
  const [showCodeField, setShowCodeField] = useState(false);

  if (!isOpen) return null;

  const handleValidateDirectCode = () => {
    setCodeDirectError('');
    if (!codeDirectInput.trim()) {
      setCodeDirectError('Veuillez renseigner le code de confirmation.');
      return;
    }

    const check = verifyConfirmationCode(codeDirectInput);
    if (check.valid) {
      saveAppConfirmation(codeDirectInput, check.role);
      const now = new Date();
      const expires = new Date();
      expires.setMonth(expires.getMonth() + 1);

      const randomMemberNum = Math.floor(1000 + Math.random() * 9000);
      const newSub: UserSubscription = {
        id: 'sub-install-' + Date.now(),
        memberId: `PCI-225-${randomMemberNum}`,
        userName: fullName.trim() || 'Adhérent Validé par Code',
        phone: phoneNumber.trim() || '+225 0700000000',
        commune: commune,
        planName: 'VIP Alerte & Garde (Validé par Code Officiel)',
        priceCFA: 1000,
        paymentMethod: 'wave',
        status: 'active',
        activatedAt: now.toLocaleDateString('fr-FR'),
        expiresAt: expires.toLocaleDateString('fr-FR'),
        receiveSMSAlerts: receiveSMS,
        receiveWhatsAppAlerts: receiveWhatsApp,
        digitalPassQr: `PHARMACIES-CI-VIP-225-${randomMemberNum}`
      };

      const urls = recordSubscriptionAndNotify(newSub);
      setNotificationUrls(urls);
      onSaveSubscription(newSub);
      setCurrentStep('success');

      try {
        confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
      } catch {
        // ignore
      }
    } else {
      setCodeDirectError('Code invalide. Veuillez vérifier le code envoyé par Max adiko Clovis Garal.');
    }
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      const outcome = await install();
      setHasTriggeredInstall(true);
      if (outcome) {
        // Proceed to registration
        setCurrentStep('register');
      }
    } else if (isIOS) {
      setHasTriggeredInstall(true);
    } else {
      // Fallback
      alert("Pour installer cette application sur votre écran d'accueil :\n• Chrome / Android : Touchez le menu ⋮ en haut à droite > 'Ajouter à l'écran d'accueil'\n• iPhone Safari : Touchez l'icône Partager > 'Sur l'écran d'accueil'");
      setHasTriggeredInstall(true);
    }
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) {
      alert('Veuillez renseigner votre nom complet et votre numéro de téléphone.');
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      const now = new Date();
      const expires = new Date();
      expires.setMonth(expires.getMonth() + 1);

      const randomMemberNum = Math.floor(1000 + Math.random() * 9000);
      const isVip = membershipType === 'vip1000';

      const newSub: UserSubscription = {
        id: 'sub-' + Date.now(),
        memberId: `PCI-225-${randomMemberNum}`,
        userName: fullName.trim(),
        phone: phoneNumber.trim(),
        commune: commune,
        planName: isVip ? 'Abonnement 1000F Mensuel' : 'Adhérent Gratuit Pharmacies CI',
        priceCFA: isVip ? 1000 : 0,
        paymentMethod: isVip ? paymentMethod : 'orange_money',
        status: 'active',
        activatedAt: now.toLocaleDateString('fr-FR'),
        expiresAt: isVip ? expires.toLocaleDateString('fr-FR') : 'Permanente',
        receiveSMSAlerts: receiveSMS,
        receiveWhatsAppAlerts: receiveWhatsApp,
        digitalPassQr: `PHARMACIES-CI-${isVip ? 'VIP' : 'FREE'}-225-${randomMemberNum}`
      };

      // If VIP subscription, record and notify managers Sanogo Souleymane & Max adiko Clovis Garal
      if (isVip) {
        const urls = recordSubscriptionAndNotify(newSub);
        setNotificationUrls(urls);
      }

      onSaveSubscription(newSub);
      setIsProcessing(false);
      setCurrentStep('success');

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // safe fallback
      }
    }, 1200);
  };

  return (
    <div
      id="install-and-register-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl max-h-[94vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-emerald-200 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F7A4D] to-[#145A32] text-white shadow-md shadow-emerald-950/20">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">
                    Installer & S’inscrire
                  </h2>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                    SANTÉ CI 24/7
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  Installation rapide sur l'écran d'accueil & création de votre profil de garde
                </p>
              </div>
            </div>

            <button
              id="btn-close-install-register"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              title="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Stepper indicator */}
          {currentStep !== 'success' && (
            <div className="mt-4 flex items-center justify-between px-2 text-xs font-bold">
              <button
                type="button"
                onClick={() => setCurrentStep('install')}
                className={`flex items-center gap-1.5 pb-2 border-b-2 transition ${
                  currentStep === 'install'
                    ? 'border-[#1F7A4D] text-[#1F7A4D]'
                    : 'border-transparent text-slate-400'
                }`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px]">
                  1
                </span>
                <span>1. Installer l’Application</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep('register')}
                className={`flex items-center gap-1.5 pb-2 border-b-2 transition ${
                  currentStep === 'register'
                    ? 'border-[#1F7A4D] text-[#1F7A4D]'
                    : 'border-transparent text-slate-400'
                }`}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[11px]">
                  2
                </span>
                <span>2. S’inscrire</span>
              </button>
            </div>
          )}

          {/* STEP 1: INSTALL APP */}
          {currentStep === 'install' && (
            <div className="mt-4 space-y-4">
              {/* Highlight Hero Card */}
              <div className="rounded-3xl bg-gradient-to-br from-[#1F7A4D] via-[#145A32] to-[#0D3820] p-5 text-white shadow-xl shadow-emerald-950/20 relative overflow-hidden">
                <div className="relative z-10">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-[10px] font-extrabold uppercase tracking-wider text-emerald-200 border border-emerald-400/30 mb-2">
                    Application Officielle Côte d’Ivoire
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black leading-tight">
                    Ajoutez Pharmacies CI à votre écran d’accueil
                  </h3>
                  <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                    Installez l'application en 1 seconde sans passer par le Play Store ni l'App Store. Aucun fichier lourd à télécharger, 0 Mo de données gaspillées !
                  </p>

                  <div className="mt-4 pt-3 border-t border-emerald-600/40 grid grid-cols-2 gap-2 text-[11px] text-emerald-100">
                    <div className="flex items-center gap-1.5">
                      <WifiOff className="h-4 w-4 text-amber-300 shrink-0" />
                      <span>Fonctionne 100% hors-ligne</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <BellRing className="h-4 w-4 text-amber-300 shrink-0" />
                      <span>Alertes pharmacies de garde</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Install Action Area depending on device */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Méthode d'installation sur votre appareil :
                </h4>

                {/* Case 1: Browser supports native PWA install prompt (Chrome Android, Desktop, Edge) */}
                {isInstallable && (
                  <button
                    id="btn-trigger-pwa-install-modal"
                    onClick={handleInstallClick}
                    className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-[#1F7A4D] hover:bg-[#145A32] text-white font-black text-sm shadow-lg shadow-emerald-900/20 active:scale-98 transition"
                  >
                    <Download className="h-5 w-5 animate-bounce" />
                    <span>INSTALLER SUR MON ÉCRAN D’ACCUEIL</span>
                  </button>
                )}

                {/* Case 2: iOS / Safari */}
                {isIOS && (
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 rounded-xl bg-white p-3 border border-slate-200 text-xs text-slate-700">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                        <Share className="h-4 w-4" />
                      </div>
                      <div>
                        <strong>1. Appuyez sur le bouton Partager</strong> de Safari (au centre en bas de votre écran).
                      </div>
                    </div>

                    <div className="flex items-start gap-3 rounded-xl bg-white p-3 border border-slate-200 text-xs text-slate-700">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
                        <PlusSquare className="h-4 w-4" />
                      </div>
                      <div>
                        <strong>2. Défilez puis choisissez :</strong> « Sur l’écran d’accueil » puis « Ajouter ».
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 3: Standard browser or already installed or fallback */}
                {!isInstallable && !isIOS && (
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                    <p className="font-semibold text-slate-900">
                      Sur Android / Chrome ou Navigateur Mobile :
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      Touchez les <strong>3 petits points verticaux (⋮)</strong> en haut à droite de votre navigateur, puis sélectionnez <strong>« Installer l'application »</strong> ou <strong>« Ajouter à l'écran d'accueil »</strong>.
                    </p>
                  </div>
                )}
              </div>

              {/* Progression Button to Step 2 */}
              <button
                id="btn-proceed-to-register"
                onClick={() => setCurrentStep('register')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-sm shadow-md shadow-orange-500/20 hover:brightness-105 active:scale-98 transition"
              >
                <span>Continuer vers l’Inscription</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-center text-[11px] text-slate-400">
                Vous pouvez également vous inscrire en premier et installer l'application à tout moment.
              </p>
            </div>
          )}

          {/* STEP 2: REGISTER FORM */}
          {currentStep === 'register' && (
            <form onSubmit={handleRegistrationSubmit} className="mt-4 space-y-4">
              {/* Membership selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Choisissez votre formule d’adhésion :
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Option 1: VIP 1000F */}
                  <div
                    onClick={() => setMembershipType('vip1000')}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition relative ${
                      membershipType === 'vip1000'
                        ? 'border-amber-500 bg-amber-50/50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="absolute top-2.5 right-2.5">
                      <span className="px-1.5 py-0.5 rounded-md text-[9px] font-black bg-amber-500 text-white">
                        RECOMMANDÉ
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-amber-600" />
                      <span className="font-extrabold text-sm text-slate-900">Pass VIP 1000F</span>
                    </div>
                    <p className="text-base font-black text-amber-800 mt-1">
                      1 000 FCFA <span className="text-xs font-normal text-slate-500">/ mois</span>
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                      Alertes WhatsApp/SMS de garde chaque vendredi + Conciergerie médicaments rares 24/7.
                    </p>
                  </div>

                  {/* Option 2: Free registration */}
                  <div
                    onClick={() => setMembershipType('free')}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition relative ${
                      membershipType === 'free'
                        ? 'border-emerald-600 bg-emerald-50/50 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <UserCheck className="h-4 w-4 text-emerald-600" />
                      <span className="font-extrabold text-sm text-slate-900">Adhérent Gratuit</span>
                    </div>
                    <p className="text-base font-black text-emerald-700 mt-1">
                      Gratuit <span className="text-xs font-normal text-slate-500">(0 FCFA)</span>
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                      Accès illimité à l'annuaire hors-ligne, coordonnées 118, recherche GPS et favoris.
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile fields */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nom & Prénom(s) complets *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Kouamé Arthur"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Numéro Téléphone / WhatsApp CI (+225) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="07 XX XX XX XX / 05..."
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Commune / Ville d'alerte *
                    </label>
                    <select
                      value={commune}
                      onChange={(e) => setCommune(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden bg-white"
                    >
                      <option value="Cocody">Cocody (Angré, Riviera, 2 Plateaux)</option>
                      <option value="Yopougon">Yopougon (Siporex, Maroc, Niangon)</option>
                      <option value="Plateau">Plateau (Centre Administratif)</option>
                      <option value="Marcory">Marcory (Zone 4, Biétry)</option>
                      <option value="Koumassi">Koumassi (Remblais, Inch'Allah)</option>
                      <option value="Treichville">Treichville (Arras, Bd Marseille)</option>
                      <option value="Port-Bouët">Port-Bouët (Aéroport, Vridi)</option>
                      <option value="Abobo">Abobo (Mairie, PK18)</option>
                      <option value="Adjamé">Adjamé (220 Logements)</option>
                      <option value="Bingerville">Bingerville</option>
                      <option value="Bouaké">Bouaké (Intérieur)</option>
                      <option value="Yamoussoukro">Yamoussoukro</option>
                      <option value="San-Pédro">San-Pédro</option>
                      <option value="Korhogo">Korhogo</option>
                      <option value="Grand-Bassam">Grand-Bassam</option>
                    </select>
                  </div>
                </div>

                {/* Mobile money selection if VIP 1000F */}
                {membershipType === 'vip1000' && (
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-slate-700">
                      Règlement sécurisé des 1 000 FCFA :
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'wave' as PaymentMethod, label: 'Wave CI (Lien Direct)' },
                        { id: 'orange_money' as PaymentMethod, label: 'Orange Money' },
                        { id: 'mtn_momo' as PaymentMethod, label: 'MTN MoMo' },
                        { id: 'moov_money' as PaymentMethod, label: 'Moov Money' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setPaymentMethod(m.id)}
                          className={`p-2 rounded-xl border text-xs font-bold transition ${
                            paymentMethod === m.id
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs ring-1 ring-emerald-600'
                              : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>

                    {paymentMethod === 'wave' && (
                      <div className="rounded-xl border border-blue-400 bg-blue-50/70 p-3 text-xs text-slate-700 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-blue-950 flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                            Lien Marchand Officiel Wave CI
                          </span>
                          <span className="text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded-md">0% Frais</span>
                        </div>
                        <p className="text-[11px] text-slate-600">
                          Bénéficiaire : <strong>{PAYMENT_CONFIG.beneficiaryName}</strong> (Abidjan)
                        </p>
                        <button
                          type="button"
                          onClick={() => window.open(PAYMENT_CONFIG.wavePayUrl, '_blank')}
                          className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1DA1F2] hover:bg-blue-600 text-white font-bold text-xs shadow-xs transition"
                        >
                          <span>Payer 1 000 F directement sur Wave</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Notifications checkboxes */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={receiveWhatsApp}
                      onChange={(e) => setReceiveWhatsApp(e.target.checked)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Recevoir les alertes de garde par <strong>WhatsApp</strong></span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={receiveSMS}
                      onChange={(e) => setReceiveSMS(e.target.checked)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Recevoir les alertes urgentes par <strong>SMS</strong></span>
                  </label>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentStep('install')}
                  className="py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition"
                >
                  ← Étape installation
                </button>

                <button
                  id="btn-confirm-registration"
                  type="submit"
                  disabled={isProcessing}
                  className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#1F7A4D] to-[#145A32] text-white font-black text-xs sm:text-sm shadow-md shadow-emerald-950/20 active:scale-98 transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Enregistrement...</span>
                    </>
                  ) : (
                    <span>
                      {membershipType === 'vip1000' ? 'S’inscrire & Payer 1 000F' : 'Finaliser mon inscription'}
                    </span>
                  )}
                </button>
              </div>

              {/* Code de confirmation envoyé par Max adiko Clovis Garal */}
              <div className="pt-2 border-t border-slate-200 text-center">
                {!showCodeField ? (
                  <button
                    type="button"
                    onClick={() => setShowCodeField(true)}
                    className="text-xs text-emerald-800 hover:text-emerald-900 font-bold hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Vous avez déjà payé et reçu votre code de confirmation de Max adiko Clovis Garal ?</span>
                  </button>
                ) : (
                  <div className="rounded-2xl border border-emerald-300 bg-emerald-50/70 p-3 text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-emerald-950">
                        Code de confirmation reçu après paiement (Max Garal) :
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowCodeField(false)}
                        className="text-[11px] text-slate-400 hover:text-slate-600"
                      >
                        Annuler
                      </button>
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={codeDirectInput}
                        onChange={(e) => {
                          setCodeDirectInput(e.target.value.toUpperCase());
                          setCodeDirectError('');
                        }}
                        placeholder="Ex: GARAL2026"
                        className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-xs font-mono font-bold uppercase focus:border-emerald-600 outline-hidden bg-white"
                      />
                      <button
                        type="button"
                        onClick={handleValidateDirectCode}
                        className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-xs"
                      >
                        Activer
                      </button>
                    </div>

                    {codeDirectError && (
                      <p className="text-[11px] text-red-600 font-semibold">{codeDirectError}</p>
                    )}
                  </div>
                )}
              </div>
            </form>
          )}

          {/* STEP 3: SUCCESS & ACTIVE DIGITAL PASS */}
          {currentStep === 'success' && subscription && (
            <div className="mt-4 space-y-4">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-[#1F7A4D] mb-2">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  Félicitations, vous êtes inscrit(e) !
                </h3>
                <p className="text-xs text-slate-500">
                  Votre pass santé est actif. Vous recevrez les alertes pour {subscription.commune}.
                </p>
              </div>

              {/* Digital Member Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#145A32] via-[#1F7A4D] to-[#0D3820] p-6 text-white shadow-2xl border border-emerald-400/30">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">
                      RÉPUBLIQUE DE CÔTE D’IVOIRE
                    </span>
                    <h4 className="text-base font-black tracking-tight mt-0.5">
                      PASS ADHÉRENT PHARMACIES CI
                    </h4>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-400/20 border border-amber-400/40 px-2 py-1 rounded-lg text-[10px] font-bold text-amber-300">
                    <Sparkles className="h-3 w-3" />
                    <span>{subscription.priceCFA > 0 ? 'MEMBRE VIP' : 'MEMBRE ACTIF'}</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">Titulaire</span>
                    <span className="font-bold text-sm text-white">{subscription.userName}</span>
                  </div>
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">N° Adhérent</span>
                    <span className="font-mono font-bold text-sm text-amber-300">{subscription.memberId}</span>
                  </div>
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">Commune</span>
                    <span className="font-bold text-white">{subscription.commune}</span>
                  </div>
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">Contact</span>
                    <span className="font-bold text-white">{subscription.phone}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-9 bg-white p-1 rounded-lg flex items-center justify-center">
                      <QrCode className="h-7 w-7 text-slate-900" />
                    </div>
                    <div className="text-[10px] text-emerald-200 leading-tight">
                      <p className="font-semibold">Scanner en pharmacie</p>
                      <p className="opacity-75">Vérification prioritaire</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-emerald-200 block">Formule</span>
                    <span className="text-xs font-black text-white">
                      {subscription.priceCFA > 0 ? '1 000 FCFA / mois' : 'Gratuit'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Notification Status Block */}
              {subscription.priceCFA > 0 && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-3.5 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-emerald-950 font-bold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Notification envoyée au responsable : {PAYMENT_CONFIG.managerName}</span>
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Avis d'adhésion transmis à <span className="font-mono text-emerald-800 font-semibold">{PAYMENT_CONFIG.notificationEmail}</span> et à M. {PAYMENT_CONFIG.beneficiaryName} ({PAYMENT_CONFIG.marketingEmail}).
                  </p>
                  <div className="flex gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        if (notificationUrls?.mailToUrl) {
                          window.location.href = notificationUrls.mailToUrl;
                        } else {
                          const urls = recordSubscriptionAndNotify(subscription);
                          window.location.href = urls.mailToUrl;
                        }
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-emerald-300 text-emerald-900 text-xs font-bold hover:bg-emerald-50 transition"
                    >
                      <Mail className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Récépissé Email</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => window.open(PAYMENT_CONFIG.wavePayUrl, '_blank')}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#1DA1F2] text-white text-xs font-bold hover:bg-blue-600 transition"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Reçu Wave CI</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="btn-whatsapp-welcome"
                  onClick={() => {
                    const text = `Bonjour Pharmacies CI, je viens de m'inscrire avec le numéro ${subscription.memberId} pour la commune de ${subscription.commune}. Merci de m'envoyer la liste des pharmacies de garde !`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition shadow-xs"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Alerte WhatsApp</span>
                </button>

                <button
                  id="btn-download-pass"
                  onClick={() => window.print()}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-xs"
                >
                  <Download className="h-4 w-4 text-[#1F7A4D]" />
                  <span>Imprimer le Pass</span>
                </button>
              </div>

              <button
                id="btn-finish-modal"
                onClick={onClose}
                className="w-full rounded-xl bg-slate-100 py-3 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
              >
                Continuer vers l'annuaire des pharmacies
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
