import type { FudosAmount } from './FudosAmount';
export type VoteReviewValidatedPayload = {
    challengeId: string;
    reviewId: string;
    spotId: string;
    rewardedFudos: FudosAmount;
};
