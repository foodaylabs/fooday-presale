import type { Duration } from './Duration';
import type { Level } from './Level';
import type { NftID } from './NftID';
import type { Time } from './Time';
export type FoocaUpgrade = {
    foocaId: NftID;
    levelFrom: Level;
    levelTo: Level;
    waitingPeriod: Duration;
    upgradedAt: Time;
};
