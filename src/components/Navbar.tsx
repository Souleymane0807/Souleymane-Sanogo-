import React from 'react';
import { PhoneCall, Heart, MapPin, Sparkles, ShieldAlert, Download, UserCheck, Shield, KeyRound } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { AppLogo } from './AppLogo';
import { Coords } from '../hooks/useGeolocation';

interface NavbarProps {
  onOpenEmergency: () => void;
  onOpenSubscription: () => void;
  onOpenInstallRegister: () => void;
  onOpenVipFeatures: () => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
  currentCoords: Coords;
  onOpenLocationPicker: () => void;
  hasActiveSubscription: boolean;
  onOpenAdmin?: () => void;
  isConfirmed?: boolean;
  onOpenConfirmationGate?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenEmergency,
  onOpenSubscription,
  onOpenInstallRegister,
  onOpenVipFeatures,
  favoritesCount,
  onOpenFavorites,
  currentCoords,
  onOpenLocationPicker,
  hasActiveSubscription,
  onOpenAdmin,
  isConfirmed,
  onOpenConfirmationGate
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Left: App Identity with User Logo */}
        <div className="flex items-center gap-2.5">
          <AppLogo size="md" />

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                Pharmacies <span className="text-[#1F7A4D]">CI</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Santé • Proximité
              </span>
            </div>
            {/* Location selector toggle */}
            <button
              id="btn-location-switch"
              onClick={onOpenLocationPicker}
              className="flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-[#1F7A4D] transition text-left"
            >
              <MapPin className="h-3 w-3 text-[#1F7A4D] shrink-0" />
              <span className="truncate max-w-[120px] sm:max-w-[180px]">
                {currentCoords.name || 'Côte d’Ivoire'}
              </span>
              <span className="text-[10px] text-slate-400">▼</span>
            </button>
          </div>
        </div>

        {/* Right Actions: Télécharger l'App, Choisir un Forfait, 118 Emergency, Admin, Favorites */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Main CTA: Télécharger l'application */}
          <button
            id="nav-btn-download-app"
            onClick={onOpenInstallRegister}
            className="flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all shadow-xs active:scale-95 bg-gradient-to-r from-[#1F7A4D] to-[#145A32] text-white hover:brightness-105 shadow-emerald-900/20"
            title="Télécharger et installer l'application sur votre écran d'accueil (Gratuit)"
          >
            <Download className="h-3.5 w-3.5 animate-bounce" />
            <span className="hidden sm:inline">Télécharger l'App</span>
            <span className="sm:hidden">Télécharger</span>
          </button>

          {/* Choisir un Forfait / VIP Features */}
          <button
            id="nav-btn-forfaits"
            onClick={hasActiveSubscription || isConfirmed ? onOpenVipFeatures : onOpenSubscription}
            className={`flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all shadow-xs ${
              hasActiveSubscription || isConfirmed
                ? 'bg-emerald-100 text-emerald-950 border border-emerald-300 hover:bg-emerald-200'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-105 active:scale-95 shadow-orange-500/20'
            }`}
            title="Choisir un forfait (Gratuit ou VIP 1 000 FCFA avec alertes WhatsApp)"
          >
            <Sparkles className="h-3.5 w-3.5 fill-current text-amber-200" />
            <span className="hidden md:inline">{hasActiveSubscription || isConfirmed ? 'Mon Pass VIP' : 'Choisir un Forfait'}</span>
            <span className="md:hidden">{hasActiveSubscription || isConfirmed ? 'Pass VIP' : 'Forfaits'}</span>
          </button>

          {/* URGENCES 118 Button - High Priority */}
          <button
            id="nav-btn-118"
            onClick={onOpenEmergency}
            className="flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-black shadow-md shadow-red-600/30 active:scale-95 transition-all group"
            title="Urgences Nationales 118 (GSPM / Pompiers / SAMU)"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <ShieldAlert className="h-4 w-4" />
            <span>118 SOS</span>
          </button>

          {/* Admin / Code Confirmation Button */}
          {onOpenAdmin && (
            <button
              id="nav-btn-admin"
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-800 px-2.5 py-1.5 text-xs font-extrabold transition shadow-2xs"
              title="Espace Administration & Codes de confirmation"
            >
              <Shield className="h-3.5 w-3.5 text-emerald-700" />
              <span className="hidden md:inline">Admin</span>
            </button>
          )}

          {/* Favorites Button */}
          <button
            id="nav-btn-favorites"
            onClick={onOpenFavorites}
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition"
            title="Mes pharmacies favorites"
          >
            <Heart className={`h-4 w-4 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : ''}`} />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-xs">
                {favoritesCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
