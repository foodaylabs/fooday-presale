import type { SettledTransaction } from './SettledTransaction';
export type Settlement = {
    convertRate: number;
    settled?: Array<SettledTransaction>;
};
