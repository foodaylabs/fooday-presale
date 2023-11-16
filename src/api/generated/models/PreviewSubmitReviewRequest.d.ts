import type { NftID } from './NftID';
import type { ReviewCreationObject } from './ReviewCreationObject';
export type PreviewSubmitReviewRequest = {
    foocaId: NftID;
    review: ReviewCreationObject;
    media: Record<string, number>;
    mediaCaptionCount: number;
};
