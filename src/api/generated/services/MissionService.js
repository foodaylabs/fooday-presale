"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissionService = void 0;
class MissionService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Collect all missions
     * @returns MissionReward Success
     * @throws ApiError
     */
    collectAllMissions({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/collect-all-missions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * collect mission
     * @returns MissionReward Success
     * @throws ApiError
     */
    collectMission({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/collect-mission',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get missions
     * @returns any Success
     * @throws ApiError
     */
    getMissions({ offset, limit, type, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/missions',
            query: {
                'offset': offset,
                'limit': limit,
                'type': type,
            },
            errors: {
                400: `Bad request`,
            },
        });
    }
    /**
     * Get mission counts
     * @returns any Success
     * @throws ApiError
     */
    getMissionCounts() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/missions/counts',
            errors: {
                400: `Bad request`,
            },
        });
    }
}
exports.MissionService = MissionService;
