import type { AssetId } from '../models/AssetId';
import type { Time } from '../models/Time';
import type { Transaction } from '../models/Transaction';
import type { TransactionStatus } from '../models/TransactionStatus';
import type { TransactionType } from '../models/TransactionType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class WalletService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Create deposit address
     * @returns any Wallet created
     * @throws ApiError
     */
    createDepositAddress({ requestBody, }: {
        requestBody?: {
            chain: string;
            asset: AssetId;
            contract: string;
        };
    }): CancelablePromise<{
        wallet: string;
    }>;
    /**
     * Get deposit addresses
     * @returns string Wallets returned
     * @throws ApiError
     */
    getDepositAddresses({ asset, chain, contract, }: {
        asset: AssetId;
        chain: string;
        contract: string;
    }): CancelablePromise<Array<string>>;
    /**
     * Get transaction
     * @returns Transaction Transaction returned
     * @throws ApiError
     */
    getTransaction({ id, }: {
        id: string;
    }): CancelablePromise<Transaction>;
    /**
     * Get transactions
     * @returns Transaction Transactions returned
     * @throws ApiError
     */
    getTransactions({ offset, limit, asset, type, status, from, to, }: {
        offset: number;
        limit: number;
        asset?: AssetId;
        type?: TransactionType;
        status?: TransactionStatus;
        from?: Time;
        to?: Time;
    }): CancelablePromise<Array<Transaction>>;
    /**
     * Get unsettled transactions
     * @returns Transaction Unsettled transactions
     * @throws ApiError
     */
    getUnsettledTransactions({ offset, limit, }: {
        offset: number;
        limit: number;
    }): CancelablePromise<Array<Transaction>>;
}
