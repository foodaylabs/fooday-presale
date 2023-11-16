import type { MissionRewardTier } from './MissionRewardTier';
import type { MissionRewardType } from './MissionRewardType';
import type { URI } from './URI';
export type MissionReward = {
    id: string;
    type: MissionRewardType;
    tier?: MissionRewardTier;
    name: string;
    icon: URI;
    amount: number;
};
