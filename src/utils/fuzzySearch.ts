import { IVORY_COAST_REGIONS, ALL_CI_COMMUNES } from '../data/regionsCI';
import { Pharmacy } from '../types';

/**
 * Common abbreviations and Ivorian colloquial aliases for communes and regions
 */
export const IVORIAN_LOCATION_ALIASES: Record<string, string> = {
  // Communes & Towns
  yakro: 'Yamoussoukro',
  yamousokro: 'Yamoussoukro',
  yamossoukro: 'Yamoussoukro',
  babi: 'Abidjan',
  abj: 'Abidjan',
  bassam: 'Grand-Bassam',
  granbassam: 'Grand-Bassam',
  grandbassam: 'Grand-Bassam',
  sanpedro: 'San-Pédro',
  saintpedro: 'San-Pédro',
  agbo: 'Agboville',
  agbovile: 'Agboville',
  dalo: 'Daloa',
  bwake: 'Bouaké',
  bouake: 'Bouaké',
  treich: 'Treichville',
  trechville: 'Treichville',
  treishville: 'Treichville',
  treshville: 'Treichville',
  treicheville: 'Treichville',
  kokodi: 'Cocody',
  cokodi: 'Cocody',
  cocodi: 'Cocody',
  yop: 'Yopougon',
  yopougnon: 'Yopougon',
  yopgon: 'Yopougon',
  yopouon: 'Yopougon',
  yopoougon: 'Yopougon',
  markory: 'Marcory',
  marcorie: 'Marcory',
  koumasi: 'Koumassi',
  kumassi: 'Koumassi',
  kumasi: 'Koumassi',
  adjame: 'Adjamé',
  adjamey: 'Adjamé',
  adjamm: 'Adjamé',
  atecoube: 'Attécoubé',
  attecoube: 'Attécoubé',
  portbouet: 'Port-Bouët',
  portboue: 'Port-Bouët',
  bingervile: 'Bingerville',
  songon: 'Songon',
  korogo: 'Korhogo',
  khorogo: 'Korhogo',
  ferke: 'Ferkessédougou',
  ferkesedougou: 'Ferkessédougou',
  ouangolo: 'Ouangolodougou',
  ouangolodugu: 'Ouangolodougou',
  danane: 'Danané',
  seguela: 'Séguéla',
  aboboo: 'Abobo',
  abobo: 'Abobo',
  tiassale: 'Tiassalé',
  sinfra: 'Sinfra',
  vavoua: 'Vavoua',
  zouanhounien: 'Zouan-Hounien',
  zouan: 'Zouan-Hounien',
  dimbokro: 'Dimbokro',
  daoukro: 'Daoukro',
  bonoua: 'Bonoua',
  aboisso: 'Aboisso',
  boundiali: 'Boundiali',
  katiola: 'Katiola',
  tingrela: 'Tengréla',
  tengrela: 'Tengréla',

  // Regions
  gbeke: 'Gbêkê',
  gbéké: 'Gbêkê',
  nzi: "N'Zi",
  lohdjiboua: 'Lôh-Djiboua',
  marahoue: 'Marahoué',
  marahoué: 'Marahoué',
  sudcomoe: 'Sud-Comoé',
  hautsassandra: 'Haut-Sassandra',
  grandsponts: 'Grands-Ponts',
  agnebytiassa: 'Agnéby-Tiassa',
  agneby: 'Agnéby-Tiassa',
  indénié: 'Indénié-Djuablin',
  indenie: 'Indénié-Djuablin',
  indeniedjuablin: 'Indénié-Djuablin',
  worodugu: 'Worodougou',
  worodougou: 'Worodougou',
  gbokle: 'Gbôklé',
  goh: 'Gôh',
  gontougo: 'Gontougo',
  guemon: 'Guémon',
  hambol: 'Hambol',
  iffou: 'Iffou',
  kabadougou: 'Kabadougou',
  moronou: 'Moronou',
  nawa: 'Nawa',
  tchologo: 'Tchologo',
  tonkpi: 'Tonkpi'
};

/**
 * Strips accents, lowers case, trims and normalizes whitespaces
 */
