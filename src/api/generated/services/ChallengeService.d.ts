import type { ActionResult } from '../models/ActionResult';
import type { Challenge } from '../models/Challenge';
import type { FudosAmount } from '../models/FudosAmount';
import type { PrivateUser } from '../models/PrivateUser';
import type { ReportReviewRequest } from '../models/ReportReviewRequest';
import type { ReportSpotRequest } from '../models/ReportSpotRequest';
import type { Transaction } from '../models/Transaction';
import type { VoteRequest } from '../models/VoteRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ChallengeService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Vote challenges
     * @returns any Vote result
     * @throws ApiError
     */
    vote({ requestBody, }: {
        requestBody?: VoteRequest;
    }): CancelablePromise<{
        transaction: Transaction;
        user: PrivateUser;
    }>;
    /**
     * Preview report spot
     * @returns any Preview result
     * @throws ApiError
     */
    previewReportSpot({ requestBody, }: {
        requestBody?: ReportSpotRequest;
    }): CancelablePromise<{
        actionResult: ActionResult;
        penaltyFudos: FudosAmount;
        penaltyPercentage: number;
    }>;
    /**
     * Report spot
     * @returns any Success
     * @throws ApiError
     */
    reportSpot({ requestBody, }: {
        requestBody?: ReportSpotRequest;
    }): CancelablePromise<{
        challenge: Challenge;
        transaction: Transaction;
        user: PrivateUser;
    }>;
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
    /**
     * Get challenge
     * @returns Challenge Success
     * @throws ApiError
     */
    getChallenge({ id, }: {
        id: string;
    }): CancelablePromise<Challenge>;
}
