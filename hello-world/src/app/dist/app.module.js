"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var titleTransform_pipe_1 = require("./titleTransform.pipe");
var courses_component_1 = require("./courses.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var courses_service_1 = require("./courses.service");
var authors_component_1 = require("./authors/authors.component");
var authors_service_1 = require("./authors.service");
var forms_1 = require("@angular/forms");
var summary_pipe_1 = require("./summary.pipe");
var star_component_1 = require("./star/star.component");
var title_case_component_1 = require("./title-case/title-case.component");
var bootstrap_panel_component_1 = require("./bootstrap-panel/bootstrap-panel.component");
var like_component_1 = require("./like/like.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                courses_component_1.CoursesComponent,
                authors_component_1.AuthorsComponent,
                summary_pipe_1.SummaryPipe,
                star_component_1.StarComponent,
                title_case_component_1.TitleCaseComponent,
                titleTransform_pipe_1.TitleTransformService,
                bootstrap_panel_component_1.PanelComponent,
                like_component_1.LikeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [courses_service_1.CoursesSevice, authors_service_1.AuthorsService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