export function normalizeText(text: string): string {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/['’`\-_\.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Strips all non-alphanumeric characters for compact comparison
 * e.g. "Port-Bouët" -> "portbouet", "N'Zi" -> "nzi"
 */
export function stripAllSeparators(text: string): string {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

/**
 * Phonetic normalization tailored to French and West African transliterations:
 * - c / k / qu -> c
 * - ph -> f
 * - y -> i
 * - ou / w -> u
 * - gn -> n
 * - collapses duplicate consecutive characters (e.g. ss -> s, tt -> t)
 * - removes silent 'h' (e.g. korhogo -> korogo)
 */
export function phoneticNormalize(text: string): string {
  let s = stripAllSeparators(text);
  if (!s) return '';

  // Phonetic substitutions
  s = s.replace(/ph/g, 'f');
  s = s.replace(/qu/g, 'c');
  s = s.replace(/k/g, 'c');
  s = s.replace(/y/g, 'i');
  s = s.replace(/ou/g, 'u');
  s = s.replace(/w/g, 'u');
  s = s.replace(/gn/g, 'n');
  s = s.replace(/h/g, ''); // removes silent h (korhogo -> korogo, daloah -> daloa)

  // Collapse consecutive identical consonants
  s = s.replace(/([a-z])\1+/g, '$1');

  return s;
}

/**
 * Standard Levenshtein Distance implementation with length difference early-exit
 */
export function levenshteinDistance(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const aLen = a.length;
  const bLen = b.length;

  // Single row dynamic programming
  let prevRow = new Array(bLen + 1);
  let currRow = new Array(bLen + 1);

  for (let j = 0; j <= bLen; j++) {
    prevRow[j] = j;
  }

  for (let i = 1; i <= aLen; i++) {
    currRow[0] = i;
    const aChar = a.charCodeAt(i - 1);

    for (let j = 1; j <= bLen; j++) {
      const cost = aChar === b.charCodeAt(j - 1) ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1, // deletion
        currRow[j - 1] + 1, // insertion
        prevRow[j - 1] + cost // substitution
      );
    }

    // Swap rows
    const temp = prevRow;
    prevRow = currRow;
    currRow = temp;
  }

  return prevRow[bLen];
}

/**
 * Checks if a search term matches a target location (commune or region) using fuzzy logic.
 * Returns { isMatch: boolean, score: number, reason: string }
 */
export function matchLocationFuzzy(
  searchTerm: string,
  targetLocationName: string
): { isMatch: boolean; score: number; reason: string } {
  const normQuery = normalizeText(searchTerm);
  const normTarget = normalizeText(targetLocationName);

  if (!normQuery || !normTarget) {
    return { isMatch: false, score: 0, reason: '' };
  }

  // 1. Exact match
  if (normTarget === normQuery) {
    return { isMatch: true, score: 1.0, reason: 'exact' };
  }

  const compactQuery = stripAllSeparators(searchTerm);
  const compactTarget = stripAllSeparators(targetLocationName);

  if (compactQuery === compactTarget) {
    return { isMatch: true, score: 1.0, reason: 'compact-exact' };
  }

  // 2. Known alias lookup (very high confidence)
  if (IVORIAN_LOCATION_ALIASES[compactQuery]) {
    const aliasTarget = stripAllSeparators(IVORIAN_LOCATION_ALIASES[compactQuery]);
    if (aliasTarget === compactTarget) {
      return { isMatch: true, score: 0.99, reason: 'alias' };
    }
  }

  // Substring match: only if query is at least 4 characters
  if (compactTarget.includes(compactQuery) && compactQuery.length >= 4) {
    // If target starts with query (e.g. "san pedro" in "san-pédro")
    const isPrefix = compactTarget.startsWith(compactQuery);
    return { isMatch: true, score: isPrefix ? 0.94 : 0.88, reason: 'compact-substring' };
  }

  // If query or target is short (<= 4 chars), do not do fuzzy edit distance unless exact phonetic match
  if (compactQuery.length <= 4 || compactTarget.length <= 4) {
    const phonQuery = phoneticNormalize(searchTerm);
    const phonTarget = phoneticNormalize(targetLocationName);
    if (phonQuery.length >= 4 && phonQuery === phonTarget) {
      return { isMatch: true, score: 0.90, reason: 'phonetic-exact' };
    }
    return { isMatch: false, score: 0, reason: '' };
  }

  // 3. Phonetic match
  const phonQuery = phoneticNormalize(searchTerm);
  const phonTarget = phoneticNormalize(targetLocationName);

  if (phonQuery.length >= 4 && phonTarget.length >= 4) {
    if (phonQuery === phonTarget) {
      return { isMatch: true, score: 0.92, reason: 'phonetic-exact' };
    }
  }

  // 4. Levenshtein Distance & Similarity Ratio
  const dist = levenshteinDistance(compactQuery, compactTarget);
  const maxLen = Math.max(compactQuery.length, compactTarget.length);
  const similarity = 1 - dist / maxLen;

  // Strict thresholds based on length:
  // length 5: dist <= 1 and sim >= 0.80
  // length 6-7: dist <= 2 and sim >= 0.70
  // length 8+: dist <= 2 or (dist <= 3 and sim >= 0.75)
  const isLenientMatch =
    (compactQuery.length === 5 && dist <= 1 && similarity >= 0.8) ||
    (compactQuery.length >= 6 && compactQuery.length <= 7 && dist <= 2 && similarity >= 0.7) ||
    (compactQuery.length >= 8 && dist <= 2) ||
    (compactQuery.length >= 10 && dist <= 3 && similarity >= 0.75);

  if (isLenientMatch) {
    return { isMatch: true, score: similarity * 0.9, reason: 'levenshtein' };
  }

  // Also check individual words of multi-word target (e.g. "Grand-Bassam" -> "Bassam")
  const targetWords = normTarget.split(/\s+/).filter((w) => w.length >= 4);
  for (const word of targetWords) {
    const compactWord = stripAllSeparators(word);
    if (compactQuery === compactWord) {
      return { isMatch: true, score: 0.95, reason: 'word-exact' };
    }
    const wordDist = levenshteinDistance(compactQuery, compactWord);
    const wordMaxLen = Math.max(compactQuery.length, compactWord.length);
    const wordSim = 1 - wordDist / wordMaxLen;
    if (wordDist <= 1 && compactQuery.length >= 4 && wordSim >= 0.75) {
      return { isMatch: true, score: wordSim * 0.85, reason: 'word-levenshtein' };
    }
  }

  return { isMatch: false, score: 0, reason: '' };
}

/**
 * Result of detecting communes and regions in a query
 */
export interface FuzzyLocationResult {
  matchedCommunes: string[];
  matchedRegions: string[];
  suggestion?: {
    originalWord: string;
    matchedName: string;
    type: 'commune' | 'region';
    score: number;
  };
}

/**
 * Scans a user query for mentions of any CI commune or region (with fuzzy tolerance)
 */
export function extractFuzzyLocations(query: string): FuzzyLocationResult {
  const normQuery = normalizeText(query);
  if (!normQuery || normQuery.length < 2) {
    return { matchedCommunes: [], matchedRegions: [] };
  }

  const matchedCommunesMap = new Map<string, number>();
  const matchedRegionsMap = new Map<string, number>();
  let bestSuggestion: FuzzyLocationResult['suggestion'] = undefined;

  // 1. Tokenize query into 1-word and 2-word tokens (e.g. "san pedro", "port bouet", "haut sassandra")
  const words = normQuery.split(/\s+/).filter((w) => w.length >= 2);
  const ngrams: string[] = [...words];

  for (let i = 0; i < words.length - 1; i++) {
    ngrams.push(`${words[i]} ${words[i + 1]}`);
  }

  // Also test the entire query if it has more than 2 words
  if (words.length > 2) {
    ngrams.push(normQuery);
  }

  // Pre-collected regions with chef-lieux
  const regionList = IVORY_COAST_REGIONS.map((r) => ({
    name: r.name,
    chefLieu: r.chefLieu
  }));

  // Check each ngram against communes & regions
  for (const token of ngrams) {
    // Check against communes
    for (const commune of ALL_CI_COMMUNES) {
      const match = matchLocationFuzzy(token, commune);
      if (match.isMatch) {
        const existingScore = matchedCommunesMap.get(commune) || 0;
        if (match.score > existingScore) {
          matchedCommunesMap.set(commune, match.score);
        }
        if (!bestSuggestion || match.score > bestSuggestion.score) {
          if (stripAllSeparators(token) !== stripAllSeparators(commune)) {
            bestSuggestion = {
              originalWord: token,
              matchedName: commune,
              type: 'commune',
              score: match.score
            };
          }
        }
      }
    }

    // Check against regions
    for (const reg of regionList) {
      // Check region name
      const regMatch = matchLocationFuzzy(token, reg.name);
      if (regMatch.isMatch) {
        const existingScore = matchedRegionsMap.get(reg.name) || 0;
        if (regMatch.score > existingScore) {
          matchedRegionsMap.set(reg.name, regMatch.score);
        }
        if (!bestSuggestion || regMatch.score > bestSuggestion.score) {
          if (stripAllSeparators(token) !== stripAllSeparators(reg.name)) {
            bestSuggestion = {
              originalWord: token,
              matchedName: reg.name,
              type: 'region',
              score: regMatch.score
            };
          }
        }
      }

      // Check chef-lieu as pointing to region
      const chefMatch = matchLocationFuzzy(token, reg.chefLieu);
      if (chefMatch.isMatch) {
        const existingScore = matchedRegionsMap.get(reg.name) || 0;
        if (chefMatch.score * 0.9 > existingScore) {
          matchedRegionsMap.set(reg.name, chefMatch.score * 0.9);
        }
      }
    }
  }

  // Sort communes and regions by highest score
  const sortedCommunes = Array.from(matchedCommunesMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name]) => name);

  const sortedRegions = Array.from(matchedRegionsMap.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name]) => name);

  return {
    matchedCommunes: sortedCommunes,
    matchedRegions: sortedRegions,
    suggestion: bestSuggestion
  };
}

