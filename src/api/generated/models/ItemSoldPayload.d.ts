import type { AssetAmount } from './AssetAmount';
import type { AssetId } from './AssetId';
import type { ItemType } from './ItemType';
export type ItemSoldPayload = {
    txId: string;
    itemId: number;
    itemType: ItemType;
    price: AssetAmount;
    unit: AssetId;
};
