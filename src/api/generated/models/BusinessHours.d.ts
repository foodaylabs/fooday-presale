import type { DailyBusinessHours } from './DailyBusinessHours';
/**
 * ex.
 * * "0": {...}// Sunday
 * * "1": {...} // Monday
 * * "2022-03-01": {...} // Special Setting for specific day
 *
 */
export type BusinessHours = Record<string, DailyBusinessHours>;
