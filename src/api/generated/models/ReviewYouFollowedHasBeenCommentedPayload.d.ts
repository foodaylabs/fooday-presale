import type { SpotName } from './SpotName';
export type ReviewYouFollowedHasBeenCommentedPayload = {
    reviewId: string;
    spotId: string;
    spotName: SpotName;
    authorId: string;
    authorName: string;
    content: string;
    date: string;
};
