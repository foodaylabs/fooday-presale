export class WalletService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Create deposit address
     * @returns any Wallet created
     * @throws ApiError
     */
    createDepositAddress({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/create-deposit-address',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get deposit addresses
     * @returns string Wallets returned
     * @throws ApiError
     */
    getDepositAddresses({ asset, chain, contract, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/assets/{asset}/{chain}/{contract}/deposit-addresses',
            path: {
                'asset': asset,
                'chain': chain,
                'contract': contract,
            },
        });
    }
    /**
     * Get transaction
     * @returns Transaction Transaction returned
     * @throws ApiError
     */
    getTransaction({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/transactions/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get transactions
     * @returns Transaction Transactions returned
     * @throws ApiError
     */
    getTransactions({ offset, limit, asset, type, status, from, to, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/transactions',
            query: {
                'offset': offset,
                'limit': limit,
                'asset': asset,
                'type': type,
                'status': status,
                'from': from,
                'to': to,
            },
        });
    }
    /**
     * Get unsettled transactions
     * @returns Transaction Unsettled transactions
     * @throws ApiError
     */
    getUnsettledTransactions({ offset, limit, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/unsettled-transactions',
            query: {
                'offset': offset,
                'limit': limit,
            },
        });
    }
}
