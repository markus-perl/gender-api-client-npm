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
var ResultMultipleNames = /** @class */ (function (_super) {
    __extends(ResultMultipleNames, _super);
    function ResultMultipleNames(names) {
        var _this = _super.call(this) || this;
        _this.names = names;
        return _this;
    }
    /**
     * @returns {ResultSingleName[]}
     */
    ResultMultipleNames.prototype.getNames = function () {
        return this.names;
    };
    return ResultMultipleNames;
}(abstract_1.ResultAbstract));
exports.ResultMultipleNames = ResultMultipleNames;
