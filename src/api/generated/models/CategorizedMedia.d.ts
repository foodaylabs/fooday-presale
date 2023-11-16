import type { Media } from './Media';
import type { MediaCategory } from './MediaCategory';
export type CategorizedMedia = {
    category: MediaCategory;
    totalCount: number;
    media: Array<Media>;
};
