import type { BaseOrder } from './BaseOrder';
import type { FoocaBox } from './FoocaBox';
export type FoocaBoxOrder = (BaseOrder & {
    box: FoocaBox;
});
