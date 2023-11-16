import type { ScaledInteger } from './ScaledInteger';
import type { TokenContract } from './TokenContract';
export type DepositEvent = {
    contract: TokenContract;
    from: string;
    to: string;
    amount: ScaledInteger;
    txHash: string;
    eventIndex: number;
    tokenId?: string;
    block: number;
    currentBlock: number;
    blockConfirmations: number;
};
