export class IapService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Buy FUSD
     * @returns any Success
     * @throws ApiError
     */
    buyFusd({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/buy-fusd',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Receive IAP notification from Apple
     * @returns any Success
     * @throws ApiError
     */
    iapWebhook({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/iap/webhook',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
