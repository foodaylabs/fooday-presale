import type { Vote } from './Vote';
export type VoteTally = {
    threshold: number;
    votes: Array<Vote>;
};
