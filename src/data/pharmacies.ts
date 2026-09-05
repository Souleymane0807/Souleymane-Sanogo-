import { Pharmacy } from '../types';

export const IVORY_COAST_PHARMACIES: Pharmacy[] = [
  {
    "id": "pharma-cocody-ste-cecile",
    "name": "Pharmacie Sainte Cécile",
    "city": "Abidjan",
    "commune": "Cocody",
    "neighborhood": "Les Vallons (2 Plateaux)",
    "address": "Rue des Jardins, Immeuble Sainte Cécile",
    "landmark": "Près du Carrefour Sainte Cécile, en face de Paul",
    "phones": [
      "+225 27 22 41 33 22",
      "+225 07 07 89 20 10"
    ],
    "whatsapp": "+2250707892010",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 5.3582,
    "lng": -4.0041,
    "services": [
      "Garde de nuit 24h/24",
      "Livraison express",
      "Dépistage Diabète & Tension",
      "Vaccination",
      "Tiers-Payant"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "AXA Assurances",
      "SANLAM",
      "SUNU",
      "NSIA"
    ],
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de garde en cours",
    "rating": 4.8,
    "reviewsCount": 142,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol 1g (Efferalgan/Doliprane)",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem / Artefan (Paludisme)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m3",
        "name": "Amoxicilline 1g (Clamoxyl)",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2800
      },
      {
        "id": "m4",
        "name": "Sérum Physiologique unidose",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      },
      {
        "id": "m5",
        "name": "Insuline Mixtard 30",
        "category": "Diabète",
        "inStock": true,
        "priceCFA": 6500
      }
    ],
    "region": "Abidjan"
  },
  {
    "id": "pharma-cocody-saint-jean",
    "name": "Pharmacie Saint Jean",
    "city": "Abidjan",
    "commune": "Cocody",
    "neighborhood": "Cocody Centre",
    "address": "Boulevard de France, Face Église Saint Jean",
    "landmark": "En face de la paroisse Saint-Jean de Cocody",
    "phones": [
      "+225 27 22 44 24 64",
      "+225 05 05 40 12 30"
    ],
    "whatsapp": "+2250505401230",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 21h30",
      "weekend": "08h00 - 20h00",
      "dutyHours": "De garde jusqu’à 23h30"
    },
    "lat": 5.3421,
    "lng": -4.0094,
    "services": [
      "Garde de nuit",
      "Tiers-Payant CNAM/MUGEF-CI",
      "Matériel Médical & Béquilles",
      "Conseils Maman & Bébé"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM",
      "Gras Savoye"
    ],
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "De garde ce week-end",
    "rating": 4.6,
    "reviewsCount": 98,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol 500mg Sirop Enfant",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1100
      },
      {
        "id": "m2",
        "name": "Lumartem 20/120mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      },
      {
        "id": "m3",
        "name": "Tensiomètre électronique brassard",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 24000
      }
    ],
    "region": "Abidjan"
  },
  {
    "id": "pharma-cocody-riviera3",
    "name": "Pharmacie de la Riviera 3",
    "city": "Abidjan",
    "commune": "Cocody",
    "neighborhood": "Riviera 3 (Lycée Français)",
    "address": "Boulevard François Mitterrand, Carrefour Lycée Français",
    "landmark": "À 100m du Lycée Blaise Pascal, côté station Shell",
    "phones": [
      "+225 27 22 47 43 11",
      "+225 07 48 99 22 11"
    ],
    "whatsapp": "+2250748992211",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 21h00",
      "weekend": "08h30 - 20h00",
      "dutyHours": "Non de garde cette semaine"
    },
    "lat": 5.361,
    "lng": -3.9675,
    "services": [
      "Livraison à domicile",
      "Parapharmacie de luxe",
      "Orthopédie",
      "Diététique"
    ],
    "insurances": [
      "CNAM",
      "ASCOMA",
      "AXA Assurances",
      "SUNU",
      "Allianz CI"
    ],
    "dutyGroup": "Groupe B",
    "rating": 4.7,
    "reviewsCount": 112,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Ibuprofène 400mg (Advil)",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1800
      },
      {
        "id": "m2",
        "name": "Augmentin 1g Adulte",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 5800
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-cocody-angre-8e",
    "name": "Pharmacie Belle Épine (Angré)",
    "city": "Abidjan",
    "commune": "Cocody",
    "neighborhood": "Angré 8ème Tranche",
    "address": "Boulevard des Martyrs, Carrefour Belle Épine",
    "landmark": "À côté de la station Petroci, vers Nouveau CHU Angré",
    "phones": [
      "+225 27 22 50 15 15",
      "+225 01 02 03 44 55"
    ],
    "whatsapp": "+2250102034455",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Service non-stop 24/7"
    },
    "lat": 5.3885,
    "lng": -3.9852,
    "services": [
      "Ouverte 24h/24",
      "Garde de nuit permanente",
      "Proximité CHU Angré",
      "Livraison de nuit"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "AXA Assurances",
      "SANLAM",
      "SUNU",
      "NSIA"
    ],
    "dutyGroup": "Garde Permanente",
    "dutyPeriodDates": "Permanence continue 24h/24",
    "rating": 4.9,
    "reviewsCount": 230,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Quinine injectable / Perfusion",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 4200
      },
      {
        "id": "m2",
        "name": "Ventoline aérosol 100µg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 3600
      },
      {
        "id": "m3",
        "name": "Glucophage 850mg (Metformine)",
        "category": "Diabète",
        "inStock": true,
        "priceCFA": 2400
      }
    ],
    "region": "Abidjan"
  },
  {
    "id": "pharma-yop-siporex",
    "name": "Pharmacie Siporex",
    "city": "Abidjan",
    "commune": "Yopougon",
    "neighborhood": "Carrefour Siporex",
    "address": "Autoroute du Nord, Face Carrefour Siporex",
    "landmark": "Face gare routière Siporex, entrée Yopougon",
    "phones": [
      "+225 27 23 45 10 20",
      "+225 07 09 88 77 66"
    ],
    "whatsapp": "+2250709887766",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 5.3378,
    "lng": -4.0674,
    "services": [
      "Garde 24h/24",
      "Livraison rapide Yopougon",
      "Prise de tension gratuite",
      "Tiers-Payant MUGEF-CI & CNAM"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM",
      "Gras Savoye"
    ],
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de garde",
    "rating": 4.7,
    "reviewsCount": 310,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Malocur / Arsucam Antipaludique",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2600
      },
      {
        "id": "m2",
        "name": "Doliprane 1000mg boîte de 8",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m3",
        "name": "Spasfon comprimés",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 2200
      }
    ],
    "region": "Abidjan"
  },
  {
    "id": "pharma-yop-keneya",
    "name": "Pharmacie Keneya (Niangon)",
    "city": "Abidjan",
    "commune": "Yopougon",
    "neighborhood": "Niangon Nord Loko",
    "address": "Boulevard Principal Niangon, Carrefour Keneya",
    "landmark": "Au célèbre carrefour Keneya, non loin du marché",
    "phones": [
      "+225 27 23 46 88 90",
      "+225 05 55 44 33 22"
    ],
    "whatsapp": "+2250555443322",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 22h30",
      "weekend": "08h00 - 22h00",
      "dutyHours": "Garde nocturne jusqu’à minuit"
    },
    "lat": 5.3489,
    "lng": -4.0921,
    "services": [
      "Garde de nuit",
      "Dépistage Paludisme & Diabète",
      "Soins de premier secours"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "AXA Assurances",
      "SUNU"
    ],
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine en cours",
    "rating": 4.5,
    "reviewsCount": 88,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Ciprofloxacine 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 3100
      },
      {
        "id": "m2",
        "name": "Soluté de réhydratation orale (SRO)",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 800
      }
    ],
    "region": "Abidjan"
  },
  {
    "id": "pharma-yop-chigata",
    "name": "Pharmacie Chigata (Maroc)",
    "city": "Abidjan",
    "commune": "Yopougon",
    "neighborhood": "Yopougon Maroc",
    "address": "Rue Princesse Maroc, face station Ola Energy",
    "landmark": "Face Ola Energy Maroc, vers Carrefour Chigata",
    "phones": [
      "+225 27 23 48 12 00",
      "+225 07 77 66 55 44"
    ],
    "whatsapp": "+2250777665544",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 21h00",
      "weekend": "08h00 - 20h30",
      "dutyHours": "Prochaine garde vendredi prochain"
    },
    "lat": 5.3524,
    "lng": -4.0815,
    "services": [
      "Conseil pharmacologique",
      "Livraison Yopougon Maroc / Ananeraie"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "SANLAM"
    ],
    "dutyGroup": "Groupe C",
    "rating": 4.4,
    "reviewsCount": 65,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Smecta sachets",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 2400
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-plateau-commerce",
    "name": "Pharmacie du Commerce",
    "city": "Abidjan",
    "commune": "Plateau",
    "neighborhood": "Centre des Affaires",
    "address": "Avenue Noguès, Immeuble Trade Center",
    "landmark": "À côté de la BICICI Siège et de l’Immeuble Alpha 2000",
    "phones": [
      "+225 27 20 21 20 18",
      "+225 07 08 09 10 11"
    ],
    "whatsapp": "+2250708091011",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Ouverte 24h/24 7j/7"
    },
    "lat": 5.3218,
    "lng": -4.0195,
    "services": [
      "Garde 24h/24 permanente",
      "Toutes assurances acceptées",
      "Vaccins internationaux",
      "Matériel de réanimation"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "AXA Assurances",
      "SANLAM",
      "SUNU",
      "NSIA",
      "Allianz CI"
    ],
    "dutyGroup": "Garde Permanente",
    "dutyPeriodDates": "Garde 24/7 continue",
    "rating": 4.9,
    "reviewsCount": 420,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Sérum Antivenimeux polyvalent",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 38000
      },
      {
        "id": "m2",
        "name": "Lovenox 4000 UI injectables",
        "category": "Cardiologie",
        "inStock": true,
        "priceCFA": 18500
      },
      {
        "id": "m3",
        "name": "Amlodipine 5mg (Hypertension)",
        "category": "Cardiologie",
        "inStock": true,
        "priceCFA": 3500
      },
      {
        "id": "m4",
        "name": "Innohep 10 000 UI",
        "category": "Cardiologie",
        "inStock": true,
        "priceCFA": 22000
      }
    ],
    "region": "Abidjan"
  },
  {
    "id": "pharma-marcory-massarana",
    "name": "Pharmacie Massarana (Zone 4)",
    "city": "Abidjan",
    "commune": "Marcory",
    "neighborhood": "Zone 4C",
    "address": "Boulevard de Marseille, km 4",
    "landmark": "Face Galerie Prima Center, angle rue Paul Langevin",
    "phones": [
      "+225 27 21 35 25 25",
      "+225 07 49 50 51 52"
    ],
    "whatsapp": "+2250749505152",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Garde 24h/24 Zone 4 & Biétry"
    },
    "lat": 5.2891,
    "lng": -3.9876,
    "services": [
      "Service d’urgence 24h/24",
      "Livraison Zone 4/Biétry/Marcory",
      "Médicaments spécialisés",
      "Orthopédie"
    ],
    "insurances": [
      "CNAM",
      "ASCOMA",
      "AXA Assurances",
      "SANLAM",
      "SUNU",
      "NSIA"
    ],
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de garde",
    "rating": 4.8,
    "reviewsCount": 185,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Gonal-F / Médicaments de fertilité",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 45000
      },
      {
        "id": "m2",
        "name": "Kardegic 75mg sachets",
        "category": "Cardiologie",
        "inStock": true,
        "priceCFA": 2600
      },
      {
        "id": "m3",
        "name": "Salbutamol / Bricanyl nébulisation",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 4800
      }
    ],
    "region": "Abidjan"
  },
  {
    "id": "pharma-treich-solferino",
    "name": "Pharmacie Solférino",
    "city": "Abidjan",
    "commune": "Treichville",
    "neighborhood": "Avenue 8 / Rue 12",
    "address": "Angle Avenue 8 et Rue 12, Face Grand Marché",
    "landmark": "À 200m du CHU de Treichville et du Palais des Sports",
    "phones": [
      "+225 27 21 24 05 06",
      "+225 05 04 03 02 01"
    ],
    "whatsapp": "+2250504030201",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde jusqu’à 23h00"
    },
    "lat": 5.3012,
    "lng": -4.0089,
    "services": [
      "Garde de nuit",
      "Prise en charge CHU Treichville",
      "Matériel perfusion & pansements"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 160,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Sérum Glucosé 5% & 10%",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 1900
      },
      {
        "id": "m2",
        "name": "Betadine Dermique jaune 125ml",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-koumassi-remblais",
    "name": "Pharmacie du Remblais",
    "city": "Abidjan",
    "commune": "Koumassi",
    "neighborhood": "Koumassi Remblais",
    "address": "Boulevard du Gabon, Carrefour du Remblais",
    "landmark": "Carrefour du Remblais, face complexe sportif",
    "phones": [
      "+225 27 21 36 10 10",
      "+225 07 11 22 33 44"
    ],
    "whatsapp": "+2250711223344",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 22h00",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde jusqu’à minuit"
    },
    "lat": 5.3056,
    "lng": -3.9512,
    "services": [
      "Garde de nuit",
      "Livraison Koumassi",
      "Dépistage HTA & Diabète"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.5,
    "reviewsCount": 95,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Efferalgan Pédiatrique",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1400
      },
      {
        "id": "m2",
        "name": "Amoxicilline Sirop Bébé",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1800
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-abobo-rondpoint",
    "name": "Pharmacie du Rond-Point (Abobo)",
    "city": "Abidjan",
    "commune": "Abobo",
    "neighborhood": "Abobo Mairie / Rond-Point",
    "address": "Grand Rond-Point de la Mairie d’Abobo",
    "landmark": "Au niveau du rond-point central, face station TotalEnergies",
    "phones": [
      "+225 27 24 39 12 12",
      "+225 07 88 99 00 11"
    ],
    "whatsapp": "+2250788990011",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Ouvert 24h/24 non stop"
    },
    "lat": 5.419,
    "lng": -4.018,
    "services": [
      "Garde 24h/24",
      "Urgences pédiatriques & maternité",
      "Tiers-payant CNAM & MUGEF-CI"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "SANLAM",
      "SUNU"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 280,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Artesunate injectable 60mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 4500
      },
      {
        "id": "m2",
        "name": "Oxytocine ampoules",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 3200
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-portbouet-aeroport",
    "name": "Pharmacie de l’Aéroport",
    "city": "Abidjan",
    "commune": "Port-Bouët",
    "neighborhood": "Aéroport FHB / Vridi",
    "address": "Boulevard de l’Aéroport Félix Houphouët-Boigny",
    "landmark": "À 3 minutes du Terminal 1 de l’Aéroport d’Abidjan",
    "phones": [
      "+225 27 21 27 75 00",
      "+225 07 55 66 77 88"
    ],
    "whatsapp": "+2250755667788",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Service continu jour et nuit 24/7"
    },
    "lat": 5.2589,
    "lng": -3.9312,
    "services": [
      "Garde 24h/24",
      "Trousses de secours voyageurs",
      "Vaccins Fièvre Jaune / Hépatites",
      "Tests rapides Covid/Palu"
    ],
    "insurances": [
      "CNAM",
      "ASCOMA",
      "AXA Assurances",
      "SUNU",
      "Allianz CI"
    ],
    "dutyGroup": "Garde Permanente",
    "rating": 4.9,
    "reviewsCount": 215,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Malarone / Atovaquone Proguanil",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 14500
      },
      {
        "id": "m2",
        "name": "Anti-moustique Tropic spray 100ml",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 4500
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-yakro-basilique",
    "name": "Pharmacie de la Basilique",
    "city": "Yamoussoukro",
    "commune": "Centre-Ville",
    "neighborhood": "Quartier Habitat / 200 Logements",
    "address": "Boulevard Mamie Adjoua, face Hôtel Président",
    "landmark": "Sur l’axe principal vers la Basilique Notre-Dame",
    "phones": [
      "+225 27 30 64 01 02",
      "+225 07 09 11 22 33"
    ],
    "whatsapp": "+2250709112233",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Garde 24h/24 Yamoussoukro"
    },
    "lat": 6.819,
    "lng": -5.275,
    "services": [
      "Garde 24h/24 Yamoussoukro",
      "Livraison INP-HB et CHR",
      "Tiers-Payant MUGEF-CI"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM",
      "AXA Assurances"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 190,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Coartem 80/480mg Adulte",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Ceftriaxone 1g injectable",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 4100
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-yakro-lacs",
    "name": "Pharmacie des Lacs",
    "city": "Yamoussoukro",
    "commune": "Quartier Lacs",
    "neighborhood": "Près du Palais Présidentiel",
    "address": "Avenue Félix Houphouët-Boigny",
    "landmark": "À côté du Lac aux Caïmans",
    "phones": [
      "+225 27 30 64 30 40",
      "+225 05 55 66 77 88"
    ],
    "whatsapp": "+2250555667788",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 20h30",
      "weekend": "08h30 - 19h30",
      "dutyHours": "Non de garde ce week-end"
    },
    "lat": 6.812,
    "lng": -5.281,
    "services": [
      "Dépistage HTA",
      "Parapharmacie"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "SUNU"
    ],
    "dutyGroup": "Groupe B",
    "rating": 4.5,
    "reviewsCount": 75,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol 1g comprimés",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-bouake-paix",
    "name": "Pharmacie de la Paix",
    "city": "Bouaké",
    "commune": "Commerce",
    "neighborhood": "Bouaké Centre",
    "address": "Rue du Commerce, face Grand Marché de Bouaké",
    "landmark": "Face BCEAO et Grand Marché de Bouaké",
    "phones": [
      "+225 27 31 63 20 25",
      "+225 07 48 48 48 48"
    ],
    "whatsapp": "+2250748484848",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Garde permanente 24h/24 Bouaké"
    },
    "lat": 7.689,
    "lng": -5.031,
    "services": [
      "Garde 24h/24",
      "Liaison directe CHU Bouaké",
      "Matériel orthopédique et perfusions"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM",
      "NSIA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 220,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Sérum Antitétanique injectable",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 5500
      },
      {
        "id": "m2",
        "name": "Artemether injectable 80mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-sanpedro-port",
    "name": "Pharmacie du Port (San-Pédro)",
    "city": "San-Pédro",
    "commune": "Cité",
    "neighborhood": "Zone Portuaire & Balnéaire",
    "address": "Boulevard du Port, Face Direction du Port Autonome",
    "landmark": "Face Port Autonome de San-Pédro, à 500m de la plage",
    "phones": [
      "+225 27 34 71 15 16",
      "+225 07 07 12 34 56"
    ],
    "whatsapp": "+2250707123456",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "24h/24",
      "weekend": "24h/24",
      "dutyHours": "Garde 24h/24 San-Pédro"
    },
    "lat": 4.7489,
    "lng": -6.638,
    "services": [
      "Garde 24h/24",
      "Liaison CHR San-Pédro",
      "Tiers-Payant Assurances Maritime & CNAM"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "AXA Assurances",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 145,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Sérum Antivenimeux VIP",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 39000
      },
      {
        "id": "m2",
        "name": "Doxycycline 100mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2100
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-korhogo-poro",
    "name": "Pharmacie du Poro",
    "city": "Korhogo",
    "commune": "Centre",
    "neighborhood": "Quartier Résidentiel / Commerce",
    "address": "Avenue de la Mairie, face Préfecture",
    "landmark": "À 100m du Grand Marché et de la Cathédrale",
    "phones": [
      "+225 27 36 86 00 22",
      "+225 07 49 11 22 33"
    ],
    "whatsapp": "+2250749112233",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde jusqu’à 23h"
    },
    "lat": 9.458,
    "lng": -5.629,
    "services": [
      "Garde de nuit",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Vaccins méningite & fièvre jaune"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 110,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Antipaludéen pédiatrique suspension",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2400
      },
      {
        "id": "m2",
        "name": "Metrodinazole 500mg (Flagyl)",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 1900
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-bassam-moossou",
    "name": "Pharmacie de Moossou",
    "city": "Grand-Bassam",
    "commune": "Moossou",
    "neighborhood": "Entrée Grand-Bassam",
    "address": "Route Internationale d’Aboisso, Carrefour Moossou",
    "landmark": "À côté de l’Hôtel de France et du pont de Bassam",
    "phones": [
      "+225 27 21 30 11 12",
      "+225 07 08 44 33 22"
    ],
    "whatsapp": "+2250708443322",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 21h30",
      "weekend": "08h00 - 22h00",
      "dutyHours": "Garde ce week-end"
    },
    "lat": 5.2089,
    "lng": -3.738,
    "services": [
      "Garde week-end",
      "Secours plage & noyade",
      "Trousse de réanimation"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "AXA Assurances",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 88,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Biafine émulsion brûlures",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Pansements stériles étanches boîte",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2100
      }
    ],
    "region": "Abidjan",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-agneby-agboville-centrale",
    "name": "Pharmacie Centrale d’Agboville",
    "region": "Agnéby-Tiassa",
    "city": "Agboville",
    "commune": "Agboville",
    "neighborhood": "Commerce Agboville",
    "address": "Boulevard de la Gare, Face Préfecture",
    "landmark": "En face de la Préfecture et de la Cathédrale St-Jean-Marie Vianney",
    "phones": [
      "+225 27 23 54 70 12",
      "+225 07 08 22 33 44"
    ],
    "whatsapp": "+2250708223344",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 5.928,
    "lng": -4.218,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Tests Paludisme Rapides"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 78,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Artefan / Coartem",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-bafing-touba",
    "name": "Pharmacie du Bafing",
    "region": "Bafing",
    "city": "Touba",
    "commune": "Touba",
    "neighborhood": "Centre Administratif",
    "address": "Voie Principale Touba - Ouaninou",
    "landmark": "À côté de la Sous-Préfecture de Touba et de la Mairie",
    "phones": [
      "+225 27 33 70 01 10",
      "+225 05 04 22 11 99"
    ],
    "whatsapp": "+2250504221199",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 21h30",
      "weekend": "08h00 - 20h30",
      "dutyHours": "Garde de nuit jusqu’à 23h"
    },
    "lat": 8.2833,
    "lng": -7.6833,
    "services": [
      "Garde de nuit",
      "Tiers-Payant CNAM",
      "Médicaments d’urgence"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.5,
    "reviewsCount": 35,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Doliprane 1000mg",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1300
      },
      {
        "id": "m2",
        "name": "Artesunate injectable ampoule",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 4500
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-bagoue-boundiali",
    "name": "Pharmacie de la Bagoué",
    "region": "Bagoué",
    "city": "Boundiali",
    "commune": "Boundiali",
    "neighborhood": "Quartier Résidentiel",
    "address": "Avenue Gon Coulibaly, Face CHR Boundiali",
    "landmark": "En face du Centre Hospitalier Régional (CHR) de Boundiali",
    "phones": [
      "+225 27 36 85 20 15",
      "+225 07 48 30 20 10"
    ],
    "whatsapp": "+2250748302010",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 9.5217,
    "lng": -6.4869,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Solutés & Sérums"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "AXA Assurances"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 52,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Lumartem pédiatrique",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      },
      {
        "id": "m2",
        "name": "Sérum Salé 0.9% 500ml",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 1200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-belier-toumodi",
    "name": "Pharmacie du Bélier (Toumodi)",
    "region": "Bélier",
    "city": "Toumodi",
    "commune": "Toumodi",
    "neighborhood": "Quartier Commerce",
    "address": "Route Nationale A3 (Axe Abidjan-Yamoussoukro)",
    "landmark": "À 50m du Carrefour de la Gare UTB Toumodi",
    "phones": [
      "+225 27 30 62 90 40",
      "+225 01 02 33 44 55"
    ],
    "whatsapp": "+2250102334455",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h00 - 22h30",
      "weekend": "07h30 - 22h00",
      "dutyHours": "Garde continue 24h/24"
    },
    "lat": 6.55,
    "lng": -5.0167,
    "services": [
      "Garde 24h/24 autoroute",
      "Trousse de premiers secours accident",
      "CNAM / MUGEF-CI"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 94,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Pansements compressifs & Bétadine",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2800
      },
      {
        "id": "m2",
        "name": "Coartem 20/120",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-bere-mankono",
    "name": "Pharmacie du Béré",
    "region": "Béré",
    "city": "Mankono",
    "commune": "Mankono",
    "neighborhood": "Quartier Mosquée",
    "address": "Rue du Marché Central de Mankono",
    "landmark": "Face à la Grande Mosquée et au Marché de Mankono",
    "phones": [
      "+225 27 34 71 10 20",
      "+225 07 58 66 77 88"
    ],
    "whatsapp": "+2250758667788",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 21h00",
      "weekend": "08h00 - 20h00",
      "dutyHours": "De garde ce week-end"
    },
    "lat": 8.0586,
    "lng": -6.1897,
    "services": [
      "Garde week-end",
      "CNAM",
      "Dépistage paludisme & tension"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.5,
    "reviewsCount": 30,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Efferalgan 1g effervescent",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1400
      },
      {
        "id": "m2",
        "name": "Amoxicilline 500mg gélules",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-bounkani-bouna",
    "name": "Pharmacie Royale du Bounkani",
    "region": "Bounkani",
    "city": "Bouna",
    "commune": "Bouna",
    "neighborhood": "Quartier Palais Royal",
    "address": "Boulevard de la Paix, Route de Doropo",
    "landmark": "À proximité du Palais du Bounkani et de l’Hôpital Général",
    "phones": [
      "+225 27 35 91 40 22",
      "+225 05 45 67 89 01"
    ],
    "whatsapp": "+2250545678901",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 21h30",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 9.2667,
    "lng": -2.9833,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM",
      "Urgences anti-venimeuses"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 42,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Sérum antivenimeux Fav-Afrique",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 35000
      },
      {
        "id": "m2",
        "name": "Coartem Dispersible pédiatrique",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-cavally-guiglo",
    "name": "Pharmacie du Cavally",
    "region": "Cavally",
    "city": "Guiglo",
    "commune": "Guiglo",
    "neighborhood": "Centre-Ville",
    "address": "Avenue Principale, Face Mairie de Guiglo",
    "landmark": "En face de la Mairie et du Pont sur le N’Zo",
    "phones": [
      "+225 27 34 70 50 11",
      "+225 07 09 88 77 66"
    ],
    "whatsapp": "+2250709887766",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 6.5437,
    "lng": -7.4936,
    "services": [
      "Garde 24h/24",
      "CNAM / MUGEF-CI",
      "Vaccins & Pansements"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 58,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol injectable",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1500
      },
      {
        "id": "m2",
        "name": "Artefan 80/480 adulte",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3600
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-folon-minignan",
    "name": "Pharmacie du Folon (Minignan)",
    "region": "Folon",
    "city": "Minignan",
    "commune": "Minignan",
    "neighborhood": "Centre Administratif",
    "address": "Route Nationale Minignan - Odienné",
    "landmark": "À côté de la Préfecture de Minignan",
    "phones": [
      "+225 27 34 89 12 00",
      "+225 05 55 44 33 22"
    ],
    "whatsapp": "+2250555443322",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 21h00",
      "weekend": "08h00 - 20h00",
      "dutyHours": "De garde jusqu’à 22h"
    },
    "lat": 9.9986,
    "lng": -7.8347,
    "services": [
      "Garde de nuit",
      "Tiers-Payant CNAM",
      "Dépistage rapide paludisme"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.4,
    "reviewsCount": 22,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Doliprane 500mg comprimés",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1000
      },
      {
        "id": "m2",
        "name": "Lumartem suspension pédiatrique",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-gbokle-sassandra",
    "name": "Pharmacie Océan de Sassandra",
    "region": "Gbôklé",
    "city": "Sassandra",
    "commune": "Sassandra",
    "neighborhood": "Quartier Bassa (Port)",
    "address": "Boulevard Maritime, Face Baie de Sassandra",
    "landmark": "À côté de l’Ancien Wharf et du Marché de poisson",
    "phones": [
      "+225 27 34 72 04 15",
      "+225 07 47 11 33 55"
    ],
    "whatsapp": "+2250747113355",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "08h00 - 21h30",
      "weekend": "08h30 - 21h00",
      "dutyHours": "De garde ce week-end"
    },
    "lat": 4.9538,
    "lng": -6.0853,
    "services": [
      "Garde week-end",
      "Soins d’urgences maritimes",
      "CNAM / MUGEF-CI"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 47,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Bétadine dermique jaune 125ml",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-goh-gagnoa-fromager",
    "name": "Pharmacie du Fromager (Gagnoa)",
    "region": "Gôh",
    "city": "Gagnoa",
    "commune": "Gagnoa",
    "neighborhood": "Quartier Commerce",
    "address": "Boulevard Félix Houphouët-Boigny",
    "landmark": "Face à la Station Total et au Rond-point de la Mairie",
    "phones": [
      "+225 27 32 77 22 10",
      "+225 07 07 99 88 11"
    ],
    "whatsapp": "+2250707998811",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24 continue"
    },
    "lat": 6.1319,
    "lng": -5.9506,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Béquilles & Tensiomètres"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM",
      "SUNU"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 115,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Amoxicilline + Acide Clavulanique (Augmentin)",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 5800
      },
      {
        "id": "m2",
        "name": "Artefan 20/120 pédiatrique",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2800
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-gontougo-bondoukou",
    "name": "Pharmacie des Mille Mosquées (Bondoukou)",
    "region": "Gontougo",
    "city": "Bondoukou",
    "commune": "Bondoukou",
    "neighborhood": "Quartier Donzosso",
    "address": "Avenue de la Mairie, Route de Bouna",
    "landmark": "À 100m du Musée de Bondoukou et du Grand Marché",
    "phones": [
      "+225 27 35 91 55 10",
      "+225 05 06 77 88 99"
    ],
    "whatsapp": "+2250506778899",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 8.0402,
    "lng": -2.8,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Conseils Maman & Nourrisson"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 82,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Paracétamol 1g comprimés",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-grandsponts-dabou",
    "name": "Pharmacie des Grands-Ponts (Dabou)",
    "region": "Grands-Ponts",
    "city": "Dabou",
    "commune": "Dabou",
    "neighborhood": "Quartier Débrimou / Commerce",
    "address": "Axe Abidjan - San-Pédro (La Côtière)",
    "landmark": "En face de l’Hôpital Méthodiste de Dabou",
    "phones": [
      "+225 27 23 57 20 40",
      "+225 07 08 66 55 44"
    ],
    "whatsapp": "+2250708665544",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 5.3256,
    "lng": -4.3767,
    "services": [
      "Garde 24h/24 Côtière",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Urgences traumatologie"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 91,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Sérum Physiologique & Compresses",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1800
      },
      {
        "id": "m2",
        "name": "Artefan 20/120",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3100
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-guemon-duekoue",
    "name": "Pharmacie du Guémon (Duékoué)",
    "region": "Guémon",
    "city": "Duékoué",
    "commune": "Duékoué",
    "neighborhood": "Quartier Kokoma",
    "address": "Carrefour Man - Guiglo",
    "landmark": "Au grand carrefour stratégique Man / Guiglo / Daloa",
    "phones": [
      "+225 27 34 71 80 12",
      "+225 05 44 22 11 33"
    ],
    "whatsapp": "+2250544221133",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 6.7419,
    "lng": -7.3497,
    "services": [
      "Garde continue 24h/24",
      "CNAM / MUGEF-CI",
      "Traumatologie & Pansements"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 61,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Ibuprofène 400mg",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1600
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-hambol-katiola",
    "name": "Pharmacie du Hambol (Katiola)",
    "region": "Hambol",
    "city": "Katiola",
    "commune": "Katiola",
    "neighborhood": "Quartier Poterie",
    "address": "Avenue Principale, Face Marché Central",
    "landmark": "À 50m de la Cathédrale Sainte Jeanne d’Arc de Katiola",
    "phones": [
      "+225 27 31 65 20 18",
      "+225 07 09 33 22 11"
    ],
    "whatsapp": "+2250709332211",
    "isOnDuty": true,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 21h30",
      "weekend": "08h00 - 21h00",
      "dutyHours": "De garde jusqu’à 23h"
    },
    "lat": 8.1372,
    "lng": -5.1008,
    "services": [
      "Garde de nuit",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Tests de glycémie"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 48,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol 1g Efferalgan",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Amoxicilline 1g Clamoxyl",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2800
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-iffou-daoukro",
    "name": "Pharmacie de l’Iffou (Daoukro)",
    "region": "Iffou",
    "city": "Daoukro",
    "commune": "Daoukro",
    "neighborhood": "Quartier Résidentiel",
    "address": "Boulevard Henri Konan Bédié, Face CHR Daoukro",
    "landmark": "En face du Centre Hospitalier Régional (CHR) de Daoukro",
    "phones": [
      "+225 27 31 97 70 30",
      "+225 05 06 11 22 33"
    ],
    "whatsapp": "+2250506112233",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 7.0591,
    "lng": -3.9631,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Orthopédie & Béquilles"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 72,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Lumartem 20/120",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      },
      {
        "id": "m2",
        "name": "Insuline NPH Flacon",
        "category": "Diabète",
        "inStock": true,
        "priceCFA": 6200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-indenie-abengourou",
    "name": "Pharmacie Royale de l’Indénié (Abengourou)",
    "region": "Indénié-Djuablin",
    "city": "Abengourou",
    "commune": "Abengourou",
    "neighborhood": "Quartier Commerce",
    "address": "Avenue du Roi Boa Kouassi III, Face Palais Royal",
    "landmark": "À 50m de la Mairie et en face de la Cour Royale de l’Indénié",
    "phones": [
      "+225 27 35 91 30 50",
      "+225 07 48 22 44 66"
    ],
    "whatsapp": "+2250748224466",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h30",
      "weekend": "08h00 - 22h00",
      "dutyHours": "Garde continue 24h/24"
    },
    "lat": 6.7297,
    "lng": -3.4964,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Livraison urgence ville"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "AXA Assurances"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 104,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Artefan 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Doliprane 1000mg",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-kabadougou-odienne",
    "name": "Pharmacie du Kabadougou (Odienné)",
    "region": "Kabadougou",
    "city": "Odienné",
    "commune": "Odienné",
    "neighborhood": "Quartier Résidentiel / Commerce",
    "address": "Boulevard du Denguélé, Face Grand Marché",
    "landmark": "En face de la grande station Shell et du Grand Marché d’Odienné",
    "phones": [
      "+225 27 34 89 20 15",
      "+225 07 07 55 44 33"
    ],
    "whatsapp": "+2250707554433",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 9.5051,
    "lng": -7.5643,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Vaccination méningite"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 77,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Paracétamol sirop pédiatrique",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1100
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-lohdjiboua-divo",
    "name": "Pharmacie Centrale du Lôh-Djiboua (Divo)",
    "region": "Lôh-Djiboua",
    "city": "Divo",
    "commune": "Divo",
    "neighborhood": "Quartier Commerce",
    "address": "Boulevard de la Paix, Face Mairie de Divo",
    "landmark": "À côté de la Sous-Préfecture et du Marché de nuit de Divo",
    "phones": [
      "+225 27 32 76 00 45",
      "+225 07 08 99 11 22"
    ],
    "whatsapp": "+2250708991122",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 5.8374,
    "lng": -5.3572,
    "services": [
      "Garde continue 24h/24",
      "CNAM / MUGEF-CI",
      "Tensiomètres & Glycémie"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 89,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Artefan 20/120",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3100
      },
      {
        "id": "m2",
        "name": "Amoxicilline 1g",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2800
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-marahoue-bouafle",
    "name": "Pharmacie de la Marahoué (Bouaflé)",
    "region": "Marahoué",
    "city": "Bouaflé",
    "commune": "Bouaflé",
    "neighborhood": "Centre-Ville",
    "address": "Route Nationale A6 (Axe Yamoussoukro - Daloa)",
    "landmark": "En face du Pont sur la Marahoué et du Grand Marché",
    "phones": [
      "+225 27 30 68 90 20",
      "+225 05 05 33 22 11"
    ],
    "whatsapp": "+2250505332211",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde continue 24h/24"
    },
    "lat": 6.9904,
    "lng": -5.7442,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Accidents de la route"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "AXA Assurances"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 86,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Bétadine dermique",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2100
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-me-adzope",
    "name": "Pharmacie de la Mé (Adzopé)",
    "region": "Mé",
    "city": "Adzopé",
    "commune": "Adzopé",
    "neighborhood": "Quartier Commerce",
    "address": "Route Nationale A1, Face Gare UTB Adzopé",
    "landmark": "À côté de la Mairie et du CHR d’Adzopé",
    "phones": [
      "+225 27 23 54 00 30",
      "+225 07 49 88 77 66"
    ],
    "whatsapp": "+2250749887766",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 6.1069,
    "lng": -3.8619,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Secours d’urgence"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 92,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol 1g Efferalgan",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Lumartem 20/120mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-moronou-bongouanou",
    "name": "Pharmacie du Moronou (Bongouanou)",
    "region": "Moronou",
    "city": "Bongouanou",
    "commune": "Bongouanou",
    "neighborhood": "Quartier Habitat",
    "address": "Boulevard de l’Hôpital, Face Hôpital Général",
    "landmark": "En face de l’Hôpital Général de Bongouanou",
    "phones": [
      "+225 27 30 67 10 15",
      "+225 05 06 44 55 66"
    ],
    "whatsapp": "+2250506445566",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h00",
      "dutyHours": "Garde 24h/24"
    },
    "lat": 6.6496,
    "lng": -4.2041,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Soins infirmiers"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.6,
    "reviewsCount": 64,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Artefan 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Doliprane 500mg sirop",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-nawa-soubre",
    "name": "Pharmacie des Cascades de la Nawa (Soubré)",
    "region": "Nawa",
    "city": "Soubré",
    "commune": "Soubré",
    "neighborhood": "Quartier Résidentiel",
    "address": "Avenue du Barrage Hydroélectrique, Face Mairie",
    "landmark": "À 200m de la Mairie et de la Préfecture de Soubré",
    "phones": [
      "+225 27 34 72 20 40",
      "+225 07 07 88 99 22"
    ],
    "whatsapp": "+2250707889922",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde continue 24h/24"
    },
    "lat": 5.7856,
    "lng": -6.6083,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Urgences barrages & chantiers"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM",
      "SUNU"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 108,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Amoxicilline 1g Clamoxyl",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2800
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-nzi-dimbokro",
    "name": "Pharmacie du N’Zi (Dimbokro)",
    "region": "N’Zi",
    "city": "Dimbokro",
    "commune": "Dimbokro",
    "neighborhood": "Quartier Commerce",
    "address": "Boulevard de la Gare ferroviaire SITARAIL",
    "landmark": "En face de la Gare Ferroviaire de Dimbokro et de la Mairie",
    "phones": [
      "+225 27 30 62 70 25",
      "+225 05 55 66 77 88"
    ],
    "whatsapp": "+2250555667788",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24 continue"
    },
    "lat": 6.6467,
    "lng": -4.7052,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Conseils hypertension & diabète"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 75,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Doliprane 1000mg",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Lumartem 20/120",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-sudcomoe-aboisso",
    "name": "Pharmacie du Sanwi (Aboisso)",
    "region": "Sud-Comoé",
    "city": "Aboisso",
    "commune": "Aboisso",
    "neighborhood": "Centre-Ville",
    "address": "Avenue du Pont de la Bia, Face Marché",
    "landmark": "À côté du Pont de la Bia et de la Mairie d’Aboisso",
    "phones": [
      "+225 27 21 30 40 50",
      "+225 07 09 11 33 55"
    ],
    "whatsapp": "+2250709113355",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 5.4678,
    "lng": -3.2072,
    "services": [
      "Garde 24h/24 frontière Noé",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Vaccination internationale"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 97,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Pansements stériles",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 1900
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-tchologo-ferke",
    "name": "Pharmacie du Tchologo (Ferkessédougou)",
    "region": "Tchologo",
    "city": "Ferkessédougou",
    "commune": "Ferkessédougou",
    "neighborhood": "Quartier Gare",
    "address": "Boulevard de la Mairie, Route de Ouangolodougou",
    "landmark": "En face de la Gare ferroviaire et du Grand Marché",
    "phones": [
      "+225 27 36 88 10 20",
      "+225 07 48 55 66 77"
    ],
    "whatsapp": "+2250748556677",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde continue 24h/24"
    },
    "lat": 9.6,
    "lng": -5.2,
    "services": [
      "Garde 24h/24 corridor Nord",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Urgences routières"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 88,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Artefan 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Paracétamol 1g Efferalgan",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-tonkpi-man-dents",
    "name": "Pharmacie des 18 Montagnes (Man)",
    "region": "Tonkpi",
    "city": "Man",
    "commune": "Man",
    "neighborhood": "Quartier Commerce",
    "address": "Boulevard de la Paix, Face Mairie de Man",
    "landmark": "Face à la Mairie de Man, vue sur les Dents de Man",
    "phones": [
      "+225 27 33 79 20 10",
      "+225 07 07 44 22 11"
    ],
    "whatsapp": "+2250707442211",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde 24h/24 sans interruption"
    },
    "lat": 7.4125,
    "lng": -7.5538,
    "services": [
      "Garde 24h/24 Ouest",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Orthopédie & Attelles"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA",
      "SANLAM",
      "AXA Assurances"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.8,
    "reviewsCount": 124,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Coartem 80/480mg",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3400
      },
      {
        "id": "m2",
        "name": "Augmentin 1g Adulte",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 5800
      },
      {
        "id": "m3",
        "name": "Attelle de cheville / Béquilles",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 14000
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-worodougou-seguela",
    "name": "Pharmacie du Diamant du Worodougou (Séguéla)",
    "region": "Worodougou",
    "city": "Séguéla",
    "commune": "Séguéla",
    "neighborhood": "Centre Administratif",
    "address": "Boulevard Général Robert Guéï, Face Préfecture",
    "landmark": "En face de la Préfecture et du Grand Marché de Séguéla",
    "phones": [
      "+225 27 34 71 50 20",
      "+225 05 45 33 22 11"
    ],
    "whatsapp": "+2250545332211",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 22h00",
      "weekend": "08h00 - 21h30",
      "dutyHours": "Garde continue 24h/24"
    },
    "lat": 7.9611,
    "lng": -6.6731,
    "services": [
      "Garde 24h/24",
      "Tiers-Payant CNAM & MUGEF-CI",
      "Tests Paludisme & Urgences"
    ],
    "insurances": [
      "CNAM",
      "MUGEF-CI",
      "ASCOMA"
    ],
    "dutyGroup": "Groupe A",
    "rating": 4.7,
    "reviewsCount": 68,
    "availableMedications": [
      {
        "id": "m1",
        "name": "Lumartem 20/120",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 2900
      },
      {
        "id": "m2",
        "name": "Paracétamol 1g Efferalgan",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      }
    ],
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-47",
    "name": "Pharmacie Principale de Adjamé",
    "region": "Abidjan",
    "city": "Adjamé",
    "commune": "Adjamé",
    "neighborhood": "Quartier Résidentiel de Adjamé",
    "address": "Avenue Principale, Adjamé",
    "landmark": "À 100m du Grand Marché et de la Mairie de Adjamé",
    "phones": [
      "+225 27 41 30 28",
      "+225 07 02192768"
    ],
    "whatsapp": "+2250702192768",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.3815,
    "lng": -4.0122,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 49,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-48",
    "name": "Pharmacie Principale de Attécoubé",
    "region": "Abidjan",
    "city": "Attécoubé",
    "commune": "Attécoubé",
    "neighborhood": "Quartier Résidentiel de Attécoubé",
    "address": "Avenue Principale, Attécoubé",
    "landmark": "À 100m du Grand Marché et de la Mairie de Attécoubé",
    "phones": [
      "+225 27 27 11 39",
      "+225 07 03917848"
    ],
    "whatsapp": "+2250703917848",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.3677,
    "lng": -3.9849,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 27,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-49",
    "name": "Pharmacie Principale de Bingerville",
    "region": "Abidjan",
    "city": "Bingerville",
    "commune": "Bingerville",
    "neighborhood": "Quartier Résidentiel de Bingerville",
    "address": "Avenue Principale, Bingerville",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bingerville",
    "phones": [
      "+225 27 21 47 80",
      "+225 07 08736865"
    ],
    "whatsapp": "+2250708736865",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.3403,
    "lng": -4.0221,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 35,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-50",
    "name": "Pharmacie Principale de Songon",
    "region": "Abidjan",
    "city": "Songon",
    "commune": "Songon",
    "neighborhood": "Quartier Résidentiel de Songon",
    "address": "Avenue Principale, Songon",
    "landmark": "À 100m du Grand Marché et de la Mairie de Songon",
    "phones": [
      "+225 27 90 65 96",
      "+225 07 02385791"
    ],
    "whatsapp": "+2250702385791",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.3702,
    "lng": -4.0014,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 55,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-51",
    "name": "Pharmacie Centrale de Yamoussoukro",
    "region": "Yamoussoukro",
    "city": "Yamoussoukro",
    "commune": "Yamoussoukro",
    "neighborhood": "Centre-Ville",
    "address": "Avenue Principale, Yamoussoukro",
    "landmark": "À 100m du Grand Marché et de la Mairie de Yamoussoukro",
    "phones": [
      "+225 27 12 51 13",
      "+225 07 03416321"
    ],
    "whatsapp": "+2250703416321",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.8368,
    "lng": -5.25,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 24,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-52",
    "name": "Pharmacie Principale de Attiégouakro",
    "region": "Yamoussoukro",
    "city": "Attiégouakro",
    "commune": "Attiégouakro",
    "neighborhood": "Quartier Résidentiel de Attiégouakro",
    "address": "Avenue Principale, Attiégouakro",
    "landmark": "À 100m du Grand Marché et de la Mairie de Attiégouakro",
    "phones": [
      "+225 27 16 08 03",
      "+225 07 09244587"
    ],
    "whatsapp": "+2250709244587",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.8103,
    "lng": -5.2687,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 48,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-53",
    "name": "Pharmacie Principale de Tiassalé",
    "region": "Agnéby-Tiassa",
    "city": "Tiassalé",
    "commune": "Tiassalé",
    "neighborhood": "Quartier Résidentiel de Tiassalé",
    "address": "Avenue Principale, Tiassalé",
    "landmark": "À 100m du Grand Marché et de la Mairie de Tiassalé",
    "phones": [
      "+225 27 28 74 78",
      "+225 07 08198627"
    ],
    "whatsapp": "+2250708198627",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.9462,
    "lng": -4.1859,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 61,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-54",
    "name": "Pharmacie Principale de Sikensi",
    "region": "Agnéby-Tiassa",
    "city": "Sikensi",
    "commune": "Sikensi",
    "neighborhood": "Quartier Résidentiel de Sikensi",
    "address": "Avenue Principale, Sikensi",
    "landmark": "À 100m du Grand Marché et de la Mairie de Sikensi",
    "phones": [
      "+225 27 75 47 38",
      "+225 07 03301266"
    ],
    "whatsapp": "+2250703301266",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.9631,
    "lng": -4.2561,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 46,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-55",
    "name": "Pharmacie Principale de Taabo",
    "region": "Agnéby-Tiassa",
    "city": "Taabo",
    "commune": "Taabo",
    "neighborhood": "Quartier Résidentiel de Taabo",
    "address": "Avenue Principale, Taabo",
    "landmark": "À 100m du Grand Marché et de la Mairie de Taabo",
    "phones": [
      "+225 27 27 00 17",
      "+225 07 09746098"
    ],
    "whatsapp": "+2250709746098",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.9596,
    "lng": -4.212,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 36,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-56",
    "name": "Pharmacie Principale de Koro",
    "region": "Bafing",
    "city": "Koro",
    "commune": "Koro",
    "neighborhood": "Quartier Résidentiel de Koro",
    "address": "Avenue Principale, Koro",
    "landmark": "À 100m du Grand Marché et de la Mairie de Koro",
    "phones": [
      "+225 27 97 42 05",
      "+225 07 03233535"
    ],
    "whatsapp": "+2250703233535",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 8.3169,
    "lng": -7.6607,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 44,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-57",
    "name": "Pharmacie Principale de Ouaninou",
    "region": "Bafing",
    "city": "Ouaninou",
    "commune": "Ouaninou",
    "neighborhood": "Quartier Résidentiel de Ouaninou",
    "address": "Avenue Principale, Ouaninou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Ouaninou",
    "phones": [
      "+225 27 73 46 64",
      "+225 07 01403007"
    ],
    "whatsapp": "+2250701403007",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 8.2543,
    "lng": -7.6561,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.3,
    "reviewsCount": 61,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-58",
    "name": "Pharmacie Principale de Kouto",
    "region": "Bagoué",
    "city": "Kouto",
    "commune": "Kouto",
    "neighborhood": "Quartier Résidentiel de Kouto",
    "address": "Avenue Principale, Kouto",
    "landmark": "À 100m du Grand Marché et de la Mairie de Kouto",
    "phones": [
      "+225 27 89 60 09",
      "+225 07 04011701"
    ],
    "whatsapp": "+2250704011701",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.5366,
    "lng": -6.4972,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.3,
    "reviewsCount": 39,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-59",
    "name": "Pharmacie Principale de Tengréla",
    "region": "Bagoué",
    "city": "Tengréla",
    "commune": "Tengréla",
    "neighborhood": "Quartier Résidentiel de Tengréla",
    "address": "Avenue Principale, Tengréla",
    "landmark": "À 100m du Grand Marché et de la Mairie de Tengréla",
    "phones": [
      "+225 27 50 05 48",
      "+225 07 01098171"
    ],
    "whatsapp": "+2250701098171",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.5033,
    "lng": -6.4965,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 86,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-60",
    "name": "Pharmacie Principale de Djékanou",
    "region": "Bélier",
    "city": "Djékanou",
    "commune": "Djékanou",
    "neighborhood": "Quartier Résidentiel de Djékanou",
    "address": "Avenue Principale, Djékanou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Djékanou",
    "phones": [
      "+225 27 66 53 68",
      "+225 07 02487150"
    ],
    "whatsapp": "+2250702487150",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.5354,
    "lng": -5.0164,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 82,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-61",
    "name": "Pharmacie Principale de Tiébissou",
    "region": "Bélier",
    "city": "Tiébissou",
    "commune": "Tiébissou",
    "neighborhood": "Quartier Résidentiel de Tiébissou",
    "address": "Avenue Principale, Tiébissou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Tiébissou",
    "phones": [
      "+225 27 99 28 51",
      "+225 07 07028874"
    ],
    "whatsapp": "+2250707028874",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.5801,
    "lng": -4.9821,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.9,
    "reviewsCount": 57,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-62",
    "name": "Pharmacie Principale de Didiévi",
    "region": "Bélier",
    "city": "Didiévi",
    "commune": "Didiévi",
    "neighborhood": "Quartier Résidentiel de Didiévi",
    "address": "Avenue Principale, Didiévi",
    "landmark": "À 100m du Grand Marché et de la Mairie de Didiévi",
    "phones": [
      "+225 27 51 17 35",
      "+225 07 05013058"
    ],
    "whatsapp": "+2250705013058",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.5797,
    "lng": -4.9794,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.9,
    "reviewsCount": 51,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-63",
    "name": "Pharmacie Principale de Dianra",
    "region": "Béré",
    "city": "Dianra",
    "commune": "Dianra",
    "neighborhood": "Quartier Résidentiel de Dianra",
    "address": "Avenue Principale, Dianra",
    "landmark": "À 100m du Grand Marché et de la Mairie de Dianra",
    "phones": [
      "+225 27 25 84 92",
      "+225 07 04481483"
    ],
    "whatsapp": "+2250704481483",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 8.0302,
    "lng": -6.2165,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 69,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-64",
    "name": "Pharmacie Principale de Kounahiri",
    "region": "Béré",
    "city": "Kounahiri",
    "commune": "Kounahiri",
    "neighborhood": "Quartier Résidentiel de Kounahiri",
    "address": "Avenue Principale, Kounahiri",
    "landmark": "À 100m du Grand Marché et de la Mairie de Kounahiri",
    "phones": [
      "+225 27 18 50 82",
      "+225 07 02894998"
    ],
    "whatsapp": "+2250702894998",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 8.085,
    "lng": -6.1683,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 63,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-65",
    "name": "Pharmacie Principale de Doropo",
    "region": "Bounkani",
    "city": "Doropo",
    "commune": "Doropo",
    "neighborhood": "Quartier Résidentiel de Doropo",
    "address": "Avenue Principale, Doropo",
    "landmark": "À 100m du Grand Marché et de la Mairie de Doropo",
    "phones": [
      "+225 27 12 85 28",
      "+225 07 02288462"
    ],
    "whatsapp": "+2250702288462",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.2995,
    "lng": -3.0023,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 50,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-66",
    "name": "Pharmacie Principale de Nassian",
    "region": "Bounkani",
    "city": "Nassian",
    "commune": "Nassian",
    "neighborhood": "Quartier Résidentiel de Nassian",
    "address": "Avenue Principale, Nassian",
    "landmark": "À 100m du Grand Marché et de la Mairie de Nassian",
    "phones": [
      "+225 27 11 54 00",
      "+225 07 02286604"
    ],
    "whatsapp": "+2250702286604",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.277,
    "lng": -3.0204,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 24,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-67",
    "name": "Pharmacie Principale de Téhini",
    "region": "Bounkani",
    "city": "Téhini",
    "commune": "Téhini",
    "neighborhood": "Quartier Résidentiel de Téhini",
    "address": "Avenue Principale, Téhini",
    "landmark": "À 100m du Grand Marché et de la Mairie de Téhini",
    "phones": [
      "+225 27 24 80 69",
      "+225 07 02564446"
    ],
    "whatsapp": "+2250702564446",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 9.2783,
    "lng": -2.9459,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 20,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-68",
    "name": "Pharmacie Principale de Bloléquin",
    "region": "Cavally",
    "city": "Bloléquin",
    "commune": "Bloléquin",
    "neighborhood": "Quartier Résidentiel de Bloléquin",
    "address": "Avenue Principale, Bloléquin",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bloléquin",
    "phones": [
      "+225 27 99 35 11",
      "+225 07 03313945"
    ],
    "whatsapp": "+2250703313945",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.5644,
    "lng": -7.5135,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.3,
    "reviewsCount": 74,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-69",
    "name": "Pharmacie Principale de Taï",
    "region": "Cavally",
    "city": "Taï",
    "commune": "Taï",
    "neighborhood": "Quartier Résidentiel de Taï",
    "address": "Avenue Principale, Taï",
    "landmark": "À 100m du Grand Marché et de la Mairie de Taï",
    "phones": [
      "+225 27 24 77 22",
      "+225 07 01302873"
    ],
    "whatsapp": "+2250701302873",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.5532,
    "lng": -7.521,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 79,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-70",
    "name": "Pharmacie Principale de Toulepleu",
    "region": "Cavally",
    "city": "Toulepleu",
    "commune": "Toulepleu",
    "neighborhood": "Quartier Résidentiel de Toulepleu",
    "address": "Avenue Principale, Toulepleu",
    "landmark": "À 100m du Grand Marché et de la Mairie de Toulepleu",
    "phones": [
      "+225 27 44 54 03",
      "+225 07 08837519"
    ],
    "whatsapp": "+2250708837519",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.5591,
    "lng": -7.5217,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 97,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-71",
    "name": "Pharmacie Principale de Kaniasso",
    "region": "Folon",
    "city": "Kaniasso",
    "commune": "Kaniasso",
    "neighborhood": "Quartier Résidentiel de Kaniasso",
    "address": "Avenue Principale, Kaniasso",
    "landmark": "À 100m du Grand Marché et de la Mairie de Kaniasso",
    "phones": [
      "+225 27 45 08 37",
      "+225 07 06587093"
    ],
    "whatsapp": "+2250706587093",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 9.9614,
    "lng": -7.8447,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 50,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-72",
    "name": "Pharmacie Centrale de Bouaké",
    "region": "Gbêkê",
    "city": "Bouaké",
    "commune": "Bouaké",
    "neighborhood": "Centre-Ville",
    "address": "Avenue Principale, Bouaké",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bouaké",
    "phones": [
      "+225 27 63 98 09",
      "+225 07 09498458"
    ],
    "whatsapp": "+2250709498458",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.6551,
    "lng": -5.0263,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 69,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-73",
    "name": "Pharmacie Principale de Béoumi",
    "region": "Gbêkê",
    "city": "Béoumi",
    "commune": "Béoumi",
    "neighborhood": "Quartier Résidentiel de Béoumi",
    "address": "Avenue Principale, Béoumi",
    "landmark": "À 100m du Grand Marché et de la Mairie de Béoumi",
    "phones": [
      "+225 27 36 79 58",
      "+225 07 04786779"
    ],
    "whatsapp": "+2250704786779",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 7.7036,
    "lng": -5.0218,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 39,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-74",
    "name": "Pharmacie Principale de Sakassou",
    "region": "Gbêkê",
    "city": "Sakassou",
    "commune": "Sakassou",
    "neighborhood": "Quartier Résidentiel de Sakassou",
    "address": "Avenue Principale, Sakassou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Sakassou",
    "phones": [
      "+225 27 94 57 12",
      "+225 07 08876782"
    ],
    "whatsapp": "+2250708876782",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 7.7178,
    "lng": -5.0095,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 49,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-75",
    "name": "Pharmacie Principale de Botro",
    "region": "Gbêkê",
    "city": "Botro",
    "commune": "Botro",
    "neighborhood": "Quartier Résidentiel de Botro",
    "address": "Avenue Principale, Botro",
    "landmark": "À 100m du Grand Marché et de la Mairie de Botro",
    "phones": [
      "+225 27 48 46 91",
      "+225 07 02084390"
    ],
    "whatsapp": "+2250702084390",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.6818,
    "lng": -5.0062,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 26,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-76",
    "name": "Pharmacie Principale de Fresco",
    "region": "Gbôklé",
    "city": "Fresco",
    "commune": "Fresco",
    "neighborhood": "Quartier Résidentiel de Fresco",
    "address": "Avenue Principale, Fresco",
    "landmark": "À 100m du Grand Marché et de la Mairie de Fresco",
    "phones": [
      "+225 27 67 03 81",
      "+225 07 07297186"
    ],
    "whatsapp": "+2250707297186",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 4.9678,
    "lng": -6.0707,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 31,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-77",
    "name": "Pharmacie Principale de Oumé",
    "region": "Gôh",
    "city": "Oumé",
    "commune": "Oumé",
    "neighborhood": "Quartier Résidentiel de Oumé",
    "address": "Avenue Principale, Oumé",
    "landmark": "À 100m du Grand Marché et de la Mairie de Oumé",
    "phones": [
      "+225 27 85 38 20",
      "+225 07 09703832"
    ],
    "whatsapp": "+2250709703832",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.1123,
    "lng": -5.9305,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 74,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-78",
    "name": "Pharmacie Principale de Ouragahio",
    "region": "Gôh",
    "city": "Ouragahio",
    "commune": "Ouragahio",
    "neighborhood": "Quartier Résidentiel de Ouragahio",
    "address": "Avenue Principale, Ouragahio",
    "landmark": "À 100m du Grand Marché et de la Mairie de Ouragahio",
    "phones": [
      "+225 27 11 13 96",
      "+225 07 08208026"
    ],
    "whatsapp": "+2250708208026",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.161,
    "lng": -5.9599,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 53,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-79",
    "name": "Pharmacie Principale de Guibéroua",
    "region": "Gôh",
    "city": "Guibéroua",
    "commune": "Guibéroua",
    "neighborhood": "Quartier Résidentiel de Guibéroua",
    "address": "Avenue Principale, Guibéroua",
    "landmark": "À 100m du Grand Marché et de la Mairie de Guibéroua",
    "phones": [
      "+225 27 49 44 88",
      "+225 07 03541990"
    ],
    "whatsapp": "+2250703541990",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.1407,
    "lng": -5.948,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 54,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-80",
    "name": "Pharmacie Principale de Tanda",
    "region": "Gontougo",
    "city": "Tanda",
    "commune": "Tanda",
    "neighborhood": "Quartier Résidentiel de Tanda",
    "address": "Avenue Principale, Tanda",
    "landmark": "À 100m du Grand Marché et de la Mairie de Tanda",
    "phones": [
      "+225 27 92 52 13",
      "+225 07 03698398"
    ],
    "whatsapp": "+2250703698398",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 8.0773,
    "lng": -2.7999,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 78,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-81",
    "name": "Pharmacie Principale de Koun-Fao",
    "region": "Gontougo",
    "city": "Koun-Fao",
    "commune": "Koun-Fao",
    "neighborhood": "Quartier Résidentiel de Koun-Fao",
    "address": "Avenue Principale, Koun-Fao",
    "landmark": "À 100m du Grand Marché et de la Mairie de Koun-Fao",
    "phones": [
      "+225 27 37 31 20",
      "+225 07 04319219"
    ],
    "whatsapp": "+2250704319219",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 8.0042,
    "lng": -2.8357,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 30,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-82",
    "name": "Pharmacie Principale de Sandégué",
    "region": "Gontougo",
    "city": "Sandégué",
    "commune": "Sandégué",
    "neighborhood": "Quartier Résidentiel de Sandégué",
    "address": "Avenue Principale, Sandégué",
    "landmark": "À 100m du Grand Marché et de la Mairie de Sandégué",
    "phones": [
      "+225 27 96 94 34",
      "+225 07 06431137"
    ],
    "whatsapp": "+2250706431137",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 8.0081,
    "lng": -2.7605,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.9,
    "reviewsCount": 72,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-83",
    "name": "Pharmacie Principale de Transua",
    "region": "Gontougo",
    "city": "Transua",
    "commune": "Transua",
    "neighborhood": "Quartier Résidentiel de Transua",
    "address": "Avenue Principale, Transua",
    "landmark": "À 100m du Grand Marché et de la Mairie de Transua",
    "phones": [
      "+225 27 98 00 86",
      "+225 07 09007823"
    ],
    "whatsapp": "+2250709007823",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 8.0716,
    "lng": -2.7923,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 49,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-84",
    "name": "Pharmacie Principale de Grand-Lahou",
    "region": "Grands-Ponts",
    "city": "Grand-Lahou",
    "commune": "Grand-Lahou",
    "neighborhood": "Quartier Résidentiel de Grand-Lahou",
    "address": "Avenue Principale, Grand-Lahou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Grand-Lahou",
    "phones": [
      "+225 27 12 49 81",
      "+225 07 02947036"
    ],
    "whatsapp": "+2250702947036",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.291,
    "lng": -4.3874,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 88,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-85",
    "name": "Pharmacie Principale de Jacqueville",
    "region": "Grands-Ponts",
    "city": "Jacqueville",
    "commune": "Jacqueville",
    "neighborhood": "Quartier Résidentiel de Jacqueville",
    "address": "Avenue Principale, Jacqueville",
    "landmark": "À 100m du Grand Marché et de la Mairie de Jacqueville",
    "phones": [
      "+225 27 48 20 43",
      "+225 07 01908987"
    ],
    "whatsapp": "+2250701908987",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.3097,
    "lng": -4.3855,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 81,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-86",
    "name": "Pharmacie Principale de Bangolo",
    "region": "Guémon",
    "city": "Bangolo",
    "commune": "Bangolo",
    "neighborhood": "Quartier Résidentiel de Bangolo",
    "address": "Avenue Principale, Bangolo",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bangolo",
    "phones": [
      "+225 27 96 52 32",
      "+225 07 06079995"
    ],
    "whatsapp": "+2250706079995",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.7129,
    "lng": -7.3131,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 84,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-87",
    "name": "Pharmacie Principale de Facobly",
    "region": "Guémon",
    "city": "Facobly",
    "commune": "Facobly",
    "neighborhood": "Quartier Résidentiel de Facobly",
    "address": "Avenue Principale, Facobly",
    "landmark": "À 100m du Grand Marché et de la Mairie de Facobly",
    "phones": [
      "+225 27 96 27 91",
      "+225 07 06991832"
    ],
    "whatsapp": "+2250706991832",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.7358,
    "lng": -7.3718,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 77,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-88",
    "name": "Pharmacie Principale de Kouibly",
    "region": "Guémon",
    "city": "Kouibly",
    "commune": "Kouibly",
    "neighborhood": "Quartier Résidentiel de Kouibly",
    "address": "Avenue Principale, Kouibly",
    "landmark": "À 100m du Grand Marché et de la Mairie de Kouibly",
    "phones": [
      "+225 27 11 99 24",
      "+225 07 05681797"
    ],
    "whatsapp": "+2250705681797",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.7812,
    "lng": -7.3412,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 26,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-89",
    "name": "Pharmacie Principale de Dabakala",
    "region": "Hambol",
    "city": "Dabakala",
    "commune": "Dabakala",
    "neighborhood": "Quartier Résidentiel de Dabakala",
    "address": "Avenue Principale, Dabakala",
    "landmark": "À 100m du Grand Marché et de la Mairie de Dabakala",
    "phones": [
      "+225 27 53 62 85",
      "+225 07 07109721"
    ],
    "whatsapp": "+2250707109721",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 8.1307,
    "lng": -5.111,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 41,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-90",
    "name": "Pharmacie Principale de Niakaramandougou",
    "region": "Hambol",
    "city": "Niakaramandougou",
    "commune": "Niakaramandougou",
    "neighborhood": "Quartier Résidentiel de Niakaramandougou",
    "address": "Avenue Principale, Niakaramandougou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Niakaramandougou",
    "phones": [
      "+225 27 10 14 17",
      "+225 07 04760082"
    ],
    "whatsapp": "+2250704760082",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 8.1112,
    "lng": -5.0849,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 75,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-91",
    "name": "Pharmacie Centrale de Daloa",
    "region": "Haut-Sassandra",
    "city": "Daloa",
    "commune": "Daloa",
    "neighborhood": "Centre-Ville",
    "address": "Avenue Principale, Daloa",
    "landmark": "À 100m du Grand Marché et de la Mairie de Daloa",
    "phones": [
      "+225 27 43 62 75",
      "+225 07 09781759"
    ],
    "whatsapp": "+2250709781759",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.9004,
    "lng": -6.4654,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 65,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-92",
    "name": "Pharmacie Principale de Issia",
    "region": "Haut-Sassandra",
    "city": "Issia",
    "commune": "Issia",
    "neighborhood": "Quartier Résidentiel de Issia",
    "address": "Avenue Principale, Issia",
    "landmark": "À 100m du Grand Marché et de la Mairie de Issia",
    "phones": [
      "+225 27 26 65 71",
      "+225 07 04228863"
    ],
    "whatsapp": "+2250704228863",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.8729,
    "lng": -6.4476,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.9,
    "reviewsCount": 22,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-93",
    "name": "Pharmacie Principale de Vavoua",
    "region": "Haut-Sassandra",
    "city": "Vavoua",
    "commune": "Vavoua",
    "neighborhood": "Quartier Résidentiel de Vavoua",
    "address": "Avenue Principale, Vavoua",
    "landmark": "À 100m du Grand Marché et de la Mairie de Vavoua",
    "phones": [
      "+225 27 38 59 70",
      "+225 07 06505308"
    ],
    "whatsapp": "+2250706505308",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.8492,
    "lng": -6.4819,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 97,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-94",
    "name": "Pharmacie Principale de Zoukougbeu",
    "region": "Haut-Sassandra",
    "city": "Zoukougbeu",
    "commune": "Zoukougbeu",
    "neighborhood": "Quartier Résidentiel de Zoukougbeu",
    "address": "Avenue Principale, Zoukougbeu",
    "landmark": "À 100m du Grand Marché et de la Mairie de Zoukougbeu",
    "phones": [
      "+225 27 29 25 63",
      "+225 07 07194094"
    ],
    "whatsapp": "+2250707194094",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.8629,
    "lng": -6.4448,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 49,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-95",
    "name": "Pharmacie Principale de M'Bahiakro",
    "region": "Iffou",
    "city": "M'Bahiakro",
    "commune": "M'Bahiakro",
    "neighborhood": "Quartier Résidentiel de M'Bahiakro",
    "address": "Avenue Principale, M'Bahiakro",
    "landmark": "À 100m du Grand Marché et de la Mairie de M'Bahiakro",
    "phones": [
      "+225 27 27 55 58",
      "+225 07 03475902"
    ],
    "whatsapp": "+2250703475902",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 7.0306,
    "lng": -3.9935,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.9,
    "reviewsCount": 36,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-96",
    "name": "Pharmacie Principale de Prikro",
    "region": "Iffou",
    "city": "Prikro",
    "commune": "Prikro",
    "neighborhood": "Quartier Résidentiel de Prikro",
    "address": "Avenue Principale, Prikro",
    "landmark": "À 100m du Grand Marché et de la Mairie de Prikro",
    "phones": [
      "+225 27 17 34 84",
      "+225 07 09241951"
    ],
    "whatsapp": "+2250709241951",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 7.098,
    "lng": -4.0013,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 56,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-97",
    "name": "Pharmacie Principale de Agnibilékrou",
    "region": "Indénié-Djuablin",
    "city": "Agnibilékrou",
    "commune": "Agnibilékrou",
    "neighborhood": "Quartier Résidentiel de Agnibilékrou",
    "address": "Avenue Principale, Agnibilékrou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Agnibilékrou",
    "phones": [
      "+225 27 83 43 48",
      "+225 07 05115631"
    ],
    "whatsapp": "+2250705115631",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.713,
    "lng": -3.4745,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 68,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-98",
    "name": "Pharmacie Principale de Bettié",
    "region": "Indénié-Djuablin",
    "city": "Bettié",
    "commune": "Bettié",
    "neighborhood": "Quartier Résidentiel de Bettié",
    "address": "Avenue Principale, Bettié",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bettié",
    "phones": [
      "+225 27 15 34 34",
      "+225 07 05290153"
    ],
    "whatsapp": "+2250705290153",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.7446,
    "lng": -3.5338,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 46,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-99",
    "name": "Pharmacie Principale de Gbéléban",
    "region": "Kabadougou",
    "city": "Gbéléban",
    "commune": "Gbéléban",
    "neighborhood": "Quartier Résidentiel de Gbéléban",
    "address": "Avenue Principale, Gbéléban",
    "landmark": "À 100m du Grand Marché et de la Mairie de Gbéléban",
    "phones": [
      "+225 27 82 86 03",
      "+225 07 05210443"
    ],
    "whatsapp": "+2250705210443",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.5233,
    "lng": -7.5874,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 88,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-100",
    "name": "Pharmacie Principale de Madinani",
    "region": "Kabadougou",
    "city": "Madinani",
    "commune": "Madinani",
    "neighborhood": "Quartier Résidentiel de Madinani",
    "address": "Avenue Principale, Madinani",
    "landmark": "À 100m du Grand Marché et de la Mairie de Madinani",
    "phones": [
      "+225 27 85 15 63",
      "+225 07 04347175"
    ],
    "whatsapp": "+2250704347175",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.4884,
    "lng": -7.5656,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 65,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-101",
    "name": "Pharmacie Principale de Samatiguila",
    "region": "Kabadougou",
    "city": "Samatiguila",
    "commune": "Samatiguila",
    "neighborhood": "Quartier Résidentiel de Samatiguila",
    "address": "Avenue Principale, Samatiguila",
    "landmark": "À 100m du Grand Marché et de la Mairie de Samatiguila",
    "phones": [
      "+225 27 27 13 75",
      "+225 07 06252174"
    ],
    "whatsapp": "+2250706252174",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 9.5203,
    "lng": -7.5807,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.3,
    "reviewsCount": 29,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-102",
    "name": "Pharmacie Principale de Séguélon",
    "region": "Kabadougou",
    "city": "Séguélon",
    "commune": "Séguélon",
    "neighborhood": "Quartier Résidentiel de Séguélon",
    "address": "Avenue Principale, Séguélon",
    "landmark": "À 100m du Grand Marché et de la Mairie de Séguélon",
    "phones": [
      "+225 27 80 39 45",
      "+225 07 06517888"
    ],
    "whatsapp": "+2250706517888",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 9.5295,
    "lng": -7.5284,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.9,
    "reviewsCount": 32,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-103",
    "name": "Pharmacie Principale de Guitry",
    "region": "Lôh-Djiboua",
    "city": "Guitry",
    "commune": "Guitry",
    "neighborhood": "Quartier Résidentiel de Guitry",
    "address": "Avenue Principale, Guitry",
    "landmark": "À 100m du Grand Marché et de la Mairie de Guitry",
    "phones": [
      "+225 27 47 90 29",
      "+225 07 01414235"
    ],
    "whatsapp": "+2250701414235",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.8294,
    "lng": -5.3237,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 48,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-104",
    "name": "Pharmacie Principale de Lakota",
    "region": "Lôh-Djiboua",
    "city": "Lakota",
    "commune": "Lakota",
    "neighborhood": "Quartier Résidentiel de Lakota",
    "address": "Avenue Principale, Lakota",
    "landmark": "À 100m du Grand Marché et de la Mairie de Lakota",
    "phones": [
      "+225 27 77 21 48",
      "+225 07 05143603"
    ],
    "whatsapp": "+2250705143603",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.8046,
    "lng": -5.344,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 42,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-105",
    "name": "Pharmacie Principale de Sinfra",
    "region": "Marahoué",
    "city": "Sinfra",
    "commune": "Sinfra",
    "neighborhood": "Quartier Résidentiel de Sinfra",
    "address": "Avenue Principale, Sinfra",
    "landmark": "À 100m du Grand Marché et de la Mairie de Sinfra",
    "phones": [
      "+225 27 45 57 43",
      "+225 07 06749213"
    ],
    "whatsapp": "+2250706749213",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.9565,
    "lng": -5.7679,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 67,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-106",
    "name": "Pharmacie Principale de Zuénoula",
    "region": "Marahoué",
    "city": "Zuénoula",
    "commune": "Zuénoula",
    "neighborhood": "Quartier Résidentiel de Zuénoula",
    "address": "Avenue Principale, Zuénoula",
    "landmark": "À 100m du Grand Marché et de la Mairie de Zuénoula",
    "phones": [
      "+225 27 46 76 62",
      "+225 07 02611862"
    ],
    "whatsapp": "+2250702611862",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.9588,
    "lng": -5.7666,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 35,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-107",
    "name": "Pharmacie Principale de Bonon",
    "region": "Marahoué",
    "city": "Bonon",
    "commune": "Bonon",
    "neighborhood": "Quartier Résidentiel de Bonon",
    "address": "Avenue Principale, Bonon",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bonon",
    "phones": [
      "+225 27 90 64 55",
      "+225 07 04903602"
    ],
    "whatsapp": "+2250704903602",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.0205,
    "lng": -5.7612,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 38,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-108",
    "name": "Pharmacie Principale de Gohitafla",
    "region": "Marahoué",
    "city": "Gohitafla",
    "commune": "Gohitafla",
    "neighborhood": "Quartier Résidentiel de Gohitafla",
    "address": "Avenue Principale, Gohitafla",
    "landmark": "À 100m du Grand Marché et de la Mairie de Gohitafla",
    "phones": [
      "+225 27 93 66 72",
      "+225 07 06581669"
    ],
    "whatsapp": "+2250706581669",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.0044,
    "lng": -5.7444,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 80,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-109",
    "name": "Pharmacie Principale de Akoupé",
    "region": "Mé",
    "city": "Akoupé",
    "commune": "Akoupé",
    "neighborhood": "Quartier Résidentiel de Akoupé",
    "address": "Avenue Principale, Akoupé",
    "landmark": "À 100m du Grand Marché et de la Mairie de Akoupé",
    "phones": [
      "+225 27 99 72 82",
      "+225 07 08045487"
    ],
    "whatsapp": "+2250708045487",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.0946,
    "lng": -3.8641,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.3,
    "reviewsCount": 27,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-110",
    "name": "Pharmacie Principale de Alépé",
    "region": "Mé",
    "city": "Alépé",
    "commune": "Alépé",
    "neighborhood": "Quartier Résidentiel de Alépé",
    "address": "Avenue Principale, Alépé",
    "landmark": "À 100m du Grand Marché et de la Mairie de Alépé",
    "phones": [
      "+225 27 85 26 66",
      "+225 07 07297776"
    ],
    "whatsapp": "+2250707297776",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.1121,
    "lng": -3.8507,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 46,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-111",
    "name": "Pharmacie Principale de Yakassé-Attobrou",
    "region": "Mé",
    "city": "Yakassé-Attobrou",
    "commune": "Yakassé-Attobrou",
    "neighborhood": "Quartier Résidentiel de Yakassé-Attobrou",
    "address": "Avenue Principale, Yakassé-Attobrou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Yakassé-Attobrou",
    "phones": [
      "+225 27 78 44 69",
      "+225 07 07307693"
    ],
    "whatsapp": "+2250707307693",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.0754,
    "lng": -3.8592,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 53,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-112",
    "name": "Pharmacie Principale de Arrah",
    "region": "Moronou",
    "city": "Arrah",
    "commune": "Arrah",
    "neighborhood": "Quartier Résidentiel de Arrah",
    "address": "Avenue Principale, Arrah",
    "landmark": "À 100m du Grand Marché et de la Mairie de Arrah",
    "phones": [
      "+225 27 74 81 74",
      "+225 07 06401298"
    ],
    "whatsapp": "+2250706401298",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.6845,
    "lng": -4.189,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 49,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-113",
    "name": "Pharmacie Principale de M'Batto",
    "region": "Moronou",
    "city": "M'Batto",
    "commune": "M'Batto",
    "neighborhood": "Quartier Résidentiel de M'Batto",
    "address": "Avenue Principale, M'Batto",
    "landmark": "À 100m du Grand Marché et de la Mairie de M'Batto",
    "phones": [
      "+225 27 80 77 25",
      "+225 07 01083626"
    ],
    "whatsapp": "+2250701083626",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.6346,
    "lng": -4.1663,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 93,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-114",
    "name": "Pharmacie Principale de Buyo",
    "region": "Nawa",
    "city": "Buyo",
    "commune": "Buyo",
    "neighborhood": "Quartier Résidentiel de Buyo",
    "address": "Avenue Principale, Buyo",
    "landmark": "À 100m du Grand Marché et de la Mairie de Buyo",
    "phones": [
      "+225 27 69 01 84",
      "+225 07 06862931"
    ],
    "whatsapp": "+2250706862931",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.7547,
    "lng": -6.6288,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 47,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-115",
    "name": "Pharmacie Principale de Guéyo",
    "region": "Nawa",
    "city": "Guéyo",
    "commune": "Guéyo",
    "neighborhood": "Quartier Résidentiel de Guéyo",
    "address": "Avenue Principale, Guéyo",
    "landmark": "À 100m du Grand Marché et de la Mairie de Guéyo",
    "phones": [
      "+225 27 78 28 65",
      "+225 07 05470032"
    ],
    "whatsapp": "+2250705470032",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.8046,
    "lng": -6.5723,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 76,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-116",
    "name": "Pharmacie Principale de Méagui",
    "region": "Nawa",
    "city": "Méagui",
    "commune": "Méagui",
    "neighborhood": "Quartier Résidentiel de Méagui",
    "address": "Avenue Principale, Méagui",
    "landmark": "À 100m du Grand Marché et de la Mairie de Méagui",
    "phones": [
      "+225 27 83 82 27",
      "+225 07 01911971"
    ],
    "whatsapp": "+2250701911971",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.7742,
    "lng": -6.6424,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.9,
    "reviewsCount": 79,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-117",
    "name": "Pharmacie Principale de Bocanda",
    "region": "N’Zi",
    "city": "Bocanda",
    "commune": "Bocanda",
    "neighborhood": "Quartier Résidentiel de Bocanda",
    "address": "Avenue Principale, Bocanda",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bocanda",
    "phones": [
      "+225 27 31 83 87",
      "+225 07 06083833"
    ],
    "whatsapp": "+2250706083833",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 6.6196,
    "lng": -4.7062,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 53,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-118",
    "name": "Pharmacie Principale de Kouassi-Kouassikro",
    "region": "N’Zi",
    "city": "Kouassi-Kouassikro",
    "commune": "Kouassi-Kouassikro",
    "neighborhood": "Quartier Résidentiel de Kouassi-Kouassikro",
    "address": "Avenue Principale, Kouassi-Kouassikro",
    "landmark": "À 100m du Grand Marché et de la Mairie de Kouassi-Kouassikro",
    "phones": [
      "+225 27 98 45 03",
      "+225 07 02290617"
    ],
    "whatsapp": "+2250702290617",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 6.6112,
    "lng": -4.7173,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 69,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-119",
    "name": "Pharmacie Centrale de Korhogo",
    "region": "Poro",
    "city": "Korhogo",
    "commune": "Korhogo",
    "neighborhood": "Centre-Ville",
    "address": "Avenue Principale, Korhogo",
    "landmark": "À 100m du Grand Marché et de la Mairie de Korhogo",
    "phones": [
      "+225 27 16 43 23",
      "+225 07 08738734"
    ],
    "whatsapp": "+2250708738734",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.4477,
    "lng": -5.654,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 49,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-120",
    "name": "Pharmacie Principale de Dikodougou",
    "region": "Poro",
    "city": "Dikodougou",
    "commune": "Dikodougou",
    "neighborhood": "Quartier Résidentiel de Dikodougou",
    "address": "Avenue Principale, Dikodougou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Dikodougou",
    "phones": [
      "+225 27 11 12 08",
      "+225 07 03793741"
    ],
    "whatsapp": "+2250703793741",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.4218,
    "lng": -5.6636,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 67,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-121",
    "name": "Pharmacie Principale de M'Bengué",
    "region": "Poro",
    "city": "M'Bengué",
    "commune": "M'Bengué",
    "neighborhood": "Quartier Résidentiel de M'Bengué",
    "address": "Avenue Principale, M'Bengué",
    "landmark": "À 100m du Grand Marché et de la Mairie de M'Bengué",
    "phones": [
      "+225 27 60 47 28",
      "+225 07 01788195"
    ],
    "whatsapp": "+2250701788195",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 9.4284,
    "lng": -5.6181,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 37,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-122",
    "name": "Pharmacie Principale de Sinématiali",
    "region": "Poro",
    "city": "Sinématiali",
    "commune": "Sinématiali",
    "neighborhood": "Quartier Résidentiel de Sinématiali",
    "address": "Avenue Principale, Sinématiali",
    "landmark": "À 100m du Grand Marché et de la Mairie de Sinématiali",
    "phones": [
      "+225 27 47 22 94",
      "+225 07 06933624"
    ],
    "whatsapp": "+2250706933624",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 9.4945,
    "lng": -5.5965,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 77,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-123",
    "name": "Pharmacie Centrale de San-Pédro",
    "region": "San-Pédro",
    "city": "San-Pédro",
    "commune": "San-Pédro",
    "neighborhood": "Centre-Ville",
    "address": "Avenue Principale, San-Pédro",
    "landmark": "À 100m du Grand Marché et de la Mairie de San-Pédro",
    "phones": [
      "+225 27 71 73 09",
      "+225 07 02315793"
    ],
    "whatsapp": "+2250702315793",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 4.7611,
    "lng": -6.6184,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 68,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-124",
    "name": "Pharmacie Principale de Tabou",
    "region": "San-Pédro",
    "city": "Tabou",
    "commune": "Tabou",
    "neighborhood": "Quartier Résidentiel de Tabou",
    "address": "Avenue Principale, Tabou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Tabou",
    "phones": [
      "+225 27 30 82 58",
      "+225 07 01956619"
    ],
    "whatsapp": "+2250701956619",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 4.7243,
    "lng": -6.6131,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.6,
    "reviewsCount": 28,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-125",
    "name": "Pharmacie Principale de Grand-Béréby",
    "region": "San-Pédro",
    "city": "Grand-Béréby",
    "commune": "Grand-Béréby",
    "neighborhood": "Quartier Résidentiel de Grand-Béréby",
    "address": "Avenue Principale, Grand-Béréby",
    "landmark": "À 100m du Grand Marché et de la Mairie de Grand-Béréby",
    "phones": [
      "+225 27 71 07 82",
      "+225 07 08037639"
    ],
    "whatsapp": "+2250708037639",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 4.7097,
    "lng": -6.6776,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 26,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-126",
    "name": "Pharmacie Principale de Grand-Bassam",
    "region": "Sud-Comoé",
    "city": "Grand-Bassam",
    "commune": "Grand-Bassam",
    "neighborhood": "Quartier Résidentiel de Grand-Bassam",
    "address": "Avenue Principale, Grand-Bassam",
    "landmark": "À 100m du Grand Marché et de la Mairie de Grand-Bassam",
    "phones": [
      "+225 27 16 44 40",
      "+225 07 08589997"
    ],
    "whatsapp": "+2250708589997",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.5025,
    "lng": -3.1706,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 40,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-127",
    "name": "Pharmacie Principale de Adiaké",
    "region": "Sud-Comoé",
    "city": "Adiaké",
    "commune": "Adiaké",
    "neighborhood": "Quartier Résidentiel de Adiaké",
    "address": "Avenue Principale, Adiaké",
    "landmark": "À 100m du Grand Marché et de la Mairie de Adiaké",
    "phones": [
      "+225 27 73 58 59",
      "+225 07 01865721"
    ],
    "whatsapp": "+2250701865721",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.4421,
    "lng": -3.1953,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.5,
    "reviewsCount": 43,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-128",
    "name": "Pharmacie Principale de Tiapoum",
    "region": "Sud-Comoé",
    "city": "Tiapoum",
    "commune": "Tiapoum",
    "neighborhood": "Quartier Résidentiel de Tiapoum",
    "address": "Avenue Principale, Tiapoum",
    "landmark": "À 100m du Grand Marché et de la Mairie de Tiapoum",
    "phones": [
      "+225 27 15 49 98",
      "+225 07 05385890"
    ],
    "whatsapp": "+2250705385890",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 5.4999,
    "lng": -3.2355,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 35,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-129",
    "name": "Pharmacie Principale de Bonoua",
    "region": "Sud-Comoé",
    "city": "Bonoua",
    "commune": "Bonoua",
    "neighborhood": "Quartier Résidentiel de Bonoua",
    "address": "Avenue Principale, Bonoua",
    "landmark": "À 100m du Grand Marché et de la Mairie de Bonoua",
    "phones": [
      "+225 27 41 30 80",
      "+225 07 04112171"
    ],
    "whatsapp": "+2250704112171",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 5.476,
    "lng": -3.2081,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 75,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-130",
    "name": "Pharmacie Principale de Kong",
    "region": "Tchologo",
    "city": "Kong",
    "commune": "Kong",
    "neighborhood": "Quartier Résidentiel de Kong",
    "address": "Avenue Principale, Kong",
    "landmark": "À 100m du Grand Marché et de la Mairie de Kong",
    "phones": [
      "+225 27 67 81 71",
      "+225 07 01237649"
    ],
    "whatsapp": "+2250701237649",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 9.562,
    "lng": -5.2223,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.3,
    "reviewsCount": 27,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-131",
    "name": "Pharmacie Principale de Ouangolodougou",
    "region": "Tchologo",
    "city": "Ouangolodougou",
    "commune": "Ouangolodougou",
    "neighborhood": "Quartier Résidentiel de Ouangolodougou",
    "address": "Avenue Principale, Ouangolodougou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Ouangolodougou",
    "phones": [
      "+225 27 95 12 83",
      "+225 07 09691068"
    ],
    "whatsapp": "+2250709691068",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 9.5776,
    "lng": -5.2251,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 34,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-132",
    "name": "Pharmacie Principale de Danané",
    "region": "Tonkpi",
    "city": "Danané",
    "commune": "Danané",
    "neighborhood": "Quartier Résidentiel de Danané",
    "address": "Avenue Principale, Danané",
    "landmark": "À 100m du Grand Marché et de la Mairie de Danané",
    "phones": [
      "+225 27 71 80 63",
      "+225 07 09799383"
    ],
    "whatsapp": "+2250709799383",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.3855,
    "lng": -7.5623,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.7,
    "reviewsCount": 58,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-133",
    "name": "Pharmacie Principale de Biankouma",
    "region": "Tonkpi",
    "city": "Biankouma",
    "commune": "Biankouma",
    "neighborhood": "Quartier Résidentiel de Biankouma",
    "address": "Avenue Principale, Biankouma",
    "landmark": "À 100m du Grand Marché et de la Mairie de Biankouma",
    "phones": [
      "+225 27 29 82 48",
      "+225 07 01004668"
    ],
    "whatsapp": "+2250701004668",
    "isOnDuty": true,
    "isOpen24h": true,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "24h/24 et 7j/7 - Service de Garde Hebdomadaire"
    },
    "lat": 7.3746,
    "lng": -7.5657,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 51,
    "dutyGroup": "Groupe A",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-134",
    "name": "Pharmacie Principale de Sipilou",
    "region": "Tonkpi",
    "city": "Sipilou",
    "commune": "Sipilou",
    "neighborhood": "Quartier Résidentiel de Sipilou",
    "address": "Avenue Principale, Sipilou",
    "landmark": "À 100m du Grand Marché et de la Mairie de Sipilou",
    "phones": [
      "+225 27 98 86 33",
      "+225 07 01579530"
    ],
    "whatsapp": "+2250701579530",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.4202,
    "lng": -7.5765,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 77,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-135",
    "name": "Pharmacie Principale de Zouan-Hounien",
    "region": "Tonkpi",
    "city": "Zouan-Hounien",
    "commune": "Zouan-Hounien",
    "neighborhood": "Quartier Résidentiel de Zouan-Hounien",
    "address": "Avenue Principale, Zouan-Hounien",
    "landmark": "À 100m du Grand Marché et de la Mairie de Zouan-Hounien",
    "phones": [
      "+225 27 82 47 03",
      "+225 07 05191857"
    ],
    "whatsapp": "+2250705191857",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.4195,
    "lng": -7.5342,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.4,
    "reviewsCount": 77,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  },
  {
    "id": "pharma-136",
    "name": "Pharmacie Principale de Kani",
    "region": "Worodougou",
    "city": "Kani",
    "commune": "Kani",
    "neighborhood": "Quartier Résidentiel de Kani",
    "address": "Avenue Principale, Kani",
    "landmark": "À 100m du Grand Marché et de la Mairie de Kani",
    "phones": [
      "+225 27 66 61 61",
      "+225 07 03007136"
    ],
    "whatsapp": "+2250703007136",
    "isOnDuty": false,
    "isOpen24h": false,
    "openingHours": {
      "weekday": "07h30 - 20h00",
      "weekend": "08h00 - 18h00 (Permanence)",
      "dutyHours": "Ouvert de jour"
    },
    "lat": 7.9664,
    "lng": -6.6685,
    "services": [
      "Garde de nuit 24h",
      "Tensiomètre gratuit",
      "Conseils Paludisme",
      "Test Palu TDR Rapide"
    ],
    "insurances": [
      "CNAM (Couverture Maladie Universelle)",
      "MUGEF-CI",
      "ASCOMA",
      "SAHAM",
      "AXA Assurances"
    ],
    "availableMedications": [
      {
        "id": "m1",
        "name": "Paracétamol Biogaran 1g",
        "category": "Antidouleur",
        "inStock": true,
        "priceCFA": 1200
      },
      {
        "id": "m2",
        "name": "Coartem 80/480mg (Antipaludéen)",
        "category": "Paludisme",
        "inStock": true,
        "priceCFA": 3800
      },
      {
        "id": "m3",
        "name": "Amoxicilline 500mg",
        "category": "Antibiotique",
        "inStock": true,
        "priceCFA": 2500
      },
      {
        "id": "m4",
        "name": "Spasfon Lyoc 80mg",
        "category": "Urgences",
        "inStock": true,
        "priceCFA": 2200
      },
      {
        "id": "m5",
        "name": "Sérum Physiologique Gilbert",
        "category": "Pédiatrie",
        "inStock": true,
        "priceCFA": 1500
      }
    ],
    "rating": 4.8,
    "reviewsCount": 82,
    "dutyGroup": "Groupe B",
    "dutyPeriodDates": "Semaine de Garde en cours"
  }
];
