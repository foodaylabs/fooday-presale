import type { BusinessHours } from './BusinessHours';
import type { FoodCategory } from './FoodCategory';
import type { PaymentMethods } from './PaymentMethods';
import type { PhoneNumber } from './PhoneNumber';
import type { SpotAddress } from './SpotAddress';
import type { SpotName } from './SpotName';
import type { URI } from './URI';
export type SpotCreationObject = {
    address: SpotAddress;
    phone?: PhoneNumber;
    paymentMethods?: PaymentMethods;
    name: SpotName;
    website?: URI;
    businessHours?: BusinessHours;
    category: FoodCategory;
};
