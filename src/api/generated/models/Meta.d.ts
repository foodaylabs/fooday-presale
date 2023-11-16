import type { Asset } from './Asset';
import type { BoxRarityOption } from './BoxRarityOption';
import type { CameraFilter } from './CameraFilter';
import type { DefaultAvatar } from './DefaultAvatar';
import type { FudosAction } from './FudosAction';
import type { FusdIapProduct } from './FusdIapProduct';
import type { InvalidReasonTranslation } from './InvalidReasonTranslation';
import type { MissionTypeTranslation } from './MissionTypeTranslation';
import type { Option } from './Option';
import type { PaymentMethodOption } from './PaymentMethodOption';
export type Meta = {
    reviewContentMinLength: number;
    reviewContentMaxLength: number;
    meals: Array<Option>;
    spotCategories: Array<Option>;
    mediaCategories: Array<Option>;
    paymentMethods: Array<PaymentMethodOption>;
    fudosActions: Array<FudosAction>;
    assets: Array<Asset>;
    rarity: Array<Option>;
    boxRarities: Array<BoxRarityOption>;
    invalidReasons: Array<InvalidReasonTranslation>;
    actionTypes: Array<Option>;
    penaltyTypes: Array<Option>;
    cameraFilters: Array<CameraFilter>;
    marketplace: {
        /**
         * The fee rate of marketplace.
         * ex. 0.05 means 5% fee rate.
         *
         */
        fee: number;
    };
    defaultAvatars: Array<DefaultAvatar>;
    fusdIapProducts: Array<FusdIapProduct>;
    missionTypes: Array<MissionTypeTranslation>;
};
