import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Share, PlusSquare, X } from 'lucide-react';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed, don't show prompt
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        id="btn-pwa-install"
        onClick={install}
        className={`flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1F7A4D] to-[#145A32] text-white font-semibold shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all ${
          compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
        }`}
        title="Installer l'application Pharmacies CI sur votre appareil"
      >
        <Download className={compact ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
        <span>Installer l’App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          id="btn-pwa-ios-guide"
          onClick={() => setShowIOSGuide(true)}
          className={`flex items-center gap-1.5 rounded-xl border border-emerald-700/20 bg-emerald-50 text-emerald-900 font-medium hover:bg-emerald-100 active:scale-95 transition-all ${
            compact ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-2 text-xs'
          }`}
          title="Installer sur iPhone / iPad"
        >
          <Download className="h-3.5 w-3.5 text-emerald-700" />
          <span>Installer (iOS)</span>
        </button>

        {showIOSGuide && (
          <div 
            id="ios-install-modal"
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200"
          >
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1F7A4D] text-white font-black text-xl">
                    +
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Installer Pharmacies CI</h3>
                    <p className="text-xs text-slate-500">Accès direct sans passer par l’App Store</p>
                  </div>
                </div>
                <button
                  id="btn-close-ios-guide"
                  onClick={() => setShowIOSGuide(false)}
                  className="rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3.5 text-sm text-slate-600">
                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Share className="h-4 w-4" />
                  </div>
                  <p className="text-xs leading-relaxed">
                    1. Dans Safari, appuyez sur le bouton <strong>Partager</strong> au bas de l’écran.
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-white">
                    <PlusSquare className="h-4 w-4" />
                  </div>
                  <p className="text-xs leading-relaxed">
                    2. Défilez vers le bas et sélectionnez <strong>Sur l’écran d’accueil</strong>.
                  </p>
                </div>
              </div>

              <button
                id="btn-confirm-ios-guide"
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full rounded-xl bg-[#1F7A4D] py-3 text-sm font-semibold text-white hover:bg-[#145A32] transition active:scale-98"
              >
                J’ai compris
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback direct install button for desktop/mobile browsers
  return (
    <button
      id="btn-pwa-install-ambient"
      onClick={() => {
        alert("Pour installer cette application sur votre écran d'accueil :\n- Sur Chrome/Android : Menu ⋮ > 'Ajouter à l'écran d'accueil'\n- Sur iPhone Safari : Bouton Partager > 'Sur l'écran d'accueil'");
      }}
      className={`hidden sm:flex items-center gap-1.5 rounded-xl border border-emerald-600/30 bg-emerald-50/80 text-emerald-800 font-medium hover:bg-emerald-100 transition ${
        compact ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-xs'
      }`}
    >
      <Download className="h-3.5 w-3.5 text-emerald-700" />
      <span>Installer PWA</span>
    </button>
  );
};
