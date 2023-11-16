import { config } from '../config';
import { FoodayRestClient } from './generated';
export * from './generated';
export * from './notification';
export const createApiClient = (options = {}) => {
    return new FoodayRestClient(Object.assign({ BASE: config.apiEndpoint }, options));
};
export const throwApiError = (data) => {
    if (Object.prototype.hasOwnProperty.call(data, 'code') &&
        Object.prototype.hasOwnProperty.call(data, 'message') &&
        Object.keys(data !== null && data !== void 0 ? data : {}).length === 2) {
        const err = data;
        throw new ApiError(err.message, err.code);
    }
    return data;
};
export class ApiError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
