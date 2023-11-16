import type { AssetAmount } from './AssetAmount';
import type { AssetId } from './AssetId';
import type { NftID } from './NftID';
import type { OrderAsset } from './OrderAsset';
import type { OrderStatus } from './OrderStatus';
import type { OrderType } from './OrderType';
import type { Time } from './Time';
export type BaseOrder = {
    id: string;
    type: OrderType;
    asset: OrderAsset;
    assetTokenId: NftID;
    priceAsset: AssetId;
    price: AssetAmount;
    fee: AssetAmount;
    status: OrderStatus;
    createdAt: Time;
    updatedAt: Time;
};
