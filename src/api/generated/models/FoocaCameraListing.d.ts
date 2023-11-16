import type { FoocaCamera } from './FoocaCamera';
import type { Listing } from './Listing';
export type FoocaCameraListing = (Listing & {
    camera: FoocaCamera;
});
