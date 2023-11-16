import type { AverageCost } from './AverageCost';
import type { AverageRating } from './AverageRating';
import type { BusinessHours } from './BusinessHours';
import type { CategorizedMedia } from './CategorizedMedia';
import type { Currency } from './Currency';
import type { FoodCategory } from './FoodCategory';
import type { Media } from './Media';
import type { PaymentMethods } from './PaymentMethods';
import type { PendingChallenge } from './PendingChallenge';
import type { PhoneNumber } from './PhoneNumber';
import type { PublicUser } from './PublicUser';
import type { RatingDistribution } from './RatingDistribution';
import type { SpotAddress } from './SpotAddress';
import type { SpotName } from './SpotName';
import type { SpotStatus } from './SpotStatus';
import type { SpotUpdate } from './SpotUpdate';
import type { Time } from './Time';
import type { URI } from './URI';
export type Spot = {
    id: string;
    name: SpotName;
    status: SpotStatus;
    user?: PublicUser;
    media: Array<Media>;
    businessHours?: BusinessHours;
    category: FoodCategory;
    paymentMethods: PaymentMethods;
    avgCost: AverageCost;
    avgRating: AverageRating;
    totalReviewCount: number;
    timezoneOffset: number;
    address: SpotAddress;
    acceptedCurrencies: Array<Currency>;
    phone?: PhoneNumber;
    callingCode?: number;
    website?: URI;
    updatedAt: Time;
    createdAt: Time;
    canUpdateAfter: Time;
    /**
     * The number of reviews of the currently logged-in user.
     */
    myReviewCount?: number;
    categorizedMedia: Array<CategorizedMedia>;
    lastVisitedTime?: Time;
    ratingDistribution: RatingDistribution;
    /**
     * If the spot is suspected duplicated spot, this field is set to duplicated spot.
     * If not, this field is not set.
     *
     */
    suspectedDuplicatedSpotId?: string;
    updates?: Array<SpotUpdate>;
    version: Time;
    /**
     * This field is only effective in list case
     */
    pendingVerification: boolean;
    /**
     * This field is only effective in get case
     */
    pendingChallenges?: Array<PendingChallenge>;
};
