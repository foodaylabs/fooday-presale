import type { BaseOrder } from './BaseOrder';
import type { FoocaCamera } from './FoocaCamera';
export type FoocaCameraOrder = (BaseOrder & {
    camera: FoocaCamera;
});
