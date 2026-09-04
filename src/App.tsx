import React, { useState, useMemo, useEffect } from 'react';
import { IVORY_COAST_PHARMACIES } from './data/pharmacies';
import { Pharmacy, UserSubscription } from './types';
import { Navbar } from './components/Navbar';
import { PharmacyCard } from './components/PharmacyCard';
import { PharmacyModal } from './components/PharmacyModal';
import { Emergency118Modal } from './components/Emergency118Modal';
import { SubscriptionModal } from './components/SubscriptionModal';
import { LocationPickerModal } from './components/LocationPickerModal';
import { InstallAndRegisterModal } from './components/InstallAndRegisterModal';
import { AdminModal } from './components/AdminModal';
import { AppConfirmationGateModal } from './components/AppConfirmationGateModal';
import { BottomNav } from './components/BottomNav';
import { OfflineIndicator } from './components/OfflineIndicator';
import { useGeolocation, calculateDistanceKm } from './hooks/useGeolocation';
import {
  getStoredAppConfirmation,
  isAppLockEnforced,
  AdminConfirmationState,
  PAYMENT_CONFIG
} from './services/subscriptionService';
import { 
  Search, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  SlidersHorizontal, 
  Sparkles, 
  PhoneCall, 
  Heart, 
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Pill,
  ArrowUpDown,
  Download,
  Smartphone,
  UserCheck,
  KeyRound,
  Shield,
  ExternalLink
} from 'lucide-react';

const ALL_COMMUNES = [
  'Toutes les communes',
  'Cocody',
  'Yopougon',
  'Plateau',
  'Marcory',
  'Treichville',
  'Koumassi',
  'Port-Bouët',
  'Abobo',
  'Adjamé',
  'Bingerville',
  'Yamoussoukro',
  'Bouaké',
  'San-Pédro',
  'Korhogo',
  'Grand-Bassam'
];

