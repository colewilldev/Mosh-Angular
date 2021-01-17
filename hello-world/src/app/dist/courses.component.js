"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CoursesComponent = void 0;
var core_1 = require("@angular/core");
var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(service) {
        this.title = "List of Courses";
        this.courses = ['1', '2', '3'];
        this.colSpan = 2;
        this.imageUrl = "http://lorempixel.com/400/200";
        this.isActive = true;
        this.email = 'me@examole.com';
        this.courseItems = {
            title: " The Complete Angular Course",
            rating: 4.2342432,
            students: 300034,
            price: 190.95,
            releaseDate: new Date(2016, 3, 1)
        };
        this.text = "Investor funding seed round churn rate customer bootstrapping scrum project validation buzz startup advisor infographic. Alpha holy grail founders innovator gamification non-disclosure agreement. Hackathon A/B testing venture learning curve backing creative seed money responsive web design. Pitch crowdfunding paradigm shift founders partnership business model canvas launch party non-disclosure agreement focus branding burn rate lean startup creative. Social proof scrum project infographic crowdfunding virality paradigm shift. Technology bootstrapping metrics network effects traction burn rate partnership holy grail termsheet social proof prototype bandwidth. User experience termsheet lean startup incubator. Buyer interaction design sales series A financing user experience. Business-to-business crowdsource user experience. Beta stock series A financing venture supply chain lean startup growth hacking business-to-consumer angel investor deployment funding buyer accelerator.";
        this.courses = service.getCourses();
    }
    CoursesComponent.prototype.onSave = function (e) {
        e.stopPropagation();
        console.log(e);
    };
    CoursesComponent.prototype.onDivClicked = function () {
        console.log("div clicked");
    };
    CoursesComponent.prototype.onKeyUp = function (email) {
        console.log(email);
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'app-courses',
            templateUrl: "./courses.component.html"
        })
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
