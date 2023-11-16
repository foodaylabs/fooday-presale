"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
class ValidationService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Read validations
     * @returns any Success
     * @throws ApiError
     */
    readValidations({ ids, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/read-validations',
            query: {
                'ids': ids,
            },
        });
    }
    /**
     * Get voted transactions
     * @returns Voted Voted transactions
     * @throws ApiError
     */
    getVoted({ limit, offset, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/voted',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
    /**
     * get validations
     * @returns Validation Validations
     * @throws ApiError
     */
    getValidations({ limit, offset, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/validations',
            query: {
                'limit': limit,
                'offset': offset,
            },
        });
    }
}
exports.ValidationService = ValidationService;
