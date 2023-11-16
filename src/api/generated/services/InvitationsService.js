export class InvitationsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * get invitation codes
     * @returns any success
     * @throws ApiError
     */
    getInvitationCodes({ offset, limit, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/invitations',
            query: {
                'offset': offset,
                'limit': limit,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Verify a invitation code
     * @returns any Valid activation code
     * @throws ApiError
     */
    verifyInvitationCode({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/invitations/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
