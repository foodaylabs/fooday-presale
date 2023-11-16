import type { FudosAmount } from './FudosAmount';
import type { Time } from './Time';
export type SettledTransaction = {
    id: string;
    fudos: FudosAmount;
    updatedAt: Time;
    createdAt: Time;
};
