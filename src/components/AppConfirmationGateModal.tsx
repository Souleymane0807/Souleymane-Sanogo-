import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  KeyRound,
  ExternalLink,
  Mail,
  Smartphone,
  Sparkles,
  AlertCircle,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  PAYMENT_CONFIG,
  verifyConfirmationCode,
  saveAppConfirmation
} from '../services/subscriptionService';

interface AppConfirmationGateModalProps {
  isOpen: boolean;
  onSuccess: (role: 'admin' | 'subscriber') => void;
  onEmergencyAccess: () => void;
  isDismissible?: boolean;
  onClose?: () => void;
}

export const AppConfirmationGateModal: React.FC<AppConfirmationGateModalProps> = ({
  isOpen,
  onSuccess,
  onEmergencyAccess,
  isDismissible = true,
  onClose
}) => {
  const [codeInput, setCodeInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ issuer: string; role: string } | null>(null);

  if (!isOpen) return null;

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!codeInput.trim()) {
      setErrorMsg('Veuillez entrer le code de confirmation.');
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      const res = verifyConfirmationCode(codeInput);
      setIsVerifying(false);

      if (res.valid) {
        saveAppConfirmation(codeInput, res.role);
        setSuccessInfo({ issuer: res.issuer, role: res.role });

        try {
          confetti({
            particleCount: 70,
            spread: 60,
            origin: { y: 0.6 }
          });
        } catch {
          // ignore
        }

        setTimeout(() => {
          onSuccess(res.role);
        }, 1200);
      } else {
        setErrorMsg('Code non reconnu ou invalide. Veuillez vérifier le code envoyé par Max adiko Clovis Garal après votre paiement.');
      }
    }, 600);
  };

  const mailtoRequestUrl = `mailto:${PAYMENT_CONFIG.marketingEmail}?cc=${encodeURIComponent(
    PAYMENT_CONFIG.notificationEmail
  )}&subject=${encodeURIComponent('[Pharmacies CI] Confirmation de paiement & Réception de code VIP')}&body=${encodeURIComponent(
    `Bonjour M. Max adiko Clovis Garal et M. Sanogo Souleymane,\n\nJ'ai effectué mon paiement de 1 000 FCFA pour l'abonnement Pharmacies CI et je souhaite recevoir mon code de confirmation d'activation.\n\nNom :\nTéléphone WhatsApp ayant payé :\nDate et référence du transfert :\n\nMerci d'avance.`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border-2 border-emerald-500/30 overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Header */}
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 px-6 py-5 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400">
                <KeyRound className="h-6 w-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-300">
                  Validation Après Paiement
                </span>
                <h2 className="text-base sm:text-lg font-black leading-tight">
                  Code de Confirmation VIP
                </h2>
              </div>
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="text-slate-300 hover:text-white transition p-1.5 rounded-full hover:bg-white/10"
                title="Fermer"
              >
                ✕
              </button>
            )}
          </div>

          <p className="mt-2 text-xs text-slate-200 leading-relaxed">
            Vous avez réglé votre abonnement de <strong>1 000 FCFA</strong> ? Saisissez ici le code de confirmation officiel envoyé par{' '}
            <strong className="text-emerald-300">{PAYMENT_CONFIG.beneficiaryName}</strong> (Responsable Marketing, Abidjan) pour activer vos alertes VIP.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-5">
          
          {successInfo ? (
            <div className="py-6 text-center space-y-3 animate-in zoom-in-95 duration-200">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-black text-emerald-950">
                Pass VIP Activé avec Succès !
              </h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Code validé par <strong>{successInfo.issuer}</strong>. Vos alertes WhatsApp et votre Pass Santé sont désormais actifs.
              </p>
            </div>
          ) : (
            <>
              {/* Form Input */}
              <form onSubmit={handleVerify} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                    <span>Saisissez votre code reçu après paiement :</span>
                    <span className="text-[11px] text-slate-400 font-mono">Ex: GARAL2026</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={codeInput}
                      onChange={(e) => {
                        setCodeInput(e.target.value.toUpperCase());
                        setErrorMsg('');
                      }}
                      placeholder="Entrez votre code reçu..."
                      autoFocus
                      className="w-full rounded-2xl border-2 border-slate-300 px-4 py-3.5 text-center text-lg font-mono font-black tracking-widest uppercase text-slate-900 placeholder:font-sans placeholder:text-xs placeholder:tracking-normal placeholder:font-normal placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-hidden transition"
                    />
                  </div>

                  {errorMsg && (
                    <div className="mt-2 p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition disabled:opacity-50"
                  >
                    {isVerifying ? (
                      <span>Vérification...</span>
                    ) : (
                      <>
                        <ShieldCheck className="h-4 w-4" />
                        <span>Valider mon Code</span>
                      </>
                    )}
                  </button>

                  {onClose && (
                    <button
                      type="button"
                      onClick={onClose}
                      className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs transition"
                    >
                      Explorer l'application
                    </button>
                  )}
                </div>
              </form>

              {/* Instructions & Official Contact */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs space-y-2.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <HelpCircle className="h-4 w-4 text-emerald-600" />
                  <span>Vous n'avez pas encore réglé votre abonnement ?</span>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed">
                  L'annuaire des pharmacies reste <strong>100% accessible gratuitement</strong>. Pour activer la réception automatique des gardes par WhatsApp, réglez 1 000 FCFA sur Wave CI ou Mobile Money : M. Max adiko Clovis Garal vous transmettra alors votre code.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <a
                    href={PAYMENT_CONFIG.wavePayUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1DA1F2] hover:bg-blue-600 text-white text-xs font-bold transition shadow-2xs"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    <span>Régler 1 000 F sur Wave CI</span>
                  </a>

                  <a
                    href={mailtoRequestUrl}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-slate-300 hover:border-emerald-500 text-slate-800 text-xs font-bold transition shadow-2xs"
                  >
                    <Mail className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Informer du paiement</span>
                  </a>
                </div>

                <div className="pt-1 text-[11px] text-slate-500 flex flex-col gap-0.5 border-t border-slate-200/70 pt-2">
                  <span>
                    <strong>Responsable Marketing :</strong> {PAYMENT_CONFIG.beneficiaryName} ({PAYMENT_CONFIG.marketingEmail})
                  </span>
                  <span>
                    <strong>Supervision :</strong> {PAYMENT_CONFIG.managerName} ({PAYMENT_CONFIG.notificationEmail})
                  </span>
                </div>
              </div>

              {/* Emergency Bypass */}
              <div className="pt-1 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onEmergencyAccess}
                  className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-bold hover:underline"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  <span>Numéros d'urgence 118 / SAMU</span>
                </button>

                <span className="text-[10px] text-slate-400 font-mono">
                  Code test : GARAL2026
                </span>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
