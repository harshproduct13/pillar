// The Moon's sidereal (Lahiri) longitude at birth. Astronomy Engine (MIT) gives the tropical longitude
// of date to about one arc-minute; we subtract the Lahiri ayanamsa. Place of birth does not change the
// Moon's star (the calculation is geocentric, as Indian almanacs do), so only date and time are needed.
import { EclipticGeoMoon, MakeTime } from 'astronomy-engine';

// Lahiri (Chitrapaksha) ayanamsa: 23°51'25.5" at J2000.0, growing with general precession.
export function lahiri(date: Date): number {
  const T = (date.getTime() / 86400000 + 2440587.5 - 2451545.0) / 36525;
  return 23.857092 + 1.396971 * T + 0.000308 * T * T;
}

// date 'YYYY-MM-DD', time 'HH:MM' local clock time; utcOffsetMinutes defaults to IST (+5:30).
export function moonAtBirth(date: string, time: string | null, utcOffsetMinutes = 330): { deg: number; approximate: boolean } {
  const [y, m, d] = date.split('-').map(Number);
  const [hh, mm] = (time || '12:00').split(':').map(Number);
  const utc = new Date(Date.UTC(y, m - 1, d, hh, mm) - utcOffsetMinutes * 60000);
  const tropical = EclipticGeoMoon(MakeTime(utc)).lon;
  const deg = (((tropical - lahiri(utc)) % 360) + 360) % 360;
  return { deg, approximate: !time };
}
