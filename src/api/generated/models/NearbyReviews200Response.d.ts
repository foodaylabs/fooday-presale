import type { Review } from './Review';
import type { Spot } from './Spot';
export type NearbyReviews200Response = {
    reviews: Array<Review>;
    spots: Record<string, Spot>;
};
