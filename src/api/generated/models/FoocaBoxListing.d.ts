import type { FoocaBox } from './FoocaBox';
import type { Listing } from './Listing';
export type FoocaBoxListing = (Listing & {
    box: FoocaBox;
});
