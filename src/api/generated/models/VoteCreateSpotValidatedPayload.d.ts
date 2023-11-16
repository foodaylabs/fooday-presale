import type { FudosAmount } from './FudosAmount';
export type VoteCreateSpotValidatedPayload = {
    challengeId: string;
    spotId: string;
    rewardedFudos: FudosAmount;
};
