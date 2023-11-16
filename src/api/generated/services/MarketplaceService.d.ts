import type { CreateOrder200Response } from '../models/CreateOrder200Response';
import type { CreateOrderRequest } from '../models/CreateOrderRequest';
import type { FoocaBoxOrder } from '../models/FoocaBoxOrder';
import type { FoocaCameraOrder } from '../models/FoocaCameraOrder';
import type { Order } from '../models/Order';
import type { PrivateUser } from '../models/PrivateUser';
import type { Transaction } from '../models/Transaction';
import type { UpdateOrder200Response } from '../models/UpdateOrder200Response';
import type { UpdateOrderRequest } from '../models/UpdateOrderRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MarketplaceService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get camera listings of marketplace
     * @returns FoocaCameraOrder Return the current listings
     * @throws ApiError
     */
    getCameraListings({ offset, limit, minPrice, maxPrice, sort, sortOrder, }: {
        offset: number;
        limit: number;
        minPrice?: number;
        maxPrice?: number;
        sort?: 'price' | 'createdAt';
        sortOrder?: 'asc' | 'desc';
    }): CancelablePromise<Array<FoocaCameraOrder>>;
    /**
     * Get camera listings of marketplace
     * @returns FoocaBoxOrder Return the current listings
     * @throws ApiError
     */
    getBoxListings({ offset, limit, minPrice, maxPrice, sort, sortOrder, }: {
        offset: number;
        limit: number;
        minPrice?: number;
        maxPrice?: number;
        sort?: 'price' | 'createdAt';
        sortOrder?: 'asc' | 'desc';
    }): CancelablePromise<Array<FoocaBoxOrder>>;
    /**
     * Create an order on the marketplace
     * @returns CreateOrder200Response Success
     * @throws ApiError
     */
    createOrder({ requestBody, }: {
        requestBody?: CreateOrderRequest;
    }): CancelablePromise<CreateOrder200Response>;
    /**
     * Update an order on the marketplace
     * @returns UpdateOrder200Response Success
     * @throws ApiError
     */
    updateOrder({ requestBody, }: {
        requestBody?: UpdateOrderRequest;
    }): CancelablePromise<UpdateOrder200Response>;
    /**
     * Cancel an order on the marketplace
     * @returns any Success
     * @throws ApiError
     */
    cancelOrder({ requestBody, }: {
        requestBody?: {
            orderId: string;
        };
    }): CancelablePromise<{
        order: Order;
    }>;
    /**
     * Fulfill a order
     * @returns any Success
     * @throws ApiError
     */
    fulfillOrder({ requestBody, }: {
        requestBody?: {
            orderId: string;
        };
    }): CancelablePromise<{
        transaction: Transaction;
        user: PrivateUser;
    }>;
}
