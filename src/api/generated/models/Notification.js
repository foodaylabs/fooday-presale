/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export var Notification;
(function (Notification) {
    let topic;
    (function (topic) {
        topic["FOOD_SETTLEMENT"] = "food_settlement";
        topic["CREATE_SPOT_GOT_REPORTED"] = "create_spot_got_reported";
        topic["CREATE_SPOT_GOT_REPORTED_CHALLENGE_SUCCESSFUL"] = "create_spot_got_reported_challenge_successful";
        topic["CREATE_SPOT_GOT_REPORTED_CHALLENGE_FAILED"] = "create_spot_got_reported_challenge_failed";
        topic["CREATE_SPOT_CHALLENGE_VOTE_SELECTED"] = "create_spot_challenge_vote_selected";
        topic["CREATE_SPOT_HAS_BEEN_UPDATED"] = "create_spot_has_been_updated";
        topic["UPDATE_SPOT_GOT_REPORTED"] = "update_spot_got_reported";
        topic["UPDATE_SPOT_GOT_REPORTED_CHALLENGE_SUCCESSFUL"] = "update_spot_got_reported_challenge_successful";
        topic["UPDATE_SPOT_GOT_REPORTED_CHALLENGE_FAILED"] = "update_spot_got_reported_challenge_failed";
        topic["UPDATE_SPOT_REMOVED_DUE_TO_SPOT_REMOVAL"] = "update_spot_removed_due_to_spot_removal";
        topic["UPDATE_SPOT_CHALLENGE_VOTE_SELECTED"] = "update_spot_challenge_vote_selected";
        topic["REVIEW_GOT_REPORTED"] = "review_got_reported";
        topic["REVIEW_CHALLENGE_VOTE_SELECTED"] = "review_challenge_vote_selected";
        topic["REVIEW_GOT_REPORTED_CHALLENGE_SUCCESSFUL"] = "review_got_reported_challenge_successful";
        topic["REVIEW_GOT_REPORTED_CHALLENGE_FAILED"] = "review_got_reported_challenge_failed";
        topic["REVIEW_REMOVED_DUE_TO_SPOT_REMOVAL"] = "review_removed_due_to_spot_removal";
        topic["CHALLENGE_CREATE_SPOT_SUCCESSFUL"] = "challenge_create_spot_successful";
        topic["CHALLENGE_CREATE_SPOT_FAILED"] = "challenge_create_spot_failed";
        topic["CHALLENGE_UPDATE_SPOT_SUCCESSFUL"] = "challenge_update_spot_successful";
        topic["CHALLENGE_UPDATE_SPOT_FAILED"] = "challenge_update_spot_failed";
        topic["CHALLENGE_UPDATE_SPOT_DISCARDED"] = "challenge_update_spot_discarded";
        topic["CHALLENGE_REVIEW_SUCCESSFUL"] = "challenge_review_successful";
        topic["CHALLENGE_REVIEW_FAILED"] = "challenge_review_failed";
        topic["CHALLENGE_REVIEW_DISCARDED"] = "challenge_review_discarded";
        topic["VOTE_CREATE_SPOT_VALIDATED"] = "vote_create_spot_validated";
        topic["VOTE_CREATE_SPOT_INVALIDATED"] = "vote_create_spot_invalidated";
        topic["VOTE_UPDATE_SPOT_VALIDATED"] = "vote_update_spot_validated";
        topic["VOTE_UPDATE_SPOT_INVALIDATED"] = "vote_update_spot_invalidated";
        topic["VOTE_UPDATE_SPOT_DISCARDED"] = "vote_update_spot_discarded";
        topic["VOTE_REVIEW_VALIDATED"] = "vote_review_validated";
        topic["VOTE_REVIEW_INVALIDATED"] = "vote_review_invalidated";
        topic["VOTE_REVIEW_DISCARDED"] = "vote_review_discarded";
        topic["INVITATION_CODE_RECEIVED"] = "invitation_code_received";
        topic["INVITATION_CODE_HAS_BEEN_USED_BY_ROOKIE"] = "invitation_code_has_been_used_by_rookie";
        topic["INVITATION_CODE_HAS_BEEN_USED_BY_FOODIE"] = "invitation_code_has_been_used_by_foodie";
        topic["MISSION_COMPLETED"] = "mission_completed";
        topic["REVIEW_HAS_BEEN_COMMENTED"] = "review_has_been_commented";
        topic["REVIEW_YOU_FOLLOWED_HAS_BEEN_COMMENTED"] = "review_you_followed_has_been_commented";
        topic["ITEM_SOLD"] = "item_sold";
    })(topic = Notification.topic || (Notification.topic = {}));
})(Notification || (Notification = {}));
