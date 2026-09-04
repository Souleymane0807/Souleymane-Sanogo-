import React from 'react';
import { Search, ShieldCheck, PhoneCall, Sparkles, Heart, Download, UserCheck } from 'lucide-react';

interface BottomNavProps {
  activeTab: 'search' | 'duty' | 'favorites';
  setActiveTab: (tab: 'search' | 'duty' | 'favorites') => void;
  onOpenEmergency118: () => void;
  onOpenSubscription1000F: () => void;
  onOpenInstallRegister: () => void;
  onOpenVipFeatures?: () => void;
  favoritesCount: number;
  dutyCount: number;
  hasSubscription: boolean;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenEmergency118,
  onOpenSubscription1000F,
  onOpenInstallRegister,
  onOpenVipFeatures,
  favoritesCount,
  dutyCount,
  hasSubscription
}) => {
  return (
    <div 
      id="mobile-bottom-nav"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-2 py-1.5 shadow-lg"
    >
      <div className="grid grid-cols-5 gap-1 items-center">
        {/* Tab: Recherche */}
        <button
          id="btn-tab-search"
          onClick={() => setActiveTab('search')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition ${
            activeTab === 'search' ? 'text-[#1F7A4D] font-bold' : 'text-slate-500'
          }`}
        >
          <Search className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">Toutes</span>
        </button>

        {/* Tab: De Garde */}
        <button
          id="btn-tab-duty"
          onClick={() => setActiveTab('duty')}
          className={`relative flex flex-col items-center justify-center py-1 rounded-xl transition ${
            activeTab === 'duty' ? 'text-[#1F7A4D] font-bold' : 'text-slate-500'
          }`}
        >
          <ShieldCheck className="h-5 w-5" />
          <span className="text-[10px] mt-0.5">De Garde</span>
          {dutyCount > 0 && (
            <span className="absolute top-0 right-3.5 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[9px] font-black text-white">
              {dutyCount}
            </span>
          )}
        </button>

        {/* Tab: SOS 118 - Prominent Center Emergency Button */}
        <button
          id="btn-tab-118"
          onClick={onOpenEmergency118}
          className="flex flex-col items-center justify-center -mt-4"
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/40 ring-4 ring-white active:scale-95 transition">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60"></span>
            <PhoneCall className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-black text-red-600 mt-1">118 SOS</span>
        </button>

        {/* Tab: Installer & S'inscrire / VIP */}
        <button
          id="btn-tab-install-register"
          onClick={hasSubscription && onOpenVipFeatures ? onOpenVipFeatures : onOpenInstallRegister}
          className="flex flex-col items-center justify-center py-1 rounded-xl text-emerald-800 hover:text-emerald-950 transition"
        >
          {hasSubscription ? (
            <UserCheck className="h-5 w-5 text-[#1F7A4D]" />
          ) : (
            <Download className="h-5 w-5 text-[#1F7A4D] animate-bounce" />
          )}
          <span className="text-[10px] font-bold text-emerald-900 mt-0.5">
            {hasSubscription ? 'Pass VIP' : "S'inscrire"}
          </span>
        </button>

        {/* Tab: Favoris */}
        <button
          id="btn-tab-favorites"
          onClick={() => setActiveTab('favorites')}
          className={`relative flex flex-col items-center justify-center py-1 rounded-xl transition ${
            activeTab === 'favorites' ? 'text-red-500 font-bold' : 'text-slate-500'
          }`}
        >
          <Heart className={`h-5 w-5 ${favoritesCount > 0 ? 'text-red-500 fill-red-500' : ''}`} />
          <span className="text-[10px] mt-0.5">Favoris</span>
          {favoritesCount > 0 && (
            <span className="absolute top-0 right-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-black text-white">
              {favoritesCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
