import type { PublicUser } from './PublicUser';
import type { Time } from './Time';
export type InvitationCode = {
    code: string;
    usedAt?: Time;
    usedBy?: PublicUser;
    reviewed: boolean;
};
