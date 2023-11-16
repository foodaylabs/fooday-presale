import type { AssetAmount } from './AssetAmount';
import type { AssetId } from './AssetId';
export type UpdateOrderRequest = {
    orderId: string;
    priceAsset: AssetId;
    price: AssetAmount;
};
