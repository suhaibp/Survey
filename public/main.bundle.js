webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var animations_2 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var ng2_dragula_1 = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var top_bar_component_1 = __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.ts");
var side_bar_component_1 = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
var reference_component_component_1 = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
var admin_login_component_1 = __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.ts");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var company_sidebar_component_1 = __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.ts");
var company_top_bar_component_1 = __webpack_require__("../../../../../src/app/components/company-top-bar/company-top-bar.component.ts");
var company_users_component_1 = __webpack_require__("../../../../../src/app/components/company-users/company-users.component.ts");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var company_create_survey_component_1 = __webpack_require__("../../../../../src/app/components/company-create-survey/company-create-survey.component.ts");
var company_list_survey_component_1 = __webpack_require__("../../../../../src/app/components/company-list-survey/company-list-survey.component.ts");
var company_edit_survey_component_1 = __webpack_require__("../../../../../src/app/components/company-edit-survey/company-edit-survey.component.ts");
var company_survey_preview_component_1 = __webpack_require__("../../../../../src/app/components/company-survey-preview/company-survey-preview.component.ts");
__webpack_require__("../../../../hammerjs/hammer.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var table_1 = __webpack_require__("../../../cdk/esm5/table.es5.js");
var appRoutes = [
    { path: '', component: reference_component_component_1.ReferenceComponentComponent },
    { path: '', redirectTo: '/reference', pathMatch: 'full' },
    { path: 'top-bar', component: top_bar_component_1.TopBarComponent },
    { path: 'side-bar', component: side_bar_component_1.SideBarComponent },
    { path: 'reference', component: reference_component_component_1.ReferenceComponentComponent },
    { path: 'admin-login', component: admin_login_component_1.AdminLoginComponent },
    { path: 'company-users', component: company_users_component_1.CompanyUsersComponent },
    { path: 'company-create-survey', component: company_create_survey_component_1.CompanyCreateSurveyComponent },
    { path: 'company-list-survey', component: company_list_survey_component_1.CompanyListSurveyComponent },
    { path: 'company-edit-survey/:id', component: company_edit_survey_component_1.CompanyEditSurveyComponent },
    { path: 'preview', component: company_survey_preview_component_1.CompanySurveyPreviewComponent },
];
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        core_1.NgModule({
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule,
            ],
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());
exports.DemoMaterialModule = DemoMaterialModule;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                top_bar_component_1.TopBarComponent,
                side_bar_component_1.SideBarComponent,
                reference_component_component_1.ReferenceComponentComponent,
                admin_login_component_1.AdminLoginComponent,
                company_sidebar_component_1.CompanySidebarComponent,
                company_top_bar_component_1.CompanyTopBarComponent,
                company_users_component_1.CompanyUsersComponent,
                company_create_survey_component_1.CompanyCreateSurveyComponent,
                company_list_survey_component_1.CompanyListSurveyComponent,
                company_edit_survey_component_1.CompanyEditSurveyComponent,
                company_survey_preview_component_1.CompanySurveyPreviewComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                material_1.MatNativeDateModule,
                forms_1.ReactiveFormsModule,
                // MatFormFieldModule,
                DemoMaterialModule,
                animations_2.NoopAnimationsModule,
                ng2_dragula_1.DragulaModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            providers: [config_1.Config, admin_service_1.AdminService, company_service_1.CompanyService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//platformBrowserDynamic().bootstrapModule(AppModule);


/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\n    width: 360px;\n    padding: 13% 0 0;\n    margin: auto;\n  }\n  .form {\n    position: relative;\n    z-index: 1;\n    background: #FFFFFF;\n    max-width: 360px;\n    margin: 0 auto 100px;\n    padding: 45px;\n    text-align: center;\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n        border-radius: 26px;\n  }\n  .form input {\n    font-family: \"Roboto\", sans-serif;\n    outline: 0;\n    background: #f2f2f2;\n    width: 100%;\n    border: 0;\n    margin: 0 0 0px;\n    padding: 15px;\n    box-sizing: border-box;\n    font-size: 14px;\n  }\n  \n  /* .form button:hover,.form button:active,.form button:focus {\n  \n  } */\n  .form .message {\n    margin: 15px 0 0;\n    color: #b3b3b3;\n    font-size: 12px;\n  }\n  .form .message a {\n    color: #4CAF50;\n    text-decoration: none;\n  }\n  .form .register-form {\n    display: none;\n  }\n  .login-body .container {\n    position: relative;\n    z-index: 1;\n    max-width: 300px;\n    margin: 0 auto;\n  }\n  .login-body .container:before, .container:after {\n    content: \"\";\n    display: block;\n    clear: both;\n  }\n  .login-body .container .info {\n    margin: 50px auto;\n    text-align: center;\n  }\n  .login-body .container .info h1 {\n    margin: 0 0 15px;\n    padding: 0;\n    font-size: 36px;\n    font-weight: 300;\n    color: #1a1a1a;\n  }\n  .container .info span {\n    color: #4d4d4d;\n    font-size: 12px;\n  }\n  .container .info span a {\n    color: #000000;\n    text-decoration: none;\n  }\n  .container .info span .fa {\n    color: #EF3B3A;\n  }\n \n  /* body {\n   \n    \n  } */\n  .input-group{margin-bottom:15px;}\n  .login-body .styles1 {\n      border: 0;\n      border-bottom: 1px solid #dbdbdb;\n      font-family: \"Roboto-Regular\";\n      background: none;\n      padding: 10px 0px;\n      font-size: 13px;\n      max-width: 400px;\n      width: 100%;\n         color: #5d5d5d !important;\n      float: left;\n  }\n  .login-body h2{font-family: \"Roboto-Bold\";text-align:center;color:#111;font-size:30px;    padding: 0;\n      line-height: 30px;}\n  \n  .login-body .input-group-addon{border-radius:0 !important;}\n  .login-body{background-color:#242833 !important;    height: 100vh;}\n  .login-body .input-group-addon{background-color:inherit !important;border:none !important;border-bottom: 1px solid #ccc !important;border-radius:0;padding-left:0 !important;}\n  .btn{    border-radius: 16px !important;    padding: 6px 22px !important;}\n  .omb_btn-facebook {background: #3b5998;width:100%;float:left;}\n  \n  .omb_btn-google {background: #c32f10;width:100%;float:left;}\n  .omb_socialButtons>a{color:#fff !important;}\n  .omb_socialButtons .col-sm-12{margin-bottom:10px;}\n  .hidden-xs{font-size:14px;}\n  .omb_socialButtons {\n      margin-top: 30px;\n      margin-bottom: 16px;\n  }\n  .login-body .fa{color:#d9534f;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"login-body\">\n   <div class=\"login-page\">\n    <div class=\"form\">\n\t  <h2>Login</h2>\n    <form class=\"login-form\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n      <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n\t\t\t  <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n        <input type=\"text\" placeholder=\"Username\" class=\"styles1 form-control\" required [(ngModel)]=\"newLogin.username\" name=\"username\" #username=\"ngModel\" />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n\t    </div>\n\t    <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\t\t\t <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\n       <input type=\"password\" placeholder=\"Password\" class=\"styles1 form-control\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\"/>\n       <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\t    </div>\n     <br/>\n      <button type=\"submit\" class=\"btn btn-danger\">Sign In</button>\n      <div class=\"form-group\">\n        <div *ngIf=\"showError\" class=\"help-block\">User Not Found...!</div>\n      </div> \n\t  <br/>\n    </form>\n   </div>\n  </div>\n</body>\n\n    \n    \n      \n\n    \n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(adminService, routes) {
        this.adminService = adminService;
        this.routes = routes;
        this.newLogin = {
            username: '',
            password: '',
        };
        this.showError = false;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin Login
    // Params        : admin username,admin password from form
    // Returns       : Token, admin id and role
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : Admin login
    AdminLoginComponent.prototype.login = function () {
        var _this = this;
        this.adminService.adminLogin(this.newLogin).subscribe(function (data) {
            console.log(data);
            if (data.success == false) {
                _this.showError = true;
            }
            if (data.success) {
                _this.showError = false;
                _this.adminService.storeUserData(data.token, data.admin);
                // this.routes.navigate(['/home']);
            }
        });
    };
    AdminLoginComponent = __decorate([
        core_1.Component({
            selector: 'admin-login',
            template: __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService, router_1.Router])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
exports.AdminLoginComponent = AdminLoginComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-create-survey/company-create-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  button, input, select, textarea {\r\n    margin-bottom: 12px;\r\n    margin-top: 12px;\r\n  }\r\n  .mid-division{\r\n      border-right: 2px solid #ccc;\r\n  }\r\n\r\n  .example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-left: 20px\r\n  }\r\n  \r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  \r\n  .example-selected-value {\r\n    margin: 15px 0;\r\n  }\r\n  .hdr{\r\n    text-align: center;\r\n  }\r\n  .hdr h4{\r\n      padding-top: 15px;\r\n      padding-bottom: 15px;\r\n  }\r\n  .ftr{\r\n      text-align: center\r\n  }\r\n  .ftr h4{\r\n    font-size: 16px ;\r\n}\r\n  /* .quest{\r\n      overflow: hidden;\r\n  } */\r\n  .quest h4{\r\n    padding: 5px;\r\n    font-size: 14px !important;\r\n  }\r\n  mat-progress-bar{\r\n    margin: 5px auto;\r\n  }\r\n  .progress {\r\n    height: 5px;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .bld{\r\n    font-weight: 700 !important\r\n  }\r\n  .itlc{\r\n    font-style: italic !important;\r\n  }\r\n  .mat-radio-label-content{\r\n      font-weight: unset !important;\r\n  }\r\n  .ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n    .bg-white{\r\n      background-color: #ffffff;\r\n    }\r\n\r\n\r\n    .mat-checkbox-layout{\r\n      margin-bottom: 24px;\r\n  }\r\n  .control-label{\r\n    font-size: 14px;\r\n    font-weight: 400\r\n}\r\n.quest{\r\n  margin: 40px 20px;\r\n  background: #f1e8e8;\r\n  padding: 10px;\r\n  position: relative;\r\n}\r\n.edit-iconz{position:absolute ;right: 0;top: 0;z-index: 10;min-height:10px;width:40px;}\r\n.progrs{\r\n  margin: 10px 20px;\r\n}\r\n\r\n\r\n.ourbutton2{    border-radius: 20px;\r\n    padding: 7px 40px;}\r\n.buttonleft{padding:2em 0;min-height: 300px;}\r\n\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n\r\n    .modal-content{border-radius:0;box-shadow:none;}\r\n    .modal-header {\r\n        padding: 7px 15px;\r\n        border-bottom: 1px solid #e5e5e5;\r\n        background: #da524f;\r\n    }\r\n    .modal-title {\r\n        margin: 0;\r\n        line-height: 26px;\r\n        font-size: 15px;\r\n        color: #fff;\r\n    }\r\n    .close {\r\n       \r\n        font-size: 21px;\r\n        font-weight: 400;\r\n        line-height: 28px;\r\n        color: #fff;\r\n        text-shadow: none;\r\n        filter: alpha(opacity=20);\r\n        opacity: inherit;\r\n        padding-top:0px;\r\n    }\r\n    a{outline:none; }\r\n    .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n    \r\n    .inputfileds{\r\n        width: 300px !important;\r\n    }\r\n    .inputitem{\r\n        margin-bottom:-15px;\r\n        float: left;\r\n        width: 500px;\r\n        /* width: 305px; */\r\n        /* width: 400px; */\r\n    }\r\n    .relaive{position:relative;}    \r\n\r\n    .bdy{\r\n      min-height: 300px;\r\n    }\r\n\r\n    .filter{\r\n      width: 20%;\r\n      float: right;\r\n      clear: left;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-create-survey/company-create-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<body *ngIf=\"!preview\">\n    \n                  <div id=\"wrapper\">\n              \n                      <!-- Navigation -->\n                      <app-company-top-bar></app-company-top-bar>            \n          <app-company-sidebar></app-company-sidebar>\n              \n                      <div id=\"\">\n                          <div class=\"container-fluid\">\n                                  \n                                              <!-- Page Heading -->\n                                            \n                                        \n                                              <!-- /.row -->\n                              \n                                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-2\"> </div>    \n                            <form  role=\"form\"  #fs=\"ngForm\" (ngSubmit)=\"fs.form.valid && saveBtnClick(fs);\" novalidate>        \n                            <div class=\"col-md-10\">\n                              \n                                <div class=\"col-md-4\">\n                                    <div style=\"background-color: #fff;padding: 10px\">\n                                      <h3>Create Survey</h3>\n\n\n                                      <mat-form-field  class=\"inputfileds\">\n                                          <input matInput placeholder=\"Survey Name\" required name=\"surName\" [(ngModel)]=\"survey.name\"  >\n                                        </mat-form-field>\n                                        <br>\n                                        <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Survey Category\" required name=\"surCategory\" [(ngModel)]=\"survey.category\"  >\n                                              <mat-option [value]=\"grp\" *ngFor=\"let grp of surveyCategory;\" >{{grp.name}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                          <br>\n                                          <mat-form-field>\n                                            <input matInput [matDatepicker]=\"picker\" required name=\"start_date\" [(ngModel)]=\"survey.start_date\" placeholder=\"Start Date\" >\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                          </mat-form-field>\n                                          <br>\n                                          <mat-form-field>\n                                            <input matInput [matDatepicker]=\"picker1\" required name=\"end_date\" [(ngModel)]=\"survey.end_date\" placeholder=\"End Date\" >\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                            <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n                                          </mat-form-field>\n                                          <br>\n                                        <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Theme\" required name=\"theme\" [(ngModel)]=\"survey.selectedTheme\" >\n                                              <mat-option [value]=\"grp\" *ngFor=\"let grp of themes;\" >{{grp.title}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                          <br>\n                                        <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Display Type\" required name=\"ui\" [(ngModel)]=\"survey.display_type.ui\" >\n                                              <mat-option [value]=\"grp.value\" *ngFor=\"let grp of displayType;\" >{{grp.label}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                          <br>\n                                          <div  *ngIf=\"survey.display_type.ui == 'Multiple'\">\n                                          <section class=\"example-section\">\n                                             Dispaly Page Number\n                                              <mat-slide-toggle class=\"example-margin\" name=\"pageno\" [(ngModel)]=\"survey.display_type.pageno\" [checked]=\"survey.display_type.pageno\">\n                                                 \n                                                </mat-slide-toggle>\n                                                \n                                              </section>\n                                              <br>\n                                             </div> \n                                                \n                                          <section class=\"example-section\">\n                                              Random Question  \n                                              <mat-slide-toggle class=\"example-margin\" name=\"randomization\" [(ngModel)]=\"survey.display_type.randomization\" [checked]=\"survey.display_type.randomization\">\n                                                 \n                                                </mat-slide-toggle>\n                                              </section>\n\n                                              <br>\n                                              <section class=\"example-section\">\n                                                  Skip Question  \n                                                  <mat-slide-toggle class=\"example-margin\" name=\"skip\" [(ngModel)]=\"survey.display_type.skip\" [checked]=\"survey.display_type.skip\">\n                                                     \n                                                    </mat-slide-toggle>\n                                                  </section>\n                                         <br>\n                                          <section class=\"example-section\">\n                                            Header  \n                                            <mat-slide-toggle class=\"example-margin\" [checked]=\"survey.showHeader\" name=\"showheader\" [(ngModel)]=\"survey.showHeader\" >\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                          <br>\n                                          \n                                          <section class=\"example-section\">\n                                            Footer  \n                                            <mat-slide-toggle class=\"example-margin\" [checked]=\"survey.showFooter\" name=\"showfooter\" [(ngModel)]=\"survey.showFooter\">\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                           \n                                    </div>\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <div style=\"background-color: #fff\">\n                                        <div class=\"col-md-10 col-md-offset-1 relaive\">\n                                            <div class=\"overlayz\"></div>\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-danger ourbutton\"  data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#addQuestion\">Add Question</a>\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-danger ourbutton\"  #invitePopUp data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#inviteUser\" style=\"display: none;\"></a>\n                                            <div class=\"col-md-12 shdw\">\n                                              <div class=\"row\">\n                                                <div class=\"col-md-12 hdr\" *ngIf=\"survey.showHeader\" [ngStyle]=\"{'background-color': survey.selectedTheme.h_bg_color || '#000'}\">\n                                                  <div class=\"col-md-2\">\n                                                  <div class=\"image-upload\">\n\n                                                      <label for=\"file-input\">\n                                                          <h6 *ngIf=\"!survey.logoSrc\"  [ngStyle]=\"{'color': survey.selectedTheme.h_font_color || '#fff'}\">Click here to set logo</h6>\n                                                          <img *ngIf=\"survey.logoSrc\" height=\"100\" [src]=\"survey.logoSrc\" title=\"Click here to change logo\">\n                                                      </label>\n                                                  \n                                                      <input style=\"display: none;\" (change)=\"displayPhoto($event)\" accept=\".png,.jpeg,.jpg,.bmp,.gif\" id=\"file-input\" type=\"file\"/>\n                                                  </div>\n                                                </div>\n                                                  <div class=\"col-md-10\">\n                                                  <a href=\"javascript:void(0)\"  *ngIf=\"!survey.showTitleInput\" (click)=\"showTitleInput()\" title=\"Click here to set a header\">\n                                                    <h5   [ngClass]=\"{ 'itlc' : survey.selectedTheme.h_font_italic, 'bld': survey.selectedTheme.h_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.h_font_color || '#fff','font-size':survey.selectedTheme.h_font_size || '', 'font-family':survey.selectedTheme.h_font_family || ''}\" >\n                                                    <span *ngIf=\"survey.header\">{{survey.header}}</span>\n                                                    <span  *ngIf=\"!survey.header\" >Click here to set a header</span>\n                                                  </h5></a>\n                                                  <input type=\"text\" (focusout)=\"updateHeaderText()\" name=\"headertitle\" *ngIf=\"survey.showTitleInput\" [(ngModel)]=\"survey.header\" >\n                                                </div>\n                                                </div>\n                                                <div class=\"col-md-12 bdy\" [ngStyle]=\"{'background-color': survey.selectedTheme.b_bg_color || '#fff'}\" >\n                                                  <div class=\"row\">\n                                                        <div [dragula]='\"third-bag\"' [dragulaModel]='survey.questions' >\n                                                          <div class=\"quest\" [ngStyle]=\"{'background-color': survey.selectedTheme.q_bg_color || '#f1e8e8'}\" *ngFor=\"let item of survey.questions; let j = index;\" >\n                                                                <h4 [ngClass]=\"{ 'itlc' : survey.selectedTheme.q_font_italic, 'bld': survey.selectedTheme.q_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.q_font_color || '#000','font-size':survey.selectedTheme.q_font_size || '', 'font-family':survey.selectedTheme.q_font_family || ''}\">\n                                                                  {{item.question}}\n                                                                </h4>\n                                                                <div class=\"edit-iconz\">\n                                                                <a href=\"javascript:void(0)\"  (click)=\"editQuestion(j)\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editQuestion\" ><i class=\"fa fa-pencil\"></i></a>\n                                                                <a href=\"javascript:void(0)\" (click)=\"deleteQuestionConfirm(j)\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"fa fa-trash-o\"></i></a>\n                                                                </div>\n                                                          </div>\n                                                        </div>\n                                                  </div>\n                                                  \n                                                  <div>\n                                                    <div *ngIf=\"survey.display_type.ui == 'Multiple Page'\" class=\"col-md-6 progrs\">\n                                                        <h5 *ngIf=\"survey.display_type.pageno\" [ngStyle]=\"{'color': survey.selectedTheme.progress_text_color || '#000'}\">Page No. 4 of 10</h5>\n                                                        <div class=\"progress\" >\n                                                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\n                                                            aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\" [ngStyle]=\"{'background-color': survey.selectedTheme.progress_color || ''}\">\n                                                              <span class=\"sr-only\">70% Complete</span>\n                                                            </div>\n                                                          </div> \n                                                    </div>\n                                                                \n                                                  </div> \n                                                </div>\n                                                <div class=\"col-md-12 ftr\" *ngIf=\"survey.showFooter\" [ngStyle]=\"{'background-color': survey.selectedTheme.f_bg_color || '#000'}\" >\n                                                    <a href=\"javascript:void(0)\"  *ngIf=\"!survey.showFooterInput\" (click)=\"showFooterInput()\" title=\"Click here to set a footer\">\n                                                    <h6  [ngStyle]=\"{'color': '#fff'}\">\n                                                    <span *ngIf=\"survey.footer\" [ngClass]=\"{ 'itlc' : survey.selectedTheme.f_font_italic, 'bld': survey.selectedTheme.f_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.f_font_color || '#fff','font-size':survey.selectedTheme.f_font_size || '', 'font-family':survey.selectedTheme.f_font_family || ''}\" >{{survey.footer}}</span>\n                                                    <span  *ngIf=\"!survey.footer\" [ngClass]=\"{ 'itlc' : survey.selectedTheme.f_font_italic, 'bld': survey.selectedTheme.f_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.f_font_color || '#fff','font-size':survey.selectedTheme.f_font_size || '', 'font-family':survey.selectedTheme.f_font_family || ''}\" >Click here to set a footer</span>\n                                                  </h6>\n                                                  </a>\n                                                <input type=\"text\" (focusout)=\"updateFooterText()\" name=\"footertitle\" *ngIf=\"survey.showFooterInput\" [(ngModel)]=\"survey.footer\" >\n                                              </div>\n                                                <a class=\"btn btn-danger ourbutton\"  [routerLink]=\"['/company-list-survey']\" >Back</a>\n                                                <button  class=\"btn btn-danger ourbutton\" type= \"submit\" (click)=\"showPreview();\" >Preview</button>\n                                                <button  class=\"btn btn-danger ourbutton\" type= \"submit\" [disabled]=\"saveBtnDisbled\"  >Save & Continue</button>\n                                                <div *ngIf=\"isError2\" class=\"text-danger text-left\">\n                                                    {{msg2}}\n                                               </div>\n                                                <div *ngIf=\"isSuccess2\" class=\"text-success text-left\">\n                                                    {{msg2}}\n                                              </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                    </div>\n                                </div>\n                            </div>\n                            </form> \n                          </div>\n                          \n                        </div>\n                        <!-- /#page-wrapper -->\n                        \n                                   \n                        </div>\n                    \n                        \n\n                      <!-- User Invite Popup start   -->\n\n                        <div id=\"inviteUser\"  class=\"modal fade\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button> -->\n                                  <h4 class=\"modal-title\">Email Invitation</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                  \n                              <!-- <form  role=\"form\"  #finvite=\"ngForm\" (ngSubmit)=\"finvite.form.valid && updateQuestion(finvite);\" novalidate> -->\n                              \n                                  <div class=\"form-group\" >\n                                      \n                                  \n                                  <mat-form-field class=\"filter\">\n                                      \n                                        <mat-select  (change)=\"updateUserList()\" name=\"xyz\" [(ngModel)]=\"selectedUserGroup\"  >\n                                          <mat-option value=\"all\">All</mat-option>\n                                          <mat-option value=\"{{grp._id}}\" *ngFor=\"let grp of userGroups\">{{grp.name}}</mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                      \n                                      <!-- <p>You selected: {{selected}} </p> -->\n                                    <div class=\"example-header\">\n                                      <mat-form-field>\n                                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                                      </mat-form-field>\n                                    </div>\n                                      \n                                      <div class=\"example-container mat-elevation-z8\">\n\n                                          <div class=\"example-container mat-elevation-z8\">\n                                              <mat-table #table [dataSource]=\"dataSource\">\n                                            \n                                                <!-- Checkbox Column -->\n                                                <ng-container matColumnDef=\"select\">\n                                                  <mat-header-cell *matHeaderCellDef>\n                                                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                                                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                                                                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                                                    </mat-checkbox>\n                                                  </mat-header-cell>\n                                                  <mat-cell *matCellDef=\"let row\">\n                                                    <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                                                  (change)=\"$event ? selection.toggle(row) : null\"\n                                                                  [checked]=\"selection.isSelected(row)\">\n                                                    </mat-checkbox>\n                                                  </mat-cell>\n                                                </ng-container>\n                                            \n                                                    <ng-container matColumnDef=\"email\">\n                                                        <mat-header-cell *matHeaderCellDef><b>Email</b></mat-header-cell>\n                                                        <mat-cell *matCellDef=\"let element\">{{element.email}}</mat-cell>\n                                                      </ng-container>\n                                            \n                                                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                                                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                                                         (click)=\"selection.toggle(row)\">\n                                                </mat-row>\n                                              </mat-table>\n                                              <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                                            </div>\n                                        \n                                      </div>\n                                      <br>\n                                      {{selection.selected.length}} User Selected\n                                      <br>\n\n                                      <div >\n                                          <mat-form-field class=\"inputfileds\" >\n                                              <input matInput placeholder=\"Email\" [(ngModel)]=\"newUser\" name=\"newUser\" >\n                                            </mat-form-field>\n                                            <button  [disabled]=\"addUserBtnDisbled\"  class=\"btn btn-danger ourbutton\" (click)=\"addUser()\">Add New User</button>\n                                      </div>\n                                  </div>\n\n                                  <div style=\"clear: both;\"></div>\n                                  <div *ngIf=\"isError3\" class=\"text-danger text-left\">\n                                      {{msg3}}\n                                 </div>\n                                 <div *ngIf=\"isSuccess3\" class=\"text-success text-left\">\n                                    {{msg3}}\n                              </div>\n                                  <!-- <button [disabled]=\"inviteBtnDisbled\" class=\"btn btn-danger ourbutton\" >Send Later</button> -->\n                                  <a class=\"btn btn-danger ourbutton\"  href=\"/company-list-survey\" >Send Later</a>\n                                  <button  [disabled]=\"inviteBtnDisbled\" class=\"btn btn-danger ourbutton\" (click)=\"inviteUser()\" >Send Invitation</button>\n                                  \n                                 \n                              <!-- </form> -->\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                              </div>\n                              \n                            </div>\n                          </div>\n\n                          <!-- user ivite Popup End   -->\n\n\n\n\n                      <!-- Edit Popup start   -->\n\n                        <div id=\"editQuestion\"  class=\"modal fade\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n                                  <h4 class=\"modal-title\">Update Question</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                  \n                              <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"f1.form.valid && updateQuestion(f1);\" novalidate>\n                              \n                                  <div class=\"form-group\" >\n                                      <label > Question </label>\n                                      <br>\n                                      <div *ngIf=\"isError1\" class=\"text-danger text-left\">\n                                          {{msg1}}\n                                     </div>\n                                     <div *ngIf=\"isSuccess1\" class=\"text-success text-left\">\n                                        {{msg1}}\n                                  </div>\n\n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <input matInput placeholder=\"Question here\" required   #question=\"ngModel\" name=\"question\" [(ngModel)]=\"editQuest.question\" >\n                                          </mat-form-field>\n                                        \n                                        </div>\n                                      <br>\n                                      <br>\n                                      <br>\n                                      <br>\n                                 \n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Question Type\" required name='edittype' #questionType=\"ngModel\" [(ngModel)]=\"editQuest.answerType\" >\n                                              <mat-option [value]=\"val.name\" *ngFor=\"let val of answerType;\"  >{{val.name}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                      </div>\n                                     \n                                      <div style=\"clear: both;\"></div>\n\n                                      <!-- multiple choice Start -->\n                                      <div *ngIf=\"editQuest.answerType=='Multiple choice'\">\n                                          <div   *ngFor=\"let item of editQuest.opts; let i = index; trackBy:trackByIndex\" >\n                                              <div class=\"inputitem\">\n                                                  <div class=\"row\">\n                                                      <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Option\" [value]=\"editQuest.opts[i]\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"editQuest.opts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                      <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                          <button class=\"btn-danger\" (click)=\"removeOptionEdit(i)\" style=\"float: left;\" >X</button>\n                                                      </div>  \n                                              </div>\n                                              <!-- <div style=\"float: left;padding-top: 14px;width:220px;\">\n                                                 \n                                              </div> -->\n                                            </div>\n                                      </div>\n                                      <div style=\"clear: both;\"></div>\n                                      <button  class=\"btn btn-danger ourbutton\" (click)=\"addMoreOptionEdit()\" >Add More</button>\n                                      </div>\n                                       <!-- multiple choice  End -->\n\n                                      <!-- Start Rating Start -->\n                                      <div *ngIf=\"editQuest.answerType=='star rating'\"  >\n                                          <br>\n                                          <section class=\"example-section\">\n                                            Show Label  \n                                            <mat-slide-toggle class=\"example-margin\" name=\"showStartlabel\" [checked]=\"editQuest.showStarLabel\" [(ngModel)]=\"editQuest.showStarLabel\" >\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                            <div *ngIf=\"editQuest.showStarLabel\">\n                                              <div class=\"inputitem\" *ngFor=\"let item of counter(5); let i = index; trackBy:trackByIndex\" >\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Label For {{i+1}} Star\" [value]=\"editQuest.starOpts[i]\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"editQuest.starOpts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                  <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                    <mat-icon class=\"example-icon\" *ngFor=\"let item of counter(i+1);let j = index;\" >star</mat-icon>\n                                                  </div>\n                                                  \n                                                </div>\n                                              </div>\n                                            </div>\n                                      </div>\n                                       <!-- Star Rating  End -->\n\n                                  </div>\n                                  <div style=\"clear: both;\"></div>\n                                  <button type= \"submit\" [disabled]=\"updateBtnDisbled\" class=\"btn btn-danger ourbutton\" >Update</button>\n                                 \n                              </form>\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                              </div>\n                              \n                            </div>\n                          </div>\n\n                          <!-- Edit Popup End   -->\n\n\n                        <!-- Add Popup Start   -->\n\n                        <div id=\"addQuestion\"  class=\"modal fade\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n                                  <h4 class=\"modal-title\">Create Question</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                  \n                              <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addQuestion(f);\" novalidate>\n                              \n                                  <div class=\"form-group\" >\n                                      <label > Question </label>\n                                      <br>\n                                      <div *ngIf=\"isError\" class=\"text-danger text-left\">\n                                          {{msg}}\n                                     </div>\n                                     <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\n                                        {{msg}}\n                                  </div>\n\n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <input matInput placeholder=\"Question here\" required   #question=\"ngModel\" name=\"question\" [(ngModel)]=\"quest.question\" >\n                                          </mat-form-field>\n                                        \n                                        </div>\n                                      <br>\n                                      <br>\n                                      <br>\n                                      <br>\n                                 \n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Question Type\" required name='type' #questionType=\"ngModel\" [(ngModel)]=\"quest.answerType\" >\n                                              <mat-option [value]=\"val.name\" *ngFor=\"let val of answerType;\"  >{{val.name}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                      </div>\n                                     \n                                      <div style=\"clear: both;\"></div>\n\n                                      <!-- multiple choice Start -->\n                                      <div *ngIf=\"quest.answerType=='Multiple choice'\">\n                                          <div   *ngFor=\"let item of quest.opts; let i = index; trackBy:trackByIndex\" >\n                                              <div class=\"inputitem\">\n                                                  <div class=\"row\">\n                                                      <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Option\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"quest.opts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                      <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                          <button class=\"btn-danger\" (click)=\"removeOption(i)\" style=\"float: left;\" >X</button>\n                                                      </div>  \n                                              </div>\n                                              <!-- <div style=\"float: left;padding-top: 14px;width:220px;\">\n                                                 \n                                              </div> -->\n                                            </div>\n                                      </div>\n                                      <div style=\"clear: both;\"></div>\n                                      <button  class=\"btn btn-danger ourbutton\" (click)=\"addMoreOption()\" >Add More</button>\n                                      </div>\n                                       <!-- multiple choice  End -->\n\n                                      <!-- Start Rating Start -->\n                                      <div *ngIf=\"quest.answerType=='star rating'\"  >\n                                          <br>\n                                          <section class=\"example-section\">\n                                            Show Label  \n                                            <mat-slide-toggle class=\"example-margin\" name=\"showStartlabel\" [checked]=\"quest.showStarLabel\" [(ngModel)]=\"quest.showStarLabel\" >\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                            <div *ngIf=\"quest.showStarLabel\">\n                                              <div class=\"inputitem\" *ngFor=\"let item of counter(5); let i = index; trackBy:trackByIndex\" >\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Label For {{i+1}} Star\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"quest.starOpts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                  <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                    <mat-icon class=\"example-icon\" *ngFor=\"let item of counter(i+1);let j = index;\" >star</mat-icon>\n                                                  </div>\n                                                  \n                                                </div>\n                                              </div>\n                                            </div>\n                                      </div>\n                                       <!-- Star Rating  End -->\n\n                                  </div>\n                                  <div style=\"clear: both;\"></div>\n                                  <button type= \"submit\" [disabled]=\"btnDisbled\" class=\"btn btn-danger ourbutton\" >Submit</button>\n                                 \n                              </form>\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                              </div>\n                              \n                            </div>\n                          </div>\n\n                            <!-- Add Popup End   -->\n\n\n                          <!-- Delete Popup Start -->\n\n                          <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                          \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <!-- <div class=\"modal-header\"> -->\n                                  <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n                                <!-- </div> -->\n                                <div class=\"modal-body\">\n                                    <h4>Are you sure ?</h4>\n                                \n                                </div>\n                              \n                                <div class=\"modal-footer\">\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                  <button type=\"button\" (click)=\"deleteQuestion()\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\n                                </div>\n                              </div>\n                          \n                            </div>\n                          </div>\n\n                          <!-- Delete Popup End -->\n                \n                        <footer></footer> \n                          \n                        </body>\n  <div *ngIf=\"preview\">\n                            <app-company-survey-preview (onBackBtnClick)=\"onBackToSurevyClick()\"  [survey]=\"survey\"></app-company-survey-preview>    \n    </div>                          "

/***/ }),

/***/ "../../../../../src/app/components/company-create-survey/company-create-survey.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var ng2_dragula_1 = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var collections_1 = __webpack_require__("../../../cdk/esm5/collections.es5.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CompanyCreateSurveyComponent = /** @class */ (function () {
    function CompanyCreateSurveyComponent(companyService, dragulaService, routes) {
        this.companyService = companyService;
        this.dragulaService = dragulaService;
        this.routes = routes;
        this.preview = false;
        this.displayType = [{ value: 'Single', label: 'Single Page' }, { value: 'Multiple', label: 'Multiple Page' }];
        this.isError = false;
        this.isSuccess = false;
        this.msg = '';
        this.isError1 = false;
        this.isSuccess1 = false;
        this.msg1 = '';
        this.isError2 = false;
        this.isSuccess2 = false;
        this.msg2 = '';
        this.isError3 = false;
        this.isSuccess3 = false;
        this.msg3 = '';
        this.selectedUserGroup = 'all';
        this.newUser = '';
        this.btnDisbled = false;
        this.updateBtnDisbled = false;
        this.saveBtnDisbled = false;
        this.addUserBtnDisbled = false;
        this.inviteBtnDisbled = false;
        this.survey = {
            name: '',
            category: '',
            display_type: { ui: '', randomization: false, skip: false, pageno: false },
            start_date: '',
            end_date: '',
            logo: '',
            showHeader: true,
            showFooter: true,
            showTitleInput: false,
            showFooterInput: false,
            header: '',
            footer: '',
            logoSrc: '',
            numbStar: 5,
            selectedTheme: '',
            questions: [],
            imgFile: []
        };
        this.quest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
        this.editQuest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
        this.editIndex = 0;
        this.deleteIndex = 0;
        this.displayedColumns = ['select', 'email'];
        this.selection = new collections_1.SelectionModel(true, []);
    }
    CompanyCreateSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getAllSurveyCategory().subscribe(function (data) {
            _this.surveyCategory = data;
        });
        this.companyService.getAllThemes().subscribe(function (data) {
            _this.themes = data;
        });
        this.companyService.getAnswerType().subscribe(function (data) {
            _this.answerType = data;
            //  console.log(this.answerType);
        });
        this.companyService.getAllUserGroup().subscribe(function (data) {
            _this.userGroups = data.group;
            ;
            //  console.log(this.answerType);
        });
        this.companyService.getMyUsers().subscribe(function (data) {
            _this.users = data;
            //    console.log(this.users);
            _this.dataSource = new material_1.MatTableDataSource(data);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    CompanyCreateSurveyComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    CompanyCreateSurveyComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    CompanyCreateSurveyComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyCreateSurveyComponent.prototype.updateUserList = function () {
        var _this = this;
        console.log(this.selectedUserGroup);
        if (this.selectedUserGroup == 'all') {
            this.companyService.getMyUsers().subscribe(function (data) {
                console.log(data);
                _this.users = data;
                _this.dataSource = new material_1.MatTableDataSource(data);
                _this.dataSource.paginator = _this.paginator;
                _this.selection.clear();
            });
        }
        else {
            this.companyService.getUsersInAGroups(this.selectedUserGroup).subscribe(function (data) {
                _this.users = data;
                _this.dataSource = new material_1.MatTableDataSource(_this.users);
                _this.dataSource.paginator = _this.paginator;
                _this.selection.clear();
            });
        }
    };
    CompanyCreateSurveyComponent.prototype.showTitleInput = function () {
        this.survey.showTitleInput = true;
    };
    CompanyCreateSurveyComponent.prototype.updateHeaderText = function () {
        this.survey.showTitleInput = false;
    };
    CompanyCreateSurveyComponent.prototype.showFooterInput = function () {
        this.survey.showFooterInput = true;
    };
    CompanyCreateSurveyComponent.prototype.updateFooterText = function () {
        this.survey.showFooterInput = false;
    };
    CompanyCreateSurveyComponent.prototype.displayPhoto = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        if (['gif', 'png', 'jpg', 'jpeg'].indexOf(ext) < 0) {
            // fileInput.target.files.remove(0);
            this.survey.logoSrc = '';
            alert('Please select a valid image [ jpg | jpeg | gif | png ]');
            return false;
        }
        console.log(fileInput);
        this.survey.imgFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.survey.logoSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CompanyCreateSurveyComponent.prototype.counter = function (length) {
        return new Array(length);
    };
    CompanyCreateSurveyComponent.prototype.removeOption = function (index) {
        var _this = this;
        if (this.quest.opts.length > 2) {
            this.quest.opts.splice(index, 1);
        }
        else {
            this.isError = true;
            this.msg = "Atleast two options required";
            setTimeout(function () {
                _this.isError = false;
                _this.msg = '';
            }, 3000);
        }
        return false;
    };
    CompanyCreateSurveyComponent.prototype.removeOptionEdit = function (index) {
        var _this = this;
        if (this.editQuest.opts.length > 2) {
            this.editQuest.opts.splice(index, 1);
        }
        else {
            this.isError1 = true;
            this.msg1 = "Atleast two options required";
            setTimeout(function () {
                _this.isError1 = false;
                _this.msg1 = '';
            }, 3000);
        }
        return false;
    };
    CompanyCreateSurveyComponent.prototype.deleteQuestionConfirm = function (index) {
        this.deleteIndex = index;
        console.log(this.deleteIndex);
    };
    CompanyCreateSurveyComponent.prototype.deleteQuestion = function () {
        console.log(this.deleteIndex);
        this.survey.questions.splice(this.deleteIndex, 1);
    };
    CompanyCreateSurveyComponent.prototype.addMoreOption = function () {
        this.quest.opts.push('');
        return false;
    };
    CompanyCreateSurveyComponent.prototype.addMoreOptionEdit = function () {
        this.editQuest.opts.push('');
        return false;
    };
    CompanyCreateSurveyComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    CompanyCreateSurveyComponent.prototype.addQuestion = function (form) {
        var _this = this;
        // console.log(this.quest);
        this.btnDisbled = true;
        this.isSuccess = true;
        this.survey.questions.push(this.quest);
        this.msg = "Question Added Successfully";
        this.quest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
        this.btnDisbled = false;
        form.resetForm();
        setTimeout(function () {
            _this.isSuccess = false;
            _this.msg = '';
        }, 2000);
    };
    CompanyCreateSurveyComponent.prototype.editQuestion = function (index) {
        this.editIndex = index;
        this.editQuest = this.survey.questions[index];
        console.log(this.editQuest);
    };
    CompanyCreateSurveyComponent.prototype.updateQuestion = function (form) {
        var _this = this;
        this.updateBtnDisbled = true;
        this.isSuccess1 = true;
        this.survey.questions[this.editIndex] = this.editQuest;
        this.editIndex = 0;
        this.msg1 = "Question Updated Successfully";
        setTimeout(function () {
            _this.closeBtn1.nativeElement.click();
            _this.editQuest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
            form.resetForm();
            _this.isSuccess1 = false;
            _this.msg1 = '';
            _this.updateBtnDisbled = false;
        }, 2000);
    };
    CompanyCreateSurveyComponent.prototype.saveBtnClick = function (form) {
        var _this = this;
        this.saveBtnDisbled = true;
        console.log(this.survey);
        this.companyService.createSurvey(this.survey).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.selectedSurvey = data.survey;
                _this.isSuccess2 = true;
                _this.msg2 = "Survey Created Successfully";
                _this.invitePopUp.nativeElement.click();
                setTimeout(function () {
                    _this.isSuccess2 = false;
                    _this.msg2 = '';
                }, 2000);
            }
            else {
                _this.saveBtnDisbled = false;
                _this.isError2 = true;
                _this.msg2 = data.msg;
                setTimeout(function () {
                    //this.closeBtn1.nativeElement.click();
                    //  form.resetForm();
                    _this.isError2 = false;
                    _this.msg2 = '';
                    // this.saveBtnDisbled = ;
                }, 2000);
            }
        });
    };
    CompanyCreateSurveyComponent.prototype.addUser = function () {
        var _this = this;
        var newUser = { email: [this.newUser], groups: [] };
        this.addUserBtnDisbled = true;
        this.companyService.addUsers(newUser).subscribe(function (data) {
            if (data.success) {
                _this.updateUserList();
                _this.newUser = '';
                _this.isSuccess3 = true;
                _this.msg3 = data.msg;
                //update company = data.company
                setTimeout(function () {
                    _this.isSuccess3 = false;
                    _this.msg3 = '';
                    _this.addUserBtnDisbled = false;
                }, 2000);
            }
            else {
                _this.isError3 = true;
                _this.msg3 = data.msg;
                _this.addUserBtnDisbled = false;
                setTimeout(function () {
                    _this.isError3 = false;
                    _this.msg3 = '';
                }, 3000);
            }
        });
    };
    CompanyCreateSurveyComponent.prototype.inviteUser = function () {
        var _this = this;
        this.inviteBtnDisbled = true;
        console.log(this.selection.selected);
        var data = { users: this.selection.selected, survey: this.selectedSurvey };
        this.companyService.inviteUsers(data).subscribe(function (data) {
            if (data.success) {
                _this.isSuccess3 = true;
                _this.msg3 = data.msg;
                setTimeout(function () {
                    _this.isSuccess3 = false;
                    _this.msg3 = '';
                    window.location.href = "/company-list-survey";
                }, 2000);
            }
            else {
                _this.isError3 = true;
                _this.msg3 = data.msg;
                _this.inviteBtnDisbled = false;
                setTimeout(function () {
                    _this.isError3 = false;
                    _this.msg3 = '';
                }, 3000);
            }
        });
    };
    CompanyCreateSurveyComponent.prototype.showPreview = function () {
        this.preview = true;
    };
    CompanyCreateSurveyComponent.prototype.onBackToSurevyClick = function () {
        this.preview = false;
    };
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyCreateSurveyComponent.prototype, "closeBtn1", void 0);
    __decorate([
        core_1.ViewChild('invitePopUp'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyCreateSurveyComponent.prototype, "invitePopUp", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], CompanyCreateSurveyComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], CompanyCreateSurveyComponent.prototype, "sort", void 0);
    CompanyCreateSurveyComponent = __decorate([
        core_1.Component({
            selector: 'app-company-create-survey',
            template: __webpack_require__("../../../../../src/app/components/company-create-survey/company-create-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-create-survey/company-create-survey.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, ng2_dragula_1.DragulaService, router_1.Router])
    ], CompanyCreateSurveyComponent);
    return CompanyCreateSurveyComponent;
}());
exports.CompanyCreateSurveyComponent = CompanyCreateSurveyComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-edit-survey/company-edit-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  button, input, select, textarea {\r\n    margin-bottom: 12px;\r\n    margin-top: 12px;\r\n  }\r\n  .mid-division{\r\n      border-right: 2px solid #ccc;\r\n  }\r\n\r\n  .example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    padding-left: 20px\r\n  }\r\n  \r\n  .example-radio-button {\r\n    margin: 5px;\r\n  }\r\n  \r\n  .example-selected-value {\r\n    margin: 15px 0;\r\n  }\r\n  .hdr{\r\n    text-align: center;\r\n  }\r\n  .hdr h4{\r\n      padding-top: 15px;\r\n      padding-bottom: 15px;\r\n  }\r\n  .ftr{\r\n      text-align: center\r\n  }\r\n  .ftr h4{\r\n    font-size: 16px ;\r\n}\r\n  /* .quest{\r\n      overflow: hidden;\r\n  } */\r\n  .quest h4{\r\n    padding: 5px;\r\n    font-size: 14px !important;\r\n  }\r\n  mat-progress-bar{\r\n    margin: 5px auto;\r\n  }\r\n  .progress {\r\n    height: 5px;\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .bld{\r\n    font-weight: 700 !important\r\n  }\r\n  .itlc{\r\n    font-style: italic !important;\r\n  }\r\n  .mat-radio-label-content{\r\n      font-weight: unset !important;\r\n  }\r\n  .ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n    .bg-white{\r\n      background-color: #ffffff;\r\n    }\r\n\r\n\r\n    .mat-checkbox-layout{\r\n      margin-bottom: 24px;\r\n  }\r\n  .control-label{\r\n    font-size: 14px;\r\n    font-weight: 400\r\n}\r\n.quest{\r\n  margin: 40px 20px;\r\n  background: #f1e8e8;\r\n  padding: 10px;\r\n  position: relative;\r\n}\r\n.edit-iconz{position:absolute ;right: 0;top: 0;z-index: 10;min-height:10px;width:40px;}\r\n.progrs{\r\n  margin: 10px 20px;\r\n}\r\n\r\n\r\n.ourbutton2{    border-radius: 20px;\r\n    padding: 7px 40px;}\r\n.buttonleft{padding:2em 0;min-height: 300px;}\r\n\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n\r\n    .modal-content{border-radius:0;box-shadow:none;}\r\n    .modal-header {\r\n        padding: 7px 15px;\r\n        border-bottom: 1px solid #e5e5e5;\r\n        background: #da524f;\r\n    }\r\n    .modal-title {\r\n        margin: 0;\r\n        line-height: 26px;\r\n        font-size: 15px;\r\n        color: #fff;\r\n    }\r\n    .close {\r\n       \r\n        font-size: 21px;\r\n        font-weight: 400;\r\n        line-height: 28px;\r\n        color: #fff;\r\n        text-shadow: none;\r\n        filter: alpha(opacity=20);\r\n        opacity: inherit;\r\n        padding-top:0px;\r\n    }\r\n    a{outline:none; }\r\n    .btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n    \r\n    .inputfileds{\r\n        width: 300px !important;\r\n    }\r\n    .inputitem{\r\n        margin-bottom:-15px;\r\n        float: left;\r\n        width: 500px;\r\n        /* width: 305px; */\r\n        /* width: 400px; */\r\n    }\r\n    .relaive{position:relative;}    \r\n\r\n    .bdy{\r\n      min-height: 300px;\r\n    }\r\n\r\n    .filter{\r\n      width: 20%;\r\n      float: right;\r\n      clear: left;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-edit-survey/company-edit-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<body *ngIf=\"!preview\">\n    \n                  <div id=\"wrapper\">\n              \n                      <!-- Navigation -->\n                      <app-company-top-bar></app-company-top-bar>            \n          <app-company-sidebar></app-company-sidebar>\n              \n                      <div id=\"\">\n                          <div class=\"container-fluid\">\n                                  \n                                              <!-- Page Heading -->\n                                            \n                                        \n                                              <!-- /.row -->\n                              \n                                          </div>\n                          <div class=\"row\">\n                            <div class=\"col-md-2\"> </div>    \n                            <form  role=\"form\"  #fs=\"ngForm\" (ngSubmit)=\"fs.form.valid && saveBtnClick(fs);\" novalidate>        \n                            <div class=\"col-md-10\">\n                              \n                                <div class=\"col-md-4\">\n                                    <div style=\"background-color: #fff;padding: 10px\">\n                                      <h3>Edit Survey</h3>\n\n\n                                      <mat-form-field  class=\"inputfileds\">\n                                          <input matInput placeholder=\"Survey Name\" required name=\"surName\" [(ngModel)]=\"survey.name\"  >\n                                        </mat-form-field>\n                                        <br>\n                                        <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Survey Category\" required name=\"surCategory\" [(ngModel)]=\"survey.category\"  >\n                                              <mat-option [value]=\"grp\" *ngFor=\"let grp of surveyCategory;\" >{{grp.name}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                          <br>\n                                          <mat-form-field>\n                                            <input matInput [matDatepicker]=\"picker\" required name=\"start_date\" [(ngModel)]=\"survey.start_date\" placeholder=\"Start Date\" >\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                            <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                                          </mat-form-field>\n                                          <br>\n                                          <mat-form-field>\n                                            <input matInput [matDatepicker]=\"picker1\" required name=\"end_date\" [(ngModel)]=\"survey.end_date\" placeholder=\"End Date\" >\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                            <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n                                          </mat-form-field>\n                                          <br>\n                                        <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Theme\" required name=\"theme\" [(ngModel)]=\"survey.selectedTheme\" >\n                                              <mat-option [value]=\"grp\" *ngFor=\"let grp of themes;\" >{{grp.title}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                          <br>\n                                        <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Display Type\" required name=\"ui\" [(ngModel)]=\"survey.display_type.ui\" >\n                                              <mat-option [value]=\"grp.value\" *ngFor=\"let grp of displayType;\" >{{grp.label}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                          <br>\n                                          <div  *ngIf=\"survey.display_type.ui == 'Multiple'\">\n                                          <section class=\"example-section\">\n                                             Dispaly Page Number\n                                              <mat-slide-toggle class=\"example-margin\" name=\"pageno\" [(ngModel)]=\"survey.display_type.pageno\" [checked]=\"survey.display_type.pageno\">\n                                                 \n                                                </mat-slide-toggle>\n                                                \n                                              </section>\n                                              <br>\n                                             </div> \n                                                \n                                          <section class=\"example-section\">\n                                              Random Question  \n                                              <mat-slide-toggle class=\"example-margin\" name=\"randomization\" [(ngModel)]=\"survey.display_type.randomization\" [checked]=\"survey.display_type.randomization\">\n                                                 \n                                                </mat-slide-toggle>\n                                              </section>\n\n                                              <br>\n                                              <section class=\"example-section\">\n                                                  Skip Question  \n                                                  <mat-slide-toggle class=\"example-margin\" name=\"skip\" [(ngModel)]=\"survey.display_type.skip\" [checked]=\"survey.display_type.skip\">\n                                                     \n                                                    </mat-slide-toggle>\n                                                  </section>\n                                         <br>\n                                          <section class=\"example-section\">\n                                            Header  \n                                            <mat-slide-toggle class=\"example-margin\" [checked]=\"survey.showHeader\" name=\"showheader\" [(ngModel)]=\"survey.showHeader\" >\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                          <br>\n                                          \n                                          <section class=\"example-section\">\n                                            Footer  \n                                            <mat-slide-toggle class=\"example-margin\" [checked]=\"survey.showFooter\" name=\"showfooter\" [(ngModel)]=\"survey.showFooter\">\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                           \n                                    </div>\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <div style=\"background-color: #fff\">\n                                        <div class=\"col-md-10 col-md-offset-1 relaive\">\n                                            <div class=\"overlayz\"></div>\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-danger ourbutton\"  data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#addQuestion\">Add Question</a>\n                                            <a href=\"javascript:void(0)\" class=\"btn btn-danger ourbutton\"  #invitePopUp data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#inviteUser\">Invite Users</a>\n                                            <div class=\"col-md-12 shdw\">\n                                              <div class=\"row\">\n                                                <div class=\"col-md-12 hdr\" *ngIf=\"survey.showHeader\" [ngStyle]=\"{'background-color': survey.selectedTheme.h_bg_color || '#000'}\">\n                                                  <div class=\"col-md-2\">\n                                                  <div class=\"image-upload\">\n\n                                                      <label for=\"file-input\">\n                                                          <h6 *ngIf=\"!survey.logoSrc && !tmplogoSrc\"  [ngStyle]=\"{'color': survey.selectedTheme.h_font_color || '#fff'}\">Click here to set logo</h6>\n                                                          <img *ngIf=\"survey.logoSrc\" height=\"100\" [src]=\"survey.logoSrc\" title=\"Click here to change logo\">\n                                                          <img *ngIf=\"!survey.logoSrc && tmplogoSrc \" height=\"100\" [src]=\"tmplogoSrc\" title=\"Click here to change logo\">\n                                                      </label>\n                                                  \n                                                      <input style=\"display: none;\" (change)=\"displayPhoto($event)\" accept=\".png,.jpeg,.jpg,.bmp,.gif\" id=\"file-input\" type=\"file\"/>\n                                                  </div>\n                                                </div>\n                                                  <div class=\"col-md-10\">\n                                                  <a href=\"javascript:void(0)\"  *ngIf=\"!survey.showTitleInput\" (click)=\"showTitleInput()\" title=\"Click here to set a header\">\n                                                    <h5   [ngClass]=\"{ 'itlc' : survey.selectedTheme.h_font_italic, 'bld': survey.selectedTheme.h_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.h_font_color || '#fff','font-size':survey.selectedTheme.h_font_size || '', 'font-family':survey.selectedTheme.h_font_family || ''}\" >\n                                                    <span *ngIf=\"survey.header\">{{survey.header}}</span>\n                                                    <span  *ngIf=\"!survey.header\" >Click here to set a header</span>\n                                                  </h5></a>\n                                                  <input type=\"text\" (focusout)=\"updateHeaderText()\" name=\"headertitle\" *ngIf=\"survey.showTitleInput\" [(ngModel)]=\"survey.header\" >\n                                                </div>\n                                                </div>\n                                                <div class=\"col-md-12 bdy\" [ngStyle]=\"{'background-color': survey.selectedTheme.b_bg_color || '#fff'}\" >\n                                                  <div class=\"row\">\n                                                        <div [dragula]='\"third-bag\"' [dragulaModel]='survey.questions' >\n                                                          <div class=\"quest\" [ngStyle]=\"{'background-color': survey.selectedTheme.q_bg_color || '#f1e8e8'}\" *ngFor=\"let item of survey.questions; let j = index;\" >\n                                                                <h4 [ngClass]=\"{ 'itlc' : survey.selectedTheme.q_font_italic, 'bld': survey.selectedTheme.q_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.q_font_color || '#000','font-size':survey.selectedTheme.q_font_size || '', 'font-family':survey.selectedTheme.q_font_family || ''}\">\n                                                                  {{item.question}}\n                                                                </h4>\n                                                                <div class=\"edit-iconz\">\n                                                                <a href=\"javascript:void(0)\"  (click)=\"editQuestion(j)\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editQuestion\" ><i class=\"fa fa-pencil\"></i></a>\n                                                                <a href=\"javascript:void(0)\" (click)=\"deleteQuestionConfirm(j)\" data-toggle=\"modal\" data-target=\"#deleteModal\"><i class=\"fa fa-trash-o\"></i></a>\n                                                                </div>\n                                                          </div>\n                                                        </div>\n                                                  </div>\n                                                  \n                                                  <div>\n                                                    <div *ngIf=\"survey.display_type.ui == 'Multiple Page'\" class=\"col-md-6 progrs\">\n                                                        <h5 *ngIf=\"survey.display_type.pageno\" [ngStyle]=\"{'color': survey.selectedTheme.progress_text_color || '#000'}\">Page No. 4 of 10</h5>\n                                                        <div class=\"progress\" >\n                                                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\n                                                            aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\" [ngStyle]=\"{'background-color': survey.selectedTheme.progress_color || ''}\">\n                                                              <span class=\"sr-only\">70% Complete</span>\n                                                            </div>\n                                                          </div> \n                                                    </div>\n                                                                \n                                                  </div> \n                                                </div>\n                                                <div class=\"col-md-12 ftr\" *ngIf=\"survey.showFooter\" [ngStyle]=\"{'background-color': survey.selectedTheme.f_bg_color || '#000'}\" >\n                                                    <a href=\"javascript:void(0)\"  *ngIf=\"!survey.showFooterInput\" (click)=\"showFooterInput()\" title=\"Click here to set a footer\">\n                                                    <h6  [ngStyle]=\"{'color': '#fff'}\">\n                                                    <span *ngIf=\"survey.footer\" [ngClass]=\"{ 'itlc' : survey.selectedTheme.f_font_italic, 'bld': survey.selectedTheme.f_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.f_font_color || '#fff','font-size':survey.selectedTheme.f_font_size || '', 'font-family':survey.selectedTheme.f_font_family || ''}\" >{{survey.footer}}</span>\n                                                    <span  *ngIf=\"!survey.footer\" [ngClass]=\"{ 'itlc' : survey.selectedTheme.f_font_italic, 'bld': survey.selectedTheme.f_font_bold}\" [ngStyle]=\"{'color': survey.selectedTheme.f_font_color || '#fff','font-size':survey.selectedTheme.f_font_size || '', 'font-family':survey.selectedTheme.f_font_family || ''}\" >Click here to set a footer</span>\n                                                  </h6>\n                                                  </a>\n                                                <input type=\"text\" (focusout)=\"updateFooterText()\" name=\"footertitle\" *ngIf=\"survey.showFooterInput\" [(ngModel)]=\"survey.footer\" >\n                                              </div>\n                                                <a class=\"btn btn-danger ourbutton\"  [routerLink]=\"['/company-list-survey']\" >Back</a>\n                                                <button  class=\"btn btn-danger ourbutton\" type= \"submit\" (click)=\"showPreview();\" >Preview</button>\n                                                <button  class=\"btn btn-danger ourbutton\" type= \"submit\" [disabled]=\"saveBtnDisbled\"  >Update</button>\n                                                <div *ngIf=\"isError2\" class=\"text-danger text-left\">\n                                                    {{msg2}}\n                                               </div>\n                                                <div *ngIf=\"isSuccess2\" class=\"text-success text-left\">\n                                                    {{msg2}}\n                                              </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                    </div>\n                                </div>\n                            </div>\n                            </form> \n                          </div>\n                          \n                        </div>\n                        <!-- /#page-wrapper -->\n                        \n                                   \n                        </div>\n                    \n                        \n\n                      <!-- User Invite Popup start   -->\n\n                        <div id=\"inviteUser\"  class=\"modal fade\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n                                  <h4 class=\"modal-title\">Email Invitation</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                  \n                              <!-- <form  role=\"form\"  #finvite=\"ngForm\" (ngSubmit)=\"finvite.form.valid && updateQuestion(finvite);\" novalidate> -->\n                              \n                                  <div class=\"form-group\" >\n                                      \n                                  \n                                  <mat-form-field class=\"filter\">\n                                      \n                                        <mat-select  (change)=\"updateUserList()\" name=\"xyz\" [(ngModel)]=\"selectedUserGroup\"  >\n                                          <mat-option value=\"all\">All</mat-option>\n                                          <mat-option value=\"{{grp._id}}\" *ngFor=\"let grp of userGroups\">{{grp.name}}</mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                      \n                                      <!-- <p>You selected: {{selected}} </p> -->\n                                    <div class=\"example-header\">\n                                      <mat-form-field>\n                                        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n                                      </mat-form-field>\n                                    </div>\n                                      \n                                      <div class=\"example-container mat-elevation-z8\">\n\n                                          <div class=\"example-container mat-elevation-z8\">\n                                              <mat-table #table [dataSource]=\"dataSource\">\n                                            \n                                                <!-- Checkbox Column -->\n                                                <ng-container matColumnDef=\"select\">\n                                                  <mat-header-cell *matHeaderCellDef>\n                                                    <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                                                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                                                                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                                                    </mat-checkbox>\n                                                  </mat-header-cell>\n                                                  <mat-cell *matCellDef=\"let row\">\n                                                    <mat-checkbox (click)=\"$event.stopPropagation()\"\n                                                                  (change)=\"$event ? selection.toggle(row) : null\"\n                                                                  [disabled]=\"row.invited\"\n                                                                  [checked]=\"row.invited || selection.isSelected(row)\">\n                                                    </mat-checkbox>\n                                                  </mat-cell>\n                                                </ng-container>\n                                            \n                                                    <ng-container matColumnDef=\"email\">\n                                                        <mat-header-cell *matHeaderCellDef><b>Email</b></mat-header-cell>\n                                                        <mat-cell *matCellDef=\"let element\">{{element.email}}</mat-cell>\n                                                      </ng-container>\n                                            \n                                                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                                                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n                                                         (click)=\"!row.invited && selection.toggle(row)\">\n                                                </mat-row>\n                                              </mat-table>\n                                              <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                                            </div>\n                                        \n                                      </div>\n                                      <br>\n                                      {{selection.selected.length}} User Selected\n                                      <br>\n\n                                      <div >\n                                          <mat-form-field class=\"inputfileds\" >\n                                              <input matInput placeholder=\"Email\" [(ngModel)]=\"newUser\" name=\"newUser\" >\n                                            </mat-form-field>\n                                            <button  [disabled]=\"addUserBtnDisbled\"  class=\"btn btn-danger ourbutton\" (click)=\"addUser()\">Add New User</button>\n                                      </div>\n                                  </div>\n\n                                  <div style=\"clear: both;\"></div>\n                                  <div *ngIf=\"isError3\" class=\"text-danger text-left\">\n                                      {{msg3}}\n                                 </div>\n                                 <div *ngIf=\"isSuccess3\" class=\"text-success text-left\">\n                                    {{msg3}}\n                              </div>\n                                  <button  [disabled]=\"inviteBtnDisbled\" class=\"btn btn-danger ourbutton\" (click)=\"inviteUser()\" >Send Invitation</button>\n                                  \n                                 \n                              <!-- </form> -->\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                              </div>\n                              \n                            </div>\n                          </div>\n\n                          <!-- user ivite Popup End   -->\n\n\n\n\n                      <!-- Edit Popup start   -->\n\n                        <div id=\"editQuestion\"  class=\"modal fade\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n                                  <h4 class=\"modal-title\">Update Question</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                  \n                              <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"f1.form.valid && updateQuestion(f1);\" novalidate>\n                              \n                                  <div class=\"form-group\" >\n                                      <label > Question </label>\n                                      <br>\n                                      <div *ngIf=\"isError1\" class=\"text-danger text-left\">\n                                          {{msg1}}\n                                     </div>\n                                     <div *ngIf=\"isSuccess1\" class=\"text-success text-left\">\n                                        {{msg1}}\n                                  </div>\n\n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <input matInput placeholder=\"Question here\" required   #question=\"ngModel\" name=\"question\" [(ngModel)]=\"editQuest.question\" >\n                                          </mat-form-field>\n                                        \n                                        </div>\n                                      <br>\n                                      <br>\n                                      <br>\n                                      <br>\n                                 \n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Question Type\" required name='edittype' #questionType=\"ngModel\" [(ngModel)]=\"editQuest.answerType\" >\n                                              <mat-option [value]=\"val.name\" *ngFor=\"let val of answerType;\"  >{{val.name}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                      </div>\n                                     \n                                      <div style=\"clear: both;\"></div>\n\n                                      <!-- multiple choice Start -->\n                                      <div *ngIf=\"editQuest.answerType=='Multiple choice'\">\n                                          <div   *ngFor=\"let item of editQuest.opts; let i = index; trackBy:trackByIndex\" >\n                                              <div class=\"inputitem\">\n                                                  <div class=\"row\">\n                                                      <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Option\" [value]=\"editQuest.opts[i]\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"editQuest.opts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                      <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                          <button class=\"btn-danger\" (click)=\"removeOptionEdit(i)\" style=\"float: left;\" >X</button>\n                                                      </div>  \n                                              </div>\n                                              <!-- <div style=\"float: left;padding-top: 14px;width:220px;\">\n                                                 \n                                              </div> -->\n                                            </div>\n                                      </div>\n                                      <div style=\"clear: both;\"></div>\n                                      <button  class=\"btn btn-danger ourbutton\" (click)=\"addMoreOptionEdit()\" >Add More</button>\n                                      </div>\n                                       <!-- multiple choice  End -->\n\n                                      <!-- Start Rating Start -->\n                                      <div *ngIf=\"editQuest.answerType=='star rating'\"  >\n                                          <br>\n                                          <section class=\"example-section\">\n                                            Show Label  \n                                            <mat-slide-toggle class=\"example-margin\" name=\"showStartlabel\" [checked]=\"editQuest.showStarLabel\" [(ngModel)]=\"editQuest.showStarLabel\" >\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                            <div *ngIf=\"editQuest.showStarLabel\">\n                                              <div class=\"inputitem\" *ngFor=\"let item of counter(5); let i = index; trackBy:trackByIndex\" >\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Label For {{i+1}} Star\" [value]=\"editQuest.starOpts[i]\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"editQuest.starOpts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                  <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                    <mat-icon class=\"example-icon\" *ngFor=\"let item of counter(i+1);let j = index;\" >star</mat-icon>\n                                                  </div>\n                                                  \n                                                </div>\n                                              </div>\n                                            </div>\n                                      </div>\n                                       <!-- Star Rating  End -->\n\n                                  </div>\n                                  <div style=\"clear: both;\"></div>\n                                  <button type= \"submit\" [disabled]=\"updateBtnDisbled\" class=\"btn btn-danger ourbutton\" >Update</button>\n                                 \n                              </form>\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                              </div>\n                              \n                            </div>\n                          </div>\n\n                          <!-- Edit Popup End   -->\n\n\n                        <!-- Add Popup Start   -->\n\n                        <div id=\"addQuestion\"  class=\"modal fade\">\n                            <div class=\"modal-dialog\">\n                            \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n                                  <h4 class=\"modal-title\">Create Question</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                  \n                              <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addQuestion(f);\" novalidate>\n                              \n                                  <div class=\"form-group\" >\n                                      <label > Question </label>\n                                      <br>\n                                      <div *ngIf=\"isError\" class=\"text-danger text-left\">\n                                          {{msg}}\n                                     </div>\n                                     <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\n                                        {{msg}}\n                                  </div>\n\n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <input matInput placeholder=\"Question here\" required   #question=\"ngModel\" name=\"question\" [(ngModel)]=\"quest.question\" >\n                                          </mat-form-field>\n                                        \n                                        </div>\n                                      <br>\n                                      <br>\n                                      <br>\n                                      <br>\n                                 \n                                      <div class=\"inputitem\">\n                                          <mat-form-field class=\"inputfileds\">\n                                            <mat-select placeholder=\"Question Type\" required name='type' #questionType=\"ngModel\" [(ngModel)]=\"quest.answerType\" >\n                                              <mat-option [value]=\"val.name\" *ngFor=\"let val of answerType;\"  >{{val.name}}</mat-option>\n                                            </mat-select>\n                                          </mat-form-field>\n                                      </div>\n                                     \n                                      <div style=\"clear: both;\"></div>\n\n                                      <!-- multiple choice Start -->\n                                      <div *ngIf=\"quest.answerType=='Multiple choice'\">\n                                          <div   *ngFor=\"let item of quest.opts; let i = index; trackBy:trackByIndex\" >\n                                              <div class=\"inputitem\">\n                                                  <div class=\"row\">\n                                                      <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Option\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"quest.opts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                      <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                          <button class=\"btn-danger\" (click)=\"removeOption(i)\" style=\"float: left;\" >X</button>\n                                                      </div>  \n                                              </div>\n                                              <!-- <div style=\"float: left;padding-top: 14px;width:220px;\">\n                                                 \n                                              </div> -->\n                                            </div>\n                                      </div>\n                                      <div style=\"clear: both;\"></div>\n                                      <button  class=\"btn btn-danger ourbutton\" (click)=\"addMoreOption()\" >Add More</button>\n                                      </div>\n                                       <!-- multiple choice  End -->\n\n                                      <!-- Start Rating Start -->\n                                      <div *ngIf=\"quest.answerType=='star rating'\"  >\n                                          <br>\n                                          <section class=\"example-section\">\n                                            Show Label  \n                                            <mat-slide-toggle class=\"example-margin\" name=\"showStartlabel\" [checked]=\"quest.showStarLabel\" [(ngModel)]=\"quest.showStarLabel\" >\n                                               \n                                              </mat-slide-toggle>\n                                            </section>\n                                            <div *ngIf=\"quest.showStarLabel\">\n                                              <div class=\"inputitem\" *ngFor=\"let item of counter(5); let i = index; trackBy:trackByIndex\" >\n                                                <div class=\"row\">\n                                                    <div class=\"col-md-7\">\n                                                        <mat-form-field class=\"inputfileds\">\n                                                          <input matInput placeholder=\"Label For {{i+1}} Star\" required #opt{{i}}=\"ngModel\" name=\"opt_{{i}}\" [(ngModel)]=\"quest.starOpts[i]\" >\n                                                        </mat-form-field>\n                                                      </div>  \n                                                  <div class=\"col-md-5\" style=\"padding-top: 25px;\">\n                                                    <mat-icon class=\"example-icon\" *ngFor=\"let item of counter(i+1);let j = index;\" >star</mat-icon>\n                                                  </div>\n                                                  \n                                                </div>\n                                              </div>\n                                            </div>\n                                      </div>\n                                       <!-- Star Rating  End -->\n\n                                  </div>\n                                  <div style=\"clear: both;\"></div>\n                                  <button type= \"submit\" [disabled]=\"btnDisbled\" class=\"btn btn-danger ourbutton\" >Submit</button>\n                                 \n                              </form>\n                                </div>\n                                <div class=\"modal-footer\">\n                                </div>\n                              </div>\n                              \n                            </div>\n                          </div>\n\n                            <!-- Add Popup End   -->\n\n\n                          <!-- Delete Popup Start -->\n\n                          <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                          \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <!-- <div class=\"modal-header\"> -->\n                                  <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\n                                <!-- </div> -->\n                                <div class=\"modal-body\">\n                                    <h4>Are you sure ?</h4>\n                                \n                                </div>\n                              \n                                <div class=\"modal-footer\">\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                  <button type=\"button\" (click)=\"deleteQuestion()\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\n                                </div>\n                              </div>\n                          \n                            </div>\n                          </div>\n\n                          <!-- Delete Popup End -->\n                \n                        <footer></footer> \n                          \n                        </body>\n<div *ngIf=\"preview\">\n                        <app-company-survey-preview (onBackBtnClick)=\"onBackToSurevyClick()\"  [survey]=\"survey\"></app-company-survey-preview>    \n</div>                    "

/***/ }),

/***/ "../../../../../src/app/components/company-edit-survey/company-edit-survey.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var ng2_dragula_1 = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var collections_1 = __webpack_require__("../../../cdk/esm5/collections.es5.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var CompanyEditSurveyComponent = /** @class */ (function () {
    function CompanyEditSurveyComponent(companyService, dragulaService, routes, route, config) {
        this.companyService = companyService;
        this.dragulaService = dragulaService;
        this.routes = routes;
        this.route = route;
        this.config = config;
        this.preview = false;
        this.displayType = [{ value: 'Single', label: 'Single Page' }, { value: 'Multiple', label: 'Multiple Page' }];
        this.isError = false;
        this.isSuccess = false;
        this.msg = '';
        this.isError1 = false;
        this.isSuccess1 = false;
        this.msg1 = '';
        this.isError2 = false;
        this.isSuccess2 = false;
        this.msg2 = '';
        this.isError3 = false;
        this.isSuccess3 = false;
        this.msg3 = '';
        this.selectedUserGroup = 'all';
        this.newUser = '';
        this.btnDisbled = false;
        this.updateBtnDisbled = false;
        this.saveBtnDisbled = false;
        this.addUserBtnDisbled = false;
        this.inviteBtnDisbled = false;
        this.tmplogoSrc = '';
        this.survey = {
            id: '',
            name: '',
            category: '',
            display_type: { ui: '', randomization: false, skip: false, pageno: false },
            start_date: '',
            end_date: '',
            logo: '',
            showHeader: true,
            showFooter: true,
            showTitleInput: false,
            showFooterInput: false,
            header: '',
            footer: '',
            logoSrc: '',
            numbStar: 5,
            selectedTheme: '',
            questions: [],
        };
        this.quest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
        this.editQuest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
        this.editIndex = 0;
        this.deleteIndex = 0;
        this.displayedColumns = ['select', 'email'];
        this.selection = new collections_1.SelectionModel(true, []);
        this.invitedEmailds = [];
    }
    CompanyEditSurveyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.survey.id = params['id'];
            _this.companyService.getSurvey(_this.survey.id).subscribe(function (data) {
                console.log(data);
                _this.survey.name = data.name;
                _this.survey.category = data.category.id;
                _this.survey.display_type = data.display_type;
                _this.survey.start_date = data.start_datetime;
                _this.survey.end_date = data.end_datetime;
                _this.survey.logo = data.logo;
                _this.survey.showHeader = data.is_header;
                _this.survey.showFooter = data.is_footer;
                _this.survey.showTitleInput = false;
                _this.survey.showFooterInput = false;
                _this.survey.header = data.header_title;
                _this.survey.footer = data.footer_title;
                _this.survey.logoSrc = '';
                _this.survey.selectedTheme = data.theme;
                _this.tmplogoSrc = (data.logo != '') ? _this.config.siteUrl + '/company/logo/' + data.logo : '';
                //this.survey.questions= data.questions;
                var questions = [];
                data.questions.forEach(function (val) {
                    var qtn = {
                        question: val.question,
                        answerType: val.ans_type,
                        starOpts: [],
                        opts: [],
                    };
                    if (val.ans_type == 'star rating') {
                        qtn.starOpts = val.options;
                    }
                    else {
                        qtn.opts = val.options;
                    }
                    questions.push(qtn);
                });
                _this.survey.questions = questions;
                data.inv_users.forEach(function (val) {
                    _this.invitedEmailds.push(val.email);
                });
                console.log(_this.tmplogoSrc);
                _this.companyService.getAllSurveyCategory().subscribe(function (data) {
                    data.forEach(function (category) {
                        if (category._id == _this.survey.category) {
                            _this.survey.category = category;
                        }
                    });
                    _this.surveyCategory = data;
                });
                _this.companyService.getAllThemes().subscribe(function (data) {
                    data.forEach(function (theme) {
                        if (theme._id == _this.survey.selectedTheme) {
                            _this.survey.selectedTheme = theme;
                        }
                    });
                    _this.themes = data;
                });
                _this.companyService.getAnswerType().subscribe(function (data) {
                    _this.answerType = data;
                    //  console.log(this.answerType);
                });
                _this.companyService.getAllUserGroup().subscribe(function (data) {
                    _this.userGroups = data.group;
                    ;
                    //  console.log(this.answerType);
                });
                _this.updateUserList();
                // this.companyService.getMyUsers().subscribe(data=>{
                //     this.users = data;
                //   //    console.log(this.users);
                //       this.dataSource = new MatTableDataSource(this.users);
                //       this.dataSource.paginator = this.paginator;
                //       //this.selection.select();
                // });
            });
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    CompanyEditSurveyComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        // console.log(numRows);
        // console.log(numSelected);
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    CompanyEditSurveyComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) {
                // if(!row.invited){
                _this.selection.select(row);
                // }
            });
    };
    CompanyEditSurveyComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyEditSurveyComponent.prototype.updateUserList = function () {
        var _this = this;
        console.log(this.selectedUserGroup);
        if (this.selectedUserGroup == 'all') {
            this.companyService.getMyUsers().subscribe(function (data) {
                _this.users = _this.updateAlreadyInvitedUsers(data);
                console.log(_this.users);
                _this.dataSource = new material_1.MatTableDataSource(_this.users);
                _this.dataSource.paginator = _this.paginator;
                _this.selection.clear();
            });
        }
        else {
            this.companyService.getUsersInAGroups(this.selectedUserGroup).subscribe(function (data) {
                _this.users = _this.updateAlreadyInvitedUsers(data);
                console.log(_this.users);
                _this.dataSource = new material_1.MatTableDataSource(_this.users);
                _this.dataSource.paginator = _this.paginator;
                _this.selection.clear();
            });
        }
    };
    CompanyEditSurveyComponent.prototype.updateAlreadyInvitedUsers = function (data) {
        var _this = this;
        console.log(data);
        data.forEach(function (user, i) {
            if (_this.invitedEmailds.indexOf(user.email) > -1) {
                data[i].invited = true;
            }
            else {
                data[i].invited = false;
            }
        });
        return data;
    };
    CompanyEditSurveyComponent.prototype.showTitleInput = function () {
        this.survey.showTitleInput = true;
    };
    CompanyEditSurveyComponent.prototype.updateHeaderText = function () {
        this.survey.showTitleInput = false;
    };
    CompanyEditSurveyComponent.prototype.showFooterInput = function () {
        this.survey.showFooterInput = true;
    };
    CompanyEditSurveyComponent.prototype.updateFooterText = function () {
        this.survey.showFooterInput = false;
    };
    CompanyEditSurveyComponent.prototype.displayPhoto = function (fileInput) {
        var _this = this;
        var ext = fileInput.target.files[0].name.split('.').pop().toLowerCase();
        if (['gif', 'png', 'jpg', 'jpeg'].indexOf(ext) < 0) {
            // fileInput.target.files.remove(0);
            this.survey.logoSrc = '';
            alert('Please select a valid image [ jpg | jpeg | gif | png ]');
            return false;
        }
        console.log(fileInput);
        //this.survey.imgFile = fileInput.target.files[0];
        if (fileInput.target.files && fileInput.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (function (e) {
                _this.survey.logoSrc = e.target['result'];
            });
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    CompanyEditSurveyComponent.prototype.counter = function (length) {
        return new Array(length);
    };
    CompanyEditSurveyComponent.prototype.removeOption = function (index) {
        var _this = this;
        if (this.quest.opts.length > 2) {
            this.quest.opts.splice(index, 1);
        }
        else {
            this.isError = true;
            this.msg = "Atleast two options required";
            setTimeout(function () {
                _this.isError = false;
                _this.msg = '';
            }, 3000);
        }
        return false;
    };
    CompanyEditSurveyComponent.prototype.removeOptionEdit = function (index) {
        var _this = this;
        if (this.editQuest.opts.length > 2) {
            this.editQuest.opts.splice(index, 1);
        }
        else {
            this.isError1 = true;
            this.msg1 = "Atleast two options required";
            setTimeout(function () {
                _this.isError1 = false;
                _this.msg1 = '';
            }, 3000);
        }
        return false;
    };
    CompanyEditSurveyComponent.prototype.deleteQuestionConfirm = function (index) {
        this.deleteIndex = index;
        console.log(this.deleteIndex);
    };
    CompanyEditSurveyComponent.prototype.deleteQuestion = function () {
        console.log(this.deleteIndex);
        this.survey.questions.splice(this.deleteIndex, 1);
    };
    CompanyEditSurveyComponent.prototype.addMoreOption = function () {
        this.quest.opts.push('');
        return false;
    };
    CompanyEditSurveyComponent.prototype.addMoreOptionEdit = function () {
        this.editQuest.opts.push('');
        return false;
    };
    CompanyEditSurveyComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    CompanyEditSurveyComponent.prototype.addQuestion = function (form) {
        var _this = this;
        // console.log(this.quest);
        this.btnDisbled = true;
        this.isSuccess = true;
        this.survey.questions.push(this.quest);
        this.msg = "Question Added Successfully";
        this.quest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
        this.btnDisbled = false;
        form.resetForm();
        setTimeout(function () {
            _this.isSuccess = false;
            _this.msg = '';
        }, 2000);
    };
    CompanyEditSurveyComponent.prototype.editQuestion = function (index) {
        this.editIndex = index;
        this.editQuest = this.survey.questions[index];
        console.log(this.editQuest);
    };
    CompanyEditSurveyComponent.prototype.updateQuestion = function (form) {
        var _this = this;
        this.updateBtnDisbled = true;
        this.isSuccess1 = true;
        this.survey.questions[this.editIndex] = this.editQuest;
        this.editIndex = 0;
        this.msg1 = "Question Updated Successfully";
        setTimeout(function () {
            _this.closeBtn1.nativeElement.click();
            _this.editQuest = { question: '', opts: ['', ''], answerType: '', showStarLabel: false, starOpts: ['', '', '', '', ''] };
            form.resetForm();
            _this.isSuccess1 = false;
            _this.msg1 = '';
            _this.updateBtnDisbled = false;
        }, 2000);
    };
    CompanyEditSurveyComponent.prototype.saveBtnClick = function (form) {
        var _this = this;
        console.log(this.survey);
        this.saveBtnDisbled = true;
        console.log(this.survey);
        this.companyService.updateSurvey(this.survey).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.selectedSurvey = data.survey;
                _this.isSuccess2 = true;
                _this.msg2 = "Survey Updated Successfully";
                // this.invitePopUp.nativeElement.click();
                setTimeout(function () {
                    _this.isSuccess2 = false;
                    _this.msg2 = '';
                }, 2000);
            }
            else {
                _this.saveBtnDisbled = false;
                _this.isError2 = true;
                _this.msg2 = data.msg;
                setTimeout(function () {
                    //this.closeBtn1.nativeElement.click();
                    //  form.resetForm();
                    _this.isError2 = false;
                    _this.msg2 = '';
                    // this.saveBtnDisbled = ;
                }, 2000);
            }
        });
    };
    CompanyEditSurveyComponent.prototype.addUser = function () {
        var _this = this;
        var newUser = { email: [this.newUser], groups: [] };
        this.addUserBtnDisbled = true;
        this.companyService.addUsers(newUser).subscribe(function (data) {
            if (data.success) {
                _this.updateUserList();
                _this.newUser = '';
                _this.isSuccess3 = true;
                _this.msg3 = data.msg;
                //update company = data.company
                setTimeout(function () {
                    _this.isSuccess3 = false;
                    _this.msg3 = '';
                    _this.addUserBtnDisbled = false;
                }, 2000);
            }
            else {
                _this.isError3 = true;
                _this.msg3 = data.msg;
                _this.addUserBtnDisbled = false;
                setTimeout(function () {
                    _this.isError3 = false;
                    _this.msg3 = '';
                }, 3000);
            }
        });
    };
    CompanyEditSurveyComponent.prototype.inviteUser = function () {
        var _this = this;
        // this.inviteBtnDisbled = true;
        console.log(this.selection.selected);
        var data = { users: this.selection.selected, survey: { _id: this.survey.id } };
        this.companyService.inviteUsers(data).subscribe(function (data) {
            if (data.success) {
                var val = {};
                _this.selection.selected.forEach(function (val) {
                    //  this.invitedEmailds.push(val.email);
                });
                _this.updateUserList();
                _this.isSuccess3 = true;
                _this.msg3 = data.msg;
                setTimeout(function () {
                    _this.isSuccess3 = false;
                    _this.msg3 = '';
                }, 2000);
            }
            else {
                _this.isError3 = true;
                _this.msg3 = data.msg;
                _this.inviteBtnDisbled = false;
                setTimeout(function () {
                    _this.isError3 = false;
                    _this.msg3 = '';
                }, 3000);
            }
        });
    };
    CompanyEditSurveyComponent.prototype.showPreview = function () {
        this.preview = true;
    };
    CompanyEditSurveyComponent.prototype.onBackToSurevyClick = function () {
        this.preview = false;
    };
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyEditSurveyComponent.prototype, "closeBtn1", void 0);
    __decorate([
        core_1.ViewChild('invitePopUp'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyEditSurveyComponent.prototype, "invitePopUp", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], CompanyEditSurveyComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], CompanyEditSurveyComponent.prototype, "sort", void 0);
    CompanyEditSurveyComponent = __decorate([
        core_1.Component({
            selector: 'app-company-edit-survey',
            template: __webpack_require__("../../../../../src/app/components/company-edit-survey/company-edit-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-edit-survey/company-edit-survey.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, ng2_dragula_1.DragulaService, router_1.Router, router_1.ActivatedRoute, config_1.Config])
    ], CompanyEditSurveyComponent);
    return CompanyEditSurveyComponent;
}());
exports.CompanyEditSurveyComponent = CompanyEditSurveyComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-list-survey/company-list-survey.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 50%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n\r\n  .ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n    .bg-white{\r\n      background-color: #ffffff;\r\n    }\r\n\r\n    .filter{\r\n        width: 20%;\r\n        float: right;\r\n        clear: left;\r\n      }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-list-survey/company-list-survey.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    \n                  <div id=\"wrapper\">\n              \n                      <!-- Navigation -->\n                      <app-company-top-bar></app-company-top-bar>            \n          <app-company-sidebar></app-company-sidebar>\n              \n                      <div id=\"\">\n                          <div class=\"container-fluid\">\n                                  \n                                              <!-- Page Heading -->\n                                            \n                                        \n                                              <!-- /.row -->\n                              \n                                          </div>\n               \n                          <div class=\"col-md-2\"></div>\n                          <div class=\"col-md-10\">\n                                <!-- <p>You selected: {{selected}} </p> -->\n<div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <a class=\"btn btn-danger ourbutton filter\"  [routerLink]=\"['/company-create-survey']\" >Create Survey</a>\n  </div>\n    \n    <div class=\"example-container mat-elevation-z8\">\n      <!-- <div ><h4>No Company Found!</h4></div> -->\n      <mat-table [dataSource]=\"dataSource\" matSort>\n     <!-- Name Column -->\n     <ng-container matColumnDef=\"slno\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\n        <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\n      </ng-container>\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Title</mat-header-cell>\n          <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n        </ng-container>\n    \n     <!-- Name Column -->\n     <ng-container matColumnDef=\"start_datetime\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Start Date </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.start_datetime| date: 'dd-MM-yyyy h:mm a'}} </mat-cell>\n    </ng-container>\n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"end_datetime\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>End Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.end_datetime| date: 'dd-MM-yyyy h:mm a'}}</mat-cell>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"status\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n          <mat-cell *matCellDef=\"let row\">\n            {{row.status}}\n          </mat-cell>\n        </ng-container>\n      <ng-container matColumnDef=\"action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              <mat-menu #menu=\"matMenu\">\n                <button *ngIf=\"row.status=='Upcoming'\" (click)=\"setEditId(row._id)\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#myModal3\" mat-menu-item>\n                <!-- <button *ngIf=\"row.status=='Upcoming'\" (click)=\"setEditId(row._id)\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#myModal3\" mat-menu-item> -->\n                    <i class=\"material-icons\">delete</i>\n                  <span>Delete</span>\n                </button>\n                <a *ngIf=\"row.status=='Upcoming'\" href=\"/company-edit-survey/{{row._id}}\" mat-menu-item>\n                    <i class=\"material-icons\">edit</i>\n                  <span>Edit</span>\n                </a>\n                <a *ngIf=\"row.status != 'Upcoming'\" href=\"/company-dashboad/{{row._id}}\" mat-menu-item>\n                    <i class=\"material-icons\">dashboard</i>\n                  <span>Report</span>\n                </a>\n                <!-- <button *ngIf=\"row.block_status==true && row.delete_status==false\" (click)=\"unblockCompany(row._id)\" mat-menu-item>\n                    <i class=\"material-icons\">block</i>\n                  <span>Unblock</span>\n                </button> -->\n              </mat-menu>\n           \n          </mat-cell>\n      </ng-container>\n    \n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </mat-row>\n      </mat-table>\n    \n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n    </div>\n                            \n                          </div>\n                          \n                        </div>\n                        <!-- /#page-wrapper -->\n                        \n                        <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                          \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <h4 class=\"modal-title\">Delete</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                    <h4>Are you sure to delete?</h4>\n                                \n                                </div>\n                              \n                                <div class=\"modal-footer\">\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                  <button type=\"button\" (click)=\"deleteSurvey()\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\n                                </div>\n                              </div>\n                          \n                            </div>\n                          </div>  \n                          \n                        \n                        <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n                            <div class=\"modal-dialog\">\n                          \n                              <!-- Modal content-->\n                              <div class=\"modal-content\">\n                                <div class=\"modal-header\">\n                                  <h4 class=\"modal-title\">Alert</h4>\n                                </div>\n                                <div class=\"modal-body\">\n                                    <h4></h4>\n                                \n                                </div>\n                              \n                                <div class=\"modal-footer\">\n                                  <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                                </div>\n                              </div>\n                          \n                            </div>\n                          </div>  \n                          \n                          \n                        </div>\n                        \n  \n  \n                        \n  \n                        <footer></footer> \n                          \n                        </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-list-survey/company-list-survey.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var CompanyListSurveyComponent = /** @class */ (function () {
    function CompanyListSurveyComponent(companyService) {
        this.companyService = companyService;
        this.displayedColumns = ['slno', 'name', 'start_datetime', 'end_datetime', 'status', 'action'];
        this.dateNow = new Date();
        this.editId = '';
    }
    CompanyListSurveyComponent.prototype.ngOnInit = function () {
        this.loadSurvey();
    };
    CompanyListSurveyComponent.prototype.loadSurvey = function () {
        var _this = this;
        this.companyService.getAllSurvey().subscribe(function (data) {
            console.log(data);
            _this.dataSource = new material_1.MatTableDataSource(data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    CompanyListSurveyComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyListSurveyComponent.prototype.deleteSurvey = function () {
        var _this = this;
        this.companyService.deleteSurvey(this.editId).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.loadSurvey();
                $('#myModal .modal-body h4').text(data.msg);
                $('#myModal').modal('show');
            }
            else {
                $('#myModal .modal-body h4').text(data.msg);
                $('#myModal').modal('show');
            }
        });
    };
    CompanyListSurveyComponent.prototype.setEditId = function (id) {
        this.editId = id;
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], CompanyListSurveyComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], CompanyListSurveyComponent.prototype, "sort", void 0);
    CompanyListSurveyComponent = __decorate([
        core_1.Component({
            selector: 'app-company-list-survey',
            template: __webpack_require__("../../../../../src/app/components/company-list-survey/company-list-survey.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-list-survey/company-list-survey.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], CompanyListSurveyComponent);
    return CompanyListSurveyComponent;
}());
exports.CompanyListSurveyComponent = CompanyListSurveyComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-sidebar/company-sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #282c37;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n        padding-top: 20px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #ea5a5a !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n\r\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {\r\n    background-color: #ea5a5a;\r\n    border-color: #337ab7;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-sidebar/company-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav side-nav\">\n    <!-- <li> -->\n        <!-- <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a> -->\n    <!-- </li> -->\n    <img style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> Survey</a>\n   \n    <li >\n            <a><i class=\"fa fa-users\"></i> Dashboard</a>\n       \n    </li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <!-- <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-product-hunt\"></i> Users</a>  -->\n        <a [routerLink]=\"['/company-users']\" ><i class=\"fa fa-product-hunt\"></i> Users</a> \n        \n    </li>\n    <li>\n        <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Groups </a>\n       \n    </li>\n    <li>\n        <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Themes </a>\n       \n    </li>\n\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <a [routerLink]=\"['/company-list-survey']\" ><i class=\"fa fa-fw fa-arrows-v\"></i> Survey </a>\n       \n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/company-sidebar/company-sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CompanySidebarComponent = /** @class */ (function () {
    function CompanySidebarComponent() {
    }
    CompanySidebarComponent.prototype.ngOnInit = function () {
    };
    CompanySidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-company-sidebar',
            template: __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanySidebarComponent);
    return CompanySidebarComponent;
}());
exports.CompanySidebarComponent = CompanySidebarComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-survey-preview/company-survey-preview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".survey-close {\r\n    text-align: center;\r\n    padding-top: 20%;\r\n}\r\n\r\n.user-layout .navbar-brand {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    float: none;\r\n}\r\n\r\n.user-layout {}\r\n\r\n.navbar {\r\n    border-radius: 0;\r\n}\r\n\r\n.user-layout h2 {\r\n    font-family: \"Roboto-Regular\";\r\n    text-align: left;\r\n    font-size: 20px;\r\n    color: #111;\r\n}\r\n\r\n.checkbox,\r\n.radio {\r\n    text-align: left;\r\n}\r\n\r\n.radio label {\r\n    padding-left: 11px;\r\n}\r\n\r\n.radio input[type=radio] {\r\n    margin-left: -14px;\r\n}\r\n\r\n.example-radio-group {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin:  0 0 0 5px;\r\n}\r\n\r\n.example-radio-button {\r\n    margin: 5px;\r\n}\r\n\r\n.example-selected-value {\r\n    margin: 15px 0;\r\n}\r\n\r\n.checked {\r\n    color: #ea5a5a;\r\n}\r\n\r\n.user-layout .styles1 {\r\n    border: 0;\r\n    border-bottom: 1px solid #dbdbdb;\r\n    font-family: \"Roboto-Regular\";\r\n    background: none;\r\n    padding: 10px 0px;\r\n    font-size: 13px;\r\n    max-width: 400px;\r\n    width: 100%;\r\n    color: #5d5d5d !important;\r\n    float: left;\r\n}\r\n\r\n.input-group {\r\n    position: relative;\r\n    display: table;\r\n    border-collapse: separate;\r\n    width: 100%;\r\n}\r\n\r\n.navbar-brand {}\r\n\r\n.btn {\r\n    border-radius: 16px !important;\r\n    padding: 6px 22px !important;\r\n}\r\n\r\n.timer {\r\n    font-family: \"Roboto-Bold\";\r\n    text-align: center;\r\n    color: #ea5a5a;\r\n    font-size: 18px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.timer {\r\n    font-family: \"Roboto-Bold\";\r\n    text-align: center;\r\n    color: #ea5a5a;\r\n}\r\n\r\n.navbar-brand h2 {\r\n    color: #fff !important;\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    font-size: 40px !important;\r\n}\r\n\r\n.x-new {\r\n    background-color: #5d3c3c;\r\n    border: none;\r\n    min-height: 80px;\r\n}\r\n\r\n.user-layout footer {\r\n    background: #111;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding: 20px 0;\r\n    /* position: absolute; */\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n\r\n.mrgrght {\r\n    margin-right: 10px;\r\n}\r\n\r\n.bg-color {\r\n    background: #f6e8e8;\r\n    padding: 20px 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\np {\r\n    font-family: \"Roboto-Regular\";\r\n}\r\n\r\n.survey-close .fa-exclamation-triangle {\r\n    color: #fba21b;\r\n    text-align: center;\r\n    font-size: 148px;\r\n}\r\n\r\n.survey-close h2 {\r\n    text-align: center;\r\n    font-family: \"Roboto-Bold\";\r\n    font-size: 50px;\r\n}\r\n\r\n.survey-close h3 {\r\n    text-align: center;\r\n    font-family: \"Roboto-Bold\";\r\n    font-size: 50px;\r\n    color: #d9534f;\r\n}\r\n\r\n.survey-close {\r\n    text-align: center;\r\n    padding-top: 9%;\r\n}\r\n\r\n.progress {\r\n    position: relative;\r\n    height: 25px;\r\n}\r\n\r\n.progress > .progress-type {\r\n    position: absolute;\r\n    left: 0px;\r\n    font-weight: 800;\r\n    padding: 3px 30px 2px 10px;\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgba(25, 25, 25, 0.2);\r\n}\r\n\r\n.progress > .progress-completed {\r\n    position: absolute;\r\n    right: 0px;\r\n    font-weight: 800;\r\n    padding: 3px 10px 2px;\r\n}\r\n\r\n.progress-bar {\r\n    background-color: #da524f;\r\n}\r\n\r\n.bs-wizard {\r\n    margin-top: 14px;\r\n}\r\n\r\n\r\n/*Form Wizard*/\r\n\r\n.bs-wizard {\r\n    border-bottom: solid 1px #e0e0e0;\r\n    padding: 0 0 10px 0;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step {\r\n    padding: 0;\r\n    position: relative;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step + .bs-wizard-step {}\r\n\r\n.bs-wizard > .bs-wizard-step .bs-wizard-stepnum {\r\n    color: #595959;\r\n    font-size: 16px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step .bs-wizard-info {\r\n    color: #999;\r\n    font-size: 14px;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step > .bs-wizard-dot {\r\n    position: absolute;\r\n    width: 30px;\r\n    height: 30px;\r\n    display: block;\r\n    background: #da524f94;\r\n    top: 45px;\r\n    left: 50%;\r\n    margin-top: -15px;\r\n    margin-left: -15px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step > .bs-wizard-dot:after {\r\n    content: ' ';\r\n    width: 14px;\r\n    height: 14px;\r\n    background: #da524f;\r\n    border-radius: 50px;\r\n    position: absolute;\r\n    top: 8px;\r\n    left: 8px;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step > .progress {\r\n    position: relative;\r\n    border-radius: 0px;\r\n    height: 8px;\r\n    box-shadow: none;\r\n    margin: 20px 0;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step > .progress > .progress-bar {\r\n    width: 0px;\r\n    box-shadow: none;\r\n    background: #efc9c9;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step.complete > .progress > .progress-bar {\r\n    width: 100%;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step.active > .progress > .progress-bar {\r\n    width: 50%;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step:first-child.active > .progress > .progress-bar {\r\n    width: 0%;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step:last-child.active > .progress > .progress-bar {\r\n    width: 100%;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step.disabled > .bs-wizard-dot:after {\r\n    opacity: 0;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step:first-child > .progress {\r\n    left: 50%;\r\n    width: 50%;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step:last-child > .progress {\r\n    width: 50%;\r\n}\r\n\r\n.bs-wizard > .bs-wizard-step.disabled a.bs-wizard-dot {\r\n    pointer-events: none;\r\n}\r\n\r\n\r\n/******survey**********/\r\n\r\n.survey {}\r\n\r\n.survey header {\r\n    background: #4c7e9a;\r\n    width: 100%;\r\n    padding: 12px 0;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n    margin-top: 20px;\r\n}\r\n\r\n.survey header h2 {\r\n    color: #fff;\r\n    font-size: 18px;\r\n}\r\n\r\n.survey header h4 {\r\n    color: #fff;\r\n    font-size: 12px;\r\n}\r\n\r\n.survey .logo {\r\n    margin: 0 auto;\r\n    max-width: 200px;\r\n    width: 100%;\r\n    color: #fff;\r\n    font-size: 18px;\r\n}\r\n\r\n.survey footer {\r\n    background: #111;\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.survey label {\r\n    font-family: \"Roboto-Regular\";\r\n    color: #616161;\r\n    font-size: 13px;\r\n}\r\n\r\n.survey h3 {\r\n    font-family: \"Roboto-Regular\";\r\n    color: #111;\r\n    margin-bottom: 0;\r\n    font-size: 16px;\r\n}\r\n\r\n.survey .question {\r\n    color: #31708f;\r\n    background-color: #d9edf7;\r\n    border-color: #bce8f1;\r\n    padding: 11px;\r\n    margin-bottom: 20px;\r\n    border: 1px solid transparent;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n}\r\n\r\n.survey .question h3 {\r\n    font-family: \"Roboto-Regular\";\r\n    color: #000;\r\n    margin-top: 0;\r\n}\r\n\r\n.survey .question .fa {\r\n    padding: 4px;\r\n}\r\n\r\n.survey .question .fa:hover {\r\n    opacity: 0.6;\r\n}\r\n\r\n\r\n\r\n\r\n.srvey-hd{\r\n    margin-top: 40px;\r\n}\r\n\r\n.bld{\r\n    font-weight: 700 !important\r\n  }\r\n  .itlc{\r\n    font-style: italic !important;\r\n  }\r\n\r\n.star-container{\r\n    width: 104px\r\n}\r\n  .rating label {\r\n    float: right;\r\n    position: relative;\r\n    width: 25px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n  }\r\n  .rating label:not(:first-of-type) {\r\n    padding-right: 2px;\r\n  }\r\n  .rating label:before {\r\n    content: \"\\2605\";\r\n    font-size: 25px;\r\n    color: #CCCCCC;\r\n    line-height: 1;\r\n  }\r\n  .rating input {\r\n    display: none;\r\n  }\r\n  .rating input:checked ~ label:before, .rating:not(:checked) > label:hover:before, .rating:not(:checked) > label:hover ~ label:before {\r\n    color: #F9DF4A;\r\n  }\r\n\r\nlg-out{\r\n    margin: 0px 43px 9px 0;\r\n}\r\n.questn-container{\r\n    min-height: 800px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-survey-preview/company-survey-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-layout\" *ngIf=\"survey.display_type.ui != 'Multiple'\">\n    \n    <nav *ngIf=\"survey.showHeader\"  class=\"navbar navbar-toggleable-md fixed-top x-new\" [ngStyle]=\"{'background-color':survey.selectedTheme.h_bg_color }\">\n      <div class=\"container\">\n        <div class=\"col-md-8 col-md-offset-2\">\n            \n          <div class=\"col-md-4\">\n             \n              <img *ngIf=\"survey.logo || survey.logoSrc\" height=\"100\" [src]=\"survey.logoSrc || (config.siteUrl + '/company/logo/'+ survey.logo)\" >\n               <!-- <a *ngIf=\"!survey.logo\" class=\"navbar-brand\" href=\"#\"><h2 [ngStyle]=\"{'font-size':survey.selectedTheme.h_font_size, 'font-family':survey.selectedTheme.h_font_family}\">logo</h2></a> -->\n          </div>\n          <div class=\"col-md-8\">\n              <h1 class=\"srvey-hd\" [ngStyle]=\"{'font-size':survey.selectedTheme.h_font_size, 'font-family':survey.selectedTheme.h_font_family, 'color':survey.selectedTheme.h_font_color}\" [ngClass]=\"{ 'itlc' : survey.selectedTheme.h_font_italic, 'bld': survey.selectedTheme.h_font_bold}\">{{survey.header}}</h1>\n             \n              \n          </div>\n        </div>\n      </div>\n    </nav>\n   \n    <div class=\"container\">\n        <div class=\"col-md-12 questn-container\">\n            <button type=\"submit\"  class=\"btn btn-danger pull-right lg-out\" >Logout</button>\n            <button type=\"submit\" (click)=\"backTosurvey()\" class=\"btn btn-danger pull-right lg-out\" >Back To Survey</button>\n            <div class=\"col-md-12\">\n                <!-- <app-count-down-timer  class=\"pull-right\" [inputDate]=\"survey.end_datetime\" [addClass]=\"'timer-survey'\"></app-count-down-timer>              -->\n                \n            </div>\n            <div class=\"col-md-12\">\n                    <div class=\"col-md-12\" *ngFor=\"let item of survey.questions; let i=index\">\n                        <p [ngStyle]=\"{'font-size': theme.q_font_size, 'font-family':theme.q_font_family, 'color':theme.q_font_color}\" [ngClass]=\"{ 'itlc' : theme.q_font_italic, 'bld': theme.q_font_bold}\">{{i+1}}. {{item.question}}</p>\n                        <div *ngIf=\"item.answerType == 'Multiple choice'; else star\">\n                            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"survey.questions[i].ans\" name=\"{{item._id}}\">\n                                <mat-radio-button class=\"example-radio-button\" *ngFor=\"let choice of item.opts\" [value]=\"choice\" [required]=\"survey.display_type.skip == false\" >\n                                  <span [ngStyle]=\"{'font-size': theme.q_font_size, 'font-family':theme.q_font_family, 'color':theme.q_font_color}\" [ngClass]=\"{ 'itlc' : theme.q_font_italic, 'bld': theme.q_font_bold}\">{{choice}}</span>\n                                </mat-radio-button>\n                              </mat-radio-group>\n                        </div>\n\n\n                        <ng-template #star >\n                            <div class=\"star-container star-rating\" *ngIf=\"item.answerType === 'star rating'; else text\">\n                                <!-- <fieldset>\n                                  <input type=\"radio\" id=\"{{'star'+x+1}}\" *ngFor=\"let choice of item.options; let x=index;\" name=\"rating\" value=\"{{x+1}}\" /><label *ngFor=\"let choice of item.options; let i=index;\" for=\"{{'star'+i+1}}\" title=\"{{choice}}\">5 stars</label> -->\n                                  <div class=\"rating\">\n                                    <!-- <ng-container *ngFor=\"let choice of item.options | reverse; let x=index;\"> -->\n                                        <!-- <star-rating-comp [starType]=\"'svg'\" [hoverEnabled]=\"true\"\n                                        [showHalfStars]=\"false\" [labelText]=\"'My text!'\"></star-rating-comp> -->\n                                        <!-- <rating [(ngModel)]=\"survey.questions[i].ans\" [titles]=\"item.options\" name=\"answer\" [max]=\"item.options.length\"></rating> -->\n                                    <!-- </ng-container> -->\n                                      <!-- <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label for=\"star4\"></label>\n                                      <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label for=\"star3\"></label>\n                                      <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label for=\"star2\"></label>\n                                      <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label for=\"star1\"></label> -->\n                                  </div>\n                                <!-- </fieldset> -->\n                              </div>\n                        </ng-template>\n\n\n                        <ng-template #text >\n                            <mat-form-field class=\"example-full-width\">\n                                <textarea matInput placeholder=\"Answer\" [(ngModel)]=\"survey.questions[i].ans\" name=\"txt\" [required]=\"survey.display_type.skip == false\"></textarea>\n                              </mat-form-field>\n                        </ng-template>\n                      </div>\n                      <button type=\"submit\" (click)=\"submitAns()\" class=\"btn btn-danger ourbutton\" >Submit</button> \n                      \n            </div>\n            \n            \n          </div>   \n    </div>\n         \n    <footer *ngIf=\"survey.showFooter\"  [ngStyle]=\"{'background-color':survey.selectedTheme.f_bg_color}\">\n      <p [ngStyle]=\"{'font-size':survey.selectedTheme.f_font_size, 'font-family':survey.selectedTheme.f_font_family,'color':survey.selectedTheme.f_font_color}\">{{survey.footer}}</p>\n    </footer>\n              \n  </div>\n\n\n\n\n\n  <!-- multiple page preview -->\n\n\n\n\n<div class=\"user-layout\" *ngIf=\"survey.display_type.ui == 'Multiple'\"  >\n    <nav *ngIf=\"survey.showHeader\"  class=\"navbar navbar-toggleable-md fixed-top x-new\" [ngStyle]=\"{'background-color':survey.selectedTheme.h_bg_color }\">\n        <div class=\"container\">\n          <div class=\"col-md-8 col-md-offset-2\">\n              \n            <div class=\"col-md-4\">\n               \n                <img *ngIf=\"survey.logo || survey.logoSrc\" height=\"100\" [src]=\"survey.logoSrc || (config.siteUrl + '/company/logo/'+ survey.logo)\" >\n                 <!-- <a *ngIf=\"!survey.logo\" class=\"navbar-brand\" href=\"#\"><h2 [ngStyle]=\"{'font-size':survey.selectedTheme.h_font_size, 'font-family':survey.selectedTheme.h_font_family}\">logo</h2></a> -->\n            </div>\n            <div class=\"col-md-8\">\n                <h1 class=\"srvey-hd\" [ngStyle]=\"{'font-size':survey.selectedTheme.h_font_size, 'font-family':survey.selectedTheme.h_font_family, 'color':survey.selectedTheme.h_font_color}\" [ngClass]=\"{ 'itlc' : survey.selectedTheme.h_font_italic, 'bld': survey.selectedTheme.h_font_bold}\">{{survey.header}}</h1>\n               \n                \n            </div>\n          </div>\n        </div>\n      </nav>\n    <div class=\"container\">\n        <div class=\"col-md-12 questn-container\">\n            <button type=\"submit\" (click)=\"backTosurvey()\" class=\"btn btn-danger pull-right lg-out\" >Back To Survey</button>\n            <button type=\"submit\" (click)=\"logout()\" class=\"btn btn-danger pull-right lg-out\" >Logout</button>\n            <div class=\"col-md-12\">\n                <!-- <app-count-down-timer  class=\"pull-right\" [inputDate]=\"survey.end_datetime\" [addClass]=\"'timer-survey'\"></app-count-down-timer>              -->\n                \n            </div>\n            <div class=\"col-md-12\">\n                <h4 *ngIf=\"blankAns\" [ngStyle]=\"{'color':'#d9534f'}\">Fill all answers</h4>\n                    <div class=\"col-md-12\" *ngFor=\"let item of survey.questions; let i=index;\">\n                      <div *ngIf=\"cardNo == i\">\n                          <p [ngStyle]=\"{'font-size': theme.q_font_size, 'font-family':theme.q_font_family, 'color':theme.q_font_color}\" [ngClass]=\"{ 'itlc' : theme.q_font_italic, 'bld': theme.q_font_bold}\">{{i+1}}. {{item.question}}</p>\n                          <div *ngIf=\"item.answerType == 'Multiple choice'; else star\">\n                              <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"survey.questions[i].ans\" name=\"{{item._id}}\">\n                                  <mat-radio-button class=\"example-radio-button\" *ngFor=\"let choice of item.opts\" [value]=\"choice\" [required]=\"survey.display_type.skip == false\" >\n                                    <span [ngStyle]=\"{'font-size': theme.q_font_size, 'font-family':theme.q_font_family, 'color':theme.q_font_color}\" [ngClass]=\"{ 'itlc' : theme.q_font_italic, 'bld': theme.q_font_bold}\">{{choice}}</span>\n                                  </mat-radio-button>\n                                </mat-radio-group>\n                          </div>\n                          <div class=\"col-md-12\">\n                              <div class=\"col-md-6 progrs \">\n                                  <h5 *ngIf=\"survey.display_type.pageno == true\" [ngStyle]=\"{'color': theme.progress_text_color}\">Page No. {{cardNo+1}} of {{survey.questions.length}}</h5>\n                                  <div class=\"progress\" >\n                                      <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"70\"\n                                      aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]=\"progressBarWidth\" [ngStyle]=\"{'background-color': theme.progress_bar_color}\">\n                                      </div>\n                                    </div> \n                              </div>\n                              <div class=\"col-md-6 progrs\">\n                                  <button *ngIf=\"cardNo > 0\" type=\"submit\" (click)=\"back(cardNo)\" class=\"btn btn-danger ourbutton btn-mrgn\" >Back</button> \n                                  \n                                  <button *ngIf=\"cardNo < survey.questions.length-1\" type=\"button\" (click)=\"next(cardNo)\" class=\"btn btn-danger ourbutton btn-mrgn\" >Next</button> \n                                  <button type=\"button\" *ngIf=\"survey.display_type.skip&&cardNo < survey.questions.length-1\" (click)=\"skipQuestion()\" class=\"btn btn-danger ourbutton btn-mrgn\" >Skip</button> </div>\n                              </div>\n                            \n                        \n                        \n                      </div>\n                       \n                      \n\n                        <ng-template #star >\n                            <div *ngIf=\"cardNo == i\">\n                            <div class=\"star-container star-rating\" *ngIf=\"item.answerType === 'star rating'; else text\">\n                                <!-- <fieldset>\n                                  <input type=\"radio\" id=\"{{'star'+x+1}}\" *ngFor=\"let choice of item.options; let x=index;\" name=\"rating\" value=\"{{x+1}}\" /><label *ngFor=\"let choice of item.options; let i=index;\" for=\"{{'star'+i+1}}\" title=\"{{choice}}\">5 stars</label> -->\n                                  <div class=\"rating\">\n                                    <!-- <ng-container *ngFor=\"let choice of item.options ; let x=index;\"> -->\n                                      <!-- <input [(ngModel)]=\"survey.questions[i].ans\"  type=\"radio\" id=\"star{{5-x}}\" name=\"rating\" value=\"{{choice}}\" [required]=\"survey.display_type.skip == false\"  /><label  for=\"star{{5-x}}\" title=\"{{choice}}\"></label> [required]=\"survey.display_type.skip == false\" -->\n                                      <!-- <rating [(ngModel)]=\"survey.questions[i].ans\" [titles]=\"item.options\" name=\"answer\" [max]=\"item.options.length\" ></rating> -->\n                                      \n                                    <!-- </ng-container> -->\n                        \n                                      <!-- <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label for=\"star4\"></label>\n                                      <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label for=\"star3\"></label>\n                                      <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label for=\"star2\"></label>\n                                      <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label for=\"star1\"></label> -->\n                                  </div>\n                                <!-- </fieldset> -->\n                        \n                              </div>\n                              \n                              </div>\n                        </ng-template>\n\n\n                        <ng-template #text >\n                            <mat-form-field class=\"example-full-width\">\n                                <textarea matInput placeholder=\"Answer\" [(ngModel)]=\"survey.questions[i].ans\" name=\"txt\" [required]=\"survey.display_type.skip == false\"></textarea>\n                              </mat-form-field>\n                        \n                        </ng-template>\n                        \n                      </div>\n                      \n                      <button *ngIf=\"cardNo == questionCount-1\" type=\"submit\" (click)=\"submitAns()\" class=\"btn btn-danger ourbutton mrgn-50\" >Submit</button> \n                      \n            </div>\n            \n            \n          </div>   \n    </div>\n         \n    <footer *ngIf=\"survey.showFooter\"  [ngStyle]=\"{'background-color':survey.selectedTheme.f_bg_color}\">\n        <p [ngStyle]=\"{'font-size':survey.selectedTheme.f_font_size, 'font-family':survey.selectedTheme.f_font_family,'color':survey.selectedTheme.f_font_color}\">{{survey.footer}}</p>\n      </footer>\n              \n  </div>\n\n\n\n  "

/***/ }),

