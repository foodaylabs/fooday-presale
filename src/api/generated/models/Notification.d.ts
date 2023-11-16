import type { ChallengeCreateSpotFailedPayload } from './ChallengeCreateSpotFailedPayload';
import type { ChallengeCreateSpotSuccessfulPayload } from './ChallengeCreateSpotSuccessfulPayload';
import type { ChallengeReviewDiscardedPayload } from './ChallengeReviewDiscardedPayload';
import type { ChallengeReviewFailedPayload } from './ChallengeReviewFailedPayload';
import type { ChallengeReviewSuccessfulPayload } from './ChallengeReviewSuccessfulPayload';
import type { ChallengeUpdateSpotDiscardedPayload } from './ChallengeUpdateSpotDiscardedPayload';
import type { ChallengeUpdateSpotFailedPayload } from './ChallengeUpdateSpotFailedPayload';
import type { ChallengeUpdateSpotSuccessfulPayload } from './ChallengeUpdateSpotSuccessfulPayload';
import type { CreateSpotChallengeVoteSelectedPayload } from './CreateSpotChallengeVoteSelectedPayload';
import type { CreateSpotGotReportedChallengeFailedPayload } from './CreateSpotGotReportedChallengeFailedPayload';
import type { CreateSpotGotReportedChallengeSuccessfulPayload } from './CreateSpotGotReportedChallengeSuccessfulPayload';
import type { CreateSpotGotReportedPayload } from './CreateSpotGotReportedPayload';
import type { CreateSpotHasBeenUpdatedPayload } from './CreateSpotHasBeenUpdatedPayload';
import type { FoodSettlementPayload } from './FoodSettlementPayload';
import type { InvitationCodeHasBeenUsedByFoodiePayload } from './InvitationCodeHasBeenUsedByFoodiePayload';
import type { InvitationCodeHasBeenUsedByRookiePayload } from './InvitationCodeHasBeenUsedByRookiePayload';
import type { InvitationCodeReceivedPayload } from './InvitationCodeReceivedPayload';
import type { ItemSoldPayload } from './ItemSoldPayload';
import type { MissionCompletedPayload } from './MissionCompletedPayload';
import type { ReviewChallengeVoteSelectedPayload } from './ReviewChallengeVoteSelectedPayload';
import type { ReviewGotReportedChallengeFailedPayload } from './ReviewGotReportedChallengeFailedPayload';
import type { ReviewGotReportedChallengeSuccessfulPayload } from './ReviewGotReportedChallengeSuccessfulPayload';
import type { ReviewGotReportedPayload } from './ReviewGotReportedPayload';
import type { ReviewHasBeenCommentedPayload } from './ReviewHasBeenCommentedPayload';
import type { ReviewRemovedDueToSpotRemovalPayload } from './ReviewRemovedDueToSpotRemovalPayload';
import type { ReviewYouFollowedHasBeenCommentedPayload } from './ReviewYouFollowedHasBeenCommentedPayload';
import type { Time } from './Time';
import type { UpdateSpotChallengeVoteSelectedPayload } from './UpdateSpotChallengeVoteSelectedPayload';
import type { UpdateSpotGotReportedChallengeFailedPayload } from './UpdateSpotGotReportedChallengeFailedPayload';
import type { UpdateSpotGotReportedChallengeSuccessfulPayload } from './UpdateSpotGotReportedChallengeSuccessfulPayload';
import type { UpdateSpotGotReportedPayload } from './UpdateSpotGotReportedPayload';
import type { UpdateSpotRemovedDueToSpotRemovalPayload } from './UpdateSpotRemovedDueToSpotRemovalPayload';
import type { VoteCreateSpotInvalidatedPayload } from './VoteCreateSpotInvalidatedPayload';
import type { VoteCreateSpotValidatedPayload } from './VoteCreateSpotValidatedPayload';
import type { VoteReviewDiscardedPayload } from './VoteReviewDiscardedPayload';
import type { VoteReviewInvalidatedPayload } from './VoteReviewInvalidatedPayload';
import type { VoteReviewValidatedPayload } from './VoteReviewValidatedPayload';
import type { VoteUpdateSpotDiscardedPayload } from './VoteUpdateSpotDiscardedPayload';
import type { VoteUpdateSpotInvalidatedPayload } from './VoteUpdateSpotInvalidatedPayload';
import type { VoteUpdateSpotValidatedPayload } from './VoteUpdateSpotValidatedPayload';
export type Notification = {
    id: string;
    icon: string;
    topic: Notification.topic;
    title: string;
    body: string;
    payload: (FoodSettlementPayload | CreateSpotGotReportedPayload | CreateSpotGotReportedChallengeSuccessfulPayload | CreateSpotGotReportedChallengeFailedPayload | CreateSpotChallengeVoteSelectedPayload | CreateSpotHasBeenUpdatedPayload | UpdateSpotGotReportedPayload | UpdateSpotGotReportedChallengeSuccessfulPayload | UpdateSpotGotReportedChallengeFailedPayload | UpdateSpotRemovedDueToSpotRemovalPayload | UpdateSpotChallengeVoteSelectedPayload | ReviewGotReportedPayload | ReviewChallengeVoteSelectedPayload | ReviewGotReportedChallengeSuccessfulPayload | ReviewGotReportedChallengeFailedPayload | ReviewRemovedDueToSpotRemovalPayload | ChallengeCreateSpotSuccessfulPayload | ChallengeCreateSpotFailedPayload | ChallengeUpdateSpotSuccessfulPayload | ChallengeUpdateSpotFailedPayload | ChallengeUpdateSpotDiscardedPayload | ChallengeReviewSuccessfulPayload | ChallengeReviewFailedPayload | ChallengeReviewDiscardedPayload | VoteCreateSpotValidatedPayload | VoteCreateSpotInvalidatedPayload | VoteUpdateSpotValidatedPayload | VoteUpdateSpotInvalidatedPayload | VoteUpdateSpotDiscardedPayload | VoteReviewValidatedPayload | VoteReviewInvalidatedPayload | VoteReviewDiscardedPayload | InvitationCodeReceivedPayload | InvitationCodeHasBeenUsedByRookiePayload | InvitationCodeHasBeenUsedByFoodiePayload | MissionCompletedPayload | ReviewHasBeenCommentedPayload | ReviewYouFollowedHasBeenCommentedPayload | ItemSoldPayload);
    read: boolean;
    readAt?: Time;
    updatedAt: Time;
    createdAt: Time;
};
export declare namespace Notification {
    enum topic {
        FOOD_SETTLEMENT = "food_settlement",
        CREATE_SPOT_GOT_REPORTED = "create_spot_got_reported",
        CREATE_SPOT_GOT_REPORTED_CHALLENGE_SUCCESSFUL = "create_spot_got_reported_challenge_successful",
        CREATE_SPOT_GOT_REPORTED_CHALLENGE_FAILED = "create_spot_got_reported_challenge_failed",
        CREATE_SPOT_CHALLENGE_VOTE_SELECTED = "create_spot_challenge_vote_selected",
        CREATE_SPOT_HAS_BEEN_UPDATED = "create_spot_has_been_updated",
        UPDATE_SPOT_GOT_REPORTED = "update_spot_got_reported",
        UPDATE_SPOT_GOT_REPORTED_CHALLENGE_SUCCESSFUL = "update_spot_got_reported_challenge_successful",
        UPDATE_SPOT_GOT_REPORTED_CHALLENGE_FAILED = "update_spot_got_reported_challenge_failed",
        UPDATE_SPOT_REMOVED_DUE_TO_SPOT_REMOVAL = "update_spot_removed_due_to_spot_removal",
        UPDATE_SPOT_CHALLENGE_VOTE_SELECTED = "update_spot_challenge_vote_selected",
        REVIEW_GOT_REPORTED = "review_got_reported",
        REVIEW_CHALLENGE_VOTE_SELECTED = "review_challenge_vote_selected",
        REVIEW_GOT_REPORTED_CHALLENGE_SUCCESSFUL = "review_got_reported_challenge_successful",
        REVIEW_GOT_REPORTED_CHALLENGE_FAILED = "review_got_reported_challenge_failed",
        REVIEW_REMOVED_DUE_TO_SPOT_REMOVAL = "review_removed_due_to_spot_removal",
        CHALLENGE_CREATE_SPOT_SUCCESSFUL = "challenge_create_spot_successful",
        CHALLENGE_CREATE_SPOT_FAILED = "challenge_create_spot_failed",
        CHALLENGE_UPDATE_SPOT_SUCCESSFUL = "challenge_update_spot_successful",
        CHALLENGE_UPDATE_SPOT_FAILED = "challenge_update_spot_failed",
        CHALLENGE_UPDATE_SPOT_DISCARDED = "challenge_update_spot_discarded",
        CHALLENGE_REVIEW_SUCCESSFUL = "challenge_review_successful",
        CHALLENGE_REVIEW_FAILED = "challenge_review_failed",
        CHALLENGE_REVIEW_DISCARDED = "challenge_review_discarded",
        VOTE_CREATE_SPOT_VALIDATED = "vote_create_spot_validated",
        VOTE_CREATE_SPOT_INVALIDATED = "vote_create_spot_invalidated",
        VOTE_UPDATE_SPOT_VALIDATED = "vote_update_spot_validated",
        VOTE_UPDATE_SPOT_INVALIDATED = "vote_update_spot_invalidated",
        VOTE_UPDATE_SPOT_DISCARDED = "vote_update_spot_discarded",
        VOTE_REVIEW_VALIDATED = "vote_review_validated",
        VOTE_REVIEW_INVALIDATED = "vote_review_invalidated",
        VOTE_REVIEW_DISCARDED = "vote_review_discarded",
        INVITATION_CODE_RECEIVED = "invitation_code_received",
        INVITATION_CODE_HAS_BEEN_USED_BY_ROOKIE = "invitation_code_has_been_used_by_rookie",
        INVITATION_CODE_HAS_BEEN_USED_BY_FOODIE = "invitation_code_has_been_used_by_foodie",
        MISSION_COMPLETED = "mission_completed",
        REVIEW_HAS_BEEN_COMMENTED = "review_has_been_commented",
        REVIEW_YOU_FOLLOWED_HAS_BEEN_COMMENTED = "review_you_followed_has_been_commented",
        ITEM_SOLD = "item_sold"
    }
}
