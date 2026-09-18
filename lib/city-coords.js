export const CITY_COORDS = {
  mussoorie: { lat: 30.4598, lng: 78.0664 },
  dehradun: { lat: 30.3165, lng: 78.0322 },
  bangalore: { lat: 12.9716, lng: 77.5946 },
  shimla: { lat: 31.1048, lng: 77.1734 },
  hyderabad: { lat: 17.385, lng: 78.4867 },
  nainital: { lat: 29.3919, lng: 79.4542 },
  panchgani: { lat: 17.9244, lng: 73.8020 },
  pune: { lat: 18.5204, lng: 73.8567 },
  jaipur: { lat: 26.9124, lng: 75.7873 },
};

// city name -> state, used to answer "show me this state's schools"
export const CITY_STATE_MAP = {
  mussoorie: "Uttarakhand",
  dehradun: "Uttarakhand",
  nainital: "Uttarakhand",
  bangalore: "Karnataka",
  shimla: "Himachal Pradesh",
  hyderabad: "Telangana",
  panchgani: "Maharashtra",
  pune: "Maharashtra",
  jaipur: "Rajasthan",
};

export const STATES = [...new Set(Object.values(CITY_STATE_MAP))].sort();

export function distanceKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h)));
}

// finds the closest known city to a lat/lng pair
export function nearestCity(coords) {
  let best = null;
  let bestKm = Infinity;
  for (const [name, c] of Object.entries(CITY_COORDS)) {
    const km = distanceKm(coords, c);
    if (km < bestKm) {
      bestKm = km;
      best = name;
    }
  }
  return best ? { city: best, state: CITY_STATE_MAP[best], km: bestKm } : null;
}