export default function App() {
  // Geolocation
  const {
    currentCoords,
    isLocating,
    isUsingRealGps,
    requestRealLocation,
    setManualLocation
  } = useGeolocation();

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCommune, setSelectedCommune] = useState('Toutes les communes');
  const [onlyDuty, setOnlyDuty] = useState(false);
  const [only24h, setOnly24h] = useState(false);
  const [sortBy, setSortBy] = useState<'proximity' | 'duty' | 'name'>('proximity');
  const [activeTab, setActiveTab] = useState<'search' | 'duty' | 'favorites'>('search');

  // Modals state
  const [selectedPharmacy, setSelectedPharmacy] = useState<Pharmacy | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isLocationPickerOpen, setIsLocationPickerOpen] = useState(false);
  const [isInstallRegisterOpen, setIsInstallRegisterOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isGateOpen, setIsGateOpen] = useState(false);

  // App Confirmation state
  const [appConfirmation, setAppConfirmation] = useState<AdminConfirmationState>(() => getStoredAppConfirmation());

  // Load confirmation state on mount without blocking initial viewing
  useEffect(() => {
    const conf = getStoredAppConfirmation();
    setAppConfirmation(conf);
  }, []);

  // Favorites state with localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('pharmacies_ci_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Subscription state with localStorage
  const [subscription, setSubscription] = useState<UserSubscription | null>(() => {
    try {
      const saved = localStorage.getItem('pharmacies_ci_subscription');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('pharmacies_ci_favorites', JSON.stringify(favorites));
    } catch {
      // Safe fallback
    }
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSaveSubscription = (newSub: UserSubscription) => {
    setSubscription(newSub);
    try {
      localStorage.setItem('pharmacies_ci_subscription', JSON.stringify(newSub));
    } catch {
      // Safe fallback
    }
  };

  const handleCancelSubscription = () => {
    setSubscription(null);
    try {
      localStorage.removeItem('pharmacies_ci_subscription');
    } catch {
      // Safe fallback
    }
  };

  // Sync tab with duty filter
  useEffect(() => {
    if (activeTab === 'duty') {
      setOnlyDuty(true);
    }
  }, [activeTab]);

  // Filtered and sorted pharmacies
  const filteredPharmacies = useMemo(() => {
    return IVORY_COAST_PHARMACIES.filter((pharma) => {
      // Tab filter
      if (activeTab === 'duty' && !pharma.isOnDuty) return false;
      if (activeTab === 'favorites' && !favorites.includes(pharma.id)) return false;

      // Filter toggles
      if (onlyDuty && !pharma.isOnDuty) return false;
      if (only24h && !pharma.isOpen24h) return false;

      // Commune filter
      if (selectedCommune !== 'Toutes les communes' && pharma.commune.toLowerCase() !== selectedCommune.toLowerCase()) {
        return false;
      }

      // Search query (name, neighborhood, landmark, medications)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = pharma.name.toLowerCase().includes(q);
        const matchCommune = pharma.commune.toLowerCase().includes(q);
        const matchNeighborhood = pharma.neighborhood.toLowerCase().includes(q);
        const matchLandmark = pharma.landmark.toLowerCase().includes(q);
        const matchMedication = pharma.availableMedications.some((m) =>
          m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q)
        );
        const matchCity = pharma.city.toLowerCase().includes(q);

        if (!matchName && !matchCommune && !matchNeighborhood && !matchLandmark && !matchMedication && !matchCity) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'proximity') {
        const distA = calculateDistanceKm(currentCoords.lat, currentCoords.lng, a.lat, a.lng);
        const distB = calculateDistanceKm(currentCoords.lat, currentCoords.lng, b.lat, b.lng);
        return distA - distB;
      }
      if (sortBy === 'duty') {
        if (a.isOnDuty && !b.isOnDuty) return -1;
        if (!a.isOnDuty && b.isOnDuty) return 1;
        return a.name.localeCompare(b.name);
      }
      return a.name.localeCompare(b.name);
    });
  }, [IVORY_COAST_PHARMACIES, activeTab, favorites, onlyDuty, only24h, selectedCommune, searchQuery, sortBy, currentCoords]);

  const dutyPharmaciesCount = useMemo(() => {
    return IVORY_COAST_PHARMACIES.filter((p) => p.isOnDuty).length;
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAF8] text-slate-900 flex flex-col font-sans pb-24 sm:pb-12">
      {/* Top Navigation */}
      <Navbar
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenSubscription={() => setIsSubscriptionOpen(true)}
        onOpenInstallRegister={() => setIsInstallRegisterOpen(true)}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setActiveTab('favorites')}
        currentCoords={currentCoords}
        onOpenLocationPicker={() => setIsLocationPickerOpen(true)}
        hasActiveSubscription={!!subscription}
        onOpenAdmin={() => setIsAdminOpen(true)}
        isConfirmed={appConfirmation.isConfirmed}
        onOpenConfirmationGate={() => setIsGateOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 pt-4 sm:pt-6">
        
        {/* Information & VIP Activation Banner */}
        {!appConfirmation.isConfirmed && !subscription ? (
          <div className="mb-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-amber-50 border border-emerald-200 p-3 sm:p-4 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-black shadow-xs">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-black text-emerald-950 flex items-center gap-1.5">
                  <span>Accès Libre aux Pharmacies • Abonnement VIP 1 000 FCFA</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-bold">Sans engagement</span>
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                  Explorez librement l'annuaire. Pour recevoir les alertes WhatsApp de garde, activez votre abonnement : le <strong>code de confirmation vous est envoyé par Max adiko Clovis Garal après votre paiement</strong>.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
              <button
                onClick={() => setIsSubscriptionOpen(true)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs shadow-xs transition active:scale-95"
              >
                S'abonner (1 000 F)
              </button>
              <button
                onClick={() => setIsGateOpen(true)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 font-bold text-xs transition inline-flex items-center justify-center gap-1.5"
                title="Saisir le code reçu après règlement"
              >
                <KeyRound className="h-3.5 w-3.5 text-amber-600" />
                <span>Code reçu après paiement</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-3 rounded-xl bg-emerald-50 border border-emerald-200 px-3.5 py-2 flex items-center justify-between text-xs text-emerald-950 shadow-2xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>
                Pass VIP Actif • Validé par <strong>Max adiko Clovis Garal</strong> ({appConfirmation.code || subscription?.memberId || 'AUTORISÉ'})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSubscriptionOpen(true)}
                className="text-[11px] font-bold text-emerald-800 hover:text-emerald-950 underline"
              >
                Voir mon Pass VIP
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={() => setIsAdminOpen(true)}
                className="text-[11px] font-bold text-slate-600 hover:text-slate-900"
              >
                Admin
              </button>
            </div>
          </div>
        )}

        {/* Banner: Installer pour s'inscrire */}
        <div className="mb-4 rounded-3xl bg-gradient-to-r from-[#145A32] via-[#1F7A4D] to-[#0D3820] p-4 sm:p-5 text-white shadow-lg shadow-emerald-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-emerald-400/30">
          <div className="flex items-center gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-xs border border-white/20">
              <Download className="h-6 w-6 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                  {subscription ? 'Pass Adhérent Actif' : 'Nouveau • Côte d’Ivoire'}
                </span>
                <span className="text-xs text-emerald-200 font-semibold hidden sm:inline">
                  Accès direct sans téléchargement Store
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black tracking-tight mt-1">
                Installer l’Application pour s’inscrire
              </h3>
              <p className="text-xs text-emerald-100 max-w-xl mt-0.5">
                {subscription
                  ? `Vous êtes enregistré(e) sous le numéro ${subscription.memberId} pour ${subscription.commune}. Installez l'application sur votre écran d'accueil pour un accès hors-ligne instantané.`
                  : "Ajoutez Pharmacies CI à votre écran d'accueil et enregistrez-vous pour recevoir les alertes des pharmacies de garde de votre commune par WhatsApp & SMS."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <button
              id="btn-banner-install-register"
              onClick={() => setIsInstallRegisterOpen(true)}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-[#1F7A4D] text-xs sm:text-sm font-black shadow-md hover:bg-emerald-50 active:scale-98 transition"
            >
              <Smartphone className="h-4 w-4" />
              <span>{subscription ? 'Mon Pass & Installation' : "Installer & S'inscrire"}</span>
            </button>
          </div>
        </div>

        {/* Banner 1: Emergency & 1000F Subscription Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
          {/* Urgent SOS 118 Callout Card */}
          <div className="rounded-2xl bg-gradient-to-r from-red-600 to-rose-700 p-4 text-white shadow-md shadow-red-600/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-xs">
                <PhoneCall className="h-6 w-6 animate-pulse" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-200">Urgences Nationales</span>
                <h3 className="text-xl font-black leading-tight">Numéro 118</h3>
                <p className="text-xs text-red-100">GSPM / Pompiers & Secours CI</p>
              </div>
            </div>
            <button
              id="btn-banner-118"
              onClick={() => setIsEmergencyOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-white text-red-700 text-xs font-black shadow-xs hover:bg-red-50 active:scale-95 transition"
            >
              Appeler
            </button>
          </div>

          {/* Abonnement 1000F Promo / Active Status Card */}
          <div 
            onClick={() => setIsSubscriptionOpen(true)}
            className="md:col-span-2 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-700 p-4 text-white shadow-md shadow-orange-500/15 flex items-center justify-between cursor-pointer hover:brightness-105 transition"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-xs">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-100">
                    {subscription ? 'Pass VIP Actif' : 'Nouveau • Abonnement 1000F'}
                  </span>
                  {subscription && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-white text-emerald-800">
                      Adhérent {subscription.memberId}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-black leading-tight">
                  {subscription 
                    ? `Alertes actives pour ${subscription.commune} (Expire le ${subscription.expiresAt})`
                    : 'Abonnement 1 000 FCFA : Alertes WhatsApp & SMS de garde de votre commune'}
                </h3>
                <p className="text-xs text-amber-100 hidden sm:block">
                  Recherche prioritaire de médicaments rares 24h/24 + carte d’assuré numérique
                </p>
              </div>
            </div>
            <button
              id="btn-banner-subscribe"
              onClick={(e) => {
                e.stopPropagation();
                setIsSubscriptionOpen(true);
              }}
              className="px-3.5 py-2 rounded-xl bg-white text-slate-900 text-xs font-black shadow-xs hover:bg-amber-50 shrink-0 ml-2"
            >
              {subscription ? 'Voir mon pass' : 'Découvrir'}
            </button>
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-xs mb-5">
          {/* Top Row: Search Input */}
          <div className="relative mb-3.5">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              id="main-search-input"
              type="text"
              placeholder="Rechercher une pharmacie, quartier, repère ou médicament (Doliprane, Sérum, Paludisme...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl bg-slate-50 border border-slate-200 pl-11 pr-10 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#1F7A4D] focus:ring-2 focus:ring-emerald-500/20 outline-hidden transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 p-1"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
            {/* Left Filter Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Commune Selector */}
              <div className="relative">
                <select
                  id="commune-dropdown"
                  value={selectedCommune}
                  onChange={(e) => setSelectedCommune(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-slate-50 text-slate-800 py-2 pl-3 pr-8 text-xs font-bold focus:border-[#1F7A4D] outline-hidden cursor-pointer"
                >
                  {ALL_COMMUNES.map((com) => (
                    <option key={com} value={com}>
                      {com}
                    </option>
                  ))}
                </select>
              </div>

              {/* De Garde Toggle */}
              <button
                id="filter-duty-btn"
                onClick={() => setOnlyDuty(!onlyDuty)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition ${
                  onlyDuty
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>De Garde uniquement</span>
              </button>

              {/* 24h/24 Toggle */}
              <button
                id="filter-24h-btn"
                onClick={() => setOnly24h(!only24h)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition ${
                  only24h
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Clock className="h-3.5 w-3.5" />
                <span>24h/24</span>
              </button>
            </div>

            {/* Right Sorting Options */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">Trier par :</span>
              <div className="flex items-center bg-slate-100 rounded-xl p-0.5 text-xs font-bold">
                <button
                  id="sort-proximity"
                  onClick={() => setSortBy('proximity')}
                  className={`px-2.5 py-1.5 rounded-lg transition ${
                    sortBy === 'proximity' ? 'bg-white text-[#1F7A4D] shadow-xs' : 'text-slate-600'
                  }`}
                  title="Plus proche de votre position"
                >
                  Proximité
                </button>
                <button
                  id="sort-duty"
                  onClick={() => setSortBy('duty')}
                  className={`px-2.5 py-1.5 rounded-lg transition ${
                    sortBy === 'duty' ? 'bg-white text-[#1F7A4D] shadow-xs' : 'text-slate-600'
                  }`}
                  title="Pharmacies de garde en premier"
                >
                  Garde
                </button>
                <button
                  id="sort-name"
                  onClick={() => setSortBy('name')}
                  className={`px-2.5 py-1.5 rounded-lg transition ${
                    sortBy === 'name' ? 'bg-white text-[#1F7A4D] shadow-xs' : 'text-slate-600'
                  }`}
                >
                  A-Z
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header with Stats & Active Filters */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {activeTab === 'favorites'
                ? 'Mes Pharmacies Favorites'
                : activeTab === 'duty'
                ? 'Pharmacies de Garde'
                : 'Pharmacies Répertoriées'}
            </h2>
            <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-[#1F7A4D]">
              {filteredPharmacies.length} {filteredPharmacies.length > 1 ? 'trouvées' : 'trouvée'}
            </span>
          </div>

          {/* Reset Filters button if any are applied */}
          {(searchQuery || selectedCommune !== 'Toutes les communes' || onlyDuty || only24h) && (
            <button
              id="btn-reset-filters"
              onClick={() => {
                setSearchQuery('');
                setSelectedCommune('Toutes les communes');
                setOnlyDuty(false);
                setOnly24h(false);
                setActiveTab('search');
              }}
              className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-500 transition"
            >
              <RotateCcw className="h-3 w-3" />
              <span>Réinitialiser</span>
            </button>
          )}
        </div>

        {/* Pharmacy Cards Grid */}
        {filteredPharmacies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPharmacies.map((pharmacy) => (
              <PharmacyCard
                key={pharmacy.id}
                pharmacy={pharmacy}
                userCoords={currentCoords}
                isFavorite={favorites.includes(pharmacy.id)}
                onToggleFavorite={handleToggleFavorite}
                onSelectPharmacy={setSelectedPharmacy}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white p-8 text-center border border-slate-200 shadow-xs max-w-md mx-auto my-8">
            <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-3">
              <AlertCircle className="h-7 w-7" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Aucune pharmacie ne correspond</h3>
            <p className="text-xs text-slate-500 mb-4">
              Essayez d’élargir votre recherche, de changer de commune ou de désactiver le filtre de garde.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCommune('Toutes les communes');
                setOnlyDuty(false);
                setOnly24h(false);
                setActiveTab('search');
              }}
              className="px-4 py-2 rounded-xl bg-[#1F7A4D] text-white text-xs font-bold shadow-xs hover:bg-[#145A32] transition"
            >
              Afficher toutes les pharmacies
            </button>
          </div>
        )}
      </main>

      {/* Footer with official administrative & marketing contacts */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-800">
            Pharmacies CI — Annuaire officiel des pharmacies de garde & urgences 118 en Côte d’Ivoire
          </p>
          <p className="text-[11px] text-slate-500">
            Abidjan • Yamoussoukro • Bouaké • San-Pédro • Korhogo • Daloa • Grand-Bassam
          </p>

          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-600">
            <span>
              <strong>Responsable :</strong> Sanogo Souleymane (<a href="mailto:sanogosouleymane1964@gmail.com" className="text-emerald-700 hover:underline">sanogosouleymane1964@gmail.com</a>)
            </span>
            <span className="hidden sm:inline">•</span>
            <span>
              <strong>Responsable Marketing (Abidjan) :</strong> Max adiko Clovis Garal (<a href="mailto:adikomaxclovis@gmail.com" className="text-emerald-700 hover:underline">adikomaxclovis@gmail.com</a>)
            </span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://pay.wave.com/m/M_ci_gFnOjeceocKS/c/ci/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Lien Officiel Wave CI</span>
              <span className="text-[9px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-sm">0% frais</span>
            </a>
            <span className="hidden sm:inline">•</span>
            <button
              type="button"
              onClick={() => setIsAdminOpen(true)}
              className="font-bold text-slate-800 hover:text-emerald-800 underline inline-flex items-center gap-1"
            >
              <Shield className="h-3 w-3 text-emerald-600" />
              <span>Espace Admin & Codes</span>
            </button>
          </div>

          <p className="pt-1 text-[10px] text-emerald-800">
            En cas d’urgence vitale, composez immédiatement le <strong>118</strong> (GSPM) ou le <strong>185</strong> (SAMU).
          </p>
        </div>
      </footer>

      {/* Modals */}
      <PharmacyModal
        pharmacy={selectedPharmacy}
        userCoords={currentCoords}
        onClose={() => setSelectedPharmacy(null)}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={selectedPharmacy ? favorites.includes(selectedPharmacy.id) : false}
      />

      <Emergency118Modal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
        userCoords={currentCoords}
      />

      <SubscriptionModal
        isOpen={isSubscriptionOpen}
        onClose={() => setIsSubscriptionOpen(false)}
        subscription={subscription}
        onSaveSubscription={handleSaveSubscription}
        onCancelSubscription={handleCancelSubscription}
      />

      <LocationPickerModal
        isOpen={isLocationPickerOpen}
        onClose={() => setIsLocationPickerOpen(false)}
        currentCoords={currentCoords}
        isUsingRealGps={isUsingRealGps}
        isLocating={isLocating}
        onRequestGps={requestRealLocation}
        onSelectPreset={setManualLocation}
      />

      {/* Install & Register Modal */}
      <InstallAndRegisterModal
        isOpen={isInstallRegisterOpen}
        onClose={() => setIsInstallRegisterOpen(false)}
        subscription={subscription}
        onSaveSubscription={handleSaveSubscription}
      />

      {/* Admin Space & Codes Management Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* App Confirmation Gate Modal (Max adiko Clovis Garal) */}
      <AppConfirmationGateModal
        isOpen={isGateOpen}
        onSuccess={() => {
          setAppConfirmation(getStoredAppConfirmation());
          setIsGateOpen(false);
        }}
        onEmergencyAccess={() => {
          setIsGateOpen(false);
          setIsEmergencyOpen(true);
        }}
        isDismissible={appConfirmation.isConfirmed}
        onClose={() => setIsGateOpen(false)}
      />

      {/* Offline PWA Indicator */}
      <OfflineIndicator />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenEmergency118={() => setIsEmergencyOpen(true)}
        onOpenSubscription1000F={() => setIsSubscriptionOpen(true)}
        onOpenInstallRegister={() => setIsInstallRegisterOpen(true)}
        favoritesCount={favorites.length}
        dutyCount={dutyPharmaciesCount}
        hasSubscription={!!subscription}
      />
    </div>
  );
}
