import type { Duration } from '../models/Duration';
import type { FoocaBox } from '../models/FoocaBox';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class AdminService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Update settings
     * @returns any Success
     * @throws ApiError
     */
    updateSettings(): CancelablePromise<any>;
    /**
     * Trigger settlement
     * @returns any openapi spec
     * @throws ApiError
     */
    triggerSettlement({ requestBody, }: {
        requestBody?: {
            offset: number;
            duration: Duration;
        };
    }): CancelablePromise<any>;
    /**
     * Airdrop Fooca Box
     * @returns FoocaBox Success
     * @throws ApiError
     */
    airdropFoocaBox({ requestBody, }: {
        requestBody?: {
            toUid: string;
        };
    }): CancelablePromise<FoocaBox>;
    /**
     * Send test notification to Apple IAP server
     * @returns any Success
     * @throws ApiError
     */
    sendTestIapNotification(): CancelablePromise<any>;
}
