import type { MediaID } from './MediaID';
import type { MediaMetadata } from './MediaMetadata';
import type { PublicUser } from './PublicUser';
import type { URI } from './URI';
export type Media = (MediaMetadata & {
    id: MediaID;
    user?: PublicUser;
    url: URI;
    small_url: URI;
    medium_url: URI;
});
