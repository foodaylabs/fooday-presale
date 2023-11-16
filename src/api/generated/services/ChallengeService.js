"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChallengeService = void 0;
class ChallengeService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Vote challenges
     * @returns any Vote result
     * @throws ApiError
     */
    vote({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/vote',
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
    /**
     * Get challenge
     * @returns Challenge Success
     * @throws ApiError
     */
    getChallenge({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/challenges/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
exports.ChallengeService = ChallengeService;
