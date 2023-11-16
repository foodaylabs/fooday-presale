import type { FudosAmount } from './FudosAmount';
import type { RewardType } from './RewardType';
export type FudosReward = {
    key: RewardType;
    fudos: FudosAmount;
    qualified: boolean;
    data?: any;
};
