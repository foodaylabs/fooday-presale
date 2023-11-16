import type { MediaID } from './MediaID';
import type { NftID } from './NftID';
import type { SpotCreationObject } from './SpotCreationObject';
export type CreateSpotRequest = {
    foocaId: NftID;
    media: Array<MediaID>;
    spot: SpotCreationObject;
};
