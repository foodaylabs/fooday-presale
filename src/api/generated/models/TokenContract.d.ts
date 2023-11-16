import type { ScalingFactor } from './ScalingFactor';
export type TokenContract = {
    chain: string;
    address: string;
    name: string;
    symbol: string;
    decimals: ScalingFactor;
};
