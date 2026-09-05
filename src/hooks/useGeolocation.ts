import { useState, useEffect } from 'react';

export interface Coords {
  lat: number;
  lng: number;
  accuracy?: number;
  name?: string;
}

export const PRESET_LOCATIONS: Coords[] = [
  // District Autonome d'Abidjan
  { lat: 5.3421, lng: -4.0094, name: 'Abidjan - Cocody (St-Jean)' },
  { lat: 5.3582, lng: -4.0041, name: 'Abidjan - Cocody (2 Plateaux)' },
  { lat: 5.3378, lng: -4.0674, name: 'Abidjan - Yopougon (Siporex)' },
  { lat: 5.3218, lng: -4.0195, name: 'Abidjan - Plateau' },
  { lat: 5.2891, lng: -3.9876, name: 'Abidjan - Marcory' },
  { lat: 5.3012, lng: -4.0089, name: 'Abidjan - Treichville' },
  { lat: 5.4190, lng: -4.0180, name: 'Abidjan - Abobo' },
  // District Autonome de Yamoussoukro
  { lat: 6.8190, lng: -5.2750, name: 'Yamoussoukro (District Autonome)' },
  // 31 Régions de Côte d'Ivoire
  { lat: 5.9280, lng: -4.2180, name: 'Agnéby-Tiassa (Agboville)' },
  { lat: 8.2833, lng: -7.6833, name: 'Bafing (Touba)' },
  { lat: 9.5217, lng: -6.4869, name: 'Bagoué (Boundiali)' },
  { lat: 6.5500, lng: -5.0167, name: 'Bélier (Toumodi)' },
  { lat: 8.0586, lng: -6.1897, name: 'Béré (Mankono)' },
  { lat: 9.2667, lng: -2.9833, name: 'Bounkani (Bouna)' },
  { lat: 6.5437, lng: -7.4936, name: 'Cavally (Guiglo)' },
  { lat: 9.9986, lng: -7.8347, name: 'Folon (Minignan)' },
  { lat: 7.6890, lng: -5.0310, name: 'Gbêkê (Bouaké)' },
  { lat: 4.9538, lng: -6.0853, name: 'Gbôklé (Sassandra)' },
  { lat: 6.1319, lng: -5.9506, name: 'Gôh (Gagnoa)' },
  { lat: 8.0402, lng: -2.8000, name: 'Gontougo (Bondoukou)' },
  { lat: 5.3256, lng: -4.3767, name: 'Grands-Ponts (Dabou)' },
  { lat: 6.7419, lng: -7.3497, name: 'Guémon (Duékoué)' },
  { lat: 8.1372, lng: -5.1008, name: 'Hambol (Katiola)' },
  { lat: 6.8770, lng: -6.4502, name: 'Haut-Sassandra (Daloa)' },
  { lat: 7.0591, lng: -3.9631, name: 'Iffou (Daoukro)' },
  { lat: 6.7297, lng: -3.4964, name: 'Indénié-Djuablin (Abengourou)' },
  { lat: 9.5051, lng: -7.5643, name: 'Kabadougou (Odienné)' },
  { lat: 5.8374, lng: -5.3572, name: 'Lôh-Djiboua (Divo)' },
  { lat: 6.9904, lng: -5.7442, name: 'Marahoué (Bouaflé)' },
  { lat: 6.1069, lng: -3.8619, name: 'Mé (Adzopé)' },
  { lat: 6.6496, lng: -4.2041, name: 'Moronou (Bongouanou)' },
  { lat: 5.7856, lng: -6.6083, name: 'Nawa (Soubré)' },
  { lat: 6.6467, lng: -4.7052, name: 'N’Zi (Dimbokro)' },
  { lat: 9.4580, lng: -5.6296, name: 'Poro (Korhogo)' },
  { lat: 4.7489, lng: -6.6380, name: 'San-Pédro (San-Pédro)' },
  { lat: 5.4678, lng: -3.2072, name: 'Sud-Comoé (Aboisso)' },
  { lat: 9.6000, lng: -5.2000, name: 'Tchologo (Ferkessédougou)' },
  { lat: 7.4125, lng: -7.5538, name: 'Tonkpi (Man)' },
  { lat: 7.9611, lng: -6.6731, name: 'Worodougou (Séguéla)' }
];

export function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Rayon de la terre en km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`;
  }
  return `${distanceKm.toFixed(1)} km`;
}

export function useGeolocation() {
  // Default to Cocody, Abidjan
  const [currentCoords, setCurrentCoords] = useState<Coords>({
    lat: 5.3450,
    lng: -4.0080,
    name: 'Abidjan (Cocody)'
  });
  const [isLocating, setIsLocating] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);
  const [isUsingRealGps, setIsUsingRealGps] = useState(false);

  const requestRealLocation = () => {
    if (!navigator.geolocation) {
      setGeoError("La géolocalisation n'est pas supportée par votre navigateur.");
      return;
    }

    setIsLocating(true);
    setGeoError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          name: 'Ma position GPS réelle'
        });
        setIsUsingRealGps(true);
        setIsLocating(false);
      },
      (error) => {
        let msg = "Impossible d'accéder au GPS.";
        if (error.code === error.PERMISSION_DENIED) {
          msg = "Permission de géolocalisation refusée.";
        }
        setGeoError(msg);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  const setManualLocation = (preset: Coords) => {
    setCurrentCoords(preset);
    setIsUsingRealGps(false);
    setGeoError(null);
  };

  return {
    currentCoords,
    isLocating,
    geoError,
    isUsingRealGps,
    requestRealLocation,
    setManualLocation,
    presetLocations: PRESET_LOCATIONS
  };
}
