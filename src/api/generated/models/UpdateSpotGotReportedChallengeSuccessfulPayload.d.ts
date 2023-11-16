import type { FudosAmount } from './FudosAmount';
import type { SpotField } from './SpotField';
export type UpdateSpotGotReportedChallengeSuccessfulPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    spotField: SpotField;
    penalizedFudos: FudosAmount;
};
