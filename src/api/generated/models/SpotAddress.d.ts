import type { Country } from './Country';
import type { Location } from './Location';
export type SpotAddress = {
    location: Location;
    address: string;
    note?: string;
    country: Country;
    city: string;
    postalCode: string;
};
