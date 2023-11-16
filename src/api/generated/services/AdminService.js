"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
class AdminService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Update settings
     * @returns any Success
     * @throws ApiError
     */
    updateSettings() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/update-settings',
        });
    }
    /**
     * Trigger settlement
     * @returns any openapi spec
     * @throws ApiError
     */
    triggerSettlement({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/trigger-settlement',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Airdrop Fooca Box
     * @returns FoocaBox Success
     * @throws ApiError
     */
    airdropFoocaBox({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/airdrop-fooca-box',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Send test notification to Apple IAP server
     * @returns any Success
     * @throws ApiError
     */
    sendTestIapNotification() {
        return this.httpRequest.request({
            method: 'POST',
            url: '/admin/iap/send-test-notification',
        });
    }
}
exports.AdminService = AdminService;
