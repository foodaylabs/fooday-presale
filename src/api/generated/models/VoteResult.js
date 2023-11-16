"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoteResult = void 0;
/**
 * 0 is downvote, 1 is upvote
 */
var VoteResult;
(function (VoteResult) {
    VoteResult[VoteResult["DOWNVOTE"] = 0] = "DOWNVOTE";
    VoteResult[VoteResult["UPVOTE"] = 1] = "UPVOTE";
    VoteResult[VoteResult["NOT_VOTED_YET"] = 2] = "NOT_VOTED_YET";
})(VoteResult = exports.VoteResult || (exports.VoteResult = {}));
