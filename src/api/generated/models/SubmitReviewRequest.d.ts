import type { MediaID } from './MediaID';
import type { NftID } from './NftID';
import type { ReviewCreationObject } from './ReviewCreationObject';
export type SubmitReviewRequest = {
    foocaId: NftID;
    media: Array<MediaID>;
    review: ReviewCreationObject;
    spotId: string;
};
