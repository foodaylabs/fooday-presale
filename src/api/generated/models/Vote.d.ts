import type { FudosAmount } from './FudosAmount';
import type { PublicUser } from './PublicUser';
import type { Time } from './Time';
import type { TransactionStatus } from './TransactionStatus';
import type { VoteComment } from './VoteComment';
import type { VoteResult } from './VoteResult';
export type Vote = {
    user: PublicUser;
    votedAt?: Time;
    comment?: VoteComment;
    result: VoteResult;
    fudos: FudosAmount;
    status?: TransactionStatus;
};
