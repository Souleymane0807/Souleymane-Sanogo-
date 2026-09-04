import React, { useState } from 'react';
import { Lock, Phone, MessageCircle, Navigation, Sparkles, X, CheckCircle, ArrowRight, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  PAYMENT_CONFIG,
  verifyConfirmationCode,
  saveAppConfirmation,
  ensureActiveSubscription
} from '../services/subscriptionService';
import { UserSubscription } from '../types';

export interface VipActionPrompt {
  feature: 'call' | 'whatsapp' | 'itinerary' | 'general';
  pharmacyName?: string;
  phone?: string;
  whatsapp?: string;
  lat?: number;
  lng?: number;
}

interface VipActionRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: VipActionPrompt | null;
  onOpenFullSubscription: () => void;
  onSuccessSubscription: (sub: UserSubscription) => void;
}

export const VipActionRequiredModal: React.FC<VipActionRequiredModalProps> = ({
  isOpen,
  onClose,
  prompt,
  onOpenFullSubscription,
  onSuccessSubscription
}) => {
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [unlockedSub, setUnlockedSub] = useState<UserSubscription | null>(null);

  if (!isOpen) return null;

  const feature = prompt?.feature || 'general';
  const pharmacyName = prompt?.pharmacyName;

  const getFeatureMeta = () => {
    switch (feature) {
      case 'call':
        return {
          icon: <Phone className="h-6 w-6 text-emerald-400" />,
          title: "Appel téléphonique direct réservé",
          subtitle: `L'appel téléphonique direct vers ${pharmacyName ? `"${pharmacyName}"` : "cette pharmacie"} est réservé aux abonnés Pass VIP.`,
          actionLabel: "Appeler maintenant"
        };
      case 'whatsapp':
        return {
          icon: <MessageCircle className="h-6 w-6 text-emerald-400" />,
          title: "Contact WhatsApp direct réservé",
          subtitle: `L'échange WhatsApp direct avec ${pharmacyName ? `"${pharmacyName}"` : "cette pharmacie"} pour vérifier la disponibilité des médicaments est réservé aux abonnés.`,
          actionLabel: "Ouvrir WhatsApp"
        };
      case 'itinerary':
        return {
          icon: <Navigation className="h-6 w-6 text-emerald-400" />,
          title: "Itinéraire GPS & Navigation réservé",
          subtitle: `Le calcul et le guidage GPS en temps réel vers ${pharmacyName ? `"${pharmacyName}"` : "cette pharmacie"} sont réservés aux abonnés Pass VIP.`,
          actionLabel: "Lancer le GPS"
        };
      default:
        return {
          icon: <Sparkles className="h-6 w-6 text-amber-300" />,
          title: "Fonctionnalité réservée après paiement",
          subtitle: "Appels téléphoniques, messagerie WhatsApp et itinéraires GPS sont activés après abonnement.",
          actionLabel: "Accéder au service"
        };
    }
  };

  const meta = getFeatureMeta();

  const handleValidateCode = (e: React.FormEvent) => {
    e.preventDefault();
    setCodeError('');

    if (!code.trim()) {
      setCodeError('Veuillez entrer votre code de validation.');
      return;
    }

    const check = verifyConfirmationCode(code.trim());
    if (check.valid) {
      saveAppConfirmation(code.trim(), check.role);
      const sub = ensureActiveSubscription(code.trim());
      setUnlockedSub(sub);
      setIsSuccess(true);
      onSuccessSubscription(sub);

      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch {
        // Confetti fallback
      }
    } else {
      setCodeError("Code invalide. Veuillez vérifier le code transmis par Max adiko Clovis Garal ou souscrire par Wave.");
    }
  };

  const handleExecuteTargetAction = () => {
    if (feature === 'call' && prompt?.phone) {
      window.location.href = `tel:${prompt.phone.replace(/\s+/g, '')}`;
    } else if (feature === 'whatsapp' && prompt?.whatsapp) {
      const clean = prompt.whatsapp.replace(/\D/g, '');
      const msg = encodeURIComponent(`Bonjour ${prompt.pharmacyName || 'la pharmacie'}, je vous contacte via Pharmacies CI pour une urgence.`);
      window.open(`https://wa.me/${clean}?text=${msg}`, '_blank');
    } else if (feature === 'itinerary' && prompt?.lat && prompt?.lng) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${prompt.lat},${prompt.lng}`, '_blank');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="vip-action-modal-card"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header with High-Contrast Gradient */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 p-5 sm:p-6 text-white text-center relative shrink-0">
          <button
            id="btn-close-vip-action-modal"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition active:scale-95"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative inline-block mb-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30 text-white mx-auto">
              <Lock className="h-7 w-7" />
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white border-2 border-slate-900 shadow-xs">
              {meta.icon}
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
            {isSuccess ? "Accès Débloqué avec Succès !" : meta.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm mx-auto">
            {isSuccess ? "Votre Pass VIP est désormais actif. Vous avez accès à tous les appels, WhatsApp et itinéraires." : meta.subtitle}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700">
          {isSuccess ? (
            <div className="space-y-4 text-center py-2">
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-emerald-950 flex flex-col items-center">
                <CheckCircle className="h-10 w-10 text-emerald-600 mb-2" />
                <span className="font-extrabold text-sm sm:text-base">Pass VIP Activé</span>
                <p className="text-xs text-emerald-800 mt-1">
                  Adhérent <strong>{unlockedSub?.memberId || 'AUTORISÉ'}</strong> • Validé par <strong>{PAYMENT_CONFIG.beneficiaryName}</strong>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <button
                  id="btn-execute-immediate-action"
                  onClick={handleExecuteTargetAction}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-md transition active:scale-95"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{meta.actionLabel}</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full flex items-center justify-center py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs transition"
                >
                  Retour à l'annuaire
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Value proposition badges */}
              <div className="rounded-2xl bg-amber-50/90 border border-amber-200/90 p-3.5 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
                  <ShieldCheck className="h-4 w-4 text-amber-700 shrink-0" />
                  <span>Tout est affiché, interactions débloquées après l'abonnement :</span>
                </div>
                <ul className="text-[11px] text-amber-950/90 space-y-1 pl-6 list-disc">
                  <li><strong>Appels téléphoniques directs</strong> sans restriction vers les gardes</li>
                  <li><strong>Liaison WhatsApp directe</strong> pour réserver vos ordonnances</li>
                  <li><strong>Itinéraire GPS précis</strong> vers toutes les officines du pays</li>
                </ul>
              </div>

              {/* Action 1: Pay 1000 FCFA with Wave */}
              <div className="rounded-2xl border-2 border-emerald-500/40 bg-white p-4 shadow-sm hover:border-emerald-600 transition">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 font-black text-[10px] uppercase">
                      Option Rapide (1 000 FCFA)
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-1">
                      Payer via Wave (1 000 FCFA / mois)
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      Bénéficiaire : <strong>{PAYMENT_CONFIG.beneficiaryName}</strong> ({PAYMENT_CONFIG.location})
                    </p>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500 text-white font-black text-xs shadow-xs">
                    Wave
                  </div>
                </div>

                <a
                  id="btn-pay-wave-direct"
                  href={PAYMENT_CONFIG.wavePayUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1ba8e2] hover:bg-[#1594c9] text-white font-extrabold text-xs shadow-md shadow-sky-600/20 active:scale-95 transition"
                >
                  <span>Payer 1 000 FCFA sur Wave</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Action 2: Enter validation code */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="mb-2">
                  <span className="font-bold text-slate-900 text-xs block">
                    Vous avez déjà payé ou disposez d'un code de validation ?
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Saisissez le code envoyé par WhatsApp ou SMS par Max adiko Clovis Garal.
                  </span>
                </div>

                <form onSubmit={handleValidateCode} className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      id="input-quick-vip-code"
                      type="text"
                      value={code}
                      onChange={(e) => {
                        setCode(e.target.value);
                        setCodeError('');
                      }}
                      placeholder="Ex: GARAL2026, MAX225..."
                      className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold tracking-wider text-slate-900 uppercase placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                    <button
                      id="btn-validate-quick-code"
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-black text-xs shadow-xs active:scale-95 transition whitespace-nowrap"
                    >
                      Valider
                    </button>
                  </div>

                  {codeError && (
                    <p className="text-[11px] text-red-600 font-medium flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{codeError}</span>
                    </p>
                  )}
                </form>
              </div>

              {/* Action 3: View other payment methods */}
              <div className="pt-1 text-center">
                <button
                  id="btn-open-other-payments"
                  onClick={() => {
                    onClose();
                    onOpenFullSubscription();
                  }}
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-950 underline transition"
                >
                  <span>Payer par Orange Money, MTN, Moov ou carte bancaire</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
