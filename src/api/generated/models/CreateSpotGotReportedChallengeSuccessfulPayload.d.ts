import type { FudosAmount } from './FudosAmount';
export type CreateSpotGotReportedChallengeSuccessfulPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    penalizedFudos: FudosAmount;
};
