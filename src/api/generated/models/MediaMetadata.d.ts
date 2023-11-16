import type { MediaCategory } from './MediaCategory';
import type { MediaType } from './MediaType';
export type MediaMetadata = {
    width: number;
    height: number;
    blurData: string;
    type: MediaType;
    mimeType: string;
    caption: string;
    category: MediaCategory;
};
