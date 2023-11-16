import type { AssetAmount } from '../models/AssetAmount';
import type { AssetId } from '../models/AssetId';
import type { BatteryPower } from '../models/BatteryPower';
import type { Duration } from '../models/Duration';
import type { FoocaAttributes } from '../models/FoocaAttributes';
import type { FoocaBox } from '../models/FoocaBox';
import type { FoocaCamera } from '../models/FoocaCamera';
import type { MintFoocaBoxRequest } from '../models/MintFoocaBoxRequest';
import type { NftID } from '../models/NftID';
import type { OpenseaMetadata } from '../models/OpenseaMetadata';
import type { PreviewMintFoocaBox200Response } from '../models/PreviewMintFoocaBox200Response';
import type { PrivateUser } from '../models/PrivateUser';
import type { Transaction } from '../models/Transaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class FoocaService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Calculate upgrade price
     * @returns any Success
     * @throws ApiError
     */
    calculateUpgradePrice({ tokenId, }: {
        /**
         * ERC721 Token ID
         */
        tokenId: NftID;
    }): CancelablePromise<{
        asset: AssetId;
        price: AssetAmount;
        waitingPeriod: Duration;
    }>;
    /**
     * Preview Mint Fooca Box
     * @returns PreviewMintFoocaBox200Response Success
     * @throws ApiError
     */
    previewMintFoocaBox({ requestBody, }: {
        requestBody?: MintFoocaBoxRequest;
    }): CancelablePromise<PreviewMintFoocaBox200Response>;
    /**
     * Mint Fooca Box
     * @returns any Success
     * @throws ApiError
     */
    mintFoocaBox({ requestBody, }: {
        requestBody?: MintFoocaBoxRequest;
    }): CancelablePromise<{
        foocaBox: FoocaBox;
        transaction: Transaction;
        user: PrivateUser;
    }>;
    /**
     * Upgrade Fooca
     * @returns any Success
     * @throws ApiError
     */
    upgradeFooca({ requestBody, }: {
        requestBody?: {
            tokenId: NftID;
        };
    }): CancelablePromise<{
        fooca: FoocaCamera;
        transaction: Transaction;
        user: PrivateUser;
    }>;
    /**
     * Assign Fooca Attributes
     * @returns FoocaCamera Success
     * @throws ApiError
     */
    assignFoocaAttributes({ requestBody, }: {
        requestBody?: {
            tokenId: NftID;
            attributes: FoocaAttributes;
        };
    }): CancelablePromise<FoocaCamera>;
    /**
     * Calculate charge price
     * @returns any Success
     * @throws ApiError
     */
    calculateChargePrice({ tokenId, chargeFrom, chargeTo, }: {
        /**
         * ERC721 Token ID
         */
        tokenId: NftID;
        /**
         * Power charge from
         */
        chargeFrom: BatteryPower;
        /**
         * Power charge to
         */
        chargeTo: BatteryPower;
    }): CancelablePromise<{
        asset: string;
        price: AssetAmount;
    }>;
    /**
     * Charge Fooca
     * @returns any Success
     * @throws ApiError
     */
    chargeFooca({ requestBody, }: {
        requestBody?: {
            tokenId: NftID;
            chargeTo: BatteryPower;
        };
    }): CancelablePromise<{
        fooca: FoocaCamera;
        transaction: Transaction;
        user: PrivateUser;
    }>;
    /**
     * Open Fooca Box
     * @returns FoocaCamera Success
     * @throws ApiError
     */
    openFoocaBox({ requestBody, }: {
        requestBody?: {
            tokenId: NftID;
        };
    }): CancelablePromise<FoocaCamera>;
    /**
     * Get Fooca opensea metadata
     * @returns OpenseaMetadata More information https://docs.opensea.io/docs/metadata-standards
     * @throws ApiError
     */
    getFoocaOpenseaMetadata({ tokenId, }: {
        /**
         * ERC721 Token ID
         */
        tokenId: NftID;
    }): CancelablePromise<OpenseaMetadata>;
}
