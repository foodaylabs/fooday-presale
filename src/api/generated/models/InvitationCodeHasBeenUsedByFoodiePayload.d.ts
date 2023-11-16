import type { AssetAmount } from './AssetAmount';
export type InvitationCodeHasBeenUsedByFoodiePayload = {
    code: string;
    invitedUser: string;
    food: AssetAmount;
};
