import type { FudosAmount } from './FudosAmount';
export type VoteUpdateSpotValidatedPayload = {
    challengeId: string;
    spotId: string;
    rewardedFudos: FudosAmount;
};
