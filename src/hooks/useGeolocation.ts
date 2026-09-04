import { useState, useEffect } from 'react';

export interface Coords {
  lat: number;
  lng: number;
  accuracy?: number;
  name?: string;
}

export const PRESET_LOCATIONS: Coords[] = [
  { lat: 5.3421, lng: -4.0094, name: 'Cocody (St-Jean)' },
  { lat: 5.3582, lng: -4.0041, name: 'Cocody (2 Plateaux)' },
  { lat: 5.3378, lng: -4.0674, name: 'Yopougon (Siporex)' },
  { lat: 5.3218, lng: -4.0195, name: 'Plateau (Centre)' },
  { lat: 5.2891, lng: -3.9876, name: 'Marcory (Zone 4)' },
  { lat: 5.3012, lng: -4.0089, name: 'Treichville' },
  { lat: 5.4190, lng: -4.0180, name: 'Abobo' },
  { lat: 6.8190, lng: -5.2750, name: 'Yamoussoukro' },
  { lat: 7.6890, lng: -5.0310, name: 'Bouaké' },
  { lat: 4.7489, lng: -6.6380, name: 'San-Pédro' }
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
