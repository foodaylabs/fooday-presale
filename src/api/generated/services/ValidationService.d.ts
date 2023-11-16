import type { Ids } from '../models/Ids';
import type { Validation } from '../models/Validation';
import type { Voted } from '../models/Voted';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ValidationService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Read validations
     * @returns any Success
     * @throws ApiError
     */
    readValidations({ ids, }: {
        /**
         * transaction ids
         */
        ids: Ids;
    }): CancelablePromise<any>;
    /**
     * Get voted transactions
     * @returns Voted Voted transactions
     * @throws ApiError
     */
    getVoted({ limit, offset, }: {
        limit: number;
        offset: number;
    }): CancelablePromise<Array<Voted>>;
    /**
     * get validations
     * @returns Validation Validations
     * @throws ApiError
     */
    getValidations({ limit, offset, }: {
        limit: number;
        offset: number;
    }): CancelablePromise<Array<Validation>>;
}
