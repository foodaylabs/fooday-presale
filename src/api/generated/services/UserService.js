"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Complete sign up
     * @returns PrivateUser User registered
     * @throws ApiError
     */
    completeSignUp({ formData, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/complete-sign-up',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Request to delete the current user
     * @returns any Requested
     * @throws ApiError
     */
    requestDeleteUser() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-delete-user',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Block a user
     * @returns any Success
     * @throws ApiError
     */
    blockUser({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/block-user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get recommended username
     * @returns Username Recommended username
     * @throws ApiError
     */
    getRecommendedUsername() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/recommended-username',
        });
    }
    /**
     * Check username exists or not
     * @returns boolean Exists or not
     * @throws ApiError
     */
    checkUsernameExists({ username, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/username-exists/{username}',
            path: {
                'username': username,
            },
        });
    }
    /**
     * Get current user info
     * @returns PrivateUser Current user returned
     * @throws ApiError
     */
    me() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/me',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get user's spots
     * @returns Spot Return spots of the user created
     * @throws ApiError
     */
    getUserSpots({ id, offset, limit, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}/spots',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get user's reviews
     * @returns any Return reviews of the user
     * @throws ApiError
     */
    getUserReviews({ id, offset, limit, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}/reviews',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get user's media
     * @returns Media Return media of current user
     * @throws ApiError
     */
    getUserMedia({ id, offset, limit, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/users/{id}/media',
            path: {
                'id': id,
            },
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update my profile
     * @returns PrivateUser Returned updated user
     * @throws ApiError
     */
    updateMyProfile({ formData, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/update-my-profile',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
exports.UserService = UserService;
