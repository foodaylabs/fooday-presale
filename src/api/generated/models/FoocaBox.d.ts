import type { BaseOrder } from './BaseOrder';
import type { BoxRarity } from './BoxRarity';
import type { FoocaStatus } from './FoocaStatus';
import type { NftID } from './NftID';
import type { URI } from './URI';
export type FoocaBox = {
    id: NftID;
    name: string;
    image: string;
    rarity: BoxRarity;
    desc: string;
    status: FoocaStatus;
    orders?: Array<BaseOrder>;
    bgImage?: URI;
    imageNoBg?: URI;
    genesis: boolean;
};
