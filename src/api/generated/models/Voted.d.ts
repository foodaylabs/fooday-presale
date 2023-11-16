import type { ActionType } from './ActionType';
import type { AnonymousCreateSpotTransaction } from './AnonymousCreateSpotTransaction';
import type { AnonymousSubmitReviewTransaction } from './AnonymousSubmitReviewTransaction';
import type { FudosAmount } from './FudosAmount';
import type { Vote } from './Vote';
import type { VoteTally } from './VoteTally';
export type Voted = ((AnonymousCreateSpotTransaction | AnonymousSubmitReviewTransaction) & {
    type: ActionType;
    vote: Vote;
    fudos: FudosAmount;
    voteTally: VoteTally;
});
