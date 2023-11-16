import type { PublicUser } from './PublicUser';
import type { SpotField } from './SpotField';
import type { SpotFieldValue } from './SpotFieldValue';
import type { SpotUpdateType } from './SpotUpdateType';
import type { Time } from './Time';
export type SpotUpdate = {
    field: SpotField;
    value: SpotFieldValue;
    updatedAt: Time;
    user: PublicUser;
    type: SpotUpdateType;
    canUpdate: boolean;
};
