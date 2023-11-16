import type { PrivateUser } from './PrivateUser';
import type { Spot } from './Spot';
import type { Transaction } from './Transaction';
export type CreateSpot200Response = {
    transaction: Transaction;
    spot: Spot;
    creator: PrivateUser;
};
