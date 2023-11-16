import type { Comment } from '../models/Comment';
import type { DeleteCommentRequest } from '../models/DeleteCommentRequest';
import type { PostCommentRequest } from '../models/PostCommentRequest';
import type { UpdateCommentRequest } from '../models/UpdateCommentRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CommentService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Post a comment
     * @returns Comment Comment created
     * @throws ApiError
     */
    postComment({ requestBody, }: {
        requestBody?: PostCommentRequest;
    }): CancelablePromise<Comment>;
    /**
     * Delete a comment
     * @returns Comment Comment deleted
     * @throws ApiError
     */
    deleteComment({ requestBody, }: {
        requestBody?: DeleteCommentRequest;
    }): CancelablePromise<Comment>;
    /**
     * Update a comment
     * @returns Comment Comment updated
     * @throws ApiError
     */
    updateComment({ requestBody, }: {
        requestBody?: UpdateCommentRequest;
    }): CancelablePromise<Comment>;
}
