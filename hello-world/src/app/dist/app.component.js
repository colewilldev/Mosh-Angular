"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.tweet = {
            body: "This is the body of the tweet",
            isLiked: true,
            likesCount: 10
        };
        this.title = 'This is an Angular tutorial!';
        this.post = {
            isFavorite: true
        };
    }
    AppComponent.prototype.onFavoriteChanged = function (inputFromEvent) {
        console.log("Favorite Changed:", inputFromEvent.nameOfProperty);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.sass']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
