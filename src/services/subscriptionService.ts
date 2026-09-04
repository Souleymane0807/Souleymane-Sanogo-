import { UserSubscription } from '../types';

export const PAYMENT_CONFIG = {
  wavePayUrl: 'https://pay.wave.com/m/M_ci_gFnOjeceocKS/c/ci/',
  beneficiaryName: 'Max adiko Clovis Garal',
  marketingEmail: 'adikomaxclovis@gmail.com',
  managerName: 'Sanogo Souleymane',
  notificationEmail: 'sanogosouleymane1964@gmail.com',
  location: 'Abidjan, Côte d’Ivoire'
};

// Default recognized confirmation codes issued by Max adiko Clovis Garal
export const DEFAULT_CONFIRMATION_CODES = [
  'GARAL2026',
  'MAX225',
  'SANOGO1964',
  'ADIKO77',
  'PHARMA225',
  'WAVE2026'
];

export interface AdminConfirmationState {
  isConfirmed: boolean;
  code?: string;
  confirmedAt?: string;
  issuer?: string;
  role?: 'admin' | 'subscriber' | 'user';
}

/**
 * Returns all active confirmation codes (defaults + dynamically created ones)
 */
export function getAllValidConfirmationCodes(): string[] {
  try {
    const customCodes: string[] = JSON.parse(
      localStorage.getItem('pharmacies_ci_generated_codes') || '[]'
    );
    return Array.from(new Set([...DEFAULT_CONFIRMATION_CODES, ...customCodes].map(c => c.trim().toUpperCase())));
  } catch {
    return DEFAULT_CONFIRMATION_CODES;
  }
}

/**
 * Validates a confirmation code sent by Max adiko Clovis Garal
 */
export function verifyConfirmationCode(inputCode: string): {
  valid: boolean;
  role: 'admin' | 'subscriber';
  issuer: string;
} {
  const normalized = (inputCode || '').trim().toUpperCase();
  const validCodes = getAllValidConfirmationCodes();

  if (!normalized) {
    return { valid: false, role: 'subscriber', issuer: 'Max adiko Clovis Garal' };
  }

  // Master admin codes
  const masterCodes = ['GARAL2026', 'MAX225', 'SANOGO1964', 'ADIKO77'];
  if (masterCodes.includes(normalized)) {
    return {
      valid: true,
      role: 'admin',
      issuer: 'Max adiko Clovis Garal & Sanogo Souleymane'
    };
  }

  // General valid subscriber / app codes
  if (validCodes.includes(normalized) || normalized.startsWith('GARAL-') || normalized.startsWith('CI-')) {
    return {
      valid: true,
      role: 'subscriber',
      issuer: 'Max adiko Clovis Garal (Responsable Marketing, Abidjan)'
    };
  }

  return { valid: false, role: 'subscriber', issuer: 'Max adiko Clovis Garal' };
}

/**
 * Checks if the user or admin has already validated access with a confirmation code
 */
export function getStoredAppConfirmation(): AdminConfirmationState {
  try {
    const stored = localStorage.getItem('pharmacies_ci_app_confirmed');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Fallback
  }
  return { isConfirmed: false };
}

/**
 * Saves successful confirmation
 */
export function saveAppConfirmation(code: string, role: 'admin' | 'subscriber'): void {
  const state: AdminConfirmationState = {
    isConfirmed: true,
    code: code.trim().toUpperCase(),
    confirmedAt: new Date().toISOString(),
    issuer: 'Max adiko Clovis Garal',
    role
  };
  localStorage.setItem('pharmacies_ci_app_confirmed', JSON.stringify(state));
}

/**
 * Ensures an active UserSubscription object exists for confirmed users
 */
export function ensureActiveSubscription(code: string = 'GARAL2026', userName: string = '', phone: string = ''): UserSubscription {
  try {
    const existing = localStorage.getItem('pharmacies_ci_subscription');
    if (existing) {
      const parsed = JSON.parse(existing);
      if (parsed && parsed.status === 'active') {
        return parsed;
      }
    }
  } catch {
    // fallback
  }

  const now = new Date();
  const expires = new Date();
  expires.setMonth(expires.getMonth() + 1);
  const randomMemberNum = Math.floor(1000 + Math.random() * 9000);

  const newSub: UserSubscription = {
    id: 'sub-' + Date.now(),
    memberId: `PCI-225-${randomMemberNum}`,
    userName: userName.trim() || 'Adhérent Pass VIP CI',
    phone: phone.trim() || '+225',
    commune: 'Cocody',
    planName: 'Abonnement VIP 1000F',
    priceCFA: 1000,
    paymentMethod: 'wave',
    status: 'active',
    activatedAt: now.toLocaleDateString('fr-FR'),
    expiresAt: expires.toLocaleDateString('fr-FR'),
    receiveSMSAlerts: true,
    receiveWhatsAppAlerts: true,
    digitalPassQr: `PHARMACIES-CI-VIP-${code || 'GARAL2026'}`
  };

  try {
    localStorage.setItem('pharmacies_ci_subscription', JSON.stringify(newSub));
  } catch {
    // ignore
  }

  return newSub;
}

/**
 * Revokes confirmation
 */
export function clearAppConfirmation(): void {
  localStorage.removeItem('pharmacies_ci_app_confirmed');
}

