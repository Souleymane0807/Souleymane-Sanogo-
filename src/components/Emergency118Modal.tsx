import React, { useState } from 'react';
import { X, PhoneCall, ShieldAlert, MapPin, AlertTriangle, HeartPulse, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { EMERGENCY_CONTACTS_CI, FIRST_AID_TIPS } from '../data/emergencyContacts';
import { Coords } from '../hooks/useGeolocation';

interface Emergency118ModalProps {
  isOpen: boolean;
  onClose: () => void;
  userCoords: Coords;
}

export const Emergency118Modal: React.FC<Emergency118ModalProps> = ({
  isOpen,
  onClose,
  userCoords
}) => {
  const [expandedTipIndex, setExpandedTipIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleTip = (idx: number) => {
    setExpandedTipIndex(expandedTipIndex === idx ? null : idx);
  };

  return (
    <div
      id="emergency-118-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-red-200 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-red-100">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/30">
                <ShieldAlert className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black text-slate-900">Urgences Médicales CI</h2>
                  <span className="px-2 py-0.5 rounded-full text-xs font-black bg-red-100 text-red-700">
                    24h/24
                  </span>
                </div>
                <p className="text-xs text-slate-500">Secours d’urgence & SAMU Côte d’Ivoire</p>
              </div>
            </div>

            <button
              id="btn-close-118"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              title="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Big Primary 118 Call Action Card */}
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 p-5 text-white shadow-xl shadow-red-600/25">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-white/20 text-xs font-bold text-white mb-1">
                  Numéro Gratuit National
                </span>
                <h3 className="text-3xl font-black tracking-tight flex items-center gap-2">
                  <span>118</span>
                  <span className="text-sm font-semibold opacity-90">• GSPM Pompiers</span>
                </h3>
                <p className="text-xs text-red-100 mt-1 max-w-xs">
                  Accidents, secours à personne en détresse, malaise cardiaque, incendie.
                </p>
              </div>

              <a
                id="btn-call-118-direct"
                href="tel:118"
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white text-red-700 text-base font-black shadow-lg hover:bg-red-50 active:scale-95 transition"
              >
                <PhoneCall className="h-5 w-5 animate-bounce" />
                <span>APPELER LE 118</span>
              </a>
            </div>

            {/* Readout coordinates card for the dispatcher */}
            <div className="mt-4 pt-3 border-t border-white/20 text-xs text-red-100 flex items-start gap-2">
              <MapPin className="h-4 w-4 text-white shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white">À indiquer à l’opérateur du 118 : </span>
                <span>« Je suis situé à {userCoords.name || 'Abidjan'}, coordonnées GPS : {userCoords.lat.toFixed(4)}, {userCoords.lng.toFixed(4)} »</span>
              </div>
            </div>
          </div>

          {/* Other Emergency Numbers in Côte d'Ivoire */}
          <div className="mt-5 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Autres Lignes d’Urgence Directes (Côte d’Ivoire)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EMERGENCY_CONTACTS_CI.filter(c => !c.isPrimary118).map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition"
                >
                  <div className="pr-2">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-sm text-slate-900">{contact.shortCode}</span>
                      <span className="text-xs font-semibold text-slate-700 truncate max-w-[120px]">
                        {contact.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{contact.description}</p>
                  </div>

                  <a
                    id={`btn-call-${contact.shortCode}`}
                    href={`tel:${contact.shortCode}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95 transition shadow-xs"
                    title={`Appeler le ${contact.shortCode}`}
                  >
                    <PhoneCall className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* First Aid & Emergency Protocol Accordion */}
          <div className="mt-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <HeartPulse className="h-4 w-4 text-red-500" />
              Gestes qui sauvent & Protocoles d’urgence CI
            </h4>

            <div className="space-y-1.5">
              {FIRST_AID_TIPS.map((tip, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200/80 overflow-hidden bg-white">
                  <button
                    onClick={() => toggleTip(idx)}
                    className="w-full flex items-center justify-between p-3 text-left font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50 transition"
                  >
                    <span>{tip.title}</span>
                    {expandedTipIndex === idx ? (
                      <ChevronUp className="h-4 w-4 text-slate-400 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {expandedTipIndex === idx && (
                    <div className="px-3.5 pb-3.5 text-xs text-slate-600 bg-slate-50/50 space-y-1.5 border-t border-slate-100">
                      {tip.steps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 pt-1">
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-black text-red-700">
                            {sIdx + 1}
                          </span>
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Close Footer */}
        <div className="mt-5 pt-3 border-t border-slate-100">
          <button
            id="btn-dismiss-118"
            onClick={onClose}
            className="w-full rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
          >
            Fermer le panneau d’urgence
          </button>
        </div>
      </div>
    </div>
  );
};
