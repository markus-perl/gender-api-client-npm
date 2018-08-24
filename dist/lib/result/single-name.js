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
var ResultSingleName = /** @class */ (function (_super) {
    __extends(ResultSingleName, _super);
    function ResultSingleName(name_sanitized, country, gender, samples, accuracy, duration, credits_used) {
        var _this = _super.call(this) || this;
        _this.name_sanitized = name_sanitized;
        _this.country = country;
        _this.gender = gender;
        _this.samples = samples;
        _this.accuracy = accuracy;
        _this.duration = duration;
        _this.credits_used = credits_used;
        return _this;
    }
    return ResultSingleName;
}(abstract_1.ResultAbstract));
exports.ResultSingleName = ResultSingleName;
