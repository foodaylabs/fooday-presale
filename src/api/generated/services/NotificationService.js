export class NotificationService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Register a new FCM token by user
     * @returns any Success
     * @throws ApiError
     */
    registerFcmToken({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/register-fcm-token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Read notifications
     * @returns any Success
     * @throws ApiError
     */
    readNotifications({ ids, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/read-notifications',
            query: {
                'ids': ids,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get user's notifications
     * @returns Notification Return notification of the user
     * @throws ApiError
     */
    getNotifications({ offset, limit, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/notifications',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
