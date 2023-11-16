import type { ActionResult } from '../models/ActionResult';
import type { Challenge } from '../models/Challenge';
import type { CheckUpdateSpotRequest } from '../models/CheckUpdateSpotRequest';
import type { CreateSpot200Response } from '../models/CreateSpot200Response';
import type { CreateSpotRequest } from '../models/CreateSpotRequest';
import type { FudosAmount } from '../models/FudosAmount';
import type { Media } from '../models/Media';
import type { MediaCategory } from '../models/MediaCategory';
import type { PreviewCreateSpot200Response } from '../models/PreviewCreateSpot200Response';
import type { PreviewCreateSpotRequest } from '../models/PreviewCreateSpotRequest';
import type { PrivateUser } from '../models/PrivateUser';
import type { ReportSpotRequest } from '../models/ReportSpotRequest';
import type { Review } from '../models/Review';
import type { ReviewListOption } from '../models/ReviewListOption';
import type { Spot } from '../models/Spot';
import type { SpotUpdateType } from '../models/SpotUpdateType';
import type { Transaction } from '../models/Transaction';
import type { UpdateSpotRequest } from '../models/UpdateSpotRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class SpotService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get recently updated spots
     * @returns Spot spot details
     * @throws ApiError
     */
    getRecentlyUpdatedSpots({ limit, offset, }: {
        limit?: number;
        offset: number;
    }): CancelablePromise<Array<Spot>>;
    /**
     * Get spot
     * @returns Spot spot details
     * @throws ApiError
     */
    getSpot({ id, }: {
        id: string;
    }): CancelablePromise<Spot>;
    /**
     * Get reviews of a spot
     * @returns Review Reviews
     * @throws ApiError
     */
    getSpotReviews({ id, option, limit, offset, }: {
        id: string;
        option: ReviewListOption;
        limit: number;
        offset: number;
    }): CancelablePromise<Array<Review>>;
    /**
     * Get media of a spot
     * @returns Media Media
     * @throws ApiError
     */
    getSpotMedia({ id, limit, offset, category, }: {
        id: string;
        limit: number;
        offset: number;
        /**
         * filter by media category, if not provided, all media will be returned
         */
        category?: MediaCategory;
    }): CancelablePromise<Array<Media>>;
    /**
     * Search spots
     * @returns Spot list of spots
     * @throws ApiError
     */
    searchSpots({ offset, limit, query, }: {
        /**
         * Offset
         */
        offset: number;
        /**
         * Limit
         */
        limit: number;
        /**
         * Query
         */
        query: string;
    }): CancelablePromise<Array<Spot>>;
    /**
     * Get nearby spots
     * @returns Spot list of spots
     * @throws ApiError
     */
    getNearbySpots({ lat, lng, latDelta, lngDelta, }: {
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
    }): CancelablePromise<Array<Spot>>;
    /**
     * Preview create spot
     * @returns PreviewCreateSpot200Response Preview result
     * @throws ApiError
     */
    previewCreateSpot({ requestBody, }: {
        requestBody?: PreviewCreateSpotRequest;
    }): CancelablePromise<PreviewCreateSpot200Response>;
    /**
     * Create a new spot
     * @returns CreateSpot200Response Spot created
     * @throws ApiError
     */
    createSpot({ requestBody, }: {
        requestBody?: CreateSpotRequest;
    }): CancelablePromise<CreateSpot200Response>;
    /**
     * check update spot
     * @returns any Success
     * @throws ApiError
     */
    checkUpdateSpot({ requestBody, }: {
        requestBody?: CheckUpdateSpotRequest;
    }): CancelablePromise<{
        type: SpotUpdateType;
    }>;
    /**
     * Preview update spot
     * @returns ActionResult Success
     * @throws ApiError
     */
    previewUpdateSpot({ requestBody, }: {
        requestBody?: UpdateSpotRequest;
    }): CancelablePromise<ActionResult>;
    /**
     * Update spot
     * @returns any Spot updated
     * @throws ApiError
     */
    updateSpot({ requestBody, }: {
        requestBody?: UpdateSpotRequest;
    }): CancelablePromise<{
        transaction?: Transaction;
        spot: Spot;
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
}
