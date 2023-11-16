"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaService = void 0;
class MetaService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Health check
     * @returns any health check
     * @throws ApiError
     */
    getHealth() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/health',
        });
    }
    /**
     * OpenAPI spec
     * @returns any openapi spec
     * @throws ApiError
     */
    getSpec() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/spec',
        });
    }
    /**
     * Get i18n resources
     * @returns any I18n resource
     * @throws ApiError
     */
    getI18NResource({ language, namespace, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/locales/{language}/{namespace}',
            path: {
                'language': language,
                'namespace': namespace,
            },
        });
    }
    /**
     * Get meta
     * @returns Meta Fooday meta returned
     * @throws ApiError
     */
    getMeta() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/meta',
        });
    }
}
exports.MetaService = MetaService;
