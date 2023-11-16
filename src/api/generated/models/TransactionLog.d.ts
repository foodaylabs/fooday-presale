import type { AssetAmount } from './AssetAmount';
import type { AssetId } from './AssetId';
import type { NftID } from './NftID';
export type TransactionLog = {
    asset: AssetId;
    from?: string;
    to?: string;
    amount: AssetAmount;
    tokenId?: NftID;
};
