import { FoodayRestClient, OpenAPIConfig, Error as GeneratedApiError } from './generated';
export * from './generated';
export * from './notification';
export declare const createApiClient: (options?: Partial<Omit<OpenAPIConfig, 'BASE'>>) => FoodayRestClient;
export declare const throwApiError: <T>(data: GeneratedApiError | T) => T;
export declare class ApiError extends Error {
    readonly code: number;
    constructor(msg: string, code: number);
}
