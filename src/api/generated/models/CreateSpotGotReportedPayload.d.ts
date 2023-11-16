import type { SpotInvalidReason } from './SpotInvalidReason';
export type CreateSpotGotReportedPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    reportReason: SpotInvalidReason;
};
