import React from 'react';
import { PhoneCall, Heart, MapPin, Sparkles, ShieldAlert, Download, UserCheck, Shield, KeyRound } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';
import { Coords } from '../hooks/useGeolocation';

interface NavbarProps {
  onOpenEmergency: () => void;
  onOpenSubscription: () => void;
  onOpenInstallRegister: () => void;
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
        {/* Left: App Identity */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F7A4D] to-[#145A32] text-white shadow-md shadow-emerald-900/15">
            {/* Medical Cross SVG */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 10.5h-5.5V5c0-.55-.45-1-1-1h-1c-.55 0-1 .45-1 1v5.5H5c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h5.5V19c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-5.5H19c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1z" />
            </svg>
            {/* Small CI flag indicator */}
            <div className="absolute -bottom-1 -right-1 flex h-3.5 w-5 overflow-hidden rounded-xs border border-white shadow-xs">
              <span className="w-1/3 bg-[#FF8200]" />
              <span className="w-1/3 bg-white" />
              <span className="w-1/3 bg-[#009A44]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                Pharmacies <span className="text-[#1F7A4D]">CI</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Gardes 24/7
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

        {/* Right Actions: Installer pour s'inscrire, 118 Emergency, Subscription, Favorites */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Main Requested CTA: Installer pour s'inscrire */}
          <button
            id="nav-btn-install-register"
            onClick={onOpenInstallRegister}
            className={`flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all shadow-xs active:scale-95 ${
              hasActiveSubscription
                ? 'bg-emerald-50 border border-emerald-300 text-emerald-900 hover:bg-emerald-100'
                : 'bg-gradient-to-r from-[#1F7A4D] to-[#145A32] text-white hover:brightness-105 shadow-emerald-900/20'
            }`}
            title="Installer l'application pour s'inscrire"
          >
            {hasActiveSubscription ? (
              <>
                <UserCheck className="h-3.5 w-3.5 text-emerald-700" />
                <span>Mon Compte</span>
              </>
            ) : (
              <>
                <Download className="h-3.5 w-3.5 animate-pulse" />
                <span className="hidden md:inline">Installer pour s'inscrire</span>
                <span className="md:hidden">S'inscrire</span>
              </>
            )}
          </button>

          {/* Abonnement 1000F Badge/Button */}
          <button
            id="nav-subscription-btn"
            onClick={onOpenSubscription}
            className={`hidden sm:flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-bold transition-all shadow-xs ${
              hasActiveSubscription
                ? 'bg-amber-100 text-amber-900 border border-amber-300 hover:bg-amber-200'
                : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:brightness-105 active:scale-95 shadow-orange-500/20'
            }`}
            title="Abonnement 1 000 FCFA - Alertes pharmacies de garde & conciergerie santé"
          >
            <Sparkles className="h-3.5 w-3.5 fill-current" />
            <span className="hidden lg:inline">Abonnement</span>
            <span>1000F</span>
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
