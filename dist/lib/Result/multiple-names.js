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
var GenderApiClientResultMultipleNames = /** @class */ (function (_super) {
    __extends(GenderApiClientResultMultipleNames, _super);
    function GenderApiClientResultMultipleNames(names) {
        var _this = _super.call(this) || this;
        _this.names = names;
        _this.pointer = 0;
        return _this;
    }
    GenderApiClientResultMultipleNames.prototype.next = function () {
        if (this.pointer < this.names.length) {
            return {
                done: false,
                value: this.names[this.pointer++]
            };
        }
        else {
            return {
                done: true
            };
        }
    };
    return GenderApiClientResultMultipleNames;
}(abstract_1.GenderApiClientResultAbstract));
exports.GenderApiClientResultMultipleNames = GenderApiClientResultMultipleNames;
