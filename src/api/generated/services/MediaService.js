"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaService = void 0;
class MediaService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a media
     * @returns Media Got media
     * @throws ApiError
     */
    getMedia({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/media/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Upload a new media
     * @returns any Signed URL returned for uploading new media
     * @throws ApiError
     */
    uploadMedia({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/upload-media',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
exports.MediaService = MediaService;
