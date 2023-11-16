export class MarketplaceService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get camera listings of marketplace
     * @returns FoocaCameraOrder Return the current listings
     * @throws ApiError
     */
    getCameraListings({ offset, limit, minPrice, maxPrice, sort, sortOrder, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketplace/camera/listings',
            query: {
                'offset': offset,
                'limit': limit,
                'minPrice': minPrice,
                'maxPrice': maxPrice,
                'sort': sort,
                'sortOrder': sortOrder,
            },
        });
    }
    /**
     * Get camera listings of marketplace
     * @returns FoocaBoxOrder Return the current listings
     * @throws ApiError
     */
    getBoxListings({ offset, limit, minPrice, maxPrice, sort, sortOrder, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/marketplace/box/listings',
            query: {
                'offset': offset,
                'limit': limit,
                'minPrice': minPrice,
                'maxPrice': maxPrice,
                'sort': sort,
                'sortOrder': sortOrder,
            },
        });
    }
    /**
     * Create an order on the marketplace
     * @returns CreateOrder200Response Success
     * @throws ApiError
     */
    createOrder({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/create-order',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update an order on the marketplace
     * @returns UpdateOrder200Response Success
     * @throws ApiError
     */
    updateOrder({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/update-order',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Cancel an order on the marketplace
     * @returns any Success
     * @throws ApiError
     */
    cancelOrder({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/cancel-order',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Fulfill a order
     * @returns any Success
     * @throws ApiError
     */
    fulfillOrder({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fulfill-order',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
