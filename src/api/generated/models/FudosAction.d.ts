import type { FudosAmount } from './FudosAmount';
import type { Option } from './Option';
export type FudosAction = (Option & {
    fudos: FudosAmount;
});
