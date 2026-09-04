import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div 
      id="pwa-offline-indicator"
      className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 flex items-center gap-3 rounded-xl bg-[#0F172A] text-white p-3.5 shadow-2xl border border-amber-500/40 animate-bounce-subtle"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
        <WifiOff className="h-5 w-5" />
      </div>
      <div className="text-xs leading-tight">
        <p className="font-bold text-amber-400">Mode Hors-Ligne Actif</p>
        <p className="text-slate-300 mt-0.5">L’annuaire des pharmacies et les numéros d’urgence 118 restent accessibles sans internet.</p>
      </div>
    </div>
  );
};
