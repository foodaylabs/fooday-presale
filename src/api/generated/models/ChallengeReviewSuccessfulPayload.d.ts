import type { FudosAmount } from './FudosAmount';
import type { SpotName } from './SpotName';
export type ChallengeReviewSuccessfulPayload = {
    challengeId: string;
    reviewId: string;
    spotId: string;
    spotName: SpotName;
    rewardedFudos: FudosAmount;
};
