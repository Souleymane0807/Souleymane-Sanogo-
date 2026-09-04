import React from 'react';
import { Pharmacy } from '../types';
import { Phone, MessageCircle, Navigation, Heart, Clock, ShieldCheck, MapPin, ChevronRight, CheckCircle2 } from 'lucide-react';
import { calculateDistanceKm, formatDistance, Coords } from '../hooks/useGeolocation';

interface PharmacyCardProps {
  pharmacy: Pharmacy;
  userCoords: Coords;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectPharmacy: (pharmacy: Pharmacy) => void;
}

export const PharmacyCard: React.FC<PharmacyCardProps> = ({
  pharmacy,
  userCoords,
  isFavorite,
  onToggleFavorite,
  onSelectPharmacy
}) => {
  const distanceKm = calculateDistanceKm(userCoords.lat, userCoords.lng, pharmacy.lat, pharmacy.lng);
  const formattedDistance = formatDistance(distanceKm);
  const primaryPhone = pharmacy.phones[0];

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = `tel:${primaryPhone.replace(/\s+/g, '')}`;
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (pharmacy.whatsapp) {
      const cleanNumber = pharmacy.whatsapp.replace(/\D/g, '');
      const message = encodeURIComponent(`Bonjour ${pharmacy.name}, je vous contacte via l'application Pharmacies CI concernant la disponibilité d'un médicament.`);
      window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
    }
  };

  const handleItinerary = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.google.com/maps/dir/?api=1&destination=${pharmacy.lat},${pharmacy.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div
      id={`pharmacy-card-${pharmacy.id}`}
      onClick={() => onSelectPharmacy(pharmacy)}
      className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-emerald-500/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Top Badges: Duty / 24h & Distance */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {pharmacy.isOnDuty && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-black bg-emerald-600 text-white shadow-xs">
                <ShieldCheck className="h-3.5 w-3.5" />
                DE GARDE
              </span>
            )}

            {pharmacy.isOpen24h ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <Clock className="h-3 w-3 text-amber-700" />
                24h/24
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
                <Clock className="h-3 w-3 text-slate-500" />
                {pharmacy.openingHours.weekday.split('-')[0]} - {pharmacy.openingHours.weekday.split('-')[1]}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Distance badge */}
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-lg">
              <MapPin className="h-3 w-3 text-[#1F7A4D]" />
              {formattedDistance}
            </span>

            {/* Favorite button */}
            <button
              id={`fav-btn-${pharmacy.id}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(pharmacy.id);
              }}
              className="p-1 rounded-full text-slate-300 hover:text-red-500 hover:bg-red-50 transition"
              title="Ajouter aux favoris"
            >
              <Heart className={`h-4 w-4 ${isFavorite ? 'text-red-500 fill-red-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Pharmacy Name & Location */}
        <div className="mb-2.5">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#1F7A4D] transition flex items-center justify-between">
            <span>{pharmacy.name}</span>
            <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-[#1F7A4D] group-hover:translate-x-0.5 transition shrink-0" />
          </h3>
          <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
            <span className="font-semibold text-slate-700">{pharmacy.city}</span> • {pharmacy.commune} ({pharmacy.neighborhood})
          </p>
        </div>

        {/* Visual Landmark (Repère Ivoirien) */}
        {pharmacy.landmark && (
          <div className="mb-3 rounded-lg bg-emerald-50/70 border border-emerald-100 px-2.5 py-1.5 text-xs text-emerald-900 flex items-start gap-1.5">
            <span className="font-bold text-emerald-700 shrink-0">Repère :</span>
            <span className="line-clamp-1">{pharmacy.landmark}</span>
          </div>
        )}

        {/* Insurances chips (CNAM, MUGEF-CI) */}
        <div className="flex flex-wrap items-center gap-1 mb-3">
          {pharmacy.insurances.slice(0, 3).map((ins) => (
            <span key={ins} className="inline-flex items-center text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
              <CheckCircle2 className="h-2.5 w-2.5 mr-0.5 text-emerald-600" />
              {ins}
            </span>
          ))}
          {pharmacy.insurances.length > 3 && (
            <span className="text-[10px] text-slate-400 font-medium">+{pharmacy.insurances.length - 3}</span>
          )}
        </div>
      </div>

      {/* Action Buttons: Appeler, WhatsApp, Itinéraire */}
      <div className="pt-2 border-t border-slate-100 grid grid-cols-3 gap-1.5 sm:gap-2">
        {/* Call button */}
        <button
          id={`btn-call-${pharmacy.id}`}
          onClick={handleCall}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs active:scale-95 transition"
        >
          <Phone className="h-3.5 w-3.5" />
          <span>Appeler</span>
        </button>

        {/* WhatsApp button */}
        {pharmacy.whatsapp ? (
          <button
            id={`btn-wa-${pharmacy.id}`}
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xs active:scale-95 transition"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </button>
        ) : (
          <button
            disabled
            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-slate-100 text-slate-400 text-xs font-medium cursor-not-allowed"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Sans WA</span>
          </button>
        )}

        {/* Map Itinerary */}
        <button
          id={`btn-gps-${pharmacy.id}`}
          onClick={handleItinerary}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold active:scale-95 transition"
        >
          <Navigation className="h-3.5 w-3.5 text-[#1F7A4D]" />
          <span>Itinéraire</span>
        </button>
      </div>
    </div>
  );
};