/***/ "../../../../../src/app/components/company-survey-preview/company-survey-preview.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// import {Router,ActivatedRoute, Params} from '@angular/router';
// // import { UserService } from './../../services/user.service';
// import { CompanyService } from './../../services/company.service';
// declare var $:any;
// import {RatingModule} from "ngx-rating";
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var CompanySurveyPreviewComponent = /** @class */ (function () {
    function CompanySurveyPreviewComponent(config) {
        this.config = config;
        this.cardNo = 0;
        this.onBackBtnClick = new core_1.EventEmitter();
    }
    CompanySurveyPreviewComponent.prototype.ngOnInit = function () {
        this.theme = this.survey;
        console.log(this.survey.header_title);
    };
    CompanySurveyPreviewComponent.prototype.backTosurvey = function () {
        this.onBackBtnClick.emit();
    };
    CompanySurveyPreviewComponent.prototype.next = function (i) {
        var _this = this;
        if (this.survey.questions[i].ans == '' || !this.survey.questions[i].ans) {
            this.blankAns = true;
            setTimeout(function () {
                _this.blankAns = true;
                ;
            }, 2000);
        }
        else {
            this.cardNo = this.cardNo + 1;
            this.blankAns = false;
            this.progressBarWidth = (this.cardNo / this.survey.questions.length) * 100;
            console.log(this.cardNo);
        }
    };
    CompanySurveyPreviewComponent.prototype.back = function () {
        this.cardNo = this.cardNo - 1;
    };
    CompanySurveyPreviewComponent.prototype.skipQuestion = function () {
        this.cardNo = this.cardNo + 1;
    };
    CompanySurveyPreviewComponent = __decorate([
        core_1.Component({
            selector: 'app-company-survey-preview',
            template: __webpack_require__("../../../../../src/app/components/company-survey-preview/company-survey-preview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-survey-preview/company-survey-preview.component.css")],
            inputs: ["survey"],
            outputs: ['onBackBtnClick']
        }),
        __metadata("design:paramtypes", [config_1.Config])
    ], CompanySurveyPreviewComponent);
    return CompanySurveyPreviewComponent;
}());
exports.CompanySurveyPreviewComponent = CompanySurveyPreviewComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-top-bar/company-top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.notify {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #2882f7;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n}\r\n\r\n\r\n.notify-count{\r\n    position: absolute;\r\n    top: -9px;\r\n    right: -8px;\r\n    background: #DE2413;\r\n    height: 15px;\r\n    width: 15px;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    line-height: 14px;\r\n}\r\n.fa-bell{position:relative;}\r\n.media-object{width:100%;}\r\n\r\n\r\n\r\n.list-notificacao{\r\n    min-width: 400px;\r\n    background: #ffffff;\r\n    left:inherit;\r\n    right:0;\r\n  }\r\n  \r\n  .list-notificacao li{\r\n     border-bottom : 1px #d8d8d8 solid;\r\n     text-align    : justify;\r\n     padding       : 5px 10px 5px 10px;\r\n     cursor: pointer;\r\n     font-size: 12px;\r\n  }\r\n  \r\n  .list-notificacao li:hover{\r\n  background: #f1eeee;\r\n  }\r\n  \r\n  .list-notificacao li:hover .exclusaoNotificacao{\r\n  display: block;\r\n  }\r\n  \r\n  .list-notificacao li  p{\r\n   color: black;\r\n   width: 305px;\r\n  }\r\n  \r\n  .list-notificacao li .exclusaoNotificacao{\r\n      width: 25px;\r\n      min-height: 40px;\r\n      position: absolute;\r\n      right: 0;\r\n      display: none;\r\n  }\r\n  \r\n  .list-notificacao .media img{\r\n      width: 40px;\r\n      height: 40px;\r\n      float:left;\r\n      margin-right: 10px;\r\n  }\r\n  \r\n  .badgeAlert {\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    padding: 3px 5px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    line-height: 1;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    background-color: #d9534f;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    margin-top: -32px;\r\n    margin-left: 5px;\r\n  }\r\n  .notification{background-color:#fff !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-top-bar/company-top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  \n \n  <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <div class=\"navbar-header\">\n          \n       <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n           <span class=\"sr-only\">Toggle navigation</span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n           <span class=\"icon-bar\"></span>\n       </button>\n      \n      </div>\n      <ul class=\"nav navbar-nav pull-right profilz\">\n              <li class=\"dropdown notification\">\n                      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"glyphicon glyphicon-bell alertNotificacao\"></span>\n                        <span class='badgeAlert'>2</span>\n                        <span class=\"\"></span></a>\n                      <ul class=\"list-notificacao dropdown-menu\">\n                        <li id='item_notification_1'>\n                            <div class=\"media\">\n                               <div class=\"media-left\"> \n                                  <a href=\"#\"> \n                                  <img alt=\"64x64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWZhMWJmZmI3MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZmExYmZmYjcwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=\" data-holder-rendered=\"true\"> </a> \n                               </div>\n                               <div class=\"media-body\">\n                                  <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs button_exclusao' id='1' onclick='excluirItemNotificacao(this)'>x</button>\n                                  </div>\n                                  <h4 class=\"media-heading\">ITEM 1</h4>\n                                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                               </div>\n</div>\n                         </li>    \n                         <li id='item_notification_2'>\n                            <div class=\"media\">\n                               <div class=\"media-left\"> \n                                  <a href=\"#\"> \n                                  <img alt=\"64x64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWZhMWJmZmI3MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZmExYmZmYjcwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=\" data-holder-rendered=\"true\"> </a> \n                               </div>\n                               <div class=\"media-body\">\n                                  <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs' id='2' onclick='excluirItemNotificacao(this)'>x</button>\n                                  </div>\n                                  <h4 class=\"media-heading\">ITEM 2</h4>\n                                  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                               </div>\n                            </div>\n                         </li>\n                      </ul>\n                   </li>\n          <li class=\"dropdown\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Iasmani Pinazo <span class=\"glyphicon glyphicon-user pull-right\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Profile <span class=\"glyphicon glyphicon-cog pull-right\"></span></a></li>\n              \n              <li class=\"divider\"></li>\n              <li>\n                  <a  (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out pull-right\"></span> LogOut </a>\n                  \n              </li>\n            </ul>\n          </li>\n\n          \n        </ul>\n     \n        \n  </div>\n  <!-- /.navbar-collapse -->\n</nav>\n\n<!-- Top Menu Items -->\n<ul class=\"nav navbar-right top-nav\">\n  <li class=\"dropdown\" *ngFor= \"let item of info\">\n          \n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell\"><div class=\"notify-count\">2</div></i> <b class=\"caret\"></b></a>\n      <ul class=\"dropdown-menu message-dropdown\">\n          <li class=\"message-preview\"  >\n              <a >\n                  <div class=\"media\">\n                      <div class=\"row\">\n                      <div class=\"col-md-4\">\n                      <span class=\"pull-left\">\n                          <img class=\"media-object\"\n                          \n                           alt=\"\">\n                      </span>\n                     </div>\n                     <div class=\"col-md-8\">\n                      <div class=\"media-body\">\n                          <h5 class=\"media-heading\">\n                              <strong>Name</strong>\n                          </h5>\n                          \n                          <p>Item confirmed by bidder</p>\n                      </div>\n                      </div>\n                      </div>\n                  </div>\n              </a>\n          </li>\n          <!-- <li class=\"message-footer\">\n              <a href=\"#\">Read All New Messages</a>\n          </li> -->\n      </ul>\n  </li>\n  \n  \n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/company-top-bar/company-top-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CompanyTopBarComponent = /** @class */ (function () {
    function CompanyTopBarComponent() {
    }
    CompanyTopBarComponent.prototype.ngOnInit = function () {
    };
    CompanyTopBarComponent = __decorate([
        core_1.Component({
            selector: 'app-company-top-bar',
            template: __webpack_require__("../../../../../src/app/components/company-top-bar/company-top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-top-bar/company-top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompanyTopBarComponent);
    return CompanyTopBarComponent;
}());
exports.CompanyTopBarComponent = CompanyTopBarComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.buttonleft>li{\r\n    border:none !important;\r\n    text-align: center;\r\n    padding: 4px;\r\n} \r\n\r\n.ourbutton2{    border-radius: 20px;\r\n        padding: 7px 40px;}\r\n.buttonleft{padding:2em 0;min-height: 300px;}\r\n\r\n\r\n\r\n\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n\r\n.inputfileds{\r\n    width: 300px !important;\r\n}\r\n.inputitem{\r\n    margin-bottom:-15px;\r\n    float: left;\r\n    width: 305px;\r\n    /* width: 400px; */\r\n}\r\n.relaive{position:relative;}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  \n                <div id=\"wrapper\">\n            \n                    <!-- Navigation -->\n                    <app-company-top-bar></app-company-top-bar>            \n        <app-company-sidebar></app-company-sidebar>\n            \n                    <div id=\"\">\n                        <div class=\"container-fluid\">\n                                \n                                            <!-- Page Heading -->\n                                          \n                                      \n                                            <!-- /.row -->\n                            \n                                        </div>\n                        <div class=\"col-md-2\">\n                              <nav class=\"nav-sidebar\">\n                                  <ul class=\"nav tabs buttonleft\">\n                                        <li >\n                                          <button  class=\"btn btn-danger ourbutton2\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#myModal\">Add New</button>\n                                        </li>\n                                        <li >\n                                          <button  class=\"btn btn-danger ourbutton2\"  data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editModal\" >Edit User</button>\n                                          <!-- <button  class=\"btn btn-danger ourbutton2\" (click)=\"getEditUser(user);\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editModal\" >Edit User</button> -->\n                                        </li>\n                                        <!-- <li [ngClass]=\"{'active1': viewComp == 'Active'}\"><a (click)=\"updateView('Active')\" href=\"#tab4\" data-toggle=\"tab\">Active Users</a></li> \n                                        <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab2\" data-toggle=\"tab\">Blocked Users</a></li>\n                                        <li [ngClass]=\"{'active1': viewComp == 'Delete'}\"><a (click)=\"updateView('Delete')\" href=\"#tab3\" data-toggle=\"tab\">Delete Users</a></li>   -->\n                                                                     \n                                  </ul>\n                                </nav>\n                        </div>\n                        <div class=\"col-md-10\">\n\n                            <div *ngIf=\"viewComp == 'All'\">\n                              <!-- <all-users></all-users> -->\n                            </div>\n                            <div *ngIf=\"viewComp == 'Active'\">\n                                <!-- <active-users></active-users> -->\n                              </div>\n                            <div *ngIf=\"viewComp == 'Blocked'\">\n                              <!-- <disabled-users></disabled-users> -->\n                            </div>\n                            <div *ngIf=\"viewComp == 'Delete'\">\n                              <!-- <deleted-users></deleted-users> -->\n                            </div>\n                        </div>\n                        \n                      </div>\n                      <!-- /#page-wrapper -->\n                      \n                                 \n                      </div>\n                      \n\n\n                      <div id=\"editModal\"  class=\"modal fade\">\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n                              <h4 class=\"modal-title\">Edit User</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                              \n                          <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"f1.form.valid && updateUsers(f1);\" novalidate>\n                               \n                              <div class=\"form-group\" >\n                                  <label > Email </label>\n                                  <br>\n                                  <div *ngIf=\"isError1\" class=\"text-danger text-left\">\n                                      {{msg1}}\n                                 </div>\n                                 <div *ngIf=\"isSuccess1\" class=\"text-success text-left\">\n                                    {{msg1}}\n                              </div>\n                                 \n                                  <div  >\n                                    <div class=\"inputitem\">\n                                    <mat-form-field *ngIf=\"!selUser.is_registered\" class=\"inputfileds\">\n                                      <input matInput  [value]=\"selUser.email\" placeholder=\"Email address\" required email  #email=\"ngModel\" name=\"email\" [(ngModel)]=\"selUser.newEmail\"  >\n                                      <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\n                                    \n                                    </mat-form-field>\n                                    <div *ngIf=\"selUser.is_registered\">\n                                    <label >{{selUser.email}}</label>\n                                    </div>\n                                    </div>\n                                  </div>\n                                  <div style=\"clear: both;\"></div>\n                                  <br/>\n                           \n                                  <br/>\n                                  <div class=\"inputitem\">\n                                      <mat-form-field class=\"inputfileds\">\n                                        <mat-select placeholder=\"Groups\" name='editgrup'[(ngModel)]=\"selUserGroups\" multiple>\n                                          <mat-option [value]=\"grp._id\" *ngFor=\"let grp of groups;\" >{{grp.name}}</mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                  </div>\n                              \n                                  <br>\n                                  <div style=\"clear: both;\"></div>\n                              </div>\n                              <br>\n                              <button type= \"submit\" [disabled]=\"updateBtnDisbled\" class=\"btn btn-danger ourbutton\" >Update</button>\n                             \n                          </form>\n                            </div>\n                            <div class=\"modal-footer\">\n                            </div>\n                          </div>\n                          \n                        </div>\n                      </div>\n\n\n                      \n                      <div id=\"myModal\"  class=\"modal fade\">\n                          <div class=\"modal-dialog\">\n                          \n                            <!-- Modal content-->\n                            <div class=\"modal-content\">\n                              <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n                                <h4 class=\"modal-title\">Add User</h4>\n                              </div>\n                              <div class=\"modal-body\">\n                                \n                            <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addUsers(f);\" novalidate>\n                            \n                                <div class=\"form-group\" >\n                                    <label > Email </label>\n                                    <br>\n                                    <div *ngIf=\"isError\" class=\"text-danger text-left\">\n                                        {{msg}}\n                                   </div>\n                                   <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\n                                      {{msg}}\n                                </div>\n                                   \n                                    <div  *ngFor=\"let item of newUser.email; let i = index; trackBy:trackByIndex\" >\n                                      <div class=\"inputitem\">\n                                      <mat-form-field class=\"inputfileds\">\n                                        <input matInput placeholder=\"Email address\" required email  #email{{i}}=\"ngModel\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\" >\n                                        <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\n                                      \n                                      </mat-form-field>\n                                      \n                                      </div>\n                                      <div style=\"float: left;padding-top: 14px;width:220px;\">\n                                          <button class=\"btn-danger\" (click)=\"removeOption(i)\" style=\"float: left;\" >X</button>\n                                      </div>\n                                    </div>\n                                    <div style=\"clear: both;\"></div>\n                                    <br/>\n                                    <button  class=\"btn btn-danger ourbutton\" (click)=\"addMoreOption()\" >Add More</button>\n                                    <br/>\n                                    <br/>\n                                    <div class=\"inputitem\">\n                                        <mat-form-field class=\"inputfileds\">\n                                          <mat-select placeholder=\"Groups\" name='selected' #group=\"ngModel\" [(ngModel)]=\"newUser.groups\" multiple>\n                                            <mat-option [value]=\"grp\" *ngFor=\"let grp of groups;\"  >{{grp.name}}</mat-option>\n                                          </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div style=\"float: left;\">\n                                        <button  class=\"btn btn-danger ourbutton\" (click)=\"showGroupAddOption()\">Add Group</button>\n                                    </div>\n                                    <br>\n                                    <div style=\"clear: both;\"></div>\n                                    <div *ngIf=\"showAddGroup\">\n                                    <mat-form-field class=\"inputfileds\" >\n                                        <input matInput placeholder=\"Group Name\" [(ngModel)]=\"newGroup\" name=\"newGroup\" >\n                                      </mat-form-field>\n                                      <button  class=\"btn btn-danger ourbutton\" (click)=\"addGroup()\">Add</button>\n                                      </div>\n                                      \n                                </div>\n                                <br>\n                                <button type= \"submit\" [disabled]=\"btnDisbled\" class=\"btn btn-danger ourbutton\" >Submit</button>\n                               \n                            </form>\n                              </div>\n                              <div class=\"modal-footer\">\n                              </div>\n                            </div>\n                            \n                          </div>\n                        </div>\n\n\n                        \n                      \n                      <footer></footer> \n                        \n                      </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var CompanyUsersComponent = /** @class */ (function () {
    function CompanyUsersComponent(companyService) {
        this.companyService = companyService;
        this.newUser = { email: [''], groups: [] };
        this.isError = false;
        this.isSuccess = false;
        this.msg = '';
        this.isError1 = false;
        this.isSuccess1 = false;
        this.msg1 = '';
        this.showAddGroup = false;
        this.newGroup = '';
        this.btnDisbled = false;
        this.updateBtnDisbled = false;
        this.selUser = { email: '', groups: [], newEmail: '', is_registered: false };
        this.selUserGroups = [];
    }
    CompanyUsersComponent.prototype.ngOnInit = function () {
        // this.selGroups = ['Symptots'];
        var _this = this;
        this.companyService.getMyCompany().subscribe(function (data) {
            var index = 5;
            _this.selUser.email = data.users[index].email;
            _this.selUser.newEmail = data.users[index].email;
            _this.selUser.is_registered = data.users[index].is_registered;
            data.users[index].group.forEach(function (val) {
                _this.selUserGroups.push(val.g_id);
            });
            console.log(_this.selUser.groups);
        });
        // console.log(this.selGroups);
        this.companyService.getAllUserGroup().subscribe(function (data) {
            _this.groups = data.group;
            _this.groupsObject = data.groupById;
        });
    };
    CompanyUsersComponent.prototype.addMoreOption = function () {
        this.newUser.email.push('');
        return false;
    };
    CompanyUsersComponent.prototype.removeOption = function (index) {
        var _this = this;
        if (this.newUser.email.length > 1) {
            this.newUser.email.splice(index, 1);
        }
        else {
            this.isError = true;
            this.msg = "Atleast one item required";
            setTimeout(function () {
                _this.isError = false;
                _this.msg = '';
            }, 3000);
        }
        return false;
    };
    CompanyUsersComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    CompanyUsersComponent.prototype.showGroupAddOption = function () {
        this.showAddGroup = true;
        return false;
    };
    CompanyUsersComponent.prototype.updateUsers = function (form) {
        var _this = this;
        this.updateBtnDisbled = true;
        console.log(this.selUser.groups);
        this.selUserGroups.forEach(function (val, key) {
            _this.selUser.groups[key] = _this.groupsObject[val];
        });
        console.log(this.selUser);
        this.companyService.updateUser(this.selUser).subscribe(function (data) {
            if (data.success) {
                _this.selUser = { email: '', groups: [], newEmail: '', is_registered: false };
                _this.isSuccess1 = true;
                _this.msg1 = data.msg;
                form.resetForm();
                //update company = data.company
                setTimeout(function () {
                    _this.closeBtn1.nativeElement.click();
                    _this.isSuccess1 = false;
                    _this.msg1 = '';
                    _this.updateBtnDisbled = false;
                }, 2000);
            }
            else {
                _this.isError1 = true;
                _this.msg1 = data.msg;
                _this.updateBtnDisbled = false;
                setTimeout(function () {
                    _this.isError1 = false;
                    _this.msg1 = '';
                }, 3000);
            }
        });
    };
    CompanyUsersComponent.prototype.addUsers = function (form) {
        var _this = this;
        this.btnDisbled = true;
        console.log(this.newUser);
        this.companyService.addUsers(this.newUser).subscribe(function (data) {
            if (data.success) {
                _this.newUser = { email: [''], groups: [] };
                _this.isSuccess = true;
                _this.msg = data.msg;
                form.resetForm();
                //update company = data.company
                setTimeout(function () {
                    _this.closeBtn.nativeElement.click();
                    _this.isSuccess = false;
                    _this.msg = '';
                    _this.btnDisbled = false;
                }, 2000);
            }
            else {
                _this.isError = true;
                _this.msg = data.msg;
                _this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.msg = '';
                }, 3000);
            }
        });
    };
    CompanyUsersComponent.prototype.addGroup = function () {
        var _this = this;
        this.companyService.addUserGroup(this.newGroup).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.showAddGroup = false;
                _this.groups.push(data.data);
                _this.newGroup = '';
                _this.isSuccess = true;
                _this.msg = "Group Created Successfully";
                setTimeout(function () {
                    _this.isSuccess = false;
                    _this.msg = '';
                }, 3000);
            }
            else {
                _this.isError = true;
                _this.msg = "Faild, Group Already Exists";
                setTimeout(function () {
                    _this.isError = false;
                    _this.msg = '';
                }, 3000);
            }
        });
        return false;
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", Object)
    ], CompanyUsersComponent.prototype, "f", void 0);
    __decorate([
        core_1.ViewChild('closeBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyUsersComponent.prototype, "closeBtn", void 0);
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyUsersComponent.prototype, "closeBtn1", void 0);
    CompanyUsersComponent = __decorate([
        core_1.Component({
            selector: 'app-company-users',
            template: __webpack_require__("../../../../../src/app/components/company-users/company-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-users/company-users.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], CompanyUsersComponent);
    return CompanyUsersComponent;
}());
exports.CompanyUsersComponent = CompanyUsersComponent;


/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\n    content: '\\2807';\n    font-size:25px;\n    }\n\nbody {\n    margin-top: 100px;\n    background-color: #222;\n}\n\n@media(min-width:768px) {\n    body {\n        margin-top: 50px;\n    }\n}\n\n#wrapper {\n    padding-left: 0;\n}\n\n#page-wrapper {\n    width: 100%;\n    padding: 0;\n    background-color: #fff;\n}\n\n.huge {\n    font-size: 50px;\n    line-height: normal;\n}\n\n@media(min-width:768px) {\n    #wrapper {\n        padding-left: 225px;\n    }\n\n    #page-wrapper {\n        padding: 10px;\n    }\n}\n\n/* Top Navigation */\n\n.top-nav {\n    padding: 0 15px;\n}\n\n.top-nav>li {\n    display: inline-block;\n    float: left;\n}\n\n.top-nav>li>a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    line-height: 20px;\n    color: #999;\n}\n\n.top-nav>li>a:hover,\n.top-nav>li>a:focus,\n.top-nav>.open>a,\n.top-nav>.open>a:hover,\n.top-nav>.open>a:focus {\n    color: #fff;\n    background-color: #000;\n}\n\n.top-nav>.open>.dropdown-menu {\n    float: left;\n    position: absolute;\n    margin-top: 0;\n    border: 1px solid rgba(0,0,0,.15);\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background-color: #fff;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n}\n\n.top-nav>.open>.dropdown-menu>li>a {\n    white-space: normal;\n}\n\nul.message-dropdown {\n    padding: 0;\n    max-height: 250px;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nli.message-preview {\n    width: 275px;\n    border-bottom: 1px solid rgba(0,0,0,.15);\n}\n\nli.message-preview>a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\nli.message-footer {\n    margin: 5px 0;\n}\n\nul.alert-dropdown {\n    width: 200px;\n}\n\n/* Side Navigation */\n\n@media(min-width:768px) {\n    .side-nav {\n        position: fixed;\n        top: 51px;\n        left: 225px;\n        width: 225px;\n        margin-left: -225px;\n        border: none;\n        border-radius: 0;\n        overflow-y: auto;\n        background-color: #222;\n        bottom: 0;\n        overflow-x: hidden;\n        padding-bottom: 40px;\n    }\n\n    .side-nav>li>a {\n        width: 225px;\n    }\n\n    .side-nav li a:hover,\n    .side-nav li a:focus {\n        outline: none;\n        background-color: #000 !important;\n    }\n}\n\n.side-nav>li>ul {\n    padding: 0;\n}\n\n.side-nav>li>ul>li>a {\n    display: block;\n    padding: 10px 15px 10px 38px;\n    text-decoration: none;\n    color: #999;\n}\n\n.side-nav>li>ul>li>a:hover {\n    color: #fff;\n}\n\n/* Flot Chart Containers */\n\n.flot-chart {\n    display: block;\n    height: 400px;\n}\n\n.flot-chart-content {\n    width: 100%;\n    height: 100%;\n}\n\n/* Custom Colored Panels */\n\n.huge {\n    font-size: 40px;\n}\n\n.panel-green {\n    border-color: #5cb85c;\n}\n\n.panel-green > .panel-heading {\n    border-color: #5cb85c;\n    color: #fff;\n    background-color: #5cb85c;\n}\n\n.panel-green > a {\n    color: #5cb85c;\n}\n\n.panel-green > a:hover {\n    color: #3d8b3d;\n}\n\n.panel-red {\n    border-color: #d9534f;\n}\n\n.panel-red > .panel-heading {\n    border-color: #d9534f;\n    color: #fff;\n    background-color: #d9534f;\n}\n\n.panel-red > a {\n    color: #d9534f;\n}\n\n.panel-red > a:hover {\n    color: #b52b27;\n}\n\n.panel-yellow {\n    border-color: #f0ad4e;\n}\n\n.panel-yellow > .panel-heading {\n    border-color: #f0ad4e;\n    color: #fff;\n    background-color: #f0ad4e;\n}\n\n.panel-yellow > a {\n    color: #f0ad4e;\n}\n\n.panel-yellow > a:hover {\n    color: #df8a13;\n}\n.active1{\n    background-color: #eee;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n    \n                  <div id=\"wrapper\">\n              \n                      <!-- Navigation -->\n                      <top-bar></top-bar>            \n          <side-bar></side-bar>\n              \n                      <div id=\"\">\n                          <div class=\"container-fluid\">\n                                  \n                                              <!-- Page Heading -->\n                                            \n                                        \n                                              <!-- /.row -->\n                              \n                                          </div>\n                          <div class=\"col-md-2\">\n                                <nav class=\"nav-sidebar\">\n                                    <ul class=\"nav tabs\">\n                                          <li [ngClass]=\"{'active1': viewComp == 'All'}\"><a (click)=\"updateView('All')\" href=\"#tab1\" data-toggle=\"tab\">All Users</a></li>\n                                          <li [ngClass]=\"{'active1': viewComp == 'Active'}\"><a (click)=\"updateView('Active')\" href=\"#tab4\" data-toggle=\"tab\">Active Users</a></li> \n                                          <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab2\" data-toggle=\"tab\">Blocked Users</a></li>\n                                          <li [ngClass]=\"{'active1': viewComp == 'Delete'}\"><a (click)=\"updateView('Delete')\" href=\"#tab3\" data-toggle=\"tab\">Delete Users</a></li>  \n                                                                       \n                                    </ul>\n                                  </nav>\n                          </div>\n                          <div class=\"col-md-10\">\n                              \n                            \n      \n                              <div *ngIf=\"viewComp == 'All'\">\n                                <!-- <all-users></all-users> -->\n                              </div>\n                              <div *ngIf=\"viewComp == 'Active'\">\n                                  <!-- <active-users></active-users> -->\n                                </div>\n                              <div *ngIf=\"viewComp == 'Blocked'\">\n                                <!-- <disabled-users></disabled-users> -->\n                              </div>\n                              <div *ngIf=\"viewComp == 'Delete'\">\n                                <!-- <deleted-users></deleted-users> -->\n                              </div>\n                          </div>\n                          \n                        </div>\n                        <!-- /#page-wrapper -->\n                        \n                                   \n                        </div>\n                        \n                        <footer></footer> \n                          \n                        </body>"

/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ReferenceComponentComponent = /** @class */ (function () {
    function ReferenceComponentComponent() {
    }
    ReferenceComponentComponent.prototype.ngOnInit = function () {
    };
    ReferenceComponentComponent = __decorate([
        core_1.Component({
            selector: 'reference-component',
            template: __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferenceComponentComponent);
    return ReferenceComponentComponent;
}());
exports.ReferenceComponentComponent = ReferenceComponentComponent;


/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    margin-top: 100px;\n    background-color: #222;\n}\n\n@media(min-width:768px) {\n    body {\n        margin-top: 50px;\n    }\n}\n\n#wrapper {\n    padding-left: 0;\n}\n\n#page-wrapper {\n    width: 100%;\n    padding: 0;\n    background-color: #fff;\n}\n\n.huge {\n    font-size: 50px;\n    line-height: normal;\n}\n\n@media(min-width:768px) {\n    #wrapper {\n        padding-left: 225px;\n    }\n\n    #page-wrapper {\n        padding: 10px;\n    }\n}\n\n/* Top Navigation */\n\n.top-nav {\n    padding: 0 15px;\n}\n\n.top-nav>li {\n    display: inline-block;\n    float: left;\n}\n\n.top-nav>li>a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    line-height: 20px;\n    color: #999;\n}\n\n.top-nav>li>a:hover,\n.top-nav>li>a:focus,\n.top-nav>.open>a,\n.top-nav>.open>a:hover,\n.top-nav>.open>a:focus {\n    color: #fff;\n    background-color: #000;\n}\n\n.top-nav>.open>.dropdown-menu {\n    float: left;\n    position: absolute;\n    margin-top: 0;\n    border: 1px solid rgba(0,0,0,.15);\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background-color: #fff;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n}\n\n.top-nav>.open>.dropdown-menu>li>a {\n    white-space: normal;\n}\n\nul.message-dropdown {\n    padding: 0;\n    max-height: 250px;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nli.message-preview {\n    width: 275px;\n    border-bottom: 1px solid rgba(0,0,0,.15);\n}\n\nli.message-preview>a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\nli.message-footer {\n    margin: 5px 0;\n}\n\nul.alert-dropdown {\n    width: 200px;\n}\n\n/* Side Navigation */\n\n@media(min-width:768px) {\n    .side-nav {\n        position: fixed;\n        top: 0px;\n        left: 225px;\n        width: 225px;\n        margin-left: -225px;\n        border: none;\n        border-radius: 0;\n        overflow-y: auto;\n        background-color: #282c37;\n        bottom: 0;\n        overflow-x: hidden;\n        padding-bottom: 40px;\n        padding-top: 20px;\n    }\n\n    .side-nav>li>a {\n        width: 225px;\n    }\n\n    .side-nav li a:hover,\n    .side-nav li a:focus {\n        outline: none;\n        background-color: #ea5a5a !important;\n    }\n}\n\n.side-nav>li>ul {\n    padding: 0;\n}\n\n.side-nav>li>ul>li>a {\n    display: block;\n    padding: 10px 15px 10px 38px;\n    text-decoration: none;\n    color: #999;\n}\n\n.side-nav>li>ul>li>a:hover {\n    color: #fff;\n}\n\n/* Flot Chart Containers */\n\n.flot-chart {\n    display: block;\n    height: 400px;\n}\n\n.flot-chart-content {\n    width: 100%;\n    height: 100%;\n}\n\n/* Custom Colored Panels */\n\n.huge {\n    font-size: 40px;\n}\n\n.panel-green {\n    border-color: #5cb85c;\n}\n\n.panel-green > .panel-heading {\n    border-color: #5cb85c;\n    color: #fff;\n    background-color: #5cb85c;\n}\n\n.panel-green > a {\n    color: #5cb85c;\n}\n\n.panel-green > a:hover {\n    color: #3d8b3d;\n}\n\n.panel-red {\n    border-color: #d9534f;\n}\n\n.panel-red > .panel-heading {\n    border-color: #d9534f;\n    color: #fff;\n    background-color: #d9534f;\n}\n\n.panel-red > a {\n    color: #d9534f;\n}\n\n.panel-red > a:hover {\n    color: #b52b27;\n}\n\n.panel-yellow {\n    border-color: #f0ad4e;\n}\n\n.panel-yellow > .panel-heading {\n    border-color: #f0ad4e;\n    color: #fff;\n    background-color: #f0ad4e;\n}\n\n.panel-yellow > a {\n    color: #f0ad4e;\n}\n\n.panel-yellow > a:hover {\n    color: #df8a13;\n}\n\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {\n    background-color: #ea5a5a;\n    border-color: #337ab7;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav side-nav\">\n    <!-- <li> -->\n        <!-- <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a> -->\n    <!-- </li> -->\n    <img style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> Survey</a>\n   \n    <li class=\"active\">\n            <a><i class=\"fa fa-users\"></i> Users</a>\n       \n    </li>\n    <li>\n        <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-product-hunt\"></i> Manage Product <span class=\"caret\"></span></a> \n        <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Action</a></li>\n            <li><a href=\"#\">Another action</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li class=\"divider\"></li>\n            <li><a href=\"#\">Separated link</a></li>\n          </ul>\n        \n    </li>\n    <li>\n        <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Auctions </a>\n       \n    </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/components/side-bar/side-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'side-bar',
            template: __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;


/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n    margin-top: 100px;\n    background-color: #222;\n}\n\n@media(min-width:768px) {\n    body {\n        margin-top: 50px;\n    }\n}\n\n#wrapper {\n    padding-left: 0;\n}\n\n#page-wrapper {\n    width: 100%;\n    padding: 0;\n    background-color: #fff;\n}\n\n.huge {\n    font-size: 50px;\n    line-height: normal;\n}\n\n@media(min-width:768px) {\n    #wrapper {\n        padding-left: 225px;\n    }\n\n    #page-wrapper {\n        padding: 10px;\n    }\n}\n\n/* Top Navigation */\n\n.top-nav {\n    padding: 0 15px;\n}\n\n.top-nav>li {\n    display: inline-block;\n    float: left;\n}\n\n.top-nav>li>a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n    line-height: 20px;\n    color: #999;\n}\n\n.top-nav>li>a:hover,\n.top-nav>li>a:focus,\n.top-nav>.open>a,\n.top-nav>.open>a:hover,\n.top-nav>.open>a:focus {\n    color: #fff;\n    background-color: #000;\n}\n\n.top-nav>.open>.dropdown-menu {\n    float: left;\n    position: absolute;\n    margin-top: 0;\n    border: 1px solid rgba(0,0,0,.15);\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background-color: #fff;\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\n}\n\n.top-nav>.open>.dropdown-menu>li>a {\n    white-space: normal;\n}\n\nul.message-dropdown {\n    padding: 0;\n    max-height: 250px;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n\nli.message-preview {\n    width: 275px;\n    border-bottom: 1px solid rgba(0,0,0,.15);\n}\n\nli.message-preview>a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\nli.message-footer {\n    margin: 5px 0;\n}\n\nul.alert-dropdown {\n    width: 200px;\n}\n\n/* Side Navigation */\n\n@media(min-width:768px) {\n    .side-nav {\n        position: fixed;\n        top: 51px;\n        left: 225px;\n        width: 225px;\n        margin-left: -225px;\n        border: none;\n        border-radius: 0;\n        overflow-y: auto;\n        background-color: #222;\n        bottom: 0;\n        overflow-x: hidden;\n        padding-bottom: 40px;\n    }\n\n    .side-nav>li>a {\n        width: 225px;\n    }\n\n    .side-nav li a:hover,\n    .side-nav li a:focus {\n        outline: none;\n        background-color: #000 !important;\n    }\n}\n\n.side-nav>li>ul {\n    padding: 0;\n}\n\n.side-nav>li>ul>li>a {\n    display: block;\n    padding: 10px 15px 10px 38px;\n    text-decoration: none;\n    color: #999;\n}\n\n.side-nav>li>ul>li>a:hover {\n    color: #fff;\n}\n\n/* Flot Chart Containers */\n\n.flot-chart {\n    display: block;\n    height: 400px;\n}\n\n.flot-chart-content {\n    width: 100%;\n    height: 100%;\n}\n\n/* Custom Colored Panels */\n\n.huge {\n    font-size: 40px;\n}\n\n.panel-green {\n    border-color: #5cb85c;\n}\n\n.panel-green > .panel-heading {\n    border-color: #5cb85c;\n    color: #fff;\n    background-color: #5cb85c;\n}\n\n.panel-green > a {\n    color: #5cb85c;\n}\n\n.panel-green > a:hover {\n    color: #3d8b3d;\n}\n\n.panel-red {\n    border-color: #d9534f;\n}\n\n.panel-red > .panel-heading {\n    border-color: #d9534f;\n    color: #fff;\n    background-color: #d9534f;\n}\n\n.panel-red > a {\n    color: #d9534f;\n}\n\n.panel-red > a:hover {\n    color: #b52b27;\n}\n\n.panel-yellow {\n    border-color: #f0ad4e;\n}\n\n.panel-yellow > .panel-heading {\n    border-color: #f0ad4e;\n    color: #fff;\n    background-color: #f0ad4e;\n}\n\n.panel-yellow > a {\n    color: #f0ad4e;\n}\n\n.panel-yellow > a:hover {\n    color: #df8a13;\n}\n.notify {\n    width: 20px;\n    height: 20px;\n    background-color: #2882f7;\n    text-align: center;\n    font-size: 13px;\n    border-radius: 50%;\n    position: relative;\n}\n\n\n.notify-count{\n    position: absolute;\n    top: -9px;\n    right: -8px;\n    background: #DE2413;\n    height: 15px;\n    width: 15px;\n    border-radius: 50%;\n    font-size: 10px;\n    color: #ffffff;\n    text-align: center;\n    line-height: 14px;\n}\n.fa-bell{position:relative;}\n.media-object{width:100%;}\n\n\n\n.list-notificacao{\n    min-width: 400px;\n    background: #ffffff;\n    left:inherit;\n    right:0;\n  }\n  \n  .list-notificacao li{\n     border-bottom : 1px #d8d8d8 solid;\n     text-align    : justify;\n     padding       : 5px 10px 5px 10px;\n     cursor: pointer;\n     font-size: 12px;\n  }\n  \n  .list-notificacao li:hover{\n  background: #f1eeee;\n  }\n  \n  .list-notificacao li:hover .exclusaoNotificacao{\n  display: block;\n  }\n  \n  .list-notificacao li  p{\n   color: black;\n   width: 305px;\n  }\n  \n  .list-notificacao li .exclusaoNotificacao{\n      width: 25px;\n      min-height: 40px;\n      position: absolute;\n      right: 0;\n      display: none;\n  }\n  \n  .list-notificacao .media img{\n      width: 40px;\n      height: 40px;\n      float:left;\n      margin-right: 10px;\n  }\n  \n  .badgeAlert {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 5px;\n    font-size: 12px;\n    font-weight: 700;\n    color: #fff;\n    line-height: 1;\n    vertical-align: baseline;\n    white-space: nowrap;\n    text-align: center;\n    background-color: #d9534f;\n    border-radius: 50%;\n    position: absolute;\n    margin-top: -32px;\n    margin-left: 5px;\n  }\n  .notification{background-color:#fff !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    \n   \n    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        <div class=\"navbar-header\">\n            \n         <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n             <span class=\"sr-only\">Toggle navigation</span>\n             <span class=\"icon-bar\"></span>\n             <span class=\"icon-bar\"></span>\n             <span class=\"icon-bar\"></span>\n         </button>\n        \n        </div>\n        <ul class=\"nav navbar-nav pull-right profilz\">\n                <li class=\"dropdown notification\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                          <span class=\"glyphicon glyphicon-bell alertNotificacao\"></span>\n                          <span class='badgeAlert'>2</span>\n                          <span class=\"\"></span></a>\n                        <ul class=\"list-notificacao dropdown-menu\">\n                          <li id='item_notification_1'>\n                              <div class=\"media\">\n                                 <div class=\"media-left\"> \n                                    <a href=\"#\"> \n                                    <img alt=\"64x64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWZhMWJmZmI3MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZmExYmZmYjcwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=\" data-holder-rendered=\"true\"> </a> \n                                 </div>\n                                 <div class=\"media-body\">\n                                    <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs button_exclusao' id='1' onclick='excluirItemNotificacao(this)'>x</button>\n                                    </div>\n                                    <h4 class=\"media-heading\">ITEM 1</h4>\n                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                                 </div>\n                              </div>\n                           </li>    \n                           <li id='item_notification_2'>\n                              <div class=\"media\">\n                                 <div class=\"media-left\"> \n                                    <a href=\"#\"> \n                                    <img alt=\"64x64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWZhMWJmZmI3MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZmExYmZmYjcwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=\" data-holder-rendered=\"true\"> </a> \n                                 </div>\n                                 <div class=\"media-body\">\n                                    <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs' id='2' onclick='excluirItemNotificacao(this)'>x</button>\n                                    </div>\n                                    <h4 class=\"media-heading\">ITEM 2</h4>\n                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                                 </div>\n                              </div>\n                           </li>\n                        </ul>\n                     </li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Iasmani Pinazo <span class=\"glyphicon glyphicon-user pull-right\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Profile <span class=\"glyphicon glyphicon-cog pull-right\"></span></a></li>\n                \n                <li class=\"divider\"></li>\n                <li>\n                    <a  (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out pull-right\"></span> LogOut </a>\n                    \n                </li>\n              </ul>\n            </li>\n\n            \n          </ul>\n       \n          \n    </div>\n    <!-- /.navbar-collapse -->\n</nav>\n\n<!-- Top Menu Items -->\n<ul class=\"nav navbar-right top-nav\">\n    <li class=\"dropdown\" *ngFor= \"let item of info\">\n            \n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell\"><div class=\"notify-count\">2</div></i> <b class=\"caret\"></b></a>\n        <ul class=\"dropdown-menu message-dropdown\">\n            <li class=\"message-preview\"  >\n                <a >\n                    <div class=\"media\">\n                        <div class=\"row\">\n                        <div class=\"col-md-4\">\n                        <span class=\"pull-left\">\n                            <img class=\"media-object\"\n                            \n                             alt=\"\">\n                        </span>\n                       </div>\n                       <div class=\"col-md-8\">\n                        <div class=\"media-body\">\n                            <h5 class=\"media-heading\">\n                                <strong>Name</strong>\n                            </h5>\n                            \n                            <p>Item confirmed by bidder</p>\n                        </div>\n                        </div>\n                        </div>\n                    </div>\n                </a>\n            </li>\n            <!-- <li class=\"message-footer\">\n                <a href=\"#\">Read All New Messages</a>\n            </li> -->\n        </ul>\n    </li>\n    \n    \n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TopBarComponent = /** @class */ (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent = __decorate([
        core_1.Component({
            selector: 'top-bar',
            template: __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopBarComponent);
    return TopBarComponent;
}());
exports.TopBarComponent = TopBarComponent;


/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
        this.siteUrl = "http://192.168.1.17:3000";
    }
    return Config;
}());
exports.Config = Config;


/***/ }),

/***/ "../../../../../src/app/services/admin.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var AdminService = /** @class */ (function () {
    function AdminService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/admin/';
        this.loginUrl = config.siteUrl + "/admin/login";
    }
    AdminService.prototype.setHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin Login
    // Params        : admin, contains username and password
    // Returns       : Token, admin id and role
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : Admin login
    AdminService.prototype.adminLogin = function (admin) {
        var h = this.setHeader();
        return this.http.post(this.loginUrl, admin, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Store User Data
    // Params        : Token, admin id and role
    // Returns       : 
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : To locally store admin data
    AdminService.prototype.storeUserData = function (token, admin) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('admin', JSON.stringify(admin));
        this.authToken = token;
        this.admin = admin;
    };
    AdminService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.Config])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;


