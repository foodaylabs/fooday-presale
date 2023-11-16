import type { InvalidReason } from './InvalidReason';
export type ValidationCreationObject = {
    helpful: boolean;
    id: string;
    reason?: InvalidReason;
};
