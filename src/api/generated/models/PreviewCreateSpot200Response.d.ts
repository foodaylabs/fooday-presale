import type { ActionResult } from './ActionResult';
import type { Spot } from './Spot';
export type PreviewCreateSpot200Response = {
    actionResult: ActionResult;
    suspectedDuplicatedSpot?: Spot;
};
