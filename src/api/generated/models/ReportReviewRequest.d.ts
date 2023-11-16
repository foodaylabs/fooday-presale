import type { MediaID } from './MediaID';
import type { NftID } from './NftID';
import type { ReportExplanation } from './ReportExplanation';
import type { ReviewInvalidReason } from './ReviewInvalidReason';
export type ReportReviewRequest = {
    reviewId: string;
    foocaId: NftID;
    explanation: ReportExplanation;
    reason: ReviewInvalidReason;
    mediaId?: MediaID;
};
