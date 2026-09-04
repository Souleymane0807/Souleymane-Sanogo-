import { EmergencyContact } from '../types';

export const EMERGENCY_CONTACTS_CI: EmergencyContact[] = [
  {
    id: 'secours-118',
    shortCode: '118',
    title: 'GSPM - Sapeurs-Pompiers Militaires',
    department: 'Urgences & Secours National Côte d’Ivoire',
    description: 'Accidents de la route, incendies, secours à personnes, malaises graves, transport d’urgence.',
    standardPhone: '+225 27 20 22 22 22',
    category: 'secours',
    isPrimary118: true
  },
  {
    id: 'samu-185',
    shortCode: '185',
    title: 'SAMU Côte d’Ivoire',
    department: 'Service d’Aide Médicale d’Urgence',
    description: 'Assistance médicale d’urgence vitale, SMUR, régulation médicale et réanimation mobile 24h/24.',
    standardPhone: '+225 27 22 44 53 53',
    category: 'medical'
  },
  {
    id: 'police-170',
    shortCode: '170',
    title: 'Police Secours',
    department: 'Sécurité Publique & Intervention Rapide',
    description: 'Agression, insécurité, escorte médicale d’urgence ou assistance sécuritaire immédiate.',
    standardPhone: '+225 27 20 21 11 00',
    category: 'police'
  },
  {
    id: 'poison-100',
    shortCode: '100',
    title: 'Centre Anti-Poison (INHP)',
    department: 'Institut National d’Hygiène Publique',
    description: 'Morsures de serpents, intoxication alimentaire, empoisonnement aux pesticides ou produits ménagers.',
    standardPhone: '+225 27 20 21 34 23',
    category: 'poison'
  },
  {
    id: 'sante-143',
    shortCode: '143',
    title: 'Ligne Verte Ministère de la Santé',
    department: 'Orientation Sanitaire & Épidémies',
    description: 'Informations sanitaires officielles, orientation vers les CHU et centres de santé de garde.',
    standardPhone: '143',
    category: 'medical'
  }
];

export const FIRST_AID_TIPS = [
  {
    title: 'Morsure de serpent en Côte d’Ivoire',
    steps: [
      'Calmer immédiatement la victime et l’allonger.',
      'Immobiliser le membre atteint sans serrer excessivement (NE PAS faire de garrot serré).',
      'NE PAS inciser, sucer la plaie ou brûler.',
      'Appeler le 118 ou le Centre Anti-Poison (100) et se rendre dans la pharmacie de garde la plus proche disposant de sérum antivenimeux.'
    ]
  },
  {
    title: 'Que dire à l’opérateur du 118 ?',
    steps: [
      'Indiquez votre ville et commune exacte (ex: Cocody Angré 8ème tranche).',
      'Donnez un repère ivoirien précis (ex: "Face pharmacie Belle Épine", "À côté de la station").',
      'Décrivez l’état de la victime : consciente, respire-t-elle, blessures visibles ?',
      'Ne raccrochez jamais en premier : attendez les instructions du régulateur du GSPM.'
    ]
  },
  {
    title: 'Crise de Paludisme grave chez l’enfant',
    steps: [
      'Mesurer la température au thermomètre.',
      'Déshabiller l’enfant et poser une compresse d’eau tiède (non glacée) sur le front.',
      'Donner du Paracétamol selon le poids.',
      'En cas de convulsions ou vomissements répétés : urgence absolue au CHU ou pharmacie de garde 24h/24.'
    ]
  }
];
