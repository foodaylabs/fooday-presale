"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["CONFIRMED"] = "confirmed";
    TransactionStatus["REJECTED"] = "rejected";
    TransactionStatus["FAILED"] = "failed";
    TransactionStatus["DISCARDED"] = "discarded";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
