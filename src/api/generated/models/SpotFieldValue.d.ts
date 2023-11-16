import type { BusinessHoursUpdate } from './BusinessHoursUpdate';
import type { FoodCategoryUpdate } from './FoodCategoryUpdate';
import type { PaymentMethodsUpdate } from './PaymentMethodsUpdate';
import type { PhoneNumberUpdate } from './PhoneNumberUpdate';
import type { SpotAddressUpdate } from './SpotAddressUpdate';
import type { SpotNameUpdate } from './SpotNameUpdate';
import type { WebsiteUpdate } from './WebsiteUpdate';
export type SpotFieldValue = (SpotNameUpdate | SpotAddressUpdate | PhoneNumberUpdate | BusinessHoursUpdate | FoodCategoryUpdate | PaymentMethodsUpdate | WebsiteUpdate);
