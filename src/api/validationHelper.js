"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstValidationTransaction = void 0;
const generated_1 = require("./generated");
function getFirstValidationTransaction(validation) {
    switch (validation.type) {
        case generated_1.ActionType.CREATE_SPOT:
            return validation.data[0];
        case generated_1.ActionType.SUBMIT_REVIEW: {
            return validation.data;
        }
        default:
            throw new Error('Invalid action type: ' + validation.type);
    }
}
exports.getFirstValidationTransaction = getFirstValidationTransaction;