/**
 * Creates and registers a new confirmation code (for admins Max & Sanogo)
 */
export function registerNewConfirmationCode(code: string, recipientName: string = ''): string {
  const cleanCode = code.trim().toUpperCase();
  try {
    const customCodes: string[] = JSON.parse(
      localStorage.getItem('pharmacies_ci_generated_codes') || '[]'
    );
    if (!customCodes.includes(cleanCode)) {
      customCodes.push(cleanCode);
      localStorage.setItem('pharmacies_ci_generated_codes', JSON.stringify(customCodes));
    }

    // Also record history
    const logs = JSON.parse(localStorage.getItem('pharmacies_ci_code_history') || '[]');
    logs.unshift({
      code: cleanCode,
      recipientName,
      createdAt: new Date().toISOString(),
      issuedBy: 'Max adiko Clovis Garal'
    });
    localStorage.setItem('pharmacies_ci_code_history', JSON.stringify(logs.slice(0, 50)));
  } catch (e) {
    console.error('Failed to save custom confirmation code', e);
  }
  return cleanCode;
}

/**
 * Checks if app mandatory lock mode is enabled in admin settings.
 * Defaults to false so users can freely explore pharmacies before subscribing.
 */
export function isAppLockEnforced(): boolean {
  try {
    const lock = localStorage.getItem('pharmacies_ci_enforce_code_lock');
    return lock === 'true';
  } catch {
    return false;
  }
}

export function setAppLockEnforced(enforce: boolean): void {
  try {
    localStorage.setItem('pharmacies_ci_enforce_code_lock', String(enforce));
  } catch (e) {
    console.error(e);
  }
}

export interface SubscriptionNotificationPayload {
  subscriberName: string;
  subscriberPhone: string;
  commune: string;
  memberId: string;
  amountCFA: number;
  planName: string;
  paymentMethod: string;
  activatedAt: string;
  expiresAt: string;
}

/**
 * Triggers notification to the designated managers (Sanogo Souleymane & Max adiko Clovis Garal)
 */
export function recordSubscriptionAndNotify(subscription: UserSubscription): {
  mailToUrl: string;
  whatsAppUrl: string;
} {
  const subject = `[Pharmacies CI] Nouvel Abonnement de ${subscription.userName} - ${subscription.memberId}`;
  
  const body = `Bonjour M. Sanogo Souleymane et M. Max adiko Clovis Garal,

Un nouvel abonnement a été souscrit sur l'application Pharmacies CI :

- Titulaire : ${subscription.userName}
- Téléphone : ${subscription.phone}
- Commune / Ville : ${subscription.commune}
- N° Adhérent : ${subscription.memberId}
- Formule : ${subscription.planName}
- Montant : ${subscription.priceCFA.toLocaleString('fr-FR')} FCFA
- Moyen de paiement : ${subscription.paymentMethod.toUpperCase()}
- Lien de règlement Wave : ${PAYMENT_CONFIG.wavePayUrl}
- Date d'activation : ${subscription.activatedAt}
- Échéance : ${subscription.expiresAt}
- Alertes WhatsApp : ${subscription.receiveWhatsAppAlerts ? 'OUI' : 'NON'}
- Alertes SMS : ${subscription.receiveSMSAlerts ? 'OUI' : 'NON'}

Notification automatique générée par Pharmacies CI.
Destinataires : ${PAYMENT_CONFIG.notificationEmail}, ${PAYMENT_CONFIG.marketingEmail}`;

  const mailToUrl = `mailto:${PAYMENT_CONFIG.notificationEmail}?cc=${encodeURIComponent(
    PAYMENT_CONFIG.marketingEmail
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const whatsAppText = `🔔 *NOUVEL ABONNEMENT PHARMACIES CI*\n\n` +
    `👤 *Titulaire :* ${subscription.userName}\n` +
    `📱 *Téléphone :* ${subscription.phone}\n` +
    `📍 *Commune :* ${subscription.commune}\n` +
    `💳 *N° Adhérent :* ${subscription.memberId}\n` +
    `💰 *Montant :* ${subscription.priceCFA.toLocaleString('fr-FR')} FCFA (${subscription.paymentMethod.toUpperCase()})\n` +
    `📅 *Validité :* ${subscription.activatedAt} au ${subscription.expiresAt}\n\n` +
    `Notification transmise à M. Sanogo Souleymane (${PAYMENT_CONFIG.notificationEmail}) et M. Max adiko Clovis Garal.`;

  const whatsAppUrl = `https://wa.me/?text=${encodeURIComponent(whatsAppText)}`;

  // Store in local history
  try {
    const existingLogs = JSON.parse(localStorage.getItem('pharmacies_ci_subscription_logs') || '[]');
    existingLogs.unshift({
      timestamp: new Date().toISOString(),
      subscription,
      notifiedEmails: [PAYMENT_CONFIG.notificationEmail, PAYMENT_CONFIG.marketingEmail]
    });
    localStorage.setItem('pharmacies_ci_subscription_logs', JSON.stringify(existingLogs.slice(0, 50)));
  } catch (e) {
    console.error('Failed to log subscription notification', e);
  }

  return { mailToUrl, whatsAppUrl };
}
