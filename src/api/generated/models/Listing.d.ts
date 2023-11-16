import type { Asset } from './Asset';
import type { AssetAmount } from './AssetAmount';
import type { Time } from './Time';
export type Listing = {
    id: string;
    priceAsset: Asset;
    price: AssetAmount;
    fee?: AssetAmount;
    status: Listing.status;
    createdAt: Time;
    updatedAt: Time;
};
export declare namespace Listing {
    enum status {
        OPEN = "open",
        FULFILLED = "fulfilled",
        CANCELLED = "cancelled"
    }
}
