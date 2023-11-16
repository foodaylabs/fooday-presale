/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * 0 is downvote, 1 is upvote
 */
export var VoteResult;
(function (VoteResult) {
    VoteResult[VoteResult["DOWNVOTE"] = 0] = "DOWNVOTE";
    VoteResult[VoteResult["UPVOTE"] = 1] = "UPVOTE";
    VoteResult[VoteResult["NOT_VOTED_YET"] = 2] = "NOT_VOTED_YET";
})(VoteResult || (VoteResult = {}));