/**
 * Evaluates whether a pharmacy matches a search query using both direct and fuzzy location matching.
 */
export function matchesPharmacyFuzzy(
  pharma: Pharmacy,
  rawSearchQuery: string,
  fuzzyLocs: FuzzyLocationResult
): boolean {
  const cleanQuery = normalizeText(rawSearchQuery);
  if (!cleanQuery) return true;

  const pharmaNameNorm = normalizeText(pharma.name);
  const pharmaCommuneNorm = normalizeText(pharma.commune);
  const pharmaNeighborhoodNorm = normalizeText(pharma.neighborhood);
  const pharmaLandmarkNorm = normalizeText(pharma.landmark);
  const pharmaCityNorm = normalizeText(pharma.city || '');
  const pharmaRegionNorm = normalizeText(pharma.region || '');

  // 1. Direct standard substring matches
  if (
    pharmaNameNorm.includes(cleanQuery) ||
    pharmaCommuneNorm.includes(cleanQuery) ||
    pharmaNeighborhoodNorm.includes(cleanQuery) ||
    pharmaLandmarkNorm.includes(cleanQuery) ||
    pharmaCityNorm.includes(cleanQuery) ||
    pharmaRegionNorm.includes(cleanQuery) ||
    pharma.availableMedications.some(
      (m) => normalizeText(m.name).includes(cleanQuery) || normalizeText(m.category).includes(cleanQuery)
    ) ||
    pharma.services.some((s) => normalizeText(s).includes(cleanQuery))
  ) {
    return true;
  }

  // 2. Fuzzy Location Matches (Commune or Region)
  const hasMatchingFuzzyCommune = fuzzyLocs.matchedCommunes.some(
    (c) => normalizeText(c) === pharmaCommuneNorm || stripAllSeparators(c) === stripAllSeparators(pharma.commune)
  );

  const hasMatchingFuzzyRegion = pharma.region
    ? fuzzyLocs.matchedRegions.some(
        (r) => normalizeText(r) === pharmaRegionNorm || stripAllSeparators(r) === stripAllSeparators(pharma.region!)
      )
    : false;

  const hasMatchingFuzzyCity =
    fuzzyLocs.matchedCommunes.some((c) => normalizeText(c) === pharmaCityNorm) ||
    fuzzyLocs.matchedRegions.some((r) => normalizeText(r) === pharmaCityNorm);

  if (hasMatchingFuzzyCommune || hasMatchingFuzzyRegion || hasMatchingFuzzyCity) {
    // If the query was purely a location or common prefix like "pharmacie", "garde", "de garde"
    const stopWords = new Set(['pharmacie', 'pharmacies', 'pharma', 'de', 'garde', 'urgence', 'urgences', 'a', 'en', 'dans', 'le', 'la', 'les', 'du']);
    const queryTokens = cleanQuery.split(/\s+/).filter((w) => w.length >= 2);

    // Filter out tokens that matched any location or are stop words
    const otherTokens = queryTokens.filter((token) => {
      if (stopWords.has(token)) return false;
      const matchesAnyLoc =
        fuzzyLocs.matchedCommunes.some((c) => matchLocationFuzzy(token, c).isMatch) ||
        fuzzyLocs.matchedRegions.some((r) => matchLocationFuzzy(token, r).isMatch);
      return !matchesAnyLoc;
    });

    // If no other restrictive keyword was typed, matching the location is sufficient
    if (otherTokens.length === 0) {
      return true;
    }

    // If there ARE other keywords (e.g. "doliprane kokodi"), all other tokens must match pharmacy details
    const allOtherTokensMatch = otherTokens.every((token) => {
      return (
        pharmaNameNorm.includes(token) ||
        pharmaNeighborhoodNorm.includes(token) ||
        pharmaLandmarkNorm.includes(token) ||
        pharma.availableMedications.some(
          (m) => normalizeText(m.name).includes(token) || normalizeText(m.category).includes(token)
        ) ||
        pharma.services.some((s) => normalizeText(s).includes(token))
      );
    });

    if (allOtherTokensMatch) {
      return true;
    }
  }

  // 3. Direct fuzzy match on commune or region name if query is a single word
  if (matchLocationFuzzy(cleanQuery, pharma.commune).isMatch) {
    return true;
  }
  if (pharma.region && matchLocationFuzzy(cleanQuery, pharma.region).isMatch) {
    return true;
  }
  if (pharma.city && matchLocationFuzzy(cleanQuery, pharma.city).isMatch) {
    return true;
  }

  return false;
}
