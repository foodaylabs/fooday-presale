"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotService = void 0;
class SpotService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get recently updated spots
     * @returns Spot spot details
     * @throws ApiError
     */
    getRecentlyUpdatedSpots({ limit = 20, offset, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/spots',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get spot
     * @returns Spot spot details
     * @throws ApiError
     */
    getSpot({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/spots/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * Get reviews of a spot
     * @returns Review Reviews
     * @throws ApiError
     */
    getSpotReviews({ id, option, limit, offset, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/spots/{id}/reviews',
            path: {
                'id': id,
            },
            query: {
                'option': option,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Get media of a spot
     * @returns Media Media
     * @throws ApiError
     */
    getSpotMedia({ id, limit, offset, category, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/spots/{id}/media',
            path: {
                'id': id,
            },
            query: {
                'category': category,
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * Search spots
     * @returns Spot list of spots
     * @throws ApiError
     */
    searchSpots({ offset, limit, query, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/search-spots',
            query: {
                'offset': offset,
                'limit': limit,
                'query': query,
            },
        });
    }
    /**
     * Get nearby spots
     * @returns Spot list of spots
     * @throws ApiError
     */
    getNearbySpots({ lat, lng, latDelta, lngDelta, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nearby-spots',
            query: {
                'lat': lat,
                'lng': lng,
                'latDelta': latDelta,
                'lngDelta': lngDelta,
            },
        });
    }
    /**
     * Preview create spot
     * @returns PreviewCreateSpot200Response Preview result
     * @throws ApiError
     */
    previewCreateSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-create-spot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Create a new spot
     * @returns CreateSpot200Response Spot created
     * @throws ApiError
     */
    createSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/create-spot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * check update spot
     * @returns any Success
     * @throws ApiError
     */
    checkUpdateSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/check-update-spot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Preview update spot
     * @returns ActionResult Success
     * @throws ApiError
     */
    previewUpdateSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-update-spot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update spot
     * @returns any Spot updated
     * @throws ApiError
     */
    updateSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/update-spot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Preview report spot
     * @returns any Preview result
     * @throws ApiError
     */
    previewReportSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-report-spot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Report spot
     * @returns any Success
     * @throws ApiError
     */
    reportSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/report-spot',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
exports.SpotService = SpotService;
