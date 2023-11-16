import type { ChallengePayloadDuplicatedSpot } from './ChallengePayloadDuplicatedSpot';
import type { ChallengePayloadMedia } from './ChallengePayloadMedia';
import type { ChallengePayloadSpotField } from './ChallengePayloadSpotField';
import type { ChallengeType } from './ChallengeType';
import type { ReportExplanation } from './ReportExplanation';
import type { SpotField } from './SpotField';
import type { Vote } from './Vote';
export type PendingChallenge = {
    id: string;
    reason: string;
    type: ChallengeType;
    spotField?: SpotField;
    explanation: ReportExplanation;
    yourVote?: Vote;
    /**
     * This field will preset if you are whistleblower
     */
    whistleblower?: string;
    payload?: (ChallengePayloadSpotField | ChallengePayloadMedia | ChallengePayloadDuplicatedSpot);
};
