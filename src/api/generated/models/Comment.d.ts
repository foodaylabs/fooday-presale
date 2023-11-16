import type { PublicUser } from './PublicUser';
export type Comment = {
    id: string;
    author: PublicUser;
    content: string;
    createdTime: string;
    updatedTime: string;
    deletedTime?: string;
};
