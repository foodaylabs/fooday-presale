import type { AssetAmount } from './AssetAmount';
import type { Time } from './Time';
export type FoodSettlementPayload = {
    txId: string;
    foodAmount: AssetAmount;
    settledDate: Time;
};
