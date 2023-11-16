import type { MediaID } from './MediaID';
import type { NftID } from './NftID';
import type { ReportExplanation } from './ReportExplanation';
import type { SpotField } from './SpotField';
import type { SpotInvalidReason } from './SpotInvalidReason';
import type { Time } from './Time';
export type ReportSpotRequest = {
    spotId: string;
    spotVersion: Time;
    foocaId: NftID;
    explanation: ReportExplanation;
    reason: SpotInvalidReason;
    spotField?: SpotField;
    duplicatedSpotId?: string;
    mediaId?: MediaID;
};
