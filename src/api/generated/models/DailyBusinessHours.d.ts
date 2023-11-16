import type { BusinessHoursPeriod } from './BusinessHoursPeriod';
export type DailyBusinessHours = {
    /**
     * some message to customer
     */
    hint: string;
    periods: Array<BusinessHoursPeriod>;
};
