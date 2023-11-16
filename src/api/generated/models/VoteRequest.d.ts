import type { VoteComment } from './VoteComment';
import type { VoteResult } from './VoteResult';
export type VoteRequest = {
    challengeId: string;
    vote: VoteResult;
    comment?: VoteComment;
};
