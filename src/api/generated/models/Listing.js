"use strict";
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
var Listing;
(function (Listing) {
    let status;
    (function (status) {
        status["OPEN"] = "open";
        status["FULFILLED"] = "fulfilled";
        status["CANCELLED"] = "cancelled";
    })(status = Listing.status || (Listing.status = {}));
})(Listing = exports.Listing || (exports.Listing = {}));
