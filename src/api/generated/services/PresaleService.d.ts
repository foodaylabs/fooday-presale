import type { PrivateUser } from '../models/PrivateUser';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PresaleService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get presale fooca count
     * @returns any Presale fooca
     * @throws ApiError
     */
    getPresaleFooca({ wallet, }: {
        wallet: string;
    }): CancelablePromise<{
        amount: number;
        claimed: boolean;
        claimMessage?: string;
    }>;
    /**
     * Claim presale fooca
     * @returns any Claim result
     * @throws ApiError
     */
    claimPresaleFooca({ requestBody, }: {
        requestBody?: {
            wallet: string;
            message: string;
            signature: string;
        };
    }): CancelablePromise<{
        /**
         * If the logged-in user exists, return the user
         */
        user?: PrivateUser;
        /**
         * If the logged-in user does not exist, return the invitation code
         */
        invitationCode?: string;
    }>;
}
