import type { AssetAmount } from './AssetAmount';
import type { FudosAmount } from './FudosAmount';
/**
 * @deprecated
 */
export type Epoch = {
    start: number;
    end: number;
    settlingFudos: FudosAmount;
    fudos: FudosAmount;
    food: AssetAmount;
};
