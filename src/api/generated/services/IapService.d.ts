import type { PrivateUser } from '../models/PrivateUser';
import type { Transaction } from '../models/Transaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class IapService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Buy FUSD
     * @returns any Success
     * @throws ApiError
     */
    buyFusd({ requestBody, }: {
        requestBody?: {
            platform: 'ios' | 'android';
            txId: string;
        };
    }): CancelablePromise<{
        transaction: Transaction;
        user: PrivateUser;
    }>;
    /**
     * Receive IAP notification from Apple
     * @returns any Success
     * @throws ApiError
     */
    iapWebhook({ requestBody, }: {
        requestBody?: {
            signedPayload: string;
        };
    }): CancelablePromise<any>;
}
