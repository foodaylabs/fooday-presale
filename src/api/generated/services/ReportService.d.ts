import type { ActionResult } from '../models/ActionResult';
import type { PrivateUser } from '../models/PrivateUser';
import type { ReportReviewRequest } from '../models/ReportReviewRequest';
import type { ReportSpotRequest } from '../models/ReportSpotRequest';
import type { Review } from '../models/Review';
import type { Spot } from '../models/Spot';
import type { Transaction } from '../models/Transaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ReportService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Previe report spot
     * @returns ActionResult Preview result
     * @throws ApiError
     */
    previewReportSpot({ requestBody, }: {
        requestBody?: ReportSpotRequest;
    }): CancelablePromise<ActionResult>;
    /**
     * Report spot
     * @returns any Success
     * @throws ApiError
     */
    reportSpot({ requestBody, }: {
        requestBody?: ReportSpotRequest;
    }): CancelablePromise<{
        spot: Spot;
        transaction: Transaction;
        user: PrivateUser;
    }>;
    /**
     * Preview report review
     * @returns ActionResult Preview result
     * @throws ApiError
     */
    previewReportReview({ requestBody, }: {
        requestBody?: ReportReviewRequest;
    }): CancelablePromise<ActionResult>;
    /**
     * Report review
     * @returns any Success
     * @throws ApiError
     */
    reportReview({ requestBody, }: {
        requestBody?: ReportReviewRequest;
    }): CancelablePromise<{
        review: Review;
        transaction: Transaction;
        user: PrivateUser;
    }>;
}
