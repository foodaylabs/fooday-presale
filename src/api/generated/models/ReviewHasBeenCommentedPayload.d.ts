import type { SpotName } from './SpotName';
export type ReviewHasBeenCommentedPayload = {
    reviewId: string;
    spotId: string;
    spotName: SpotName;
    authorId: string;
    authorName: string;
    content: string;
    date: string;
};
