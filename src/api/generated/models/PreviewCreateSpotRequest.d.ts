import type { NftID } from './NftID';
import type { SpotCreationObject } from './SpotCreationObject';
export type PreviewCreateSpotRequest = {
    foocaId: NftID;
    spot: SpotCreationObject;
    media?: Record<string, number>;
    mediaCaptionCountByCategory?: Record<string, number>;
    /**
     * @deprecated
     */
    mediaCaptionCount?: number;
};
