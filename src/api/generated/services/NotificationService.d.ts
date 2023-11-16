import type { Ids } from '../models/Ids';
import type { Notification } from '../models/Notification';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class NotificationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Register a new FCM token by user
     * @returns any Success
     * @throws ApiError
     */
    registerFcmToken({ requestBody, }: {
        requestBody?: {
            token: string;
        };
    }): CancelablePromise<any>;
    /**
     * Read notifications
     * @returns any Success
     * @throws ApiError
     */
    readNotifications({ ids, }: {
        /**
         * notification ids
         */
        ids: Ids;
    }): CancelablePromise<any>;
    /**
     * Get user's notifications
     * @returns Notification Return notification of the user
     * @throws ApiError
     */
    getNotifications({ offset, limit, }: {
        offset: number;
        limit: number;
    }): CancelablePromise<Array<Notification>>;
}
