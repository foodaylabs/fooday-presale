import type { AssetAmount } from './AssetAmount';
import type { AssetId } from './AssetId';
import type { NftID } from './NftID';
import type { OrderAsset } from './OrderAsset';
import type { OrderType } from './OrderType';
export type CreateOrderRequest = {
    type: OrderType;
    asset: OrderAsset;
    assetTokenId: NftID;
    priceAsset: AssetId;
    price: AssetAmount;
};
