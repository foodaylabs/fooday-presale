"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = exports.throwApiError = exports.createApiClient = void 0;
const config_1 = require("../config");
const generated_1 = require("./generated");
__exportStar(require("./generated"), exports);
__exportStar(require("./notification"), exports);
const createApiClient = (options = {}) => {
    return new generated_1.FoodayRestClient(Object.assign({ BASE: config_1.config.apiEndpoint }, options));
};
exports.createApiClient = createApiClient;
const throwApiError = (data) => {
    if (Object.prototype.hasOwnProperty.call(data, 'code') &&
        Object.prototype.hasOwnProperty.call(data, 'message') &&
        Object.keys(data !== null && data !== void 0 ? data : {}).length === 2) {
        const err = data;
        throw new ApiError(err.message, err.code);
    }
    return data;
};
exports.throwApiError = throwApiError;
class ApiError extends Error {
    constructor(msg, code) {
        super(msg);
        this.code = code;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
exports.ApiError = ApiError;
