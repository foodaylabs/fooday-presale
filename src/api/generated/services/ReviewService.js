export class ReviewService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get review
     * @returns Review Review
     * @throws ApiError
     */
    getReview({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reviews/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get comments of a review
     * @returns Comment Comments
     * @throws ApiError
     */
    getReviewComments({ id, limit = 20, fromTime, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/reviews/{id}/comments',
            path: {
                'id': id,
            },
            query: {
                'limit': limit,
                'from_time': fromTime,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get nearby reviews
     * @returns NearbyReviews200Response A list of review with related spots
     * @throws ApiError
     */
    getNearbyReviews({ offset, limit, country, lat, lng, latDelta, lngDelta, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/nearby-reviews',
            query: {
                'offset': offset,
                'limit': limit,
                'country': country,
                'lat': lat,
                'lng': lng,
                'latDelta': latDelta,
                'lngDelta': lngDelta,
            },
        });
    }
    /**
     * Like a review
     * @returns any Review
     * @throws ApiError
     */
    toggleLikeReview({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/toggle-like-review',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Submit a new review
     * @returns SubmitReview200Response Review submitted
     * @throws ApiError
     */
    submitReview({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/submit-review',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Preview submit review
     * @returns ActionResult Action result
     * @throws ApiError
     */
    previewSubmitReview({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-submit-review',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Preview report review
     * @returns any Preview result
     * @throws ApiError
     */
    previewReportReview({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-report-review',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Report review
     * @returns any Success
     * @throws ApiError
     */
    reportReview({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/report-review',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
