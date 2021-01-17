"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TitleTransformService = void 0;
var core_1 = require("@angular/core");
var TitleTransformService = /** @class */ (function () {
    function TitleTransformService() {
    }
    TitleTransformService.prototype.transform = function (value) {
        if (!value)
            return null;
        var prepositions = ['of', 'the'];
        var words = value.split(" ");
        for (var i = 0; i < words.length; i++) {
            if (words[i].includes(words[i])) {
                words[i] = words[i].toLowerCase();
            }
            else {
                words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
            }
        }
        return words.join(" ");
    };
    TitleTransformService = __decorate([
        core_1.Pipe({
            name: "TitleCase"
        })
    ], TitleTransformService);
    return TitleTransformService;
}());
exports.TitleTransformService = TitleTransformService;
