import type { ReviewInvalidReason } from './ReviewInvalidReason';
import type { SpotName } from './SpotName';
export type ReviewGotReportedPayload = {
    challengeId: string;
    reviewId: string;
    spotId: string;
    spotName: SpotName;
    reportReason: ReviewInvalidReason;
};
