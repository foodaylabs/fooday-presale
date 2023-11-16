"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
class ReportService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Previe report spot
     * @returns ActionResult Preview result
     * @throws ApiError
     */
    previewReportSpot({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-report-spot',
            body: requestBody,
            mediaType: 'application/json',
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
     * @returns ActionResult Preview result
     * @throws ApiError
     */
    previewReportReview({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-report-review',
            body: requestBody,
            mediaType: 'application/json',
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
exports.ReportService = ReportService;
