export class FoocaService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Calculate upgrade price
     * @returns any Success
     * @throws ApiError
     */
    calculateUpgradePrice({ tokenId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fooca-cameras/{tokenId}/upgrade-price',
            path: {
                'tokenId': tokenId,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Preview Mint Fooca Box
     * @returns PreviewMintFoocaBox200Response Success
     * @throws ApiError
     */
    previewMintFoocaBox({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/preview-mint-fooca-box',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Mint Fooca Box
     * @returns any Success
     * @throws ApiError
     */
    mintFoocaBox({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/mint-fooca-box',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Upgrade Fooca
     * @returns any Success
     * @throws ApiError
     */
    upgradeFooca({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/upgrade-fooca',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Assign Fooca Attributes
     * @returns FoocaCamera Success
     * @throws ApiError
     */
    assignFoocaAttributes({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/assign-fooca-attributes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Calculate charge price
     * @returns any Success
     * @throws ApiError
     */
    calculateChargePrice({ tokenId, chargeFrom, chargeTo, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fooca-cameras/{tokenId}/charge-price',
            path: {
                'tokenId': tokenId,
            },
            query: {
                'chargeFrom': chargeFrom,
                'chargeTo': chargeTo,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Charge Fooca
     * @returns any Success
     * @throws ApiError
     */
    chargeFooca({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/charge-fooca',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Open Fooca Box
     * @returns FoocaCamera Success
     * @throws ApiError
     */
    openFoocaBox({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/open-fooca',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get Fooca opensea metadata
     * @returns OpenseaMetadata More information https://docs.opensea.io/docs/metadata-standards
     * @throws ApiError
     */
    getFoocaOpenseaMetadata({ tokenId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fooca-cameras/metadata/{tokenId}',
            path: {
                'tokenId': tokenId,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
}
