import React, { useState } from 'react';
import { UserSubscription, PaymentMethod } from '../types';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  QrCode, 
  Phone, 
  MessageSquare, 
  Download, 
  Share2, 
  ArrowRight, 
  Smartphone, 
  CreditCard, 
  RotateCcw,
  ExternalLink,
  Mail,
  Send,
  KeyRound
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PAYMENT_CONFIG, recordSubscriptionAndNotify, verifyConfirmationCode, saveAppConfirmation } from '../services/subscriptionService';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  subscription: UserSubscription | null;
  onSaveSubscription: (sub: UserSubscription) => void;
  onCancelSubscription: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  subscription,
  onSaveSubscription,
  onCancelSubscription
}) => {
  const [step, setStep] = useState<'details' | 'payment' | 'success'>(subscription ? 'success' : 'details');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCommune, setUserCommune] = useState('Cocody');
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('wave');
  const [isProcessing, setIsProcessing] = useState(false);
  const [receiveSMS, setReceiveSMS] = useState(true);
  const [receiveWhatsApp, setReceiveWhatsApp] = useState(true);
  const [notificationUrls, setNotificationUrls] = useState<{ mailToUrl: string; whatsAppUrl: string } | null>(null);
  const [codeDirectInput, setCodeDirectInput] = useState('');
  const [codeDirectError, setCodeDirectError] = useState('');
  const [showCodeDirectField, setShowCodeDirectField] = useState(false);

  if (!isOpen) return null;

  const priceCFA = billingCycle === 'monthly' ? 1000 : 10000;

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
        id: 'sub-code-' + Date.now(),
        memberId: `PCI-225-${randomMemberNum}`,
        userName: userName.trim() || 'Adhérent Validé par Code',
        phone: userPhone.trim() || '+225 0700000000',
        commune: userCommune,
        planName: 'Abonnement Validé par Code Officiel',
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
      setStep('success');

      try {
        confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
      } catch {
        // ignore
      }
    } else {
      setCodeDirectError('Code invalide. Veuillez vérifier le code envoyé par Max adiko Clovis Garal.');
    }
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userPhone.trim()) {
      alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
      return;
    }
    setStep('payment');
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);

    // Process subscription & trigger management notifications
    setTimeout(() => {
      const now = new Date();
      const expires = new Date();
      if (billingCycle === 'monthly') {
        expires.setMonth(expires.getMonth() + 1);
      } else {
        expires.setFullYear(expires.getFullYear() + 1);
      }

      const randomMemberNum = Math.floor(1000 + Math.random() * 9000);
      const newSub: UserSubscription = {
        id: 'sub-' + Date.now(),
        memberId: `PCI-225-${randomMemberNum}`,
        userName: userName.trim() || 'Adhérent Pharmacies CI',
        phone: userPhone.trim(),
        commune: userCommune,
        planName: billingCycle === 'monthly' ? 'Abonnement 1000F Mensuel' : 'Pass Annuel VIP',
        priceCFA: priceCFA,
        paymentMethod: selectedMethod,
        status: 'active',
        activatedAt: now.toLocaleDateString('fr-FR'),
        expiresAt: expires.toLocaleDateString('fr-FR'),
        receiveSMSAlerts: receiveSMS,
        receiveWhatsAppAlerts: receiveWhatsApp,
        digitalPassQr: `PHARMACIES-CI-VIP-225-${randomMemberNum}`
      };

      // Record & notify managers Sanogo Souleymane & Max adiko Clovis Garal
      const urls = recordSubscriptionAndNotify(newSub);
      setNotificationUrls(urls);

      onSaveSubscription(newSub);
      setIsProcessing(false);
      setStep('success');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }, 1200);
  };

  const paymentOptions: { id: PaymentMethod; name: string; tag: string; color: string; badge: string }[] = [
    { id: 'wave', name: 'Wave Côte d’Ivoire (Lien Officiel)', tag: 'Lien direct vérifié • 0% frais', color: 'border-blue-500 bg-blue-50/70 text-blue-950', badge: 'Recommandé' },
    { id: 'orange_money', name: 'Orange Money CI', tag: '*144#', color: 'border-orange-500 bg-orange-50/40 text-orange-950', badge: 'Populaire' },
    { id: 'mtn_momo', name: 'MTN Mobile Money', tag: '*133#', color: 'border-yellow-500 bg-yellow-50/40 text-yellow-950', badge: 'MoMo CI' },
    { id: 'moov_money', name: 'Moov Money CI', tag: '*155#', color: 'border-emerald-500 bg-emerald-50/40 text-emerald-950', badge: 'Moov' },
    { id: 'card', name: 'Carte Bancaire', tag: 'Visa / Mastercard', color: 'border-slate-400 bg-slate-50 text-slate-900', badge: 'Sécurisé' }
  ];

  return (
    <div
      id="subscription-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-amber-200 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-amber-100">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/20">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">Abonnement 1000F CFA</h2>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-100 text-amber-900 border border-amber-300">
                    VIP SANTÉ CI
                  </span>
                </div>
                <p className="text-xs text-slate-500">Alertes SMS/WhatsApp de garde & assistance 24/7</p>
              </div>
            </div>

            <button
              id="btn-close-subscription"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              title="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* VIEW: Existing Active Subscription / VIP Pass */}
          {step === 'success' && subscription && (
            <div className="mt-5 space-y-5">
              {/* Digital Member Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#145A32] via-[#1F7A4D] to-[#0D3820] p-6 text-white shadow-2xl shadow-emerald-950/40 border border-emerald-400/30">
                {/* Background decorative circles */}
                <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-emerald-400/10 blur-xl" />
                <div className="absolute -left-8 -bottom-8 h-36 w-36 rounded-full bg-amber-400/10 blur-xl" />

                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">
                      RÉPUBLIQUE DE CÔTE D’IVOIRE
                    </span>
                    <h3 className="text-lg font-black tracking-tight mt-0.5">
                      PASS SANTÉ PHARMACIES CI
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-400/20 border border-amber-400/40 px-2 py-1 rounded-lg text-[11px] font-bold text-amber-300">
                    <Sparkles className="h-3 w-3" />
                    <span>MEMBRE ACTIF</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">Titulaire</span>
                    <span className="font-bold text-sm text-white">{subscription.userName}</span>
                  </div>
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">N° Adhérent</span>
                    <span className="font-mono font-bold text-sm text-amber-300">{subscription.memberId}</span>
                  </div>
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">Commune d’alerte</span>
                    <span className="font-bold text-white">{subscription.commune}</span>
                  </div>
                  <div>
                    <span className="text-emerald-200/70 text-[10px] block uppercase">Validité</span>
                    <span className="font-bold text-white">Jusqu’au {subscription.expiresAt}</span>
                  </div>
                </div>

                {/* QR Code Simulation & Barcode */}
                <div className="mt-5 pt-4 border-t border-emerald-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-white p-1 rounded-lg flex items-center justify-center">
                      <QrCode className="h-8 w-8 text-slate-900" />
                    </div>
                    <div className="text-[10px] text-emerald-200 leading-tight">
                      <p className="font-semibold">Scanner en pharmacie</p>
                      <p className="opacity-75">Priorité & vérification stock</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-emerald-200 block">Tarif mensuel</span>
                    <span className="text-sm font-black text-white">1 000 FCFA</span>
                  </div>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 space-y-2 text-xs text-slate-700">
                <h4 className="font-bold text-slate-900 text-sm">Services inclus dans votre abonnement :</h4>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Alertes WhatsApp & SMS chaque vendredi pour {subscription.commune}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Recherche prioritaire de médicaments en rupture (sérum, insuline...)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Ligne directe assistance SOS 118 & pharmacien de permanence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Accès hors-ligne illimité à l’annuaire complet de Côte d’Ivoire</span>
                </div>
              </div>

              {/* Manager Notification Status Block */}
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-emerald-900 font-bold">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Notification transmise à l'administration Pharmacies CI</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-700 pt-1">
                  <div className="bg-white p-2.5 rounded-xl border border-emerald-100">
                    <span className="text-[10px] text-slate-500 uppercase block">Responsable Général</span>
                    <strong className="text-slate-900">{PAYMENT_CONFIG.managerName}</strong>
                    <p className="text-emerald-800 font-mono text-[10px] truncate">{PAYMENT_CONFIG.notificationEmail}</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-emerald-100">
                    <span className="text-[10px] text-slate-500 uppercase block">Responsable Marketing (Abidjan)</span>
                    <strong className="text-slate-900">{PAYMENT_CONFIG.beneficiaryName}</strong>
                    <p className="text-emerald-800 font-mono text-[10px] truncate">{PAYMENT_CONFIG.marketingEmail}</p>
                  </div>
                </div>

                {/* Email and WhatsApp direct dispatch buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1">
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
                    <span>Envoyer récépissé par Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => window.open(PAYMENT_CONFIG.wavePayUrl, '_blank')}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#1DA1F2] text-white text-xs font-bold hover:bg-blue-600 transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Reçu / Compte Wave</span>
                  </button>
                </div>
              </div>

              {/* Card Actions */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  id="btn-print-pass"
                  onClick={() => window.print()}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold transition shadow-xs"
                >
                  <Download className="h-4 w-4 text-[#1F7A4D]" />
                  <span>Télécharger / Imprimer</span>
                </button>

                <button
                  id="btn-share-pass"
                  onClick={() => {
                    const text = `Mon Pass Santé Pharmacies CI (${subscription.memberId}) est actif pour la commune de ${subscription.commune}. Téléchargez l'app pour vos pharmacies de garde !`;
                    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition shadow-xs"
                >
                  <Share2 className="h-4 w-4" />
                  <span>Partager sur WhatsApp</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <button
                  id="btn-cancel-subscription"
                  onClick={() => {
                    if (confirm("Voulez-vous résilier votre abonnement Pharmacies CI 1000F ?")) {
                      onCancelSubscription();
                      setStep('details');
                    }
                  }}
                  className="text-xs text-red-500 hover:underline"
                >
                  Résilier l'abonnement
                </button>
              </div>
            </div>
          )}

          {/* VIEW: Details & Plan Selection */}
          {step === 'details' && (
            <form onSubmit={handleProceedToPayment} className="mt-4 space-y-4">
              {/* Highlight Price Banner */}
              <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-100">
                      Formule Tranquillité Santé
                    </span>
                    <h3 className="text-2xl font-black">1 000 FCFA <span className="text-sm font-normal">/ mois</span></h3>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-1 rounded-lg bg-white/20 text-xs font-bold">
                      Sans engagement
                    </span>
                  </div>
                </div>
                <p className="text-xs text-amber-100 mt-2">
                  Recevez automatiquement chaque semaine la liste des pharmacies de garde de votre commune par WhatsApp & SMS + assistance urgence.
                </p>
              </div>

              {/* Cycle Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`py-2 rounded-lg transition ${
                    billingCycle === 'monthly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Mensuel (1 000F / mois)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('yearly')}
                  className={`py-2 rounded-lg transition ${
                    billingCycle === 'yearly' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500'
                  }`}
                >
                  Annuel (10 000F / an - 2 mois offerts)
                </button>
              </div>

              {/* What is included */}
              <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/70">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Alertes WhatsApp & SMS chaque vendredi soir :</strong> Adresses et numéros de garde dans votre quartier.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Recherche médicaments rares 24h/24 :</strong> Sérums antivenimeux, insulines, perfusions.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Pass Numérique VIP :</strong> Présentez votre carte dans les pharmacies partenaires d’Abidjan et de l'intérieur.</span>
                </div>
              </div>

              {/* Subscriber Information Fields */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nom & Prénom(s) complets *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Kouassi Jean-Marc"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Numéro Téléphone CI (+225) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="07 XX XX XX XX / 05..."
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Votre Commune d’alerte *
                    </label>
                    <select
                      value={userCommune}
                      onChange={(e) => setUserCommune(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden bg-white"
                    >
                      <option value="Cocody">Cocody (Angré, 2 Plateaux, Riviera...)</option>
                      <option value="Yopougon">Yopougon (Siporex, Maroc, Niangon...)</option>
                      <option value="Plateau">Plateau (Centre des Affaires)</option>
                      <option value="Marcory">Marcory (Zone 4, Biétry)</option>
                      <option value="Koumassi">Koumassi (Remblais, Inch'Allah)</option>
                      <option value="Treichville">Treichville (Arras, Bd de Marseille)</option>
                      <option value="Port-Bouët">Port-Bouët (Aéroport, Vridi)</option>
                      <option value="Abobo">Abobo (Mairie, PK18)</option>
                      <option value="Adjamé">Adjamé (220 Logements)</option>
                      <option value="Bingerville">Bingerville</option>
                      <option value="Bouaké">Bouaké (Intérieur)</option>
                      <option value="Yamoussoukro">Yamoussoukro (Capitale)</option>
                      <option value="San-Pédro">San-Pédro (Côte Sud)</option>
                      <option value="Korhogo">Korhogo (Nord)</option>
                    </select>
                  </div>
                </div>

                {/* Notifications checkboxes */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={receiveWhatsApp}
                      onChange={(e) => setReceiveWhatsApp(e.target.checked)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Recevoir les alertes hebdomadaires par <strong>WhatsApp</strong></span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={receiveSMS}
                      onChange={(e) => setReceiveSMS(e.target.checked)}
                      className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Recevoir un <strong>SMS d’urgence</strong> en cas d’épidémie ou alerte sanitaire</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                id="btn-proceed-payment"
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black text-sm shadow-md shadow-orange-500/20 hover:brightness-105 active:scale-98 transition"
              >
                <span>Continuer vers le paiement ({priceCFA.toLocaleString('fr-FR')} FCFA)</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Alternative: Code de confirmation envoyé par Max adiko Clovis Garal */}
              <div className="pt-3 border-t border-slate-200 text-center">
                {!showCodeDirectField ? (
                  <button
                    type="button"
                    onClick={() => setShowCodeDirectField(true)}
                    className="text-xs text-emerald-800 hover:text-emerald-900 font-bold hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Vous avez déjà un code de confirmation reçu de Max adiko Clovis Garal ?</span>
                  </button>
                ) : (
                  <div className="rounded-2xl border border-emerald-300 bg-emerald-50/60 p-3.5 text-left space-y-2.5">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-emerald-950">
                        Code de confirmation reçu de Max adiko Clovis Garal :
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowCodeDirectField(false)}
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
                        className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-xs font-mono font-bold uppercase focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-hidden bg-white"
                      />
                      <button
                        type="button"
                        onClick={handleValidateDirectCode}
                        className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition shadow-xs"
                      >
                        Valider
                      </button>
                    </div>

                    {codeDirectError && (
                      <p className="text-[11px] text-red-600 font-medium">{codeDirectError}</p>
                    )}
                  </div>
                )}
              </div>
            </form>
          )}

          {/* VIEW: Payment Method Selection */}
          {step === 'payment' && (
            <div className="mt-4 space-y-4">
              <div className="rounded-xl bg-slate-50 p-3.5 border border-slate-200 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-500">Bénéficiaire :</span>
                  <span className="font-bold text-slate-900">{userName}</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-500">Commune couverte :</span>
                  <span className="font-bold text-slate-900">{userCommune}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                  <span className="font-semibold text-slate-700">Montant à régler :</span>
                  <span className="font-black text-base text-emerald-700">{priceCFA.toLocaleString('fr-FR')} FCFA</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Choisissez votre moyen de paiement Mobile Money ou Carte en Côte d’Ivoire :
                </label>
                <div className="space-y-2">
                  {paymentOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setSelectedMethod(opt.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition ${
                        selectedMethod === opt.id
                          ? opt.color + ' shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
                          selectedMethod === opt.id ? 'border-current' : 'border-slate-300'
                        }`}>
                          {selectedMethod === opt.id && <div className="h-2 w-2 rounded-full bg-current" />}
                        </div>
                        <div>
                          <p className="font-extrabold text-sm">{opt.name}</p>
                          <span className="text-xs opacity-75">{opt.tag}</span>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/80 border border-current/20">
                        {opt.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment validation details & Official Wave Merchant Card */}
              {selectedMethod === 'wave' ? (
                <div className="rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-sky-50 p-4 text-xs space-y-3 shadow-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white font-black text-xs">
                        W
                      </div>
                      <span className="font-extrabold text-blue-950 text-sm">Guichet Officiel Wave CI</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[10px]">
                      0% de frais
                    </span>
                  </div>

                  <div className="text-slate-700 space-y-1 bg-white p-3 rounded-xl border border-blue-100">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Bénéficiaire :</span>
                      <strong className="text-slate-900">{PAYMENT_CONFIG.beneficiaryName}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Localisation :</span>
                      <span className="text-slate-700">{PAYMENT_CONFIG.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Responsable Marketing :</span>
                      <span className="font-mono text-emerald-800 font-semibold">{PAYMENT_CONFIG.marketingEmail}</span>
                    </div>
                  </div>

                  <button
                    id="btn-open-wave-pay"
                    type="button"
                    onClick={() => window.open(PAYMENT_CONFIG.wavePayUrl, '_blank')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1DA1F2] hover:bg-blue-600 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-500/20 active:scale-98 transition"
                  >
                    <span>Ouvrir Wave pour régler {priceCFA.toLocaleString('fr-FR')} FCFA</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>

                  <div className="rounded-xl bg-amber-50 border border-amber-200 p-2.5 text-[11px] text-amber-950 space-y-1">
                    <p className="font-bold flex items-center gap-1 text-amber-900">
                      <span>Processus d'attribution du code :</span>
                    </p>
                    <p className="leading-snug">
                      Après votre règlement sur Wave, <strong>M. Max adiko Clovis Garal</strong> valide votre paiement et vous transmet votre <strong>code de confirmation officiel</strong> par WhatsApp ou SMS pour activer définitivement votre pass.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-3 text-xs text-emerald-900 space-y-2">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                    <p>
                      Paiement 100% sécurisé via Mobile Money CI. Une fois le transfert effectué, <strong>M. Max adiko Clovis Garal</strong> vous envoie votre code officiel d'activation par WhatsApp / SMS sur <strong>{userPhone}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* Enter direct code option if user already has received the code from Max */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-3 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    <KeyRound className="h-3.5 w-3.5 text-amber-600" />
                    <span>Vous avez déjà payé et reçu votre code de Max Garal ?</span>
                  </span>
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
                    className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-xs font-mono font-bold uppercase bg-white focus:border-emerald-600 outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={handleValidateDirectCode}
                    className="px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-xs transition"
                  >
                    Activer
                  </button>
                </div>
                {codeDirectError && (
                  <p className="text-[11px] text-red-600 font-medium">{codeDirectError}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('details')}
                  className="py-3 px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-bold transition"
                >
                  Retour
                </button>

                <button
                  id="btn-confirm-payment"
                  type="button"
                  disabled={isProcessing}
                  onClick={handleConfirmPayment}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black shadow-md shadow-emerald-900/15 disabled:opacity-50 active:scale-98 transition flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>Validation en cours...</span>
                    </>
                  ) : (
                    <span>Valider {priceCFA.toLocaleString('fr-FR')} F</span>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
