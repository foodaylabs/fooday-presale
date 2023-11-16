import type { MissionReward } from './MissionReward';
import type { MissionStatus } from './MissionStatus';
import type { MissionType } from './MissionType';
import type { URI } from './URI';
export type Mission = {
    id: string;
    name: string;
    type: MissionType;
    rewards: Array<MissionReward>;
    icon: URI;
    status: MissionStatus;
    currentValue: any;
    targetValue: any;
};
