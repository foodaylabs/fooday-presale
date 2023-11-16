import type { FudosAmount } from './FudosAmount';
export type ChallengeCreateSpotSuccessfulPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    rewardedFudos: FudosAmount;
};
