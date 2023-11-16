import type { NftID } from './NftID';
import type { SpotField } from './SpotField';
import type { SpotFieldValue } from './SpotFieldValue';
export type UpdateSpotRequest = {
    foocaId: NftID;
    spotId: string;
    field: SpotField;
    value: SpotFieldValue;
};
