import type { Media } from '../models/Media';
import type { MediaCategory } from '../models/MediaCategory';
import type { MediaType } from '../models/MediaType';
import type { URI } from '../models/URI';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MediaService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get a media
     * @returns Media Got media
     * @throws ApiError
     */
    getMedia({ id, }: {
        /**
         * media id
         */
        id: string;
    }): CancelablePromise<Media>;
    /**
     * Upload a new media
     * @returns any Signed URL returned for uploading new media
     * @throws ApiError
     */
    uploadMedia({ requestBody, }: {
        requestBody?: {
            width: number;
            height: number;
            blurData: string;
            type: MediaType;
            mimeType: string;
            caption: string;
            category?: MediaCategory;
            size?: number;
        };
    }): CancelablePromise<{
        signed: URI;
        media: Media;
    }>;
}
