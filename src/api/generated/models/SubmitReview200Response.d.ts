import type { PrivateUser } from './PrivateUser';
import type { Review } from './Review';
import type { Spot } from './Spot';
import type { Transaction } from './Transaction';
export type SubmitReview200Response = {
    transaction: Transaction;
    spot: Spot;
    review: Review;
    author: PrivateUser;
};
