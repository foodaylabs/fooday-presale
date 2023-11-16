import type { Mission } from '../models/Mission';
import type { MissionReward } from '../models/MissionReward';
import type { MissionType } from '../models/MissionType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class MissionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Collect all missions
     * @returns MissionReward Success
     * @throws ApiError
     */
    collectAllMissions({ requestBody, }: {
        requestBody?: {
            type: MissionType;
        };
    }): CancelablePromise<Array<MissionReward>>;
    /**
     * collect mission
     * @returns MissionReward Success
     * @throws ApiError
     */
    collectMission({ requestBody, }: {
        requestBody?: {
            id: string;
        };
    }): CancelablePromise<Array<MissionReward>>;
    /**
     * Get missions
     * @returns any Success
     * @throws ApiError
     */
    getMissions({ offset, limit, type, }: {
        offset: number;
        limit: number;
        type: MissionType;
    }): CancelablePromise<{
        total: number;
        completed: number;
        missions: Array<Mission>;
    }>;
    /**
     * Get mission counts
     * @returns any Success
     * @throws ApiError
     */
    getMissionCounts(): CancelablePromise<{
        completed: Record<string, number>;
        /**
         * @deprecated
         */
        canComplete: Record<string, number>;
    }>;
}
