export class CommentService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Post a comment
     * @returns Comment Comment created
     * @throws ApiError
     */
    postComment({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comments',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Delete a comment
     * @returns Comment Comment deleted
     * @throws ApiError
     */
    deleteComment({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/delete-comment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Update a comment
     * @returns Comment Comment updated
     * @throws ApiError
     */
    updateComment({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/update-comment',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
