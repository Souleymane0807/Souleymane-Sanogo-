import { Pharmacy } from '../types';

export const IVORY_COAST_PHARMACIES: Pharmacy[] = [
  // ================= COCODY =================
  {
    id: 'pharma-cocody-ste-cecile',
    name: 'Pharmacie Sainte Cécile',
    city: 'Abidjan',
    commune: 'Cocody',
    neighborhood: 'Les Vallons (2 Plateaux)',
    address: 'Rue des Jardins, Immeuble Sainte Cécile',
    landmark: 'Près du Carrefour Sainte Cécile, en face de Paul',
    phones: ['+225 27 22 41 33 22', '+225 07 07 89 20 10'],
    whatsapp: '+2250707892010',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '07h30 - 22h00',
      weekend: '08h00 - 21h00',
      dutyHours: 'Garde 24h/24 sans interruption',
    },
    lat: 5.3582,
    lng: -4.0041,
    services: ['Garde de nuit 24h/24', 'Livraison express', 'Dépistage Diabète & Tension', 'Vaccination', 'Tiers-Payant'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'AXA Assurances', 'SANLAM', 'SUNU', 'NSIA'],
    dutyGroup: 'Groupe A',
    dutyPeriodDates: 'Semaine de garde en cours',
    rating: 4.8,
    reviewsCount: 142,
    availableMedications: [
      { id: 'm1', name: 'Paracétamol 1g (Efferalgan/Doliprane)', category: 'Antidouleur', inStock: true, priceCFA: 1200 },
      { id: 'm2', name: 'Coartem / Artefan (Paludisme)', category: 'Paludisme', inStock: true, priceCFA: 3400 },
      { id: 'm3', name: 'Amoxicilline 1g (Clamoxyl)', category: 'Antibiotique', inStock: true, priceCFA: 2800 },
      { id: 'm4', name: 'Sérum Physiologique unidose', category: 'Pédiatrie', inStock: true, priceCFA: 1500 },
      { id: 'm5', name: 'Insuline Mixtard 30', category: 'Diabète', inStock: true, priceCFA: 6500 }
    ]
  },
  {
    id: 'pharma-cocody-saint-jean',
    name: 'Pharmacie Saint Jean',
    city: 'Abidjan',
    commune: 'Cocody',
    neighborhood: 'Cocody Centre',
    address: 'Boulevard de France, Face Église Saint Jean',
    landmark: 'En face de la paroisse Saint-Jean de Cocody',
    phones: ['+225 27 22 44 24 64', '+225 05 05 40 12 30'],
    whatsapp: '+2250505401230',
    isOnDuty: true,
    isOpen24h: false,
    openingHours: {
      weekday: '07h30 - 21h30',
      weekend: '08h00 - 20h00',
      dutyHours: 'De garde jusqu’à 23h30',
    },
    lat: 5.3421,
    lng: -4.0094,
    services: ['Garde de nuit', 'Tiers-Payant CNAM/MUGEF-CI', 'Matériel Médical & Béquilles', 'Conseils Maman & Bébé'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'SANLAM', 'Gras Savoye'],
    dutyGroup: 'Groupe A',
    dutyPeriodDates: 'De garde ce week-end',
    rating: 4.6,
    reviewsCount: 98,
    availableMedications: [
      { id: 'm1', name: 'Paracétamol 500mg Sirop Enfant', category: 'Pédiatrie', inStock: true, priceCFA: 1100 },
      { id: 'm2', name: 'Lumartem 20/120mg (Antipaludéen)', category: 'Paludisme', inStock: true, priceCFA: 2900 },
      { id: 'm3', name: 'Tensiomètre électronique brassard', category: 'Urgences', inStock: true, priceCFA: 24000 }
    ]
  },
  {
    id: 'pharma-cocody-riviera3',
    name: 'Pharmacie de la Riviera 3',
    city: 'Abidjan',
    commune: 'Cocody',
    neighborhood: 'Riviera 3 (Lycée Français)',
    address: 'Boulevard François Mitterrand, Carrefour Lycée Français',
    landmark: 'À 100m du Lycée Blaise Pascal, côté station Shell',
    phones: ['+225 27 22 47 43 11', '+225 07 48 99 22 11'],
    whatsapp: '+2250748992211',
    isOnDuty: false,
    isOpen24h: false,
    openingHours: {
      weekday: '08h00 - 21h00',
      weekend: '08h30 - 20h00',
      dutyHours: 'Non de garde cette semaine',
    },
    lat: 5.3610,
    lng: -3.9675,
    services: ['Livraison à domicile', 'Parapharmacie de luxe', 'Orthopédie', 'Diététique'],
    insurances: ['CNAM', 'ASCOMA', 'AXA Assurances', 'SUNU', 'Allianz CI'],
    dutyGroup: 'Groupe B',
    rating: 4.7,
    reviewsCount: 112,
    availableMedications: [
      { id: 'm1', name: 'Ibuprofène 400mg (Advil)', category: 'Antidouleur', inStock: true, priceCFA: 1800 },
      { id: 'm2', name: 'Augmentin 1g Adulte', category: 'Antibiotique', inStock: true, priceCFA: 5800 }
    ]
  },
  {
    id: 'pharma-cocody-angre-8e',
    name: 'Pharmacie Belle Épine (Angré)',
    city: 'Abidjan',
    commune: 'Cocody',
    neighborhood: 'Angré 8ème Tranche',
    address: 'Boulevard des Martyrs, Carrefour Belle Épine',
    landmark: 'À côté de la station Petroci, vers Nouveau CHU Angré',
    phones: ['+225 27 22 50 15 15', '+225 01 02 03 44 55'],
    whatsapp: '+2250102034455',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Service non-stop 24/7',
    },
    lat: 5.3885,
    lng: -3.9852,
    services: ['Ouverte 24h/24', 'Garde de nuit permanente', 'Proximité CHU Angré', 'Livraison de nuit'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'AXA Assurances', 'SANLAM', 'SUNU', 'NSIA'],
    dutyGroup: 'Garde Permanente',
    dutyPeriodDates: 'Permanence continue 24h/24',
    rating: 4.9,
    reviewsCount: 230,
    availableMedications: [
      { id: 'm1', name: 'Quinine injectable / Perfusion', category: 'Urgences', inStock: true, priceCFA: 4200 },
      { id: 'm2', name: 'Ventoline aérosol 100µg', category: 'Urgences', inStock: true, priceCFA: 3600 },
      { id: 'm3', name: 'Glucophage 850mg (Metformine)', category: 'Diabète', inStock: true, priceCFA: 2400 }
    ]
  },

  // ================= YOPOUGON =================
  {
    id: 'pharma-yop-siporex',
    name: 'Pharmacie Siporex',
    city: 'Abidjan',
    commune: 'Yopougon',
    neighborhood: 'Carrefour Siporex',
    address: 'Autoroute du Nord, Face Carrefour Siporex',
    landmark: 'Face gare routière Siporex, entrée Yopougon',
    phones: ['+225 27 23 45 10 20', '+225 07 09 88 77 66'],
    whatsapp: '+2250709887766',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Garde 24h/24 sans interruption',
    },
    lat: 5.3378,
    lng: -4.0674,
    services: ['Garde 24h/24', 'Livraison rapide Yopougon', 'Prise de tension gratuite', 'Tiers-Payant MUGEF-CI & CNAM'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'SANLAM', 'Gras Savoye'],
    dutyGroup: 'Groupe A',
    dutyPeriodDates: 'Semaine de garde',
    rating: 4.7,
    reviewsCount: 310,
    availableMedications: [
      { id: 'm1', name: 'Malocur / Arsucam Antipaludique', category: 'Paludisme', inStock: true, priceCFA: 2600 },
      { id: 'm2', name: 'Doliprane 1000mg boîte de 8', category: 'Antidouleur', inStock: true, priceCFA: 1200 },
      { id: 'm3', name: 'Spasfon comprimés', category: 'Antidouleur', inStock: true, priceCFA: 2200 }
    ]
  },
  {
    id: 'pharma-yop-keneya',
    name: 'Pharmacie Keneya (Niangon)',
    city: 'Abidjan',
    commune: 'Yopougon',
    neighborhood: 'Niangon Nord Loko',
    address: 'Boulevard Principal Niangon, Carrefour Keneya',
    landmark: 'Au célèbre carrefour Keneya, non loin du marché',
    phones: ['+225 27 23 46 88 90', '+225 05 55 44 33 22'],
    whatsapp: '+2250555443322',
    isOnDuty: true,
    isOpen24h: false,
    openingHours: {
      weekday: '07h30 - 22h30',
      weekend: '08h00 - 22h00',
      dutyHours: 'Garde nocturne jusqu’à minuit',
    },
    lat: 5.3489,
    lng: -4.0921,
    services: ['Garde de nuit', 'Dépistage Paludisme & Diabète', 'Soins de premier secours'],
    insurances: ['CNAM', 'MUGEF-CI', 'AXA Assurances', 'SUNU'],
    dutyGroup: 'Groupe A',
    dutyPeriodDates: 'Semaine en cours',
    rating: 4.5,
    reviewsCount: 88,
    availableMedications: [
      { id: 'm1', name: 'Ciprofloxacine 500mg', category: 'Antibiotique', inStock: true, priceCFA: 3100 },
      { id: 'm2', name: 'Soluté de réhydratation orale (SRO)', category: 'Pédiatrie', inStock: true, priceCFA: 800 }
    ]
  },
  {
    id: 'pharma-yop-chigata',
    name: 'Pharmacie Chigata (Maroc)',
    city: 'Abidjan',
    commune: 'Yopougon',
    neighborhood: 'Yopougon Maroc',
    address: 'Rue Princesse Maroc, face station Ola Energy',
    landmark: 'Face Ola Energy Maroc, vers Carrefour Chigata',
    phones: ['+225 27 23 48 12 00', '+225 07 77 66 55 44'],
    whatsapp: '+2250777665544',
    isOnDuty: false,
    isOpen24h: false,
    openingHours: {
      weekday: '08h00 - 21h00',
      weekend: '08h00 - 20h30',
      dutyHours: 'Prochaine garde vendredi prochain',
    },
    lat: 5.3524,
    lng: -4.0815,
    services: ['Conseil pharmacologique', 'Livraison Yopougon Maroc / Ananeraie'],
    insurances: ['CNAM', 'MUGEF-CI', 'SANLAM'],
    dutyGroup: 'Groupe C',
    rating: 4.4,
    reviewsCount: 65,
    availableMedications: [
      { id: 'm1', name: 'Smecta sachets', category: 'Pédiatrie', inStock: true, priceCFA: 2400 }
    ]
  },

  // ================= PLATEAU =================
  {
    id: 'pharma-plateau-commerce',
    name: 'Pharmacie du Commerce',
    city: 'Abidjan',
    commune: 'Plateau',
    neighborhood: 'Centre des Affaires',
    address: 'Avenue Noguès, Immeuble Trade Center',
    landmark: 'À côté de la BICICI Siège et de l’Immeuble Alpha 2000',
    phones: ['+225 27 20 21 20 18', '+225 07 08 09 10 11'],
    whatsapp: '+2250708091011',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Ouverte 24h/24 7j/7',
    },
    lat: 5.3218,
    lng: -4.0195,
    services: ['Garde 24h/24 permanente', 'Toutes assurances acceptées', 'Vaccins internationaux', 'Matériel de réanimation'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'AXA Assurances', 'SANLAM', 'SUNU', 'NSIA', 'Allianz CI'],
    dutyGroup: 'Garde Permanente',
    dutyPeriodDates: 'Garde 24/7 continue',
    rating: 4.9,
    reviewsCount: 420,
    availableMedications: [
      { id: 'm1', name: 'Sérum Antivenimeux polyvalent', category: 'Urgences', inStock: true, priceCFA: 38000 },
      { id: 'm2', name: 'Lovenox 4000 UI injectables', category: 'Cardiologie', inStock: true, priceCFA: 18500 },
      { id: 'm3', name: 'Amlodipine 5mg (Hypertension)', category: 'Cardiologie', inStock: true, priceCFA: 3500 },
      { id: 'm4', name: 'Innohep 10 000 UI', category: 'Cardiologie', inStock: true, priceCFA: 22000 }
    ]
  },

  // ================= MARCORY =================
  {
    id: 'pharma-marcory-massarana',
    name: 'Pharmacie Massarana (Zone 4)',
    city: 'Abidjan',
    commune: 'Marcory',
    neighborhood: 'Zone 4C',
    address: 'Boulevard de Marseille, km 4',
    landmark: 'Face Galerie Prima Center, angle rue Paul Langevin',
    phones: ['+225 27 21 35 25 25', '+225 07 49 50 51 52'],
    whatsapp: '+2250749505152',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Garde 24h/24 Zone 4 & Biétry',
    },
    lat: 5.2891,
    lng: -3.9876,
    services: ['Service d’urgence 24h/24', 'Livraison Zone 4/Biétry/Marcory', 'Médicaments spécialisés', 'Orthopédie'],
    insurances: ['CNAM', 'ASCOMA', 'AXA Assurances', 'SANLAM', 'SUNU', 'NSIA'],
    dutyGroup: 'Groupe A',
    dutyPeriodDates: 'Semaine de garde',
    rating: 4.8,
    reviewsCount: 185,
    availableMedications: [
      { id: 'm1', name: 'Gonal-F / Médicaments de fertilité', category: 'Urgences', inStock: true, priceCFA: 45000 },
      { id: 'm2', name: 'Kardegic 75mg sachets', category: 'Cardiologie', inStock: true, priceCFA: 2600 },
      { id: 'm3', name: 'Salbutamol / Bricanyl nébulisation', category: 'Urgences', inStock: true, priceCFA: 4800 }
    ]
  },

  // ================= TREICHVILLE =================
  {
    id: 'pharma-treich-solferino',
    name: 'Pharmacie Solférino',
    city: 'Abidjan',
    commune: 'Treichville',
    neighborhood: 'Avenue 8 / Rue 12',
    address: 'Angle Avenue 8 et Rue 12, Face Grand Marché',
    landmark: 'À 200m du CHU de Treichville et du Palais des Sports',
    phones: ['+225 27 21 24 05 06', '+225 05 04 03 02 01'],
    whatsapp: '+2250504030201',
    isOnDuty: true,
    isOpen24h: false,
    openingHours: {
      weekday: '07h30 - 22h00',
      weekend: '08h00 - 21h30',
      dutyHours: 'Garde jusqu’à 23h00',
    },
    lat: 5.3012,
    lng: -4.0089,
    services: ['Garde de nuit', 'Prise en charge CHU Treichville', 'Matériel perfusion & pansements'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'SANLAM'],
    dutyGroup: 'Groupe A',
    rating: 4.6,
    reviewsCount: 160,
    availableMedications: [
      { id: 'm1', name: 'Sérum Glucosé 5% & 10%', category: 'Urgences', inStock: true, priceCFA: 1900 },
      { id: 'm2', name: 'Betadine Dermique jaune 125ml', category: 'Urgences', inStock: true, priceCFA: 2200 }
    ]
  },

  // ================= KOUMASSI =================
  {
    id: 'pharma-koumassi-remblais',
    name: 'Pharmacie du Remblais',
    city: 'Abidjan',
    commune: 'Koumassi',
    neighborhood: 'Koumassi Remblais',
    address: 'Boulevard du Gabon, Carrefour du Remblais',
    landmark: 'Carrefour du Remblais, face complexe sportif',
    phones: ['+225 27 21 36 10 10', '+225 07 11 22 33 44'],
    whatsapp: '+2250711223344',
    isOnDuty: true,
    isOpen24h: false,
    openingHours: {
      weekday: '08h00 - 22h00',
      weekend: '08h00 - 21h00',
      dutyHours: 'Garde jusqu’à minuit',
    },
    lat: 5.3056,
    lng: -3.9512,
    services: ['Garde de nuit', 'Livraison Koumassi', 'Dépistage HTA & Diabète'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA'],
    dutyGroup: 'Groupe A',
    rating: 4.5,
    reviewsCount: 95,
    availableMedications: [
      { id: 'm1', name: 'Efferalgan Pédiatrique', category: 'Pédiatrie', inStock: true, priceCFA: 1400 },
      { id: 'm2', name: 'Amoxicilline Sirop Bébé', category: 'Pédiatrie', inStock: true, priceCFA: 1800 }
    ]
  },

  // ================= ABOBO =================
  {
    id: 'pharma-abobo-rondpoint',
    name: 'Pharmacie du Rond-Point (Abobo)',
    city: 'Abidjan',
    commune: 'Abobo',
    neighborhood: 'Abobo Mairie / Rond-Point',
    address: 'Grand Rond-Point de la Mairie d’Abobo',
    landmark: 'Au niveau du rond-point central, face station TotalEnergies',
    phones: ['+225 27 24 39 12 12', '+225 07 88 99 00 11'],
    whatsapp: '+2250788990011',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Ouvert 24h/24 non stop',
    },
    lat: 5.4190,
    lng: -4.0180,
    services: ['Garde 24h/24', 'Urgences pédiatriques & maternité', 'Tiers-payant CNAM & MUGEF-CI'],
    insurances: ['CNAM', 'MUGEF-CI', 'SANLAM', 'SUNU'],
    dutyGroup: 'Groupe A',
    rating: 4.7,
    reviewsCount: 280,
    availableMedications: [
      { id: 'm1', name: 'Artesunate injectable 60mg', category: 'Paludisme', inStock: true, priceCFA: 4500 },
      { id: 'm2', name: 'Oxytocine ampoules', category: 'Urgences', inStock: true, priceCFA: 3200 }
    ]
  },

  // ================= PORT-BOUET =================
  {
    id: 'pharma-portbouet-aeroport',
    name: 'Pharmacie de l’Aéroport',
    city: 'Abidjan',
    commune: 'Port-Bouët',
    neighborhood: 'Aéroport FHB / Vridi',
    address: 'Boulevard de l’Aéroport Félix Houphouët-Boigny',
    landmark: 'À 3 minutes du Terminal 1 de l’Aéroport d’Abidjan',
    phones: ['+225 27 21 27 75 00', '+225 07 55 66 77 88'],
    whatsapp: '+2250755667788',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Service continu jour et nuit 24/7',
    },
    lat: 5.2589,
    lng: -3.9312,
    services: ['Garde 24h/24', 'Trousses de secours voyageurs', 'Vaccins Fièvre Jaune / Hépatites', 'Tests rapides Covid/Palu'],
    insurances: ['CNAM', 'ASCOMA', 'AXA Assurances', 'SUNU', 'Allianz CI'],
    dutyGroup: 'Garde Permanente',
    rating: 4.9,
    reviewsCount: 215,
    availableMedications: [
      { id: 'm1', name: 'Malarone / Atovaquone Proguanil', category: 'Paludisme', inStock: true, priceCFA: 14500 },
      { id: 'm2', name: 'Anti-moustique Tropic spray 100ml', category: 'Urgences', inStock: true, priceCFA: 4500 }
    ]
  },

  // ================= YAMOUSSOUKRO =================
  {
    id: 'pharma-yakro-basilique',
    name: 'Pharmacie de la Basilique',
    city: 'Yamoussoukro',
    commune: 'Centre-Ville',
    neighborhood: 'Quartier Habitat / 200 Logements',
    address: 'Boulevard Mamie Adjoua, face Hôtel Président',
    landmark: 'Sur l’axe principal vers la Basilique Notre-Dame',
    phones: ['+225 27 30 64 01 02', '+225 07 09 11 22 33'],
    whatsapp: '+2250709112233',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Garde 24h/24 Yamoussoukro',
    },
    lat: 6.8190,
    lng: -5.2750,
    services: ['Garde 24h/24 Yamoussoukro', 'Livraison INP-HB et CHR', 'Tiers-Payant MUGEF-CI'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'SANLAM', 'AXA Assurances'],
    dutyGroup: 'Groupe A',
    rating: 4.8,
    reviewsCount: 190,
    availableMedications: [
      { id: 'm1', name: 'Coartem 80/480mg Adulte', category: 'Paludisme', inStock: true, priceCFA: 3400 },
      { id: 'm2', name: 'Ceftriaxone 1g injectable', category: 'Antibiotique', inStock: true, priceCFA: 4100 }
    ]
  },
  {
    id: 'pharma-yakro-lacs',
    name: 'Pharmacie des Lacs',
    city: 'Yamoussoukro',
    commune: 'Quartier Lacs',
    neighborhood: 'Près du Palais Présidentiel',
    address: 'Avenue Félix Houphouët-Boigny',
    landmark: 'À côté du Lac aux Caïmans',
    phones: ['+225 27 30 64 30 40', '+225 05 55 66 77 88'],
    whatsapp: '+2250555667788',
    isOnDuty: false,
    isOpen24h: false,
    openingHours: {
      weekday: '08h00 - 20h30',
      weekend: '08h30 - 19h30',
      dutyHours: 'Non de garde ce week-end',
    },
    lat: 6.8120,
    lng: -5.2810,
    services: ['Dépistage HTA', 'Parapharmacie'],
    insurances: ['CNAM', 'MUGEF-CI', 'SUNU'],
    dutyGroup: 'Groupe B',
    rating: 4.5,
    reviewsCount: 75,
    availableMedications: [
      { id: 'm1', name: 'Paracétamol 1g comprimés', category: 'Antidouleur', inStock: true, priceCFA: 1200 }
    ]
  },

  // ================= BOUAKÉ =================
  {
    id: 'pharma-bouake-paix',
    name: 'Pharmacie de la Paix',
    city: 'Bouaké',
    commune: 'Commerce',
    neighborhood: 'Bouaké Centre',
    address: 'Rue du Commerce, face Grand Marché de Bouaké',
    landmark: 'Face BCEAO et Grand Marché de Bouaké',
    phones: ['+225 27 31 63 20 25', '+225 07 48 48 48 48'],
    whatsapp: '+2250748484848',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Garde permanente 24h/24 Bouaké',
    },
    lat: 7.6890,
    lng: -5.0310,
    services: ['Garde 24h/24', 'Liaison directe CHU Bouaké', 'Matériel orthopédique et perfusions'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'SANLAM', 'NSIA'],
    dutyGroup: 'Groupe A',
    rating: 4.8,
    reviewsCount: 220,
    availableMedications: [
      { id: 'm1', name: 'Sérum Antitétanique injectable', category: 'Urgences', inStock: true, priceCFA: 5500 },
      { id: 'm2', name: 'Artemether injectable 80mg', category: 'Paludisme', inStock: true, priceCFA: 3800 }
    ]
  },

  // ================= SAN-PÉDRO =================
  {
    id: 'pharma-sanpedro-port',
    name: 'Pharmacie du Port (San-Pédro)',
    city: 'San-Pédro',
    commune: 'Cité',
    neighborhood: 'Zone Portuaire & Balnéaire',
    address: 'Boulevard du Port, Face Direction du Port Autonome',
    landmark: 'Face Port Autonome de San-Pédro, à 500m de la plage',
    phones: ['+225 27 34 71 15 16', '+225 07 07 12 34 56'],
    whatsapp: '+2250707123456',
    isOnDuty: true,
    isOpen24h: true,
    openingHours: {
      weekday: '24h/24',
      weekend: '24h/24',
      dutyHours: 'Garde 24h/24 San-Pédro',
    },
    lat: 4.7489,
    lng: -6.6380,
    services: ['Garde 24h/24', 'Liaison CHR San-Pédro', 'Tiers-Payant Assurances Maritime & CNAM'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA', 'AXA Assurances', 'SANLAM'],
    dutyGroup: 'Groupe A',
    rating: 4.7,
    reviewsCount: 145,
    availableMedications: [
      { id: 'm1', name: 'Sérum Antivenimeux VIP', category: 'Urgences', inStock: true, priceCFA: 39000 },
      { id: 'm2', name: 'Doxycycline 100mg', category: 'Antibiotique', inStock: true, priceCFA: 2100 }
    ]
  },

  // ================= KORHOGO =================
  {
    id: 'pharma-korhogo-poro',
    name: 'Pharmacie du Poro',
    city: 'Korhogo',
    commune: 'Centre',
    neighborhood: 'Quartier Résidentiel / Commerce',
    address: 'Avenue de la Mairie, face Préfecture',
    landmark: 'À 100m du Grand Marché et de la Cathédrale',
    phones: ['+225 27 36 86 00 22', '+225 07 49 11 22 33'],
    whatsapp: '+2250749112233',
    isOnDuty: true,
    isOpen24h: false,
    openingHours: {
      weekday: '07h30 - 22h00',
      weekend: '08h00 - 21h30',
      dutyHours: 'Garde jusqu’à 23h',
    },
    lat: 9.4580,
    lng: -5.6290,
    services: ['Garde de nuit', 'Tiers-Payant CNAM & MUGEF-CI', 'Vaccins méningite & fièvre jaune'],
    insurances: ['CNAM', 'MUGEF-CI', 'ASCOMA'],
    dutyGroup: 'Groupe A',
    rating: 4.6,
    reviewsCount: 110,
    availableMedications: [
      { id: 'm1', name: 'Antipaludéen pédiatrique suspension', category: 'Paludisme', inStock: true, priceCFA: 2400 },
      { id: 'm2', name: 'Metrodinazole 500mg (Flagyl)', category: 'Antibiotique', inStock: true, priceCFA: 1900 }
    ]
  },

  // ================= GRAND-BASSAM =================
  {
    id: 'pharma-bassam-moossou',
    name: 'Pharmacie de Moossou',
    city: 'Grand-Bassam',
    commune: 'Moossou',
    neighborhood: 'Entrée Grand-Bassam',
    address: 'Route Internationale d’Aboisso, Carrefour Moossou',
    landmark: 'À côté de l’Hôtel de France et du pont de Bassam',
    phones: ['+225 27 21 30 11 12', '+225 07 08 44 33 22'],
    whatsapp: '+2250708443322',
    isOnDuty: true,
    isOpen24h: false,
    openingHours: {
      weekday: '08h00 - 21h30',
      weekend: '08h00 - 22h00',
      dutyHours: 'Garde ce week-end',
    },
    lat: 5.2089,
    lng: -3.7380,
    services: ['Garde week-end', 'Secours plage & noyade', 'Trousse de réanimation'],
    insurances: ['CNAM', 'MUGEF-CI', 'AXA Assurances', 'ASCOMA'],
    dutyGroup: 'Groupe A',
    rating: 4.6,
    reviewsCount: 88,
    availableMedications: [
      { id: 'm1', name: 'Biafine émulsion brûlures', category: 'Urgences', inStock: true, priceCFA: 3400 },
      { id: 'm2', name: 'Pansements stériles étanches boîte', category: 'Urgences', inStock: true, priceCFA: 2100 }
    ]
  }
];
