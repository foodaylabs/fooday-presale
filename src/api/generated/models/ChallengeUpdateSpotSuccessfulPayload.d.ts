import type { FudosAmount } from './FudosAmount';
import type { SpotField } from './SpotField';
export type ChallengeUpdateSpotSuccessfulPayload = {
    challengeId: string;
    spotId: string;
    spotName: string;
    spotField: SpotField;
    rewardedFudos: FudosAmount;
};
