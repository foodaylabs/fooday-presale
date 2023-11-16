import type { Spot } from './Spot';
import type { Time } from './Time';
import type { TransactionStatus } from './TransactionStatus';
export type AnonymousCreateSpotTransaction = {
    id: string;
    status: TransactionStatus;
    spot: Spot;
    updatedAt: Time;
    createdAt: Time;
};
