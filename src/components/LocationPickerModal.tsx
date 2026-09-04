import React from 'react';
import { X, Navigation, MapPin, Check } from 'lucide-react';
import { Coords, PRESET_LOCATIONS } from '../hooks/useGeolocation';

interface LocationPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCoords: Coords;
  isUsingRealGps: boolean;
  isLocating: boolean;
  onRequestGps: () => void;
  onSelectPreset: (preset: Coords) => void;
}

export const LocationPickerModal: React.FC<LocationPickerModalProps> = ({
  isOpen,
  onClose,
  currentCoords,
  isUsingRealGps,
  isLocating,
  onRequestGps,
  onSelectPreset
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="location-picker-modal"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-0 sm:p-4 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-3xl sm:rounded-3xl bg-white p-5 sm:p-6 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-[#1F7A4D]">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Position de recherche</h3>
              <p className="text-xs text-slate-500">Pour calculer la pharmacie la plus proche</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Real GPS trigger */}
        <div className="mt-4">
          <button
            id="btn-use-real-gps"
            onClick={() => {
              onRequestGps();
              onClose();
            }}
            disabled={isLocating}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-[#1F7A4D] hover:bg-emerald-100 active:scale-98 transition shadow-xs"
          >
            <div className="flex items-center gap-2.5">
              <Navigation className={`h-5 w-5 ${isLocating ? 'animate-spin' : ''}`} />
              <div className="text-left">
                <span className="font-bold text-sm block">Utiliser mon GPS actuel</span>
                <span className="text-[11px] text-emerald-800/80">Localisation automatique précise</span>
              </div>
            </div>
            {isUsingRealGps && <Check className="h-4 w-4 text-emerald-700" />}
          </button>
        </div>

        {/* Preset communes in Côte d'Ivoire */}
        <div className="mt-4 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block px-1">
            Ou choisir un quartier / commune de Côte d’Ivoire :
          </span>

          <div className="divide-y divide-slate-100 border border-slate-200/80 rounded-2xl overflow-hidden">
            {PRESET_LOCATIONS.map((preset, idx) => {
              const isSelected = !isUsingRealGps && currentCoords.name === preset.name;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    onSelectPreset(preset);
                    onClose();
                  }}
                  className={`w-full flex items-center justify-between p-3 text-left text-xs sm:text-sm font-medium transition ${
                    isSelected ? 'bg-emerald-50/80 text-[#1F7A4D] font-bold' : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <MapPin className={`h-4 w-4 ${isSelected ? 'text-[#1F7A4D]' : 'text-slate-400'}`} />
                    <span>{preset.name}</span>
                  </div>
                  {isSelected && <Check className="h-4 w-4 text-[#1F7A4D]" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
