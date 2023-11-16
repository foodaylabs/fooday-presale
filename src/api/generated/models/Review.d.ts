import type { Expense } from './Expense';
import type { Meal } from './Meal';
import type { Media } from './Media';
import type { PendingChallenge } from './PendingChallenge';
import type { PublicUser } from './PublicUser';
import type { Rating } from './Rating';
import type { Time } from './Time';
export type Review = {
    id: string;
    spotId: string;
    user: PublicUser;
    rating: Rating;
    content: string;
    media: Array<Media>;
    meal?: Meal;
    expense?: Expense;
    updatedAt: Time;
    createdAt: Time;
    /**
     * This field is only effective in list case
     */
    pendingChallengeId?: string;
    /**
     * This field is only effective in get case
     */
    pendingChallenge?: PendingChallenge;
    deleted: boolean;
    likedCount: number;
    /**
     * Liked by the currently logged-in user
     */
    isLiked: boolean;
    commentCount: number;
};