/***/ }),

/***/ "../../../../../src/app/services/company.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var CompanyService = /** @class */ (function () {
    function CompanyService(_http, config) {
        this._http = _http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/company/';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : set Header
    // Params        : 
    // Returns       : header
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Manu Prasad, Desc:
    // Desc          : to set header to call an api
    CompanyService.prototype.setHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get themes
    // Params        : 
    // Returns       : list of themes with details
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Manu Prasad, Desc:
    // Desc          : routing used to get all the themes from database
    CompanyService.prototype.getThemes = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-themes', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get fonts
    // Params        : 
    // Returns       : list of fonts with details
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Manu Prasad, Desc:
    // Desc          : routing used to get all the fonts from database
    CompanyService.prototype.getFonts = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-fonts', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get fontsize
    // Params        : 
    // Returns       : list of fonts with details
    // Author        : Manu Prasad
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Manu Prasad, Desc:
    // Desc          : routing used to get all the fontsize from database
    CompanyService.prototype.getFontSize = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-font-sizes', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get all user groups
    // Params        : 
    // Returns       : list of user groups with details
    // Author        : Yasir Poongadan
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Yasir Poongadan
    // Desc          : all user groups of specific company
    CompanyService.prototype.getAllUserGroup = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-all-groups', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : addUserGroup
    // Params        : Group name
    // Returns       : status and message
    // Author        : Yasir Poongadan
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Yasir Poongadan
    // Desc          : Add User Group
    CompanyService.prototype.addUserGroup = function (group) {
        var headers = this.setHeader();
        return this._http.post(this.serviceUrl + 'add-user-group', JSON.stringify({ group: group }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : addUsers
    // Params        : users and group arrays
    // Returns       : status and message
    // Author        : Yasir Poongadan
    // Date          : 01-01-2018
    // Last Modified : 01-01-2018, Yasir Poongadan
    // Desc          : Add Users
    CompanyService.prototype.addUsers = function (data) {
        var headers = this.setHeader();
        return this._http.post(this.serviceUrl + 'add-users', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getMyCompany
    // Params        : 
    // Returns       : logged in company details
    // Author        : Yasir Poongadan
    // Date          : 02-01-2018
    // Last Modified : 02-01-2018, Yasir Poongadan
    // Desc          : to get logged in company details 
    CompanyService.prototype.getMyCompany = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-my-company', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : addUsers
    // Params        : users and group arrays
    // Returns       : status and message
    // Author        : Yasir Poongadan
    // Date          : 01-01-2018
    // Last Modified : 01-01-2018, Yasir Poongadan
    // Desc          : Add Users
    CompanyService.prototype.updateUser = function (data) {
        var headers = this.setHeader();
        return this._http.put(this.serviceUrl + 'update-users', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllSurveyType
    // Params        : 
    // Returns       : list of Survey type
    // Author        : Yasir Poongadan
    // Date          : 04-01-2017
    // Last Modified : 04-01-2017, Yasir Poongadan
    // Desc          : all user Survey type
    CompanyService.prototype.getAllSurveyCategory = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-all-survey-type', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAllThemes
    // Params        : 
    // Returns       : list of Survey Themes
    // Author        : Yasir Poongadan
    // Date          : 04-01-2017
    // Last Modified : 04-01-2017, Yasir Poongadan
    // Desc          : all user Survey Themes
    CompanyService.prototype.getAllThemes = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-all-themes', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAnswerType
    // Params        : 
    // Returns       : list of all answer type
    // Author        : Yasir Poongadan
    // Date          : 08-01-2017
    // Last Modified : 08-01-2017, Yasir Poongadan
    // Desc          : all answer type
    CompanyService.prototype.getAnswerType = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-all-answer-type', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getAnswerType
    // Params        : 
    // Returns       : list of all answer type
    // Author        : Yasir Poongadan
    // Date          : 08-01-2017
    // Last Modified : 08-01-2017, Yasir Poongadan
    // Desc          : all answer type
    CompanyService.prototype.createSurvey = function (data) {
        var headers = this.setHeader();
        return this._http.post(this.serviceUrl + 'create-survey', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getMyUsers
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 04-01-2018
    // Last Modified : 04-01-2018, Jooshifa
    // Desc          : to get users of a company which is not blocked and deleted 
    CompanyService.prototype.getMyUsers = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-my-users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getSingleUserGroup
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 10-01-2018
    // Last Modified : 10-01-2018, Jooshifa 
    // Desc          : to get single users groups for pass to edit modal
    CompanyService.prototype.getUsersInAGroups = function (data) {
        var h = this.setHeader();
        return this._http.get(this.serviceUrl + "getUsersInAGroups/" + data, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : inviteUsers
    // Params        : users and survey details
    // Returns       : 
    // Author        : Yasir Poongadan
    // Date          : 15-01-2018
    // Last Modified : 15-01-2018, Yasir Poongadan 
    // Desc          : For inviting users for a survey
    CompanyService.prototype.inviteUsers = function (data) {
        var h = this.setHeader();
        return this._http.post(this.serviceUrl + 'invite-users', data, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getAllSurvey
    // Params        : 
    // Returns       : all survey list
    // Author        : Yasir Poongadan
    // Date          : 15-01-2018
    // Last Modified : 15-01-2018, Yasir Poongadan 
    // Desc          : To get all all survey list
    CompanyService.prototype.getAllSurvey = function () {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-company-survey', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteSurvey
    // Params        : id
    // Returns       : boolean success or failed
    // Author        : Yasir Poongadan
    // Date          : 16-01-2018
    // Last Modified : 16-01-2018, Yasir Poongadan 
    // Desc          : for delete a upcoming survey
    CompanyService.prototype.deleteSurvey = function (id) {
        var headers = this.setHeader();
        return this._http.delete(this.serviceUrl + 'delete-survey/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getSurvey
    // Params        : id
    // Returns       : single survey details
    // Author        : Yasir Poongadan
    // Date          : 16-01-2018
    // Last Modified : 16-01-2018, Yasir Poongadan 
    // Desc          : to get a specific servey details
    CompanyService.prototype.getSurvey = function (id) {
        var headers = this.setHeader();
        return this._http.get(this.serviceUrl + 'get-survey/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateSurvey
    // Params        : survey details to update
    // Returns       : boolean success or not with message
    // Author        : Yasir Poongadan
    // Date          : 16-01-2018
    // Last Modified : 16-01-2018, Yasir Poongadan 
    // Desc          : to update a survey
    CompanyService.prototype.updateSurvey = function (data) {
        var headers = this.setHeader();
        return this._http.post(this.serviceUrl + 'update-survey', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.Config])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map