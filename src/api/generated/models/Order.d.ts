import type { FoocaBoxOrder } from './FoocaBoxOrder';
import type { FoocaCameraOrder } from './FoocaCameraOrder';
export type Order = (FoocaCameraOrder | FoocaBoxOrder);
