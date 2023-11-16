import type { SpotField } from './SpotField';
import type { SpotInvalidReason } from './SpotInvalidReason';
export type UpdateSpotGotReportedPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    spotField: SpotField;
    reportReason: SpotInvalidReason;
};
