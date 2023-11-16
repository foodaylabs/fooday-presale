import type { AssetAmount } from './AssetAmount';
export type InvitationCodeHasBeenUsedByRookiePayload = {
    code: string;
    invitedUser: string;
    food: AssetAmount;
};
