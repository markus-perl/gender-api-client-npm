"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var abstract_1 = require("./abstract");
var ResultStats = /** @class */ (function (_super) {
    __extends(ResultStats, _super);
    function ResultStats(key, is_limit_reached, remaining_requests, amount_month_start, amount_month_bought, duration) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.is_limit_reached = is_limit_reached;
        _this.remaining_requests = remaining_requests;
        _this.amount_month_start = amount_month_start;
        _this.amount_month_bought = amount_month_bought;
        _this.duration = duration;
        return _this;
    }
    return ResultStats;
}(abstract_1.ResultAbstract));
exports.ResultStats = ResultStats;
