"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresaleService = void 0;
class PresaleService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get presale fooca count
     * @returns any Presale fooca
     * @throws ApiError
     */
    getPresaleFooca({ wallet, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/presale-fooca/{wallet}',
            path: {
                'wallet': wallet,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Claim presale fooca
     * @returns any Claim result
     * @throws ApiError
     */
    claimPresaleFooca({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/claim-presale-fooca',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
exports.PresaleService = PresaleService;
