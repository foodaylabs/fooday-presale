import type { ActionType } from './ActionType';
import type { AnonymousCreateSpotTransactions } from './AnonymousCreateSpotTransactions';
import type { AnonymousSubmitReviewTransaction } from './AnonymousSubmitReviewTransaction';
import type { Time } from './Time';
export type Validation = {
    id: string;
    type: ActionType;
    read: boolean;
    time: Time;
    data: (AnonymousCreateSpotTransactions | AnonymousSubmitReviewTransaction);
};
