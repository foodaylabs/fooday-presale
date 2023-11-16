import type { InvitationCode } from '../models/InvitationCode';
import type { InviteReward } from '../models/InviteReward';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class InvitationsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * get invitation codes
     * @returns any success
     * @throws ApiError
     */
    getInvitationCodes({ offset, limit, }: {
        offset: number;
        limit: number;
    }): CancelablePromise<{
        total: number;
        available: number;
        signUpReward: InviteReward;
        reviewReward: InviteReward;
        codes: Array<InvitationCode>;
    }>;
    /**
     * Verify a invitation code
     * @returns any Valid activation code
     * @throws ApiError
     */
    verifyInvitationCode({ requestBody, }: {
        requestBody?: {
            code: string;
        };
    }): CancelablePromise<any>;
}
