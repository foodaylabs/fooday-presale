import type { FudosAmount } from './FudosAmount';
export type ChallengeCreateSpotFailedPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    penalizedFudos: FudosAmount;
};
