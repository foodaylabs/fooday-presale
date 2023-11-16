import type { Country } from './Country';
import type { URI } from './URI';
import type { UserDisplayName } from './UserDisplayName';
import type { Username } from './Username';
export type UserProfile = {
    username: Username;
    displayName: UserDisplayName;
    country: Country;
    preferredLanguages: Array<string>;
    avatarURL?: URI;
    timezone: string;
    bio?: string;
    birthday?: string;
    gender?: UserProfile.gender;
};
export declare namespace UserProfile {
    enum gender {
        MALE = "male",
        FEMALE = "female",
        OTHER = "other"
    }
}
