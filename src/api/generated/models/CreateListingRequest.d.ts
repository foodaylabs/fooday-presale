import type { AssetAmount } from './AssetAmount';
import type { NftID } from './NftID';
export type CreateListingRequest = {
    priceAsset: string;
    price: AssetAmount;
    targetId: NftID;
};
