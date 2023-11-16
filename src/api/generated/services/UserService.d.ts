import type { Media } from '../models/Media';
import type { PrivateUser } from '../models/PrivateUser';
import type { Review } from '../models/Review';
import type { Spot } from '../models/Spot';
import type { Username } from '../models/Username';
import type { UserProfile } from '../models/UserProfile';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UserService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Complete sign up
     * @returns PrivateUser User registered
     * @throws ApiError
     */
    completeSignUp({ formData, }: {
        formData?: {
            avatar?: Blob;
            profile: UserProfile;
            invitationCode?: string;
        };
    }): CancelablePromise<PrivateUser>;
    /**
     * Request to delete the current user
     * @returns any Requested
     * @throws ApiError
     */
    requestDeleteUser(): CancelablePromise<any>;
    /**
     * Block a user
     * @returns any Success
     * @throws ApiError
     */
    blockUser({ requestBody, }: {
        requestBody?: {
            uid: string;
        };
    }): CancelablePromise<any>;
    /**
     * Get recommended username
     * @returns Username Recommended username
     * @throws ApiError
     */
    getRecommendedUsername(): CancelablePromise<Username>;
    /**
     * Check username exists or not
     * @returns boolean Exists or not
     * @throws ApiError
     */
    checkUsernameExists({ username, }: {
        /**
         * Username
         */
        username: Username;
    }): CancelablePromise<boolean>;
    /**
     * Get current user info
     * @returns PrivateUser Current user returned
     * @throws ApiError
     */
    me(): CancelablePromise<PrivateUser>;
    /**
     * Get user's spots
     * @returns Spot Return spots of the user created
     * @throws ApiError
     */
    getUserSpots({ id, offset, limit, }: {
        id: string;
        offset: number;
        limit: number;
    }): CancelablePromise<Array<Spot>>;
    /**
     * Get user's reviews
     * @returns any Return reviews of the user
     * @throws ApiError
     */
    getUserReviews({ id, offset, limit, }: {
        id: string;
        offset: number;
        limit: number;
    }): CancelablePromise<{
        reviews: Array<Review>;
        spots: Record<string, Spot>;
    }>;
    /**
     * Get user's media
     * @returns Media Return media of current user
     * @throws ApiError
     */
    getUserMedia({ id, offset, limit, }: {
        id: string;
        offset: number;
        limit: number;
    }): CancelablePromise<Array<Media>>;
    /**
     * Update my profile
     * @returns PrivateUser Returned updated user
     * @throws ApiError
     */
    updateMyProfile({ formData, }: {
        formData?: {
            avatar?: Blob;
            profile: UserProfile;
            invitationCode?: string;
        };
    }): CancelablePromise<PrivateUser>;
}
