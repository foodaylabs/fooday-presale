import type { AssetId } from './AssetId';
import type { AssetType } from './AssetType';
import type { TokenContract } from './TokenContract';
export type Asset = {
    id: AssetId;
    name: string;
    type: AssetType;
    canDepositFrom: Record<string, Array<TokenContract>>;
    canWithdrawTo: Record<string, Array<TokenContract>>;
};
