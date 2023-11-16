import type { Meta } from '../models/Meta';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MetaService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Health check
     * @returns any health check
     * @throws ApiError
     */
    getHealth(): CancelablePromise<any>;
    /**
     * OpenAPI spec
     * @returns any openapi spec
     * @throws ApiError
     */
    getSpec(): CancelablePromise<any>;
    /**
     * Get i18n resources
     * @returns any I18n resource
     * @throws ApiError
     */
    getI18NResource({ language, namespace, }: {
        language: string;
        namespace: string;
    }): CancelablePromise<any>;
    /**
     * Get meta
     * @returns Meta Fooday meta returned
     * @throws ApiError
     */
    getMeta(): CancelablePromise<Meta>;
}
