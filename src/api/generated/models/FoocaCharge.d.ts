import type { BatteryPower } from './BatteryPower';
import type { Level } from './Level';
import type { NftID } from './NftID';
export type FoocaCharge = {
    foocaId: NftID;
    chargeFrom: BatteryPower;
    chargeTo: BatteryPower;
    levelAtCharging: Level;
};
