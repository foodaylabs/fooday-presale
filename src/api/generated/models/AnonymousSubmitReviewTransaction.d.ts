import type { Review } from './Review';
import type { Spot } from './Spot';
import type { Time } from './Time';
import type { TransactionStatus } from './TransactionStatus';
export type AnonymousSubmitReviewTransaction = {
    id: string;
    status: TransactionStatus;
    spot: Spot;
    review: Review;
    updatedAt: Time;
    createdAt: Time;
};
