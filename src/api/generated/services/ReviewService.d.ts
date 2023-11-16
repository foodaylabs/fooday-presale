import type { ActionResult } from '../models/ActionResult';
import type { Challenge } from '../models/Challenge';
import type { Comment } from '../models/Comment';
import type { FudosAmount } from '../models/FudosAmount';
import type { NearbyReviews200Response } from '../models/NearbyReviews200Response';
import type { PreviewSubmitReviewRequest } from '../models/PreviewSubmitReviewRequest';
import type { PrivateUser } from '../models/PrivateUser';
import type { ReportReviewRequest } from '../models/ReportReviewRequest';
import type { Review } from '../models/Review';
import type { SubmitReview200Response } from '../models/SubmitReview200Response';
import type { SubmitReviewRequest } from '../models/SubmitReviewRequest';
import type { Transaction } from '../models/Transaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ReviewService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get review
     * @returns Review Review
     * @throws ApiError
     */
    getReview({ id, }: {
        id: string;
    }): CancelablePromise<Review>;
    /**
     * Get comments of a review
     * @returns Comment Comments
     * @throws ApiError
     */
    getReviewComments({ id, limit, fromTime, }: {
        id: string;
        limit?: number;
        fromTime?: string;
    }): CancelablePromise<Array<Comment>>;
    /**
     * Get nearby reviews
     * @returns NearbyReviews200Response A list of review with related spots
     * @throws ApiError
     */
    getNearbyReviews({ offset, limit, country, lat, lng, latDelta, lngDelta, }: {
        /**
         * Offset
         */
        offset: number;
        /**
         * Limit
         */
        limit: number;
        /**
         * Country
         */
        country: string;
        /**
         * The latitude of the center of region.
         */
        lat: number;
        /**
         * The longitude of the center of region.
         */
        lng: number;
        /**
         * The latitude delta of the region.
         */
        latDelta?: number;
        /**
         * The longitude delta of the region.
         */
        lngDelta?: number;
    }): CancelablePromise<NearbyReviews200Response>;
    /**
     * Like a review
     * @returns any Review
     * @throws ApiError
     */
    toggleLikeReview({ requestBody, }: {
        requestBody?: {
            reviewId: string;
        };
    }): CancelablePromise<{
        liked: boolean;
        totalLiked: number;
    }>;
    /**
     * Submit a new review
     * @returns SubmitReview200Response Review submitted
     * @throws ApiError
     */
    submitReview({ requestBody, }: {
        requestBody?: SubmitReviewRequest;
    }): CancelablePromise<SubmitReview200Response>;
    /**
     * Preview submit review
     * @returns ActionResult Action result
     * @throws ApiError
     */
    previewSubmitReview({ requestBody, }: {
        requestBody?: PreviewSubmitReviewRequest;
    }): CancelablePromise<ActionResult>;
    /**
     * Preview report review
     * @returns any Preview result
     * @throws ApiError
     */
    previewReportReview({ requestBody, }: {
        requestBody?: ReportReviewRequest;
    }): CancelablePromise<{
        actionResult: ActionResult;
        penaltyFudos: FudosAmount;
        penaltyPercentage: number;
    }>;
    /**
     * Report review
     * @returns any Success
     * @throws ApiError
     */
    reportReview({ requestBody, }: {
        requestBody?: ReportReviewRequest;
    }): CancelablePromise<{
        challenge: Challenge;
        transaction: Transaction;
        user: PrivateUser;
    }>;
}
