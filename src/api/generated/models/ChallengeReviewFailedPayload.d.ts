import type { FudosAmount } from './FudosAmount';
import type { SpotName } from './SpotName';
export type ChallengeReviewFailedPayload = {
    challengeId: string;
    reviewId: string;
    spotId: string;
    spotName: SpotName;
    penalizedFudos: FudosAmount;
};
