import type { FudosAmount } from './FudosAmount';
import type { SpotField } from './SpotField';
export type UpdateSpotRemovedDueToSpotRemovalPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    spotField: SpotField;
    penalizedFudos: FudosAmount;
};
