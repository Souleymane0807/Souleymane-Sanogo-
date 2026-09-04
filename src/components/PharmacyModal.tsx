import React from 'react';
import { Pharmacy } from '../types';
import { X, Phone, MessageCircle, Navigation, MapPin, Clock, ShieldCheck, CheckCircle2, Share2, Pill, AlertCircle, Lock, Sparkles } from 'lucide-react';
import { calculateDistanceKm, formatDistance, Coords } from '../hooks/useGeolocation';
import { VipActionTarget } from './PharmacyCard';

interface PharmacyModalProps {
  pharmacy: Pharmacy | null;
  userCoords: Coords;
  onClose: () => void;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
  hasSubscription: boolean;
  onRequireSubscription: (target: VipActionTarget) => void;
}

export const PharmacyModal: React.FC<PharmacyModalProps> = ({
  pharmacy,
  userCoords,
  onClose,
  onToggleFavorite,
  isFavorite,
  hasSubscription,
  onRequireSubscription
}) => {
  if (!pharmacy) return null;

  const distanceKm = calculateDistanceKm(userCoords.lat, userCoords.lng, pharmacy.lat, pharmacy.lng);
  const formattedDistance = formatDistance(distanceKm);

  const handleShare = () => {
    const text = `*${pharmacy.name}* (${pharmacy.commune}, ${pharmacy.city})\n${pharmacy.isOnDuty ? '🟢 DE GARDE' : ''}\n📍 ${pharmacy.address}\n📌 Repère : ${pharmacy.landmark}\n📞 Tél : ${pharmacy.phones.join(' / ')}\nTrouvé sur Pharmacies CI`;
    if (navigator.share) {
      navigator.share({
        title: pharmacy.name,
        text: text,
        url: window.location.href
      }).catch(() => {});
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    }
  };

  return (
    <div 
      id="pharmacy-detail-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-slate-100 flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Title and Close */}
        <div>
          <div className="flex items-start justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                {pharmacy.isOnDuty && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-xs">
                    <ShieldCheck className="h-4 w-4" />
                    PHARMACIE DE GARDE
                  </span>
                )}
                {pharmacy.isOpen24h && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                    <Clock className="h-3 w-3 text-amber-700" />
                    24h/24
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  <MapPin className="h-3 w-3 text-[#1F7A4D]" />
                  À {formattedDistance} de vous
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {pharmacy.name}
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                {pharmacy.city} • {pharmacy.commune} ({pharmacy.neighborhood})
              </p>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                id="btn-modal-share"
                onClick={handleShare}
                className="p-2 rounded-full text-slate-400 hover:text-[#1F7A4D] hover:bg-emerald-50 transition"
                title="Partager par WhatsApp ou SMS"
              >
                <Share2 className="h-5 w-5" />
              </button>
              <button
                id="btn-close-modal"
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                title="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="py-4 space-y-4 text-sm text-slate-700">
            {/* VIP Status Alert */}
            {!hasSubscription ? (
              <div className="rounded-2xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 border border-amber-300 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-amber-950">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs font-black">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-extrabold text-xs sm:text-sm text-amber-950 block">
                      Appels directs, WhatsApp & Itinéraire verrouillés
                    </span>
                    <p className="text-[11px] text-amber-800">
                      Toutes les informations sont consultables, mais les actions directes sont réservées après l'abonnement (1 000 F).
                    </p>
                  </div>
                </div>
                <button
                  id="btn-unlock-from-modal"
                  onClick={() => onRequireSubscription({ feature: 'general', pharmacyName: pharmacy.name })}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-black text-xs shrink-0 shadow-xs active:scale-95 transition flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5 fill-current text-amber-200" />
                  <span>Débloquer (1 000 F)</span>
                </button>
              </div>
            ) : (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2.5 text-xs text-emerald-950">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="font-bold">
                  Pass VIP Actif • Appels, WhatsApp & Navigation GPS 100% Débloqués.
                </span>
              </div>
            )}

            {/* Address & Visual Landmark */}
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-[#1F7A4D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900">{pharmacy.address}</p>
                  {pharmacy.landmark && (
                    <p className="text-xs text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-lg mt-2 inline-block font-medium">
                      <strong>Repère ivoirien :</strong> {pharmacy.landmark}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Opening Hours & Duty Status */}
            <div className="rounded-2xl border border-slate-200/80 p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#1F7A4D]" />
                Horaires d’Ouverture & Garde
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-xl">
                  <span className="text-slate-500 block">Lundi - Vendredi</span>
                  <span className="font-bold text-slate-900 text-sm">{pharmacy.openingHours.weekday}</span>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-xl">
                  <span className="text-slate-500 block">Samedi - Dimanche</span>
                  <span className="font-bold text-slate-900 text-sm">{pharmacy.openingHours.weekend}</span>
                </div>
                <div className={`p-2.5 rounded-xl ${pharmacy.isOnDuty ? 'bg-emerald-50 border border-emerald-200' : 'bg-slate-50'}`}>
                  <span className="text-slate-500 block">Service de Garde</span>
                  <span className="font-bold text-emerald-800 text-sm">{pharmacy.openingHours.dutyHours}</span>
                </div>
              </div>
            </div>

            {/* Phone Numbers & WhatsApp */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Numéros Directs Côte d’Ivoire (+225)
              </h4>
              <div className="flex flex-wrap gap-2">
                {pharmacy.phones.map((phone, idx) => (
                  hasSubscription ? (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-[#1F7A4D] font-bold text-xs hover:bg-emerald-100 transition border border-emerald-200"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      <span>{phone}</span>
                    </a>
                  ) : (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onRequireSubscription({
                        feature: 'call',
                        pharmacyName: pharmacy.name,
                        phone
                      })}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-amber-50 hover:text-amber-950 font-bold text-xs transition border border-slate-200"
                      title="Activer l'abonnement pour appeler"
                    >
                      <Lock className="h-3.5 w-3.5 text-amber-600" />
                      <span>{phone} (Abonnés)</span>
                    </button>
                  )
                ))}

                {pharmacy.whatsapp && (
                  hasSubscription ? (
                    <a
                      href={`https://wa.me/${pharmacy.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-[#25D366] font-bold text-xs hover:bg-emerald-100 transition border border-emerald-200"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>WhatsApp : {pharmacy.whatsapp}</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onRequireSubscription({
                        feature: 'whatsapp',
                        pharmacyName: pharmacy.name,
                        whatsapp: pharmacy.whatsapp
                      })}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 text-emerald-950 hover:bg-emerald-100 font-bold text-xs transition border border-emerald-200"
                      title="Activer l'abonnement pour discuter sur WhatsApp"
                    >
                      <Lock className="h-3.5 w-3.5 text-emerald-600" />
                      <span>WhatsApp : {pharmacy.whatsapp} (Abonnés)</span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Insurances Accepted */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Prises en charge & Assurances acceptées
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {pharmacy.insurances.map((ins) => (
                  <span key={ins} className="inline-flex items-center gap-1 text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-lg">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    {ins}
                  </span>
                ))}
              </div>
            </div>

            {/* Available Medications / Stocks */}
            {pharmacy.availableMedications.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Pill className="h-4 w-4 text-[#1F7A4D]" />
                  Disponibilités Médicaments & Tarifs indicatifs (FCFA)
                </h4>
                <div className="divide-y divide-slate-100 border border-slate-200/80 rounded-2xl overflow-hidden">
                  {pharmacy.availableMedications.map((med) => (
                    <div key={med.id} className="flex items-center justify-between p-3 bg-white hover:bg-slate-50/80 transition">
                      <div>
                        <p className="font-semibold text-slate-900 text-xs sm:text-sm">{med.name}</p>
                        <span className="text-[11px] text-slate-400 font-medium">{med.category}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs sm:text-sm font-bold text-[#1F7A4D]">
                          {med.priceCFA.toLocaleString('fr-FR')} FCFA
                        </span>
                        <span className="block text-[10px] text-emerald-600 font-medium">✓ En stock</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Fixed Actions */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-2">
          {hasSubscription ? (
            <a
              href={`tel:${pharmacy.phones[0].replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1F7A4D] hover:bg-[#145A32] text-white text-sm font-bold shadow-md shadow-emerald-900/15 active:scale-95 transition"
            >
              <Phone className="h-4 w-4" />
              <span>Appeler</span>
            </a>
          ) : (
            <button
              id="btn-modal-call-locked"
              type="button"
              onClick={() => onRequireSubscription({
                feature: 'call',
                pharmacyName: pharmacy.name,
                phone: pharmacy.phones[0]
              })}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-md active:scale-95 transition"
              title="Abonnement requis pour appeler"
            >
              <Lock className="h-4 w-4 text-amber-400" />
              <span>Appeler (Abonnés)</span>
            </button>
          )}

          {pharmacy.whatsapp ? (
            hasSubscription ? (
              <a
                href={`https://wa.me/${pharmacy.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Bonjour ${pharmacy.name}, avez-vous le médicament suivant en stock ?`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-md shadow-emerald-900/10 active:scale-95 transition"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            ) : (
              <button
                id="btn-modal-wa-locked"
                type="button"
                onClick={() => onRequireSubscription({
                  feature: 'whatsapp',
                  pharmacyName: pharmacy.name,
                  whatsapp: pharmacy.whatsapp
                })}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-900 hover:bg-emerald-950 text-white text-sm font-bold shadow-md active:scale-95 transition"
                title="Abonnement requis pour WhatsApp"
              >
                <Lock className="h-4 w-4 text-emerald-300" />
                <span>WhatsApp (Abonnés)</span>
              </button>
            )
          ) : (
            <button
              onClick={() => onToggleFavorite(pharmacy.id)}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 text-sm font-bold hover:bg-slate-100 transition"
            >
              <span>{isFavorite ? 'Retirer favori' : 'Sauvegarder'}</span>
            </button>
          )}

          {hasSubscription ? (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${pharmacy.lat},${pharmacy.lng}`}
              target="_blank"
              rel="noreferrer"
              className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold shadow-xs active:scale-95 transition"
            >
              <Navigation className="h-4 w-4 text-[#1F7A4D]" />
              <span>Itinéraire GPS</span>
            </a>
          ) : (
            <button
              id="btn-modal-gps-locked"
              type="button"
              onClick={() => onRequireSubscription({
                feature: 'itinerary',
                pharmacyName: pharmacy.name,
                lat: pharmacy.lat,
                lng: pharmacy.lng
              })}
              className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-950 text-sm font-bold shadow-xs active:scale-95 transition"
              title="Abonnement requis pour le GPS"
            >
              <Lock className="h-4 w-4 text-amber-700" />
              <span>Itinéraire (Abonnés)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
