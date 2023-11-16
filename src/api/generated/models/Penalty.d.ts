import type { FudosAmount } from './FudosAmount';
import type { PenaltyType } from './PenaltyType';
export type Penalty = {
    fudos: FudosAmount;
    type: PenaltyType;
    reason: string;
    spotName: string;
};
