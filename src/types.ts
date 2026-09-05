export interface RegionInfo {
  id: string;
  name: string;
  chefLieu: string;
  isAutonomousDistrict?: boolean;
  communes: string[];
  lat: number;
  lng: number;
}

export type CityCI = 
  | 'Abidjan' 
  | 'Yamoussoukro' 
  | 'Bouaké' 
  | 'San-Pédro' 
  | 'Korhogo' 
  | 'Daloa' 
  | 'Grand-Bassam'
  | string;

export type CommuneAbidjan = 
  | 'Cocody' 
  | 'Yopougon' 
  | 'Plateau' 
  | 'Marcory' 
  | 'Koumassi' 
  | 'Treichville' 
  | 'Port-Bouët' 
  | 'Adjamé' 
  | 'Abobo' 
  | 'Attécoubé' 
  | 'Bingerville' 
  | 'Songon';

export interface MedicationItem {
  id: string;
  name: string;
  category: 'Antidouleur' | 'Antibiotique' | 'Pédiatrie' | 'Cardiologie' | 'Diabète' | 'Paludisme' | 'Urgences';
  inStock: boolean;
  priceCFA: number;
}

export interface Pharmacy {
  id: string;
  name: string;
  region?: string;
  city: CityCI;
  commune: string;
  neighborhood: string;
  address: string;
  landmark: string; // Repère visuel ivoirien (ex: Face Pharmacie Saint-Jean, Près du Carrefour Duncan)
  phones: string[];
  whatsapp?: string;
  isOnDuty: boolean; // De garde cette semaine / nuit
  isOpen24h: boolean;
  openingHours: {
    weekday: string;
    weekend: string;
    dutyHours: string;
  };
  lat: number;
  lng: number;
  services: string[];
  insurances: string[]; // CNAM, MUGEF-CI, etc.
  availableMedications: MedicationItem[];
  rating: number;
  reviewsCount: number;
  dutyGroup?: 'Groupe A' | 'Groupe B' | 'Groupe C' | 'Garde Permanente';
  dutyPeriodDates?: string;
}

export type PaymentMethod = 'orange_money' | 'wave' | 'mtn_momo' | 'moov_money' | 'card';

export interface UserSubscription {
  id: string;
  memberId: string;
  userName: string;
  phone: string;
  commune: string;
  planName: string;
  priceCFA: number;
  paymentMethod: PaymentMethod;
  status: 'active' | 'expired';
  activatedAt: string;
  expiresAt: string;
  receiveSMSAlerts: boolean;
  receiveWhatsAppAlerts: boolean;
  digitalPassQr: string;
}

export interface EmergencyContact {
  id: string;
  shortCode: string;
  title: string;
  department: string;
  description: string;
  standardPhone?: string;
  category: 'secours' | 'medical' | 'police' | 'poison';
  isPrimary118?: boolean;
}

export interface FilterState {
  searchQuery: string;
  selectedCity: string;
  selectedCommune: string;
  dutyOnly: boolean;
  open24hOnly: boolean;
  deliveryOnly: boolean;
  insuranceFilter: string;
  sortBy: 'proximity' | 'duty' | 'name' | 'rating';
}
