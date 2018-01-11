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
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var xlsx_to_json_service_1 = __webpack_require__("../../../../../src/app/services/xlsx-to-json.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var top_bar_component_1 = __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.ts");
var side_bar_component_1 = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
var reference_component_component_1 = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
var admin_login_component_1 = __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.ts");
var company_login_component_1 = __webpack_require__("../../../../../src/app/components/company-login/company-login.component.ts");
var company_registration_component_1 = __webpack_require__("../../../../../src/app/components/company-registration/company-registration.component.ts");
var company_additn_info_component_1 = __webpack_require__("../../../../../src/app/components/company-additn-info/company-additn-info.component.ts");
var company_expired_page_component_1 = __webpack_require__("../../../../../src/app/components/company-expired-page/company-expired-page.component.ts");
var company_email_verification_component_1 = __webpack_require__("../../../../../src/app/components/company-email-verification/company-email-verification.component.ts");
var company_profile_component_1 = __webpack_require__("../../../../../src/app/components/company-profile/company-profile.component.ts");
var company_sidebar_component_1 = __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.ts");
var company_topbar_component_1 = __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.ts");
var company_users_component_1 = __webpack_require__("../../../../../src/app/components/company-users/company-users.component.ts");
var user_response_email_component_1 = __webpack_require__("../../../../../src/app/components/user-response-email/user-response-email.component.ts");
var user_login_component_1 = __webpack_require__("../../../../../src/app/components/user-login/user-login.component.ts");
var user_registration_component_1 = __webpack_require__("../../../../../src/app/components/user-registration/user-registration.component.ts");
var newpie_component_1 = __webpack_require__("../../../../../src/app/components/newpie/newpie.component.ts");
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
    { path: 'clogin', component: company_login_component_1.CompanyLoginComponent },
    { path: 'creg', component: company_registration_component_1.CompanyRegistrationComponent },
    { path: 'additnInfo/:id', component: company_additn_info_component_1.CompanyAdditnInfoComponent },
    { path: 'email-verification/:id', component: company_email_verification_component_1.CompanyEmailVerificationComponent },
    { path: 'expired', component: company_expired_page_component_1.CompanyExpiredPageComponent },
    { path: 'profile', component: company_profile_component_1.CompanyProfileComponent },
    { path: 'company-users', component: company_users_component_1.CompanyUsersComponent },
    { path: 'user-response-email/:id1/:id2', component: user_response_email_component_1.UserResponseEmailComponent },
    { path: 'user-login/:id1/:id2', component: user_login_component_1.UserLoginComponent },
    { path: 'user-register/:id1/:id2', component: user_registration_component_1.UserRegistrationComponent },
    { path: 'pie', component: newpie_component_1.NewpieComponent },
    { path: 'pie/:id', component: newpie_component_1.NewpieComponent },
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
                company_login_component_1.CompanyLoginComponent,
                company_registration_component_1.CompanyRegistrationComponent,
                company_additn_info_component_1.CompanyAdditnInfoComponent,
                company_expired_page_component_1.CompanyExpiredPageComponent,
                company_email_verification_component_1.CompanyEmailVerificationComponent,
                company_profile_component_1.CompanyProfileComponent,
                company_sidebar_component_1.CompanySidebarComponent,
                company_topbar_component_1.CompanyTopbarComponent,
                company_users_component_1.CompanyUsersComponent,
                user_response_email_component_1.UserResponseEmailComponent,
                user_login_component_1.UserLoginComponent,
                user_registration_component_1.UserRegistrationComponent,
                newpie_component_1.NewpieComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(appRoutes),
                DemoMaterialModule,
                animations_1.BrowserAnimationsModule,
                animations_2.NoopAnimationsModule,
                angular2_flash_messages_1.FlashMessagesModule.forRoot(),
            ],
            providers: [config_1.Config, admin_service_1.AdminService, company_service_1.CompanyService, xlsx_to_json_service_1.XlsxToJsonService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// platformBrowserDynamic().bootstrapModule(AppModule);


/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\r\n    width: 360px;\r\n    padding: 13% 0 0;\r\n    margin: auto;\r\n  }\r\n  .form {\r\n    position: relative;\r\n    z-index: 1;\r\n    background: #FFFFFF;\r\n    max-width: 360px;\r\n    margin: 0 auto 100px;\r\n    padding: 45px;\r\n    text-align: center;\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n        border-radius: 26px;\r\n  }\r\n  .form input {\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0 0 0px;\r\n    padding: 15px;\r\n    box-sizing: border-box;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  /* .form button:hover,.form button:active,.form button:focus {\r\n  \r\n  } */\r\n  .form .message {\r\n    margin: 15px 0 0;\r\n    color: #b3b3b3;\r\n    font-size: 12px;\r\n  }\r\n  .form .message a {\r\n    color: #4CAF50;\r\n    text-decoration: none;\r\n  }\r\n  .form .register-form {\r\n    display: none;\r\n  }\r\n  .login-body .container {\r\n    position: relative;\r\n    z-index: 1;\r\n    max-width: 300px;\r\n    margin: 0 auto;\r\n  }\r\n  .login-body .container:before, .container:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n  }\r\n  .login-body .container .info {\r\n    margin: 50px auto;\r\n    text-align: center;\r\n  }\r\n  .login-body .container .info h1 {\r\n    margin: 0 0 15px;\r\n    padding: 0;\r\n    font-size: 36px;\r\n    font-weight: 300;\r\n    color: #1a1a1a;\r\n  }\r\n  .container .info span {\r\n    color: #4d4d4d;\r\n    font-size: 12px;\r\n  }\r\n  .container .info span a {\r\n    color: #000000;\r\n    text-decoration: none;\r\n  }\r\n  .container .info span .fa {\r\n    color: #EF3B3A;\r\n  }\r\n \r\n  /* body {\r\n   \r\n    \r\n  } */\r\n  .input-group{margin-bottom:15px;}\r\n  .login-body .styles1 {\r\n      border: 0;\r\n      border-bottom: 1px solid #dbdbdb;\r\n      font-family: \"Roboto-Regular\";\r\n      background: none;\r\n      padding: 10px 0px;\r\n      font-size: 13px;\r\n      max-width: 400px;\r\n      width: 100%;\r\n         color: #5d5d5d !important;\r\n      float: left;\r\n  }\r\n  .login-body h2{font-family: \"Roboto-Bold\";text-align:center;color:#111;font-size:30px;    padding: 0;\r\n      line-height: 30px;}\r\n  \r\n  .login-body .input-group-addon{border-radius:0 !important;}\r\n  .login-body{background-color:#242833 !important;    height: 100vh;}\r\n  .login-body .input-group-addon{background-color:inherit !important;border:none !important;border-bottom: 1px solid #ccc !important;border-radius:0;padding-left:0 !important;}\r\n  .btn{    border-radius: 16px !important;    padding: 6px 22px !important;}\r\n  .omb_btn-facebook {background: #3b5998;width:100%;float:left;}\r\n  \r\n  .omb_btn-google {background: #c32f10;width:100%;float:left;}\r\n  .omb_socialButtons>a{color:#fff !important;}\r\n  .omb_socialButtons .col-sm-12{margin-bottom:10px;}\r\n  .hidden-xs{font-size:14px;}\r\n  .omb_socialButtons {\r\n      margin-top: 30px;\r\n      margin-bottom: 16px;\r\n  }\r\n  .login-body .fa{color:#d9534f;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-login/admin-login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"login-body\">\r\n   <div class=\"login-page\">\r\n    <div class=\"form\">\r\n    <h2>Login</h2>\r\n    \r\n    <form class=\"login-form\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\r\n\r\n      <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n\t\t\t  <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n        <input type=\"text\" placeholder=\"Username\" class=\"styles1 form-control\" required [(ngModel)]=\"newLogin.username\" name=\"username\" #username=\"ngModel\" />\r\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n      </div>\r\n      \r\n\t    <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n\t\t\t <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\r\n       <input type=\"password\" placeholder=\"Password\" class=\"styles1 form-control\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\"/>\r\n       <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n      </div>\r\n      \r\n     <br/>\r\n      <button type=\"submit\" class=\"btn btn-danger\">Sign In</button>\r\n      <div class=\"form-group\">\r\n        <div *ngIf=\"showError\" class=\"help-block\">User Not Found...!</div>\r\n      </div> \r\n\t  <br/>\r\n    </form>\r\n   </div>\r\n  </div>\r\n</body>\r\n\r\n    \r\n    \r\n      \r\n\r\n    \r\n\r\n\r\n"

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

/***/ "../../../../../src/app/components/company-additn-info/company-additn-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padd-top{padding-top:4em;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-additn-info/company-additn-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padd-top\"></div>\n<div class=\"container\">\n\n<flash-messages></flash-messages>\n<mat-horizontal-stepper [linear]=\"isLinear\">\n\n  <mat-step [stepControl]=\"firstFormGroup\">\n      <div class=\"col-md-6 col-md-offset-3\">\n    <form (ngSubmit)=\"appendForm1()\" >\n      <ng-template matStepLabel>Step 1</ng-template>\n      <h5>Email : {{contact_person_email}}</h5>\n      <h5>Contact Name : {{contact_person_fname}} {{contact_person_lname}}</h5>\n      <h4>Tell us about your job to get a sense of how many responses to expect</h4>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.organization\" name=\"organization\" placeholder=\"Your Organization\" required formControlName=\"orgValidation\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n          <mat-select placeholder=\"Organization Type\" [(ngModel)]=\"newReg.organization_type\" name=\"organization_type\" required formControlName=\"organization_typeValidation\">\n              <mat-option *ngFor=\"let type of orgType\" [value]=\"type\" > \n                {{ type.name }}\n              </mat-option>\n            </mat-select>\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n\t  \n          <mat-select placeholder=\"Industry\" [(ngModel)]=\"newReg.industry\" name=\"industry\" required formControlName=\"industryValidation\">\n              <mat-option *ngFor=\"let item of industry\" [value]=\"item\">\n                {{ item.name }}\n              </mat-option>\n            </mat-select>\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.location\" name=\"location\" placeholder=\"Location\" required formControlName=\"locationValidation\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n          <input type=\"number\" matInput [(ngModel)]=\"newReg.company_strength\" name=\"company_strength\" placeholder=\"Company Strength\"  required formControlName=\"strengthValidation\">\n        </mat-form-field>\n        <br/>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n      </div>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n      <div class=\"col-md-6 col-md-offset-3\">\n    <form (ngSubmit)=\"appendForm2()\" >\n      <ng-template matStepLabel>Step 2</ng-template>\n      <h4>Tell us about yourself</h4>\n       <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.contact_no\" name=\"contact_no\" placeholder=\"Phone Number\" maxlength=\"10\" minlength=\"10\" required formControlName=\"number\">\n        <mat-error>Not a valid phone number</mat-error>\n      </mat-form-field> \n      <br/> \n     <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.job_role\" name=\"job_role\" placeholder=\"Job Role\" required formControlName=\"jobRoleValidation\">\n      </mat-form-field>\n      <br/>\n   <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.job_level\" name=\"job_level\" placeholder=\"Job Level\" required formControlName=\"jobLevelValidation\">\n      </mat-form-field>\n      <br/>\n\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n    </div>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdFormGroup\">\n      <div class=\"col-md-6 col-md-offset-3\">\n    <form (ngSubmit)=\"register()\">\n    <ng-template matStepLabel>Step 3</ng-template>\n    <h4>Tell us who you are looking to get answers from</h4>\n    <section class=\"example-section\" *ngFor=\"let data of surveyattenders; let i = index;\">\n        <mat-checkbox class=\"example-margin\" name=\"data_{{i}}\" [(ngModel)]=\"surveyattenders[i].check\" >{{data.name}}</mat-checkbox>\n      \n    </section>\n   \n    <div>\n      <button type=\"submit\" mat-button >Finish</button>\n    </div>\n    </form>\n      </div>\n  </mat-step>\n</mat-horizontal-stepper>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/company-additn-info/company-additn-info.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var CompanyAdditnInfoComponent = /** @class */ (function () {
    function CompanyAdditnInfoComponent(_formBuilder, companyService, routes, _flashMessagesService, route) {
        this._formBuilder = _formBuilder;
        this.companyService = companyService;
        this.routes = routes;
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
        this.isLinear = true;
        this.timestamp = new Date().getTime().toString();
        this.newReg = {
            organization: '',
            location: '',
            contact_no: '',
            job_role: '',
            job_level: '',
            company_strength: '',
            organization_type: { _id: '', name: '' },
            industry: { _id: '', name: '' },
            survey_attenders: [],
            is_profile_completed: true,
        };
        this.data = [];
    }
    CompanyAdditnInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : Get Company Details
        // Params        : id from url
        // Returns       : Company Details
        // Author        : Rinsha
        // Date          : 02-1-2018
        // Last Modified : 02-1-2018, Rinsha
        // Desc          : 
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyService.getCompanyDetailsById(params.id).subscribe(function (data) {
                _this.id = params.id;
                if (data.is_profile_completed == true) {
                    _this.companyService.generateToken(params.id).subscribe(function (data1) {
                        if (data1.success) {
                            _this.companyService.storeUserData(data1.token, data1.company);
                            if (data.cmp_status == "Expired") {
                                _this.routes.navigate(['/expired']);
                            }
                            else {
                                // this.routes.navigate(['/creg']);
                            }
                        }
                    });
                }
                else {
                    if (data.cmp_status == "Expired") {
                        _this.routes.navigate(['/expired']);
                    }
                    else {
                        _this.contact_person_email = data.contact_person_email;
                        _this.contact_person_fname = data.contact_person_fname;
                        _this.contact_person_lname = data.contact_person_lname;
                    }
                }
            });
        });
        // -----------------------------------End------------------------------------------
        this.isLinear = true;
        this.firstFormGroup = this._formBuilder.group({
            orgValidation: ['', forms_1.Validators.required],
            organization_typeValidation: ['', forms_1.Validators.required],
            industryValidation: ['', forms_1.Validators.required],
            locationValidation: ['', forms_1.Validators.required],
            strengthValidation: ['', forms_1.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            jobRoleValidation: ['', forms_1.Validators.required],
            jobLevelValidation: ['', forms_1.Validators.required],
            number: new forms_1.FormControl('', forms_1.Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)),
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get All organization type, industry and survey attenders
        // Params        : 
        // Returns       : All organization type, industry and survey attenders
        // Author        : Rinsha
        // Date          : 02-1-2018
        // Last Modified : 02-1-2018, Rinsha
        // Desc          : 
        this.companyService.getAllOrgType().subscribe(function (res) {
            _this.orgType = res;
            _this.newReg.organization_type = _this.orgType[0].value;
        });
        this.companyService.getAllIndustry().subscribe(function (res) {
            _this.industry = res;
            _this.newReg.industry = _this.industry[0].value;
        });
        this.companyService.getAllSurveyAttenders().subscribe(function (res) {
            _this.surveyattenders = res;
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyAdditnInfoComponent.prototype.appendForm1 = function () {
        this.firstForm = this.newReg;
    };
    CompanyAdditnInfoComponent.prototype.appendForm2 = function () {
        this.secondForm = this.newReg;
    };
    CompanyAdditnInfoComponent.prototype.register = function () {
        var _this = this;
        this.thirdForm = '';
        this.newReg.survey_attenders = [];
        this.surveyattenders.forEach(function (element) {
            if (element.check == true) {
                var json = element;
                var key = "check";
                delete json[key];
                _this.newReg.survey_attenders.push(element);
            }
        });
        this.thirdForm = this.newReg.survey_attenders;
        this.result = Object.assign(this.firstForm, this.secondForm);
        // ---------------------------------Start-------------------------------------------
        // Function      : Register additional information 
        // Params        : Company id and data from the form
        // Returns       : 
        // Author        : Rinsha
        // Date          : 03-01-2018
        // Last Modified : 03-01-2018, Rinsha
        // Desc          : Save additional information for company who sign in with google or facebook
        this.companyService.registerAdditnInfo(this.id, this.result).subscribe(function (info) {
            if (info.success == true) {
                _this._flashMessagesService.show('Redirecting..', { cssClass: 'alert-success', timeout: 4000 });
                _this.companyService.generateToken(_this.id).subscribe(function (data2) {
                    if (data2.success) {
                        _this.companyService.storeUserData(data2.token, data2.company);
                    }
                });
                setTimeout(function () {
                    // this.routes.navigate(['/login']);
                }, 4000);
            }
            else {
                _this._flashMessagesService.show('Error', { cssClass: 'alert-danger', timeout: 4000 });
                setTimeout(function () {
                    // this.routes.navigate(['/404']);
                }, 4000);
            }
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyAdditnInfoComponent = __decorate([
        core_1.Component({
            selector: 'company-additn-info',
            template: __webpack_require__("../../../../../src/app/components/company-additn-info/company-additn-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-additn-info/company-additn-info.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, company_service_1.CompanyService, router_1.Router, angular2_flash_messages_1.FlashMessagesService, router_1.ActivatedRoute])
    ], CompanyAdditnInfoComponent);
    return CompanyAdditnInfoComponent;
}());
exports.CompanyAdditnInfoComponent = CompanyAdditnInfoComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-email-verification/company-email-verification.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-email-verification/company-email-verification.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  company-email-verification works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/company-email-verification/company-email-verification.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var CompanyEmailVerificationComponent = /** @class */ (function () {
    function CompanyEmailVerificationComponent(companyService, routes, _flashMessagesService, route) {
        this.companyService = companyService;
        this.routes = routes;
        this._flashMessagesService = _flashMessagesService;
        this.route = route;
    }
    CompanyEmailVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : Company verification
        // Params        : verification id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 29-12-2017
        // Last Modified : 29-12-2017, Rinsha
        // Desc          : 
        this.sub = this.route.params.subscribe(function (params) {
            _this.companyService.verifyCompany(params.id).subscribe(function (data) {
                if (data.success) {
                    _this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
                    setTimeout(function () {
                        _this.routes.navigate(['/clogin']);
                    }, 4000);
                }
                else {
                    _this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
                    setTimeout(function () {
                        _this.routes.navigate(['/clogin']);
                    }, 4000);
                }
            });
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyEmailVerificationComponent = __decorate([
        core_1.Component({
            selector: 'company-email-verification',
            template: __webpack_require__("../../../../../src/app/components/company-email-verification/company-email-verification.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-email-verification/company-email-verification.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.Router, angular2_flash_messages_1.FlashMessagesService, router_1.ActivatedRoute])
    ], CompanyEmailVerificationComponent);
    return CompanyEmailVerificationComponent;
}());
exports.CompanyEmailVerificationComponent = CompanyEmailVerificationComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-expired-page/company-expired-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-expired-page/company-expired-page.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<br>\n<div class=\"container\">\n  <div class=\"panel panel-default panel-danger\">\n    <div class=\"panel-heading \">Your Free Trial Version has Expired!</div>\n    <div class=\"panel-body\">\n      Expired Licence Term : <b>30 days</b><br>\n      To resume the facilities, subscribe from here.\n    </div>\n    <div class=\"panel-footer clearfix\">\n      <div class=\"pull-right\">\n          <button type=\"button\" (click)=\"subscribe()\" class=\"btn btn-danger\">Subscribe</button>\n          <button type=\"button\" (click)=\"logout()\"  class=\"btn btn-default\">Sign Out</button>\n      </div>\n  </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/company-expired-page/company-expired-page.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var CompanyExpiredPageComponent = /** @class */ (function () {
    function CompanyExpiredPageComponent(companyService, routes, _flashMessagesService) {
        this.companyService = companyService;
        this.routes = routes;
        this._flashMessagesService = _flashMessagesService;
    }
    CompanyExpiredPageComponent.prototype.ngOnInit = function () {
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Subscribe
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 03-1-2018
    // Last Modified : 03-1-2018, Rinsha
    // Desc          : If the trial period of company expired, they can subscribe the app by clicking subscribe button
    CompanyExpiredPageComponent.prototype.subscribe = function () {
        var _this = this;
        this.companyService.subscribeCompany().subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
                setTimeout(function () {
                    // this.routes.navigate(['/clogin']);
                }, 4000);
            }
            else {
                _this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
                setTimeout(function () {
                    // this.routes.navigate(['/expired']);
                }, 4000);
            }
        });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Logout
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 03-1-2018
    // Last Modified : 03-1-2018, Rinsha
    // Desc          : 
    CompanyExpiredPageComponent.prototype.logout = function () {
        this.companyService.logout();
        this.routes.navigate(['/clogin']);
        return false;
    };
    CompanyExpiredPageComponent = __decorate([
        core_1.Component({
            selector: 'company-expired-page',
            template: __webpack_require__("../../../../../src/app/components/company-expired-page/company-expired-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-expired-page/company-expired-page.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.Router, angular2_flash_messages_1.FlashMessagesService])
    ], CompanyExpiredPageComponent);
    return CompanyExpiredPageComponent;
}());
exports.CompanyExpiredPageComponent = CompanyExpiredPageComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-login/company-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\r\n    width: 360px;\r\n    padding: 8% 0 0;\r\n    margin: auto;\r\n  }\r\n  .form {\r\n    position: relative;\r\n    z-index: 1;\r\n    background: #FFFFFF;\r\n    max-width: 360px;\r\n    margin: 0 auto 100px;\r\n    padding: 45px;\r\n    text-align: center;\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n        border-radius: 26px;\r\n  }\r\n  .form input {\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0 0 0px;\r\n    padding: 15px;\r\n    box-sizing: border-box;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  /* .form button:hover,.form button:active,.form button:focus {\r\n  \r\n  } */\r\n  .form .message {\r\n    margin: 15px 0 0;\r\n    color: #b3b3b3;\r\n    font-size: 12px;\r\n  }\r\n  .form .message a {\r\n    color: #4CAF50;\r\n    text-decoration: none;\r\n  }\r\n  /* .form .register-form {\r\n    display: none;\r\n  } */\r\n  .login-body .container {\r\n    position: relative;\r\n    z-index: 1;\r\n    max-width: 300px;\r\n    margin: 0 auto;\r\n  }\r\n  .login-body .container:before, .container:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n  }\r\n  .login-body .container .info {\r\n    margin: 50px auto;\r\n    text-align: center;\r\n  }\r\n  .login-body .container .info h1 {\r\n    margin: 0 0 15px;\r\n    padding: 0;\r\n    font-size: 36px;\r\n    font-weight: 300;\r\n    color: #1a1a1a;\r\n  }\r\n  .container .info span {\r\n    color: #4d4d4d;\r\n    font-size: 12px;\r\n  }\r\n  .container .info span a {\r\n    color: #000000;\r\n    text-decoration: none;\r\n  }\r\n  .container .info span .fa {\r\n    color: #EF3B3A;\r\n  }\r\n  /* @font-face {\r\n    font-family: \"Roboto-Bold\";\r\n    src: url(\"fonts/Roboto-Bold.ttf\") format(\"truetype\");\r\n  }\r\n  @font-face {\r\n    font-family: \"Roboto-Regular\";\r\n    src: url(\"fonts/Roboto-Regular.ttf\") format(\"truetype\");\r\n  } */\r\n  /* body {\r\n   \r\n    \r\n  } */\r\n  .input-group{margin-bottom:15px;}\r\n  .login-body .styles1 {\r\n      border: 0;\r\n      border-bottom: 1px solid #dbdbdb;\r\n      /* font-family: \"Roboto-Regular\"; */\r\n      background: none;\r\n      padding: 10px 0px;\r\n      font-size: 13px;\r\n      max-width: 400px;\r\n      width: 100%;\r\n         color: #5d5d5d !important;\r\n      float: left;\r\n  }\r\n  .login-body h2{text-align:center;color:#111;font-size:30px;    padding: 0;\r\n      line-height: 30px;}\r\n  \r\n  .login-body .input-group-addon{border-radius:0 !important;}\r\n  .login-body{background-color:#242833;}\r\n  .login-body .input-group-addon{background-color:inherit !important;border:none !important;border-bottom: 1px solid #ccc !important;border-radius:0;padding-left:0 !important;}\r\n  .btn{    border-radius: 16px !important;    padding: 6px 22px !important;}\r\n  .omb_btn-facebook {background: #3b5998;width:100%;float:left;}\r\n  \r\n  .omb_btn-google {background: #c32f10;width:100%;float:left;}\r\n  .omb_socialButtons>a{color:#fff !important;}\r\n  .omb_socialButtons .col-sm-12{margin-bottom:10px;}\r\n  .hidden-xs{font-size:14px;}\r\n  .omb_socialButtons {\r\n      margin-top: 30px;\r\n      margin-bottom: 16px;\r\n  }\r\n  .login-body .fa{color:#d9534f;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-login/company-login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"login-body\">\n   \n\t<div class=\"login-page\">\n  <div class=\"form\">\n\t<h2>Login</h2>\n\t\n    <form class=\"login-form\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n    <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n\t\t\t<input type=\"text\" placeholder=\"Username\" class=\"styles1\" required [(ngModel)]=\"newLogin.contact_person_email\" name=\"email\" #email=\"ngModel\"/>\n\t\t\t<div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Username is required</div>\n\t  </div>\n\t   <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\n\t\t\t<input type=\"password\" placeholder=\"Password\" class=\"styles1\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\"/>\n\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\t  </div>\n     <br/>\n\t\t\t<button [disabled]=\"btnDisbled\" type=\"submit\" class=\"btn btn-danger\">Sign In</button>\n\t\t\t<br>\n\t\t <div class=\"text-danger text-center\">\n\t\t\t\t{{msg}}\n\t </div>\n\t\t<br/>\n\n\t\t<div class=\"row omb_row-sm-offset-3 omb_socialButtons\">\n    \t    <div class=\"col-xs-12 col-sm-12\">\n\t\t        <a href=\"/auth/facebook\" class=\"btn btn-lg btn-block omb_btn-facebook\" style=\"color:#fff;\">\n\t\t\t        <i class=\"fa fa-facebook visible-xs\"></i>\n\t\t\t        <span class=\"hidden-xs\">Sign In With Facebook</span>\n\t\t        </a>\n\t        </div>\n        \t\n        \t<div class=\"col-xs-12 col-sm-12\">\n\t\t        <a href=\"/auth/google\" target=\"_blank\" class=\"btn btn-lg btn-block omb_btn-google\" style=\"color:#fff;\">\n\t\t\t        <i class=\"fa fa-google-plus visible-xs\"></i>\n\t\t\t        <span class=\"hidden-xs\">Sign In With Google+</span>\n\t\t        </a>\n\t        </div>\t\n\t    </div>\n\t\t<button type=\"button\" [routerLink]=\"['/creg']\" class=\"btn btn-danger\">SignUp</button>\n    </form>\n\t\t\t\t\t\t\t\t\n  </div>\n</div>\n\n</body>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/components/company-login/company-login.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CompanyLoginComponent = /** @class */ (function () {
    function CompanyLoginComponent(companyService, routes) {
        this.companyService = companyService;
        this.routes = routes;
        this.btnDisbled = false;
        this.newLogin = {
            contact_person_email: '',
            password: '',
        };
    }
    CompanyLoginComponent.prototype.ngOnInit = function () {
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Rinsha
    // Date          : 01-1-2018
    // Last Modified : 01-1-2018, Rinsha
    // Desc          : CHeck whether company is expired. If expired, it redirect to expired page, otherwise dashboard
    CompanyLoginComponent.prototype.login = function () {
        var _this = this;
        this.btnDisbled = true;
        console.log(this.newLogin);
        this.companyService.authenticateCompany(this.newLogin).subscribe(function (data) {
            if (data.success) {
                _this.btnDisbled = false;
                if (data.company.status == "Expired") {
                    var json = data.company;
                    var key = "status";
                    delete json[key];
                    _this.companyService.storeUserData(data.token, data.company);
                    _this.routes.navigate(['/expired']);
                }
                else {
                    var json = data.company;
                    var key = "status";
                    delete json[key];
                    _this.companyService.storeUserData(data.token, data.company);
                    _this.routes.navigate(['/creg']);
                }
            }
            else {
                _this.btnDisbled = false;
                _this.msg = data.msg;
            }
        });
    };
    CompanyLoginComponent = __decorate([
        core_1.Component({
            selector: 'company-login',
            template: __webpack_require__("../../../../../src/app/components/company-login/company-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-login/company-login.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.Router])
    ], CompanyLoginComponent);
    return CompanyLoginComponent;
}());
exports.CompanyLoginComponent = CompanyLoginComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-profile/company-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 100%;\r\n  }\r\n  .control-label{padding-top:20px;}\r\n  .panel-primary{border:none;}\r\n  .control-label{color:#797979;}\r\n  .names{padding:20px 16px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-profile/company-profile.component.html":
/***/ (function(module, exports) {

module.exports = "    <app-company-sidebar></app-company-sidebar>\n    <app-company-topbar></app-company-topbar>\n<flash-messages></flash-messages>\n<br>\n<div class=\"container\">\n  <div class=\"panel panel-default panel-primary\">\n    <div class=\"panel-body\">\n      \n      <div class=\"form-group example-container\">\n          <div class=\"col-md-12 names\">\n            <label class=\"col-xs-12\">Email : {{company?.contact_person_email}}</label><br>\n            <label class=\"col-xs-12\">Name : {{company?.contact_person_fname}} {{company?.contact_person_lname}}</label><br/>\n          </div>\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Organization </label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\n                  <input matInput [(ngModel)]=\"newReg.organization\" name=\"organization\"  required formControlName=\"orgValidation\">\n              </mat-form-field>\n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Organization Type</label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\n                  <mat-select [ngModel]=\"typeId\" name=\"organization_type\" required formControlName=\"organization_typeValidation\">\n                      <mat-option *ngFor=\"let type of orgType\" [value]=\"type._id\" (click)=\"getOrgType(type)\">\n                        {{ type.name }}\n                      </mat-option>\n                    </mat-select>\n              </mat-form-field>\n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Industry </label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\"> \n                        <mat-select [(ngModel)]=\"industryId\" name=\"industry\" required formControlName=\"industryValidation\">\n                            <mat-option *ngFor=\"let item of industry\" [value]=\"item._id\" (click)=\"getIndustry(item)\" >\n                              {{ item.name }}\n                            </mat-option>\n                          </mat-select>\n                    </mat-form-field>\n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Location </label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\n                  <input matInput [(ngModel)]=\"newReg.location\" name=\"location\" required formControlName=\"locationValidation\">\n                </mat-form-field>\n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Company Strength </label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\n                  <input type=\"number\" matInput [(ngModel)]=\"newReg.company_strength\" name=\"company_strength\" required formControlName=\"strengthValidation\">\n                </mat-form-field>\n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Phone Number </label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\n                  <input matInput [(ngModel)]=\"newReg.contact_no\" name=\"contact_no\" maxlength=\"10\" minlength=\"10\" required formControlName=\"number\">\n                  <mat-error>Not a valid phone number</mat-error>\n                </mat-form-field> \n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Job Role </label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\n                  <input matInput [(ngModel)]=\"newReg.job_role\" name=\"job_role\" required formControlName=\"jobRoleValidation\">\n                </mat-form-field>\n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Job Level </label>\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\n                  <input matInput [(ngModel)]=\"newReg.job_level\" name=\"job_level\" required formControlName=\"jobLevelValidation\">\n                </mat-form-field>\n          </div>\n        \n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Survey Attenders </label>\n              <div class=\"col-md-6\">\n                  <br>\n                  <div class=\"row\">\n                  <section class=\"example-section\" *ngFor=\"let data of surveyattenders; let i = index;\">\n                  <mat-checkbox [checked]=\"modelArr && modelArr.includes(data._id)\" class=\"example-margin\" name=\"data_{{i}}\" [(ngModel)]=\"surveyattenders[i].check\" >{{data.name}}</mat-checkbox>\n                </section>\n                </div>\n              </div>\n          </div>\n         \n          <div class=\"clearfix\"></div>\n          <br>\n          <br>\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <div class=\"col-md-1 col-sm-2 col-xs-6\"> \n            <button type=\"submit\" class=\"btn btn-danger\" (click)=\"updateProfile()\">Update</button>\n            </div>\n            <div class=\"col-md-1 col-sm-2 col-xs-6\"> \n            <div *ngIf=\"showSubscribe\">\n            <button type=\"button\" (click)=\"subscribe()\" class=\"btn btn-danger\">Subscribe</button>\n            </div>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/company-profile/company-profile.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent(_formBuilder, companyService, routes, _flashMessagesService) {
        this._formBuilder = _formBuilder;
        this.companyService = companyService;
        this.routes = routes;
        this._flashMessagesService = _flashMessagesService;
        this.checked = false;
        this.showSubscribe = false;
        this.newReg = {
            organization: '',
            location: '',
            contact_no: '',
            job_role: '',
            job_level: '',
            company_strength: '',
            organization_type: { _id: '', name: '' },
            industry: { _id: '', name: '', },
            survey_attenders: [],
        };
        this.t = true;
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ProfileFormGroup = this._formBuilder.group({
            orgValidation: ['', forms_1.Validators.required],
            organization_typeValidation: ['', forms_1.Validators.required],
            industryValidation: ['', forms_1.Validators.required],
            locationValidation: ['', forms_1.Validators.required],
            strengthValidation: ['', forms_1.Validators.required],
            jobRoleValidation: ['', forms_1.Validators.required],
            jobLevelValidation: ['', forms_1.Validators.required],
            number: ['', forms_1.Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)],
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get All organization type, industry and survey attenders
        // Params        : 
        // Returns       : All organization type, industry and survey attenders
        // Author        : Rinsha
        // Date          : 04-1-2018
        // Last Modified : 04-1-2018, Rinsha
        // Desc          : 
        this.companyService.getAllOrgType().subscribe(function (res) {
            _this.orgType = res;
        });
        this.companyService.getAllIndustry().subscribe(function (res) {
            _this.industry = res;
        });
        this.companyService.getAllSurveyAttenders().subscribe(function (res) {
            _this.surveyattenders = res;
        });
        // -----------------------------------End------------------------------------------
        // ---------------------------------Start-------------------------------------------
        // Function      : Get Company details
        // Params        : 
        // Returns       : Login company details
        // Author        : Rinsha
        // Date          : 04-1-2018
        // Last Modified : 04-1-2018, Rinsha
        // Desc          : 
        this.companyService.getMyCompany().subscribe(function (info) {
            _this.company = info;
            _this.typeId = _this.company.organization_type.id;
            _this.industryId = _this.company.industry.id;
            _this.surveyattendersId = _this.company.survey_attenders;
            if (_this.company.cmp_status == "Trail") {
                _this.showSubscribe = true;
            }
            _this.modelArr = [];
            for (var _i = 0, _a = _this.surveyattendersId; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.modelArr.push(item._id);
            }
            for (var i in _this.surveyattenders) {
                if (_this.modelArr.includes(_this.surveyattenders[i]._id)) {
                    _this.surveyattenders[i].check = true;
                }
                else {
                    _this.surveyattenders[i].check = false;
                }
            }
            _this.newReg = {
                organization: _this.company.organization,
                location: _this.company.location,
                contact_no: _this.company.contact_no,
                job_role: _this.company.job_role,
                job_level: _this.company.job_level,
                company_strength: _this.company.company_strength,
                organization_type: { _id: _this.company.organization_type.id, name: _this.company.organization_type.name },
                industry: { _id: _this.company.industry.id, name: _this.company.industry.name },
                survey_attenders: _this.surveyattenders,
            };
        });
        // -----------------------------------End------------------------------------------    
    };
    CompanyProfileComponent.prototype.getOrgType = function (type) {
        this.newReg.organization_type = type;
    };
    CompanyProfileComponent.prototype.getIndustry = function (item) {
        this.newReg.industry = item;
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Subscribe
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 04-1-2018
    // Last Modified : 04-1-2018, Rinsha
    // Desc          : Company can subscribe app by clicking the subscribe button
    CompanyProfileComponent.prototype.subscribe = function () {
        var _this = this;
        this.companyService.subscribeCompany().subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
                setTimeout(function () {
                    _this.routes.navigate(['/profile']);
                    location.reload();
                }, 4000);
            }
            else {
                _this._flashMessagesService.show('Some error occured, Please try again', { cssClass: 'alert-danger', timeout: 4000 });
                setTimeout(function () {
                    _this.routes.navigate(['/profile']);
                }, 4000);
            }
        });
    };
    // -----------------------------------End------------------------------------------    
    // ---------------------------------Start-------------------------------------------
    // Function      : Update profile
    // Params        : Data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 03-1-2018
    // Last Modified : 03-1-2018, Rinsha
    // Desc          : Company can update all the details except email and name
    CompanyProfileComponent.prototype.updateProfile = function () {
        var _this = this;
        this.newReg.survey_attenders = [];
        this.surveyattenders.forEach(function (element) {
            if (element.check == true) {
                var json = element;
                var key = "check";
                delete json[key];
                _this.newReg.survey_attenders.push(element);
            }
        });
        this.companyService.updateCompany(this.newReg).subscribe(function (info) {
            if (info.success) {
                _this._flashMessagesService.show('Success...', { cssClass: 'alert-success', timeout: 4000 });
                setTimeout(function () {
                    _this.routes.navigate(['/profile']);
                }, 4000);
            }
            else {
                _this._flashMessagesService.show('Error...', { cssClass: 'alert-danger', timeout: 4000 });
                setTimeout(function () {
                    _this.routes.navigate(['/profile']);
                }, 4000);
            }
        });
    };
    CompanyProfileComponent = __decorate([
        core_1.Component({
            selector: 'company-profile',
            template: __webpack_require__("../../../../../src/app/components/company-profile/company-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-profile/company-profile.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, company_service_1.CompanyService, router_1.Router, angular2_flash_messages_1.FlashMessagesService])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());
exports.CompanyProfileComponent = CompanyProfileComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-registration/company-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padd-top{padding-top:4em;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-registration/company-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padd-top\"></div>\n<div class=\"container\">\n  \n<flash-messages></flash-messages>\n<mat-horizontal-stepper [linear]=\"isLinear\">\n\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <div class=\"col-md-6 col-md-offset-3\">\n    <form (ngSubmit)=\"appendForm1()\" >\n      <ng-template matStepLabel>Step 1</ng-template>\n      <h4>Tell us about your job to get a sense of how many responses to expect</h4>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.organization\" name=\"organization\" placeholder=\"Your Organization\"  required formControlName=\"orgValidation\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n          <mat-select placeholder=\"Organization Type\" [(ngModel)]=\"newReg.organization_type\" name=\"organization_type\" required formControlName=\"organization_typeValidation\">\n              <mat-option *ngFor=\"let type of orgType\" [value]=\"type\">\n                {{ type.name }}\n              </mat-option>\n            </mat-select>\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n\t  \n          <mat-select placeholder=\"Industry\" [(ngModel)]=\"newReg.industry\" name=\"industry\" required formControlName=\"industryValidation\">\n              <mat-option *ngFor=\"let item of industry\" [value]=\"item\">\n                {{ item.name }}\n              </mat-option>\n            </mat-select>\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.location\" name=\"location\" placeholder=\"Location\" required formControlName=\"locationValidation\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"firstFormGroup\">\n          <input type=\"number\" matInput [(ngModel)]=\"newReg.company_strength\" name=\"company_strength\" placeholder=\"Company Strength\"  required formControlName=\"strengthValidation\">\n        </mat-form-field>\n        <br/>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </div>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n      <div class=\"col-md-6 col-md-offset-3\">\n    <form (ngSubmit)=\"appendForm2()\" >\n      <ng-template matStepLabel>Step 2</ng-template>\n      <h4>Tell us about yourself</h4>\n      <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.contact_person_fname\" name=\"contact_person_fname\" placeholder=\"First Name\" required formControlName=\"fnameValidation\">\n      </mat-form-field>\n      <br/>\n      <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.contact_person_lname\" name=\"contact_person_lname\" placeholder=\"Last Name\" required formControlName=\"lnameValidation\">\n      </mat-form-field>\n      <br/> \n      <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.contact_person_email\" name=\"contact_person_email\" placeholder=\"Email\" required formControlName=\"email\">\n        <mat-error>Not a valid email</mat-error>\n      </mat-form-field> \n      <br/> \n       <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.contact_no\" name=\"contact_no\" placeholder=\"Phone Number\" maxlength=\"10\" minlength=\"10\" required formControlName=\"number\">\n        <mat-error>Not a valid phone number</mat-error>\n      </mat-form-field> \n      <br/> \n     <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.job_role\" name=\"job_role\" placeholder=\"Job Role\" required formControlName=\"jobRoleValidation\">\n      </mat-form-field>\n      <br/>\n   <mat-form-field [formGroup]=\"secondFormGroup\">\n        <input matInput [(ngModel)]=\"newReg.job_level\" name=\"job_level\" placeholder=\"Job Level\" required formControlName=\"jobLevelValidation\">\n      </mat-form-field>\n      <br/>\n     <mat-form-field [formGroup]=\"secondFormGroup\">\n      <input matInput [(ngModel)]=\"newReg.password\" id=\"password\" placeholder=\"Password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\"  required formControlName=\"password\" validateEqual=\"confirmPassword\" reverse=\"true\">\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n      <mat-error>Password contain atleast 6 characters and should contain one number,one character and one special character</mat-error>\n    </mat-form-field>\n      <br/>\n     <mat-form-field [formGroup]=\"secondFormGroup\">\n      <input type=\"password\" matInput [(ngModel)]=\"Reg.confirmPassword\" reverse=\"false\" validateEqual=\"password\" placeholder=\"Confirm Password\" name=\"confirmPassword\" required formControlName=\"confirmPassword\" id=\"confirmPassword\">\n      <mat-error>Password Not Match</mat-error>\n    </mat-form-field>\n      <br/>\n\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n      </div>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdFormGroup\">\n      <div class=\"col-md-6 col-md-offset-3\">\n    <form (ngSubmit)=\"register()\">\n    <ng-template matStepLabel>Step 3</ng-template>\n    <h4>Tell us who you are looking to get answers from</h4>\n    <section class=\"example-section\" *ngFor=\"let data of surveyattenders; let i = index;\">\n        <mat-checkbox class=\"example-margin\" name=\"data_{{i}}\" [(ngModel)]=\"surveyattenders[i].check\" >{{data.name}}</mat-checkbox>\n      \n      </section>\n   \n    <div>\n      <!-- <button mat-button matStepperPrevious>Back</button> -->\n      <button type=\"submit\" mat-button >Finish</button>\n    </div>\n    </form>\n    </div>\n  </mat-step>\n\n</mat-horizontal-stepper>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/company-registration/company-registration.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var password_validation_1 = __webpack_require__("../../../../../src/app/components/company-registration/password-validation.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var CompanyRegistrationComponent = /** @class */ (function () {
    function CompanyRegistrationComponent(_formBuilder, companyService, routes, _flashMessagesService) {
        this._formBuilder = _formBuilder;
        this.companyService = companyService;
        this.routes = routes;
        this._flashMessagesService = _flashMessagesService;
        this.isLinear = true;
        this.hide = true;
        this.timestamp = new Date().getTime().toString();
        this.newReg = {
            organization: '',
            location: '',
            contact_person_fname: '',
            contact_person_lname: '',
            contact_no: '',
            contact_person_email: '',
            job_role: '',
            job_level: '',
            company_strength: '',
            organization_type: { _id: '', name: '' },
            industry: { _id: '', name: '', },
            survey_attenders: [],
            password: '',
            verification_code: this.timestamp + Math.floor(100000 + Math.random() * 900000),
        };
        this.Reg = { confirmPassword: '' };
        this.data = [];
    }
    CompanyRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLinear = true;
        this.firstFormGroup = this._formBuilder.group({
            orgValidation: ['', forms_1.Validators.required],
            organization_typeValidation: ['', forms_1.Validators.required],
            industryValidation: ['', forms_1.Validators.required],
            locationValidation: ['', forms_1.Validators.required],
            strengthValidation: ['', forms_1.Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            fnameValidation: ['', forms_1.Validators.required],
            lnameValidation: ['', forms_1.Validators.required],
            jobRoleValidation: ['', forms_1.Validators.required],
            jobLevelValidation: ['', forms_1.Validators.required],
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            number: new forms_1.FormControl('', forms_1.Validators.pattern(/^\d{9}|^\d{3}-\d{3}-\d{3}|^\d{3}\s\d{3}\s\d{3}$/)),
            password: new forms_1.FormControl('', forms_1.Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/)),
            confirmPassword: ['', forms_1.Validators.required],
        }, {
            validator: password_validation_1.PasswordValidation.MatchPassword
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get All organization type, industry and survey attenders
        // Params        : 
        // Returns       : All organization type, industry and survey attenders
        // Author        : Rinsha
        // Date          : 28-12-2017
        // Last Modified : 28-12-2017, Rinsha
        // Desc          :  
        this.companyService.getAllOrgType().subscribe(function (res) {
            _this.orgType = res;
            _this.newReg.organization_type = _this.orgType[0].value;
        });
        this.companyService.getAllIndustry().subscribe(function (res) {
            _this.industry = res;
            _this.newReg.industry = _this.industry[0].value;
        });
        this.companyService.getAllSurveyAttenders().subscribe(function (res) {
            _this.surveyattenders = res;
        });
        // -----------------------------------End------------------------------------------
    };
    CompanyRegistrationComponent.prototype.appendForm1 = function () {
        this.firstForm = this.newReg;
    };
    CompanyRegistrationComponent.prototype.appendForm2 = function () {
        this.secondForm = this.newReg;
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Register company
    // Params        : Company data from the form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Rinsha
    // Desc          : 
    CompanyRegistrationComponent.prototype.register = function () {
        var _this = this;
        this.thirdForm = '';
        this.newReg.survey_attenders = [];
        this.surveyattenders.forEach(function (element) {
            if (element.check == true) {
                var json = element;
                var key = "check";
                delete json[key];
                _this.newReg.survey_attenders.push(element);
            }
        });
        this.thirdForm = this.newReg.survey_attenders;
        this.result = Object.assign(this.firstForm, this.secondForm);
        this.companyService.registration(this.result).subscribe(function (data) {
            console.log(data);
            if (data.success == true) {
                _this._flashMessagesService.show('Account created successfully, Please verify your Email address', { cssClass: 'alert-success', timeout: 4000 });
                setTimeout(function () {
                    // this.routes.navigate(['/login']);
                }, 4000);
            }
            else {
                _this._flashMessagesService.show('The email address you specified is already in use. Please login to continue', { cssClass: 'alert-danger', timeout: 4000 });
                setTimeout(function () {
                    // this.routes.navigate(['/404']);
                }, 4000);
            }
        });
    };
    CompanyRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'company-registration',
            template: __webpack_require__("../../../../../src/app/components/company-registration/company-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-registration/company-registration.component.css")]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, company_service_1.CompanyService, router_1.Router, angular2_flash_messages_1.FlashMessagesService])
    ], CompanyRegistrationComponent);
    return CompanyRegistrationComponent;
}());
exports.CompanyRegistrationComponent = CompanyRegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-registration/password-validation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            // console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            // console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;


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

module.exports = "<ul class=\"nav navbar-nav side-nav\">\n    <!-- <li> -->\n        <!-- <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a> -->\n    <!-- </li> -->\n    <img style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> Survey</a>\n   \n    <li >\n            <a><i class=\"fa fa-users\"></i> Dashboard</a>\n       \n    </li>\n    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n        <!-- <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-product-hunt\"></i> Users</a>  -->\n        <a [routerLink]=\"['/company-users']\" ><i class=\"fa fa-product-hunt\"></i> Users</a> \n        \n    </li>\n    <li>\n        <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Groups </a>\n       \n    </li>\n    <li>\n        <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Themes </a>\n       \n    </li>\n\n    <li>\n        <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Survey </a>\n       \n    </li>\n</ul>"

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

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.notify {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #2882f7;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n}\r\n\r\n\r\n.notify-count{\r\n    position: absolute;\r\n    top: -9px;\r\n    right: -8px;\r\n    background: #DE2413;\r\n    height: 15px;\r\n    width: 15px;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    line-height: 14px;\r\n}\r\n.fa-bell{position:relative;}\r\n.media-object{width:100%;}\r\n\r\n\r\n\r\n.list-notificacao{\r\n    min-width: 400px;\r\n    background: #ffffff;\r\n    left:inherit;\r\n    right:0;\r\n  }\r\n  \r\n  .list-notificacao li{\r\n     border-bottom : 1px #d8d8d8 solid;\r\n     text-align    : justify;\r\n     padding       : 5px 10px 5px 10px;\r\n     cursor: pointer;\r\n     font-size: 12px;\r\n  }\r\n  \r\n  .list-notificacao li:hover{\r\n  background: #f1eeee;\r\n  }\r\n  \r\n  .list-notificacao li:hover .exclusaoNotificacao{\r\n  display: block;\r\n  }\r\n  \r\n  .list-notificacao li  p{\r\n   color: black;\r\n   width: 305px;\r\n  }\r\n  \r\n  .list-notificacao li .exclusaoNotificacao{\r\n      width: 25px;\r\n      min-height: 40px;\r\n      position: absolute;\r\n      right: 0;\r\n      display: none;\r\n  }\r\n  \r\n  .list-notificacao .media img{\r\n      width: 40px;\r\n      height: 40px;\r\n      float:left;\r\n      margin-right: 10px;\r\n  }\r\n  \r\n  .badgeAlert {\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    padding: 3px 5px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    line-height: 1;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    background-color: #d9534f;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    margin-top: -32px;\r\n    margin-left: 5px;\r\n  }\r\n  .notification{background-color:#fff !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    \n   \n    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        <div class=\"navbar-header\">\n            \n         <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n             <span class=\"sr-only\">Toggle navigation</span>\n             <span class=\"icon-bar\"></span>\n             <span class=\"icon-bar\"></span>\n             <span class=\"icon-bar\"></span>\n         </button>\n        \n        </div>\n        <ul class=\"nav navbar-nav pull-right profilz\">\n                <li class=\"dropdown notification\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                          <span class=\"glyphicon glyphicon-bell alertNotificacao\"></span>\n                          <span class='badgeAlert'>2</span>\n                          <span class=\"\"></span></a>\n                        <ul class=\"list-notificacao dropdown-menu\">\n                          <li id='item_notification_1'>\n                              <div class=\"media\">\n                                 <div class=\"media-left\"> \n                                    <a href=\"#\"> \n                                    <img alt=\"64x64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWZhMWJmZmI3MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZmExYmZmYjcwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=\" data-holder-rendered=\"true\"> </a> \n                                 </div>\n                                 <div class=\"media-body\">\n                                    <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs button_exclusao' id='1' onclick='excluirItemNotificacao(this)'>x</button>\n                                    </div>\n                                    <h4 class=\"media-heading\">ITEM 1</h4>\n                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                                 </div>\n  </div>\n                           </li>    \n                           <li id='item_notification_2'>\n                              <div class=\"media\">\n                                 <div class=\"media-left\"> \n                                    <a href=\"#\"> \n                                    <img alt=\"64x64\" class=\"media-object\" data-src=\"holder.js/64x64\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNWZhMWJmZmI3MCB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1ZmExYmZmYjcwIj48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4=\" data-holder-rendered=\"true\"> </a> \n                                 </div>\n                                 <div class=\"media-body\">\n                                    <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs' id='2' onclick='excluirItemNotificacao(this)'>x</button>\n                                    </div>\n                                    <h4 class=\"media-heading\">ITEM 2</h4>\n                                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n                                 </div>\n                              </div>\n                           </li>\n                        </ul>\n                     </li>\n            <li class=\"dropdown\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Iasmani Pinazo <span class=\"glyphicon glyphicon-user pull-right\"></span></a>\n              <ul class=\"dropdown-menu\">\n                <li><a [routerLink]=\"['/profile']\">Profile <span class=\"glyphicon glyphicon-cog pull-right\"></span></a></li>\n                \n                <li class=\"divider\"></li>\n                <li>\n                    <a (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out pull-right\"></span> LogOut </a>\n                    \n                </li>\n              </ul>\n            </li>\n  \n            \n          </ul>\n       \n          \n    </div>\n    <!-- /.navbar-collapse -->\n  </nav>\n  \n  <!-- Top Menu Items -->\n  <ul class=\"nav navbar-right top-nav\">\n    <li class=\"dropdown\" *ngFor= \"let item of info\">\n            \n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell\"><div class=\"notify-count\">2</div></i> <b class=\"caret\"></b></a>\n        <ul class=\"dropdown-menu message-dropdown\">\n            <li class=\"message-preview\"  >\n                <a >\n                    <div class=\"media\">\n                        <div class=\"row\">\n                        <div class=\"col-md-4\">\n                        <span class=\"pull-left\">\n                            <img class=\"media-object\"\n                            \n                             alt=\"\">\n                        </span>\n                       </div>\n                       <div class=\"col-md-8\">\n                        <div class=\"media-body\">\n                            <h5 class=\"media-heading\">\n                                <strong>Name</strong>\n                            </h5>\n                            \n                            <p>Item confirmed by bidder</p>\n                        </div>\n                        </div>\n                        </div>\n                    </div>\n                </a>\n            </li>\n            <!-- <li class=\"message-footer\">\n                <a href=\"#\">Read All New Messages</a>\n            </li> -->\n        </ul>\n    </li>\n    \n    \n  </ul>"

/***/ }),

/***/ "../../../../../src/app/components/company-topbar/company-topbar.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var CompanyTopbarComponent = /** @class */ (function () {
    function CompanyTopbarComponent(companyService, routes) {
        this.companyService = companyService;
        this.routes = routes;
    }
    CompanyTopbarComponent.prototype.ngOnInit = function () {
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Logout
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 04-1-2018
    // Last Modified : 04-1-2018, Rinsha
    // Desc          : 
    CompanyTopbarComponent.prototype.logout = function () {
        this.companyService.logout();
        this.routes.navigate(['/clogin']);
        return false;
    };
    CompanyTopbarComponent = __decorate([
        core_1.Component({
            selector: 'app-company-topbar',
            template: __webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-topbar/company-topbar.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.Router])
    ], CompanyTopbarComponent);
    return CompanyTopbarComponent;
}());
exports.CompanyTopbarComponent = CompanyTopbarComponent;


/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.buttonleft>li{\r\n    border:none !important;\r\n    text-align: center;\r\n    padding: 4px;\r\n} \r\n\r\n.ourbutton2{    border-radius: 20px;\r\n        padding: 7px 40px;}\r\n.buttonleft{padding:2em 0;min-height: 300px;}\r\n\r\n\r\n\r\n\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n\r\n.inputfileds{\r\n    width: 300px !important;\r\n}\r\n.inputitem{\r\n    margin-bottom:-15px;\r\n    float: left;\r\n    width: 305px;\r\n    /* width: 400px; */\r\n}\r\n  \r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n  \n                <div id=\"wrapper\">\n            \n                    <!-- Navigation -->\n                    <app-company-topbar></app-company-topbar>            \n        <app-company-sidebar></app-company-sidebar>\n            \n                    <div id=\"\">\n                        <div class=\"container-fluid\">\n                                \n                                            <!-- Page Heading -->\n                                          \n                                      \n                                            <!-- /.row -->\n                            \n                                        </div>\n                        <div class=\"col-md-2\">\n                              <nav class=\"nav-sidebar\">\n                                  <ul class=\"nav tabs buttonleft\">\n                                        <li >\n                                          <button  class=\"btn btn-danger ourbutton2\" (click)=\"openModal()\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#myModal\">Add New</button>\n                                        </li>\n                                        <li >\n                                          <button  class=\"btn btn-danger ourbutton2\" (click)=\"openModal()\"  data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editModal\" >Edit User</button>\n                                          <!-- <button  class=\"btn btn-danger ourbutton2\" (click)=\"getEditUser(user);\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editModal\" >Edit User</button> -->\n                                        </li>\n                                        <li >\n                                          <button  class=\"btn btn-danger ourbutton2\" (click)=\"openModal()\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#importModal\" >Import from Excel</button>\n                                        </li>\n                                        <!-- <li [ngClass]=\"{'active1': viewComp == 'Active'}\"><a (click)=\"updateView('Active')\" href=\"#tab4\" data-toggle=\"tab\">Active Users</a></li> \n                                        <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab2\" data-toggle=\"tab\">Blocked Users</a></li>\n                                        <li [ngClass]=\"{'active1': viewComp == 'Delete'}\"><a (click)=\"updateView('Delete')\" href=\"#tab3\" data-toggle=\"tab\">Delete Users</a></li>   -->\n                                                                     \n                                  </ul>\n                                </nav>\n                        </div>\n                        <div class=\"col-md-10\">\n\n                            <div *ngIf=\"viewComp == 'All'\">\n                              <!-- <all-users></all-users> -->\n                            </div>\n                            <div *ngIf=\"viewComp == 'Active'\">\n                                <!-- <active-users></active-users> -->\n                              </div>\n                            <div *ngIf=\"viewComp == 'Blocked'\">\n                              <!-- <disabled-users></disabled-users> -->\n                            </div>\n                            <div *ngIf=\"viewComp == 'Delete'\">\n                              <!-- <deleted-users></deleted-users> -->\n                            </div>\n                        </div>\n                        \n                      </div>\n                      <!-- /#page-wrapper -->\n                      \n                                 \n                      </div>\n                      \n\n<!-- -------------------------------------------------------------------------------------------edit------------------------- -->\n                      <div id=\"editModal\"  class=\"modal fade\" >\n                        <div class=\"modal-dialog\">\n                        \n                          <!-- Modal content-->\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header\">\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\n                              <h4 class=\"modal-title\">Edit User</h4>\n                            </div>\n                            <div class=\"modal-body\">\n                              \n                          <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"f1.form.valid && updateUsers();\" novalidate>\n                               \n                              <div class=\"form-group\" >\n                                  <label > Email </label>\n                                  <br>\n                                  <div *ngIf=\"isError1\" class=\"text-danger text-left\">\n                                      {{msg1}}\n                                 </div>\n                                 <div *ngIf=\"isSuccess1\" class=\"text-success text-left\">\n                                    {{msg1}}\n                              </div>\n                                 \n                                  <div  >\n                                    <div class=\"inputitem\">\n                                    <mat-form-field *ngIf=\"!selUser.is_registered\" class=\"inputfileds\">\n                                      <input matInput  [value]=\"selUser.email\" placeholder=\"Email address\" required email  #email=\"ngModel\" name=\"email\" [(ngModel)]=\"selUser.newEmail\"  >\n                                      <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\n                                    \n                                    </mat-form-field>\n                                    <div *ngIf=\"selUser.is_registered\">\n                                    <label >{{selUser.email}}</label>\n                                    </div>\n                                    </div>\n                                  </div>\n                                  <div style=\"clear: both;\"></div>\n                                  <br/>\n                           \n                                  <br/>\n                                  <div class=\"inputitem\">\n                                      <mat-form-field class=\"inputfileds\">\n                                        <mat-select placeholder=\"Groups\" name='editgrup'[(ngModel)]=\"selUserGroups\" multiple>\n                                          <mat-option [value]=\"grp._id\" *ngFor=\"let grp of groups;\" >{{grp.name}}</mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                                  </div>\n                              \n                                  <br>\n                                  <div style=\"clear: both;\"></div>\n                              </div>\n                              <br>\n                              <button type= \"submit\" [disabled]=\"updateBtnDisbled\" class=\"btn btn-danger ourbutton\" >Update</button>\n                             \n                          </form>\n                            </div>\n                            <div class=\"modal-footer\">\n                            </div>\n                          </div>\n                          \n                        </div>\n                      </div>\n\n<!-- --------------------------------------------------------------------import-------------------------------------------------------------------------------------------------- -->\n<div id=\"importModal\"  class=\"modal fade\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn2>&times;</button>\n          <h4 class=\"modal-title\">Import From Excel</h4>\n        </div>\n        <div class=\"modal-body\">\n          <form  role=\"form\"  #f2=\"ngForm\" (ngSubmit)=\"f2.form.valid && import();\" novalidate>\n           <div class=\"form-group\" >\n             <div class=\"row\">\n             <div class=\"col-md-6\">\n                <label > File </label>\n                <!-- <br> -->\n                <input #myInput type=\"file\" (change)=\"handleFile($event)\" accept=\".xlsx\"/>\n            </div>\n            <div class=\"col-md-6\">\n              <br>\n              Sample Excel :   <a href=\"/assets/sampleFile/sample.xlsx\" target=\"_self\" download>\n                <i class=\"fa fa-download\"></i>\n              </a>\n            </div>\n            </div>\n              <br>\n              <div *ngIf=\"isError\" class=\"text-danger text-left\">\n                {{msg}}\n           </div>\n           <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\n              {{msg}}\n        </div>\n              <div class=\"inputitem\">\n                <mat-form-field class=\"inputfileds\">\n                  <mat-select placeholder=\"Groups\" name='selected' #group=\"ngModel\" [(ngModel)]=\"newUser.groups\" multiple>\n                    <mat-option [value]=\"grp\" *ngFor=\"let grp of groups;\"  >{{grp.name}}</mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n              <div style=\"float: left;\">\n                <button  class=\"btn btn-danger ourbutton\" (click)=\"showGroupAddOption()\">Add Group</button>\n              </div>\n              <br>\n              <div style=\"clear: both;\"></div>\n              <div *ngIf=\"showAddGroup\">\n              <mat-form-field class=\"inputfileds\" >\n                <input matInput placeholder=\"Group Name\" [(ngModel)]=\"newGroup\" name=\"newGroup\" >\n              </mat-form-field>\n              <button  class=\"btn btn-danger ourbutton\" (click)=\"addGroup()\">Add</button>\n              </div>\n            </div>\n         \n          <button type= \"submit\" [disabled]=\"updateBtnDisbled\" class=\"btn btn-danger ourbutton\" >Update</button>\n         \n      </form>\n      </div>\n\n       \n        \n        <div class=\"modal-footer\">\n          </div>\n          </div>\n        </div>\n      </div>\n<!-- ------------------------------------------------------------------------add---------------------------------------------------------------------------------------------- -->\n                      \n                      <div id=\"myModal\"  class=\"modal fade\">\n                          <div class=\"modal-dialog\">\n                          \n                            <!-- Modal content-->\n                            <div class=\"modal-content\">\n                              <div class=\"modal-header\">\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\n                                <h4 class=\"modal-title\">Add User</h4>\n                              </div>\n                              <div class=\"modal-body\">\n                                \n                            <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addUsers();\" novalidate>\n                            \n                                <div class=\"form-group\" >\n                                    <label > Email </label>\n                                    <br>\n                                    <div *ngIf=\"isError\" class=\"text-danger text-left\">\n                                        {{msg}}\n                                   </div>\n                                   <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\n                                      {{msg}}\n                                </div>\n                                   \n                                    <div  *ngFor=\"let item of newUser.email; let i = index; trackBy:trackByIndex\" >\n                                      <div class=\"inputitem\">\n                                      <mat-form-field class=\"inputfileds\">\n                                        <input matInput placeholder=\"Email address\" required email  #email{{i}}=\"ngModel\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\" >\n                                        <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\n                                      \n                                      </mat-form-field>\n                                      \n                                      </div>\n                                      <div style=\"float: left;padding-top: 14px;width:220px;\">\n                                          <button class=\"btn-danger\" (click)=\"removeOption(i)\" style=\"float: left;\" >X</button>\n                                      </div>\n                                    </div>\n                                    <div style=\"clear: both;\"></div>\n                                    <br/>\n                                    <button  class=\"btn btn-danger ourbutton\" (click)=\"addMoreOption()\" >Add More</button>\n                                    <br/>\n                                    <br/>\n                                    <div class=\"inputitem\">\n                                        <mat-form-field class=\"inputfileds\">\n                                          <mat-select placeholder=\"Groups\" name='selected' #group=\"ngModel\" [(ngModel)]=\"newUser.groups\" multiple>\n                                            <mat-option [value]=\"grp\" *ngFor=\"let grp of groups;\"  >{{grp.name}}</mat-option>\n                                          </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div style=\"float: left;\">\n                                        <button  class=\"btn btn-danger ourbutton\" (click)=\"showGroupAddOption()\">Add Group</button>\n                                    </div>\n                                    <br>\n                                    <div style=\"clear: both;\"></div>\n                                    <div *ngIf=\"showAddGroup\">\n                                    <mat-form-field class=\"inputfileds\" >\n                                        <input matInput placeholder=\"Group Name\" [(ngModel)]=\"newGroup\" name=\"newGroup\" >\n                                      </mat-form-field>\n                                      <button  class=\"btn btn-danger ourbutton\" (click)=\"addGroup()\">Add</button>\n                                      </div>\n                                      \n                                </div>\n                                <br>\n                                <button type= \"submit\" [disabled]=\"btnDisbled\" class=\"btn btn-danger ourbutton\" >Submit</button>\n                               \n                            </form>\n                              </div>\n                              <div class=\"modal-footer\">\n                              </div>\n                            </div>\n                            \n                          </div>\n                        </div>\n\n\n                        \n                      \n                      <footer></footer> \n                        \n                      </body>"

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
var xlsx_to_json_service_1 = __webpack_require__("../../../../../src/app/services/xlsx-to-json.service.ts");
var CompanyUsersComponent = /** @class */ (function () {
    function CompanyUsersComponent(companyService) {
        this.companyService = companyService;
        this.newUser = { email: [''], groups: [] };
        // newUserImport =  {email: [''], groups:[]};
        this.isError = false;
        this.isSuccess = false;
        this.msg = '';
        this.isError1 = false;
        this.isSuccess1 = false;
        this.msg1 = '';
        this.xlsxToJsonService = new xlsx_to_json_service_1.XlsxToJsonService();
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
            // var index = 5;
            // this.selUser.email = data.users[index].email;
            // this.selUser.newEmail = data.users[index].email;
            // this.selUser.is_registered = data.users[index].is_registered;
            // data.users[index].group.forEach(val => {
            //   this.selUserGroups.push(val.g_id);
            // });
            // console.log(this.selUser.groups);
        });
        // console.log(this.selGroups);
        this.companyService.getAllUserGroup().subscribe(function (data) {
            _this.groups = data.group;
            console.log(_this.groups);
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
    CompanyUsersComponent.prototype.updateUsers = function () {
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
    CompanyUsersComponent.prototype.addUsers = function () {
        var _this = this;
        this.btnDisbled = true;
        console.log(this.newUser);
        this.companyService.addUsers(this.newUser).subscribe(function (data) {
            if (data.success) {
                _this.newUser = { email: [''], groups: [] };
                _this.isSuccess = true;
                _this.msg = data.msg;
                //update company = data.company
                setTimeout(function () {
                    _this.closeBtn.nativeElement.click();
                    _this.closeBtn2.nativeElement.click();
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
    CompanyUsersComponent.prototype.handleFile = function (event) {
        var _this = this;
        this.emailArr = [];
        var file = event.target.files[0];
        this.xlsxToJsonService.processFileToJson({}, file).subscribe(function (data) {
            // this.result = JSON.stringify(data['sheets'].Sheet1);
            _this.result = data['sheets'].Sheet1;
            _this.result.forEach(function (element) {
                _this.emailArr.push(element.Email);
            });
            if (typeof (_this.emailArr.email == "undefined")) {
                _this.emailArr = [];
            }
        });
    };
    CompanyUsersComponent.prototype.import = function () {
        this.newUser.email = this.emailArr;
        this.addUsers();
    };
    CompanyUsersComponent.prototype.openModal = function () {
        this.newUser.email = [''];
        this.myInputVariable.nativeElement.value = "";
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
    __decorate([
        core_1.ViewChild('closeBtn2'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyUsersComponent.prototype, "closeBtn2", void 0);
    __decorate([
        core_1.ViewChild('myInput'),
        __metadata("design:type", Object)
    ], CompanyUsersComponent.prototype, "myInputVariable", void 0);
    CompanyUsersComponent = __decorate([
        core_1.Component({
            selector: 'company-users',
            template: __webpack_require__("../../../../../src/app/components/company-users/company-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-users/company-users.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], CompanyUsersComponent);
    return CompanyUsersComponent;
}());
exports.CompanyUsersComponent = CompanyUsersComponent;


/***/ }),

/***/ "../../../../../src/app/components/newpie/newpie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".arc text {\r\n    font: 10px sans-serif;\r\n    text-anchor: middle;\r\n  }\r\n  \r\n  .arc path {\r\n    stroke: #fff;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newpie/newpie.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<h2>{{subtitle}}</h2>\n<svg width=\"960\" height=\"500\"></svg>"

/***/ }),

/***/ "../../../../../src/app/components/newpie/newpie.component.ts":
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
var d3 = __webpack_require__("../../../../d3-selection/index.js");
var d3Scale = __webpack_require__("../../../../d3-scale/index.js");
var d3Shape = __webpack_require__("../../../../d3-shape/index.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var NewpieComponent = /** @class */ (function () {
    function NewpieComponent(companyService, route) {
        this.companyService = companyService;
        this.route = route;
        this.Stats = [];
        this.mail_response_count = 0;
        this.mail_viewed_count = 0;
        this.survey_completed_count = 0;
        this.invited_user_count = 0;
        this.mail_not_readed_count = 0;
        this.title = '';
        this.subtitle = 'Pie Chart of Survey Response';
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
    }
    NewpieComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get all Mail responsed users, mail viewed users, survey completed users
        // Params        : 
        // Returns       : count of mail responsed users, mail viewed users
        // Author        : Rinsha
        // Date          : 10-1-2018
        // Last Modified : 11-1-2018, Rinsha
        // Desc          : 
        var data = {};
        this.sub = this.route.params.subscribe(function (params) {
            _this.survey_id = params.id;
        });
        if (this.survey_id) {
            data = { id: this.survey_id };
        }
        this.companyService.getMailResponseCount(data).subscribe(function (res) {
            _this.mail_response_count = res;
            _this.companyService.getMailViewedCount(data).subscribe(function (res1) {
                _this.mail_viewed_count = res1;
                _this.companyService.getSurveyCompletedCount(data).subscribe(function (res2) {
                    _this.survey_completed_count = res2;
                    _this.companyService.getInvitedUserCount(data).subscribe(function (res3) {
                        _this.invited_user_count = res3;
                        _this.mail_not_readed_count = _this.invited_user_count - _this.mail_viewed_count - _this.mail_response_count - _this.survey_completed_count;
                        _this.Stats = [];
                        if (_this.mail_viewed_count != 0) {
                            _this.Stats.push({ case: "Mail Readed", count: _this.mail_viewed_count });
                        }
                        if (_this.mail_not_readed_count != 0) {
                            _this.Stats.push({ case: "Mail Not Readed", count: _this.mail_not_readed_count });
                        }
                        if (_this.mail_response_count != 0) {
                            _this.Stats.push({ case: "Mail Responsed", count: _this.mail_response_count });
                        }
                        if (_this.survey_completed_count != 0) {
                            _this.Stats.push({ case: "Survey Completed", count: _this.survey_completed_count });
                        }
                        _this.initSvg();
                        _this.drawPie();
                    });
                });
            });
        });
        // ---------------------------------End-------------------------------------------
    };
    NewpieComponent.prototype.initSvg = function () {
        this.color = d3Scale.scaleOrdinal()
            .range(["#ff6666", "#5cd65c", "#ffff66", "#4d94ff"]);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        this.pie = d3Shape.pie()
            .sort(null)
            .value(function (d) { return d.count; });
        this.svg = d3.select("svg")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    };
    NewpieComponent.prototype.drawPie = function () {
        var _this = this;
        var g = this.svg.selectAll(".arc")
            .data(this.pie(this.Stats))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path").attr("d", this.arc)
            .style("fill", function (d) { return _this.color(d.data.case); });
        g.append("text").attr("transform", function (d) { return "translate(" + _this.labelArc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .text(function (d) { return d.data.case; });
    };
    NewpieComponent = __decorate([
        core_1.Component({
            selector: 'app-newpie',
            template: __webpack_require__("../../../../../src/app/components/newpie/newpie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/newpie/newpie.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute])
    ], NewpieComponent);
    return NewpieComponent;
}());
exports.NewpieComponent = NewpieComponent;


/***/ }),

/***/ "../../../../../src/app/components/reference-component/reference-component.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}", ""]);

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
exports.push([module.i, "body {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #282c37;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n        padding-top: 20px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #ea5a5a !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n\r\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {\r\n    background-color: #ea5a5a;\r\n    border-color: #337ab7;\r\n}", ""]);

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
exports.push([module.i, "body {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.notify {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #2882f7;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n}\r\n\r\n\r\n.notify-count{\r\n    position: absolute;\r\n    top: -9px;\r\n    right: -8px;\r\n    background: #DE2413;\r\n    height: 15px;\r\n    width: 15px;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    line-height: 14px;\r\n}\r\n.fa-bell{position:relative;}\r\n.media-object{width:100%;}\r\n\r\n\r\n\r\n.list-notificacao{\r\n    min-width: 400px;\r\n    background: #ffffff;\r\n    left:inherit;\r\n    right:0;\r\n  }\r\n  \r\n  .list-notificacao li{\r\n     border-bottom : 1px #d8d8d8 solid;\r\n     text-align    : justify;\r\n     padding       : 5px 10px 5px 10px;\r\n     cursor: pointer;\r\n     font-size: 12px;\r\n  }\r\n  \r\n  .list-notificacao li:hover{\r\n  background: #f1eeee;\r\n  }\r\n  \r\n  .list-notificacao li:hover .exclusaoNotificacao{\r\n  display: block;\r\n  }\r\n  \r\n  .list-notificacao li  p{\r\n   color: black;\r\n   width: 305px;\r\n  }\r\n  \r\n  .list-notificacao li .exclusaoNotificacao{\r\n      width: 25px;\r\n      min-height: 40px;\r\n      position: absolute;\r\n      right: 0;\r\n      display: none;\r\n  }\r\n  \r\n  .list-notificacao .media img{\r\n      width: 40px;\r\n      height: 40px;\r\n      float:left;\r\n      margin-right: 10px;\r\n  }\r\n  \r\n  .badgeAlert {\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    padding: 3px 5px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    line-height: 1;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    background-color: #d9534f;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    margin-top: -32px;\r\n    margin-left: 5px;\r\n  }\r\n  .notification{background-color:#fff !important;}", ""]);

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

/***/ "../../../../../src/app/components/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\r\n    width: 360px;\r\n    padding: 13% 0 0;\r\n    margin: auto;\r\n  }\r\n  .form {\r\n    position: relative;\r\n    z-index: 1;\r\n    background: #FFFFFF;\r\n    max-width: 360px;\r\n    margin: 0 auto 100px;\r\n    padding: 45px;\r\n    text-align: center;\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n        border-radius: 26px;\r\n  }\r\n  .form input {\r\n    font-family: \"Roboto\", sans-serif;\r\n    outline: 0;\r\n    background: #f2f2f2;\r\n    width: 100%;\r\n    border: 0;\r\n    margin: 0 0 0px;\r\n    padding: 15px;\r\n    box-sizing: border-box;\r\n    font-size: 14px;\r\n  }\r\n  \r\n  /* .form button:hover,.form button:active,.form button:focus {\r\n  \r\n  } */\r\n  .form .message {\r\n    margin: 15px 0 0;\r\n    color: #b3b3b3;\r\n    font-size: 12px;\r\n  }\r\n  .form .message a {\r\n    color: #4CAF50;\r\n    text-decoration: none;\r\n  }\r\n  .form .register-form {\r\n    display: none;\r\n  }\r\n  .login-body .container {\r\n    position: relative;\r\n    z-index: 1;\r\n    max-width: 300px;\r\n    margin: 0 auto;\r\n  }\r\n  .login-body .container:before, .container:after {\r\n    content: \"\";\r\n    display: block;\r\n    clear: both;\r\n  }\r\n  .login-body .container .info {\r\n    margin: 50px auto;\r\n    text-align: center;\r\n  }\r\n  .login-body .container .info h1 {\r\n    margin: 0 0 15px;\r\n    padding: 0;\r\n    font-size: 36px;\r\n    font-weight: 300;\r\n    color: #1a1a1a;\r\n  }\r\n  .container .info span {\r\n    color: #4d4d4d;\r\n    font-size: 12px;\r\n  }\r\n  .container .info span a {\r\n    color: #000000;\r\n    text-decoration: none;\r\n  }\r\n  .container .info span .fa {\r\n    color: #EF3B3A;\r\n  }\r\n \r\n  /* body {\r\n   \r\n    \r\n  } */\r\n  .input-group{margin-bottom:15px;}\r\n  .login-body .styles1 {\r\n      border: 0;\r\n      border-bottom: 1px solid #dbdbdb;\r\n      font-family: \"Roboto-Regular\";\r\n      background: none;\r\n      padding: 10px 0px;\r\n      font-size: 13px;\r\n      max-width: 400px;\r\n      width: 100%;\r\n         color: #5d5d5d !important;\r\n      float: left;\r\n  }\r\n  .login-body h2{font-family: \"Roboto-Bold\";text-align:center;color:#111;font-size:30px;    padding: 0;\r\n      line-height: 30px;}\r\n  \r\n  .login-body .input-group-addon{border-radius:0 !important;}\r\n  .login-body{background-color:#242833 !important;    height: 100vh;}\r\n  .login-body .input-group-addon{background-color:inherit !important;border:none !important;border-bottom: 1px solid #ccc !important;border-radius:0;padding-left:0 !important;}\r\n  .btn{    border-radius: 16px !important;    padding: 6px 22px !important;}\r\n  .omb_btn-facebook {background: #3b5998;width:100%;float:left;}\r\n  \r\n  .omb_btn-google {background: #c32f10;width:100%;float:left;}\r\n  .omb_socialButtons>a{color:#fff !important;}\r\n  .omb_socialButtons .col-sm-12{margin-bottom:10px;}\r\n  .hidden-xs{font-size:14px;}\r\n  .omb_socialButtons {\r\n      margin-top: 30px;\r\n      margin-bottom: 16px;\r\n  }\r\n  .login-body .fa{color:#d9534f;}\r\n  label{margin-bottom: 0;}\r\n  .form-control{box-shadow:none;}\r\n  .login-body .input-group-addon{    padding-left: 10px !important;}\r\n  .login-body .styles2 {\r\n    border: 0;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dbdbdb;\r\n    font-family: \"Roboto-Regular\";\r\n    background: none;\r\n    padding: 10px 0px;\r\n    font-size: 13px;\r\n    max-width: 400px;\r\n    width: 100%;\r\n    color: #5d5d5d !important;\r\n    float: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"login-body\">\n    <div class=\"login-page\">\n     <div class=\"form\">\n     <h2>Login</h2>\n     \n     <form class=\"login-form\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n \n       <div class=\"input-group form-group\">\n         <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n        <!-- <label class=\"styles1\">{{userEmail}}</label> -->\n        <label class=\"styles2\">{{userEmail}}</label>\n       </div>\n       \n       <div class=\"input-group form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\n        <input type=\"password\" placeholder=\"Password\" class=\"styles1 form-control\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\"/>\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n       </div>\n       \n      <br/>\n       <button type=\"submit\" class=\"btn btn-danger\">Sign In</button>\n       <div class=\"form-group\">\n         <div *ngIf=\"showError\" class=\"help-block\">{{msg}}</div>\n       </div> \n     <br/>\n     </form>\n    </div>\n   </div>\n </body>\n \n     \n     \n       \n \n     \n \n \n "

/***/ }),

/***/ "../../../../../src/app/components/user-login/user-login.component.ts":
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
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(route, userService, routes) {
        this.route = route;
        this.userService = userService;
        this.routes = routes;
        this.newLogin = {
            email: '',
            password: '',
        };
        this.showError = false;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.surveyId = params['id2'];
            _this.userId = params['id1'];
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get user email 
        // Params        : global user id
        // Returns       : user email
        // Author        : Rinsha
        // Date          : 08-01-2018
        // Last Modified : 08-01-2018, Rinsha
        // Desc          : Get company user id from url and fetch the email from 'user' collections
        this.userService.getuserEmail(this.userId).subscribe(function (data) {
            _this.userEmail = data;
            _this.newLogin.email = _this.userEmail;
        });
        // -----------------------------------End------------------------------------------
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : User Login
    // Params        : user username,user password from form
    // Returns       : Token, user id and role
    // Author        : Rinsha
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Rinsha
    // Desc          : 
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.userLogin(this.newLogin).subscribe(function (data) {
            if (data.success == false) {
                _this.showError = true;
                _this.msg = data.msg;
            }
            if (data.success) {
                _this.showError = false;
                _this.userService.storeUserData(data.token, data.user);
                // this.routes.navigate(['/survey', this.surveyId]);
            }
        });
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'user-login',
            template: __webpack_require__("../../../../../src/app/components/user-login/user-login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, user_service_1.UserService, router_1.Router])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;


/***/ }),

/***/ "../../../../../src/app/components/user-registration/password-validation.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password != confirmPassword) {
            // console.log('false');
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            // console.log('true');
            return null;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;


/***/ }),

/***/ "../../../../../src/app/components/user-registration/user-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 100%;\r\n}\r\n.control-label{padding-top:20px;}\r\n.panel-primary{border:none;}\r\n.control-label{color:#797979;}\r\n.names{padding:20px 16px;}\r\n.login-body{\r\nbackground-color: #242833 !important;\r\nheight: 100vh;\r\npadding:8% 0 ;\r\n}\r\n.form{\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 430px;\r\n  margin: 0 auto 100px;\r\n  padding: 5px 0;\r\n  text-align: left;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n  border-radius: 26px;\r\n}\r\n.control-label{float:left;}\r\n.panel{box-shadow:none;}\r\n.mat-form-field{width: 50%;}\r\n.names{padding:0 16px;}\r\n.login-body h2{\r\n  font-family: \"Roboto-Bold\";\r\n  text-align: center;\r\n  color: #111;\r\n  font-size: 30px;\r\n  padding: 0;\r\n  line-height: 30px;\r\n}\r\n.styles2{\r\nfont-family: \"Roboto-Regular\";\r\nbackground: none;\r\npadding:22px 0px 0px 0px;\r\nfont-size: 13px;}\r\n.text-cnrt{text-align:center;}\r\n.btn-danger{border-radius: 29px;padding: 9px 24px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-registration/user-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-body\">\n<div class=\"form\">\n    <flash-messages></flash-messages>\n    <br>\n    <div class=\"\">\n    <div class=\"panel panel-default panel-primary\">\n    <div class=\"panel-body\">\n    <form  [formGroup]=\"regFormGroup\" (ngSubmit)=\"regFormGroup.valid && userRegister()\" >\n    <div class=\"form-group example-container\">\n        <h2>Sign Up</h2>\n        <!-- <div class=\"col-md-12 names\">\n            <label class=\"col-xs-12\">Email : {{userEmail}}</label><br>\n        </div> -->\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <label class=\"control-label col-md-5 col-sm-5 col-xs-12\" >Email </label>\n            <!-- <mat-form-field > -->\n                    <label class=\"col-xs-12 col-md-6 col-sm-6 styles2\">{{userEmail}}</label><br>\n            <!-- </mat-form-field> -->\n        </div>\n\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <label class=\"control-label col-md-5 col-sm-5 col-xs-12\" >Name </label>\n            <mat-form-field [formGroup]=\"regFormGroup\">\n                <input matInput autofocus [(ngModel)]=\"newReg.name\" name=\"name\" required formControlName=\"nameValidation\">\n            </mat-form-field>\n        </div>\n\n        \n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <label class=\"control-label col-md-5 col-sm-5 col-xs-12\" >Password </label>\n            <mat-form-field [formGroup]=\"regFormGroup\">\n                <input matInput [(ngModel)]=\"newReg.password\" id=\"password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\"  required formControlName=\"password\" validateEqual=\"confirmPassword\" reverse=\"true\">\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                <mat-error>Password contain atleast 6 characters and should contain one number,one character and one special character</mat-error>\n                </mat-form-field>\n        </div>\n        <div class=\"clearfix\"></div>\n        \n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <label class=\"control-label col-md-5 col-sm-5 col-xs-12\" >Confirm Password </label>\n            <mat-form-field [formGroup]=\"regFormGroup\">\n                <input type=\"password\" matInput [(ngModel)]=\"Reg.confirmPassword\" reverse=\"false\" validateEqual=\"password\" name=\"confirmPassword\" required formControlName=\"confirmPassword\" id=\"confirmPassword\">\n                <mat-error>Password Not Match</mat-error>\n                </mat-form-field>\n        </div>\n        \n        <div class=\"clearfix\"></div>\n        <br>\n        <br>\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\n            <div class=\"col-md-12 col-sm-12 col-xs-6 text-cnrt\"> \n            <button type=\"submit\" class=\"btn btn-danger\">Sign Up</button>\n            </div>\n            <div class=\"text-danger text-center col-md-6 col-sm-3 col-xs-6\">\n                    {{msg}}\n            </div>\n        </div>\n    </div>\n    </form>\n    </div>\n    </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-registration/user-registration.component.ts":
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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var password_validation_1 = __webpack_require__("../../../../../src/app/components/user-registration/password-validation.ts");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(route, _formBuilder, userService, routes, _flashMessagesService, companyService) {
        this.route = route;
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.routes = routes;
        this._flashMessagesService = _flashMessagesService;
        this.companyService = companyService;
        this.hide = true;
        this.newReg = {
            email: '',
            name: '',
            password: '',
        };
        this.Reg = { confirmPassword: '' };
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.regFormGroup = this._formBuilder.group({
            nameValidation: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,}$/)],
            confirmPassword: ['', forms_1.Validators.required]
        }, {
            validator: password_validation_1.PasswordValidation.MatchPassword
        });
        this.sub = this.route.params.subscribe(function (params) {
            _this.surveyId = params['id2'];
            _this.userId = params['id1'];
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : Get user email 
        // Params        : company user id
        // Returns       : user email
        // Author        : Rinsha
        // Date          : 08-01-2018
        // Last Modified : 08-01-2018, Rinsha
        // Desc          : Get company user id from url and fetch the email from 'company' collections
        this.companyService.getuserEmail(this.userId).subscribe(function (data) {
            _this.userEmail = data;
            _this.newReg.email = _this.userEmail;
        });
        // -----------------------------------End------------------------------------------
    };
    // ---------------------------------Start-------------------------------------------
    // Function      : Register user
    // Params        : user data from the form
    // Returns       : status and token
    // Author        : Rinsha
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Rinsha
    // Desc          : 
    UserRegistrationComponent.prototype.userRegister = function () {
        var _this = this;
        this.userService.registration(this.newReg).subscribe(function (data) {
            if (data.success == true) {
                _this.userService.storeUserData(data.token, data.user);
                _this._flashMessagesService.show('Account created successfully', { cssClass: 'alert-success', timeout: 4000 });
                setTimeout(function () {
                    //  this.routes.navigate(['/survey', this.surveyId]);
                }, 4000);
            }
            else {
                _this.msg = data.msg;
                _this._flashMessagesService.show('Some error occured', { cssClass: 'alert-danger', timeout: 4000 });
                //  setTimeout(() => {  
                //    // this.routes.navigate(['/404']);
                //  }, 4000);
            }
        });
    };
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: 'user-registration',
            template: __webpack_require__("../../../../../src/app/components/user-registration/user-registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-registration/user-registration.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, forms_1.FormBuilder, user_service_1.UserService, router_1.Router, angular2_flash_messages_1.FlashMessagesService, company_service_1.CompanyService])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/components/user-response-email/user-response-email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-response-email/user-response-email.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-response-email works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/user-response-email/user-response-email.component.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var UserResponseEmailComponent = /** @class */ (function () {
    function UserResponseEmailComponent(route, companyService, userService, routes) {
        this.route = route;
        this.companyService = companyService;
        this.userService = userService;
        this.routes = routes;
    }
    UserResponseEmailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.surveyId = params['id1'];
            _this.userId = params['id2'];
        });
        // ---------------------------------Start-------------------------------------------
        // Function      : change mail response status 
        // Params        : company user id and survey id
        // Returns       : 
        // Author        : Rinsha
        // Date          : 09-01-2018
        // Last Modified : 09-01-2018, Rinsha
        // Desc          : change mail response status when the user click the link in email
        this.companyService.changeMailResponseStatus(this.userId, this.surveyId).subscribe(function (data) {
        });
        // ---------------------------------End-------------------------------------------
        // ---------------------------------Start-------------------------------------------
        // Function      : Get user email 
        // Params        : company user id
        // Returns       : user details
        // Author        : Rinsha
        // Date          : 05-01-2018
        // Last Modified : 05-01-2018, Rinsha
        // Desc          : Get company user id from url and fetch the email from 'company' collections
        this.companyService.getuserEmail(this.userId).subscribe(function (data) {
            _this.userEmail = data;
            // ---------------------------------Start-------------------------------------------
            // Function      : Get user email from user collection
            // Params        : user email registered by company
            // Returns       : staus and global user id
            // Author        : Rinsha
            // Date          : 05-01-2018
            // Last Modified : 05-01-2018, Rinsha
            // Desc          : Check whether the company registered email id is registered globally
            _this.userService.checkEmail(_this.userEmail).subscribe(function (data) {
                if (data.success) {
                    _this.routes.navigate(['/user-login', data.user_id, _this.surveyId]);
                }
                else {
                    _this.routes.navigate(['user-register', _this.userId, _this.surveyId]);
                }
            });
            // -----------------------------------End------------------------------------------
        });
        // -----------------------------------End------------------------------------------
    };
    UserResponseEmailComponent = __decorate([
        core_1.Component({
            selector: 'user-response-email',
            template: __webpack_require__("../../../../../src/app/components/user-response-email/user-response-email.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user-response-email/user-response-email.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, company_service_1.CompanyService, user_service_1.UserService, router_1.Router])
    ], UserResponseEmailComponent);
    return UserResponseEmailComponent;
}());
exports.UserResponseEmailComponent = UserResponseEmailComponent;
// ---------------------------------Start-------------------------------------------
// Function      : Get user email 
// Params        : company user id
// Returns       : 
// Author        : Rinsha
// Date          : 29-12-2017
// Last Modified : 29-12-2017, Rinsha
// Desc          : 
// -----------------------------------End------------------------------------------


/***/ }),

/***/ "../../../../../src/app/config/config.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
        this.siteUrl = "http://localhost:3000";
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var AdminService = /** @class */ (function () {
    function AdminService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/admin/';
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
        return this.http.post(this.serviceUrl + "/login", admin, { headers: h })
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var CompanyService = /** @class */ (function () {
    function CompanyService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/company/';
    }
    CompanyService.prototype.setHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    CompanyService.prototype.setHeaderWithAuthorization = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    CompanyService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    // ---------------------------------Start-----------------------------------------------
    // Function      : Get all organization type
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : 
    CompanyService.prototype.getAllOrgType = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getAllOrgType", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Get all industry
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : 
    CompanyService.prototype.getAllIndustry = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getAllIndustry", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Get all survey attenders
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : 
    CompanyService.prototype.getAllSurveyAttenders = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getAllSurveyAttenders", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Registration
    // Params        : Company data from the form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Rinsha
    // Desc          : 
    CompanyService.prototype.registration = function (company) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "register", company, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Company verification
    // Params        : verification id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Rinsha
    // Desc          : 
    CompanyService.prototype.verifyCompany = function (verif_id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "companyVerification/" + verif_id, { headers: h })
            .map(function (response) { return response.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Get company details by id
    // Params        : id
    // Returns       : company details
    // Author        : Rinsha
    // Date          : 02-1-2018
    // Last Modified : 02-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getCompanyDetailsById = function (id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getCompanyDetails/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Generate token
    // Params        : company id
    // Returns       : jwt token
    // Author        : Rinsha
    // Date          : 28-12-2017
    // Last Modified : 28-12-2017, Rinsha
    // Desc          : 
    CompanyService.prototype.generateToken = function (id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "generateToken/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Store User Data
    // Params        : Token, admin id and role
    // Returns       : 
    // Author        : Rinsha
    // Date          : 27-12-2017
    // Last Modified : 27-12-2017, Rinsha
    // Desc          : To locally store admin data
    CompanyService.prototype.storeUserData = function (token, company) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('company', JSON.stringify(company));
        this.authToken = token;
        this.company = company;
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Register additional information 
    // Params        : Company id and data from the form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 03-01-2018
    // Last Modified : 03-01-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.registerAdditnInfo = function (id, company) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "registerAdditnInfo/" + id, company, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Login
    // Params        : username and password
    // Returns       : token, company details and company status
    // Author        : Rinsha
    // Date          : 01-1-2018
    // Last Modified : 01-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.authenticateCompany = function (company) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "authenticate", company, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Subscribe
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 03-1-2018
    // Last Modified : 03-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.subscribeCompany = function () {
        var h = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + "subscribe", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Get logged user details
    // Params        : 
    // Returns       : get details of logged in entity
    // Author        : Rinsha
    // Date          : 03-01-2018
    // Last Modified : 03-01-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getLoggedUSerDetails = function () {
        var h = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getLoggedinCompany', { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Logout
    // Params        : 
    // Returns       : 
    // Author        : Rinsha
    // Date          : 03-1-2018
    // Last Modified : 03-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.logout = function () {
        this.authToken = null;
        this.company = null;
        localStorage.clear();
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Get company details
    // Params        : 
    // Returns       : Login company details
    // Author        : Rinsha
    // Date          : 04-1-2018
    // Last Modified : 04-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getMyCompany = function () {
        var h = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'getCompanyDetails', { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Update profile
    // Params        : Data from form
    // Returns       : 
    // Author        : Rinsha
    // Date          : 03-1-2018
    // Last Modified : 03-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.updateCompany = function (company) {
        var h = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'updateCompany', company, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get all user groups
    // Params        : 
    // Returns       : list of user groups with details
    // Author        : Yasir Poongadan
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Yasir Poongadan
    // Desc          : all user groups of specific company
    CompanyService.prototype.getAllUserGroup = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + 'get-all-groups', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : update Users
    // Params        : users and group arrays
    // Returns       : status and message
    // Author        : Yasir Poongadan
    // Date          : 01-01-2018
    // Last Modified : 01-01-2018, Yasir Poongadan
    // Desc          : update Users
    CompanyService.prototype.updateUser = function (data) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.put(this.serviceUrl + 'update-users', data, { headers: headers })
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
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'add-users', data, { headers: headers })
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
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'add-user-group', JSON.stringify({ group: group }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get user email 
    // Params        : company user id
    // Returns       : user details
    // Author        : Rinsha
    // Date          : 05-01-2018
    // Last Modified : 05-01-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getuserEmail = function (userId) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getUserEmailByID/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : change mail response status 
    // Params        : company user id and survey id
    // Returns       : 
    // Author        : Rinsha
    // Date          : 09-01-2018
    // Last Modified : 09-01-2018, Rinsha
    // Desc          : change mail response status when the user click the link in email
    CompanyService.prototype.changeMailResponseStatus = function (userId, surveyId) {
        var headers = this.setHeaderWithAuthorization();
        return this.http.post(this.serviceUrl + 'changeMailResponseStatus/' + surveyId, JSON.stringify({ userId: userId }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all Mail responsed users
    // Params        : 
    // Returns       : count of mail responsed users
    // Author        : Rinsha
    // Date          : 10-1-2018
    // Last Modified : 11-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getMailResponseCount = function (data) {
        var id = data.id;
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + "getMailResponseCount/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all Mail viewed users
    // Params        : 
    // Returns       : count of mail viewed users
    // Author        : Rinsha
    // Date          : 10-1-2018
    // Last Modified : 11-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getMailViewedCount = function (data) {
        var id = data.id;
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + "getMailViewedCount/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all survey completed users
    // Params        : 
    // Returns       : count of survey completed users
    // Author        : Rinsha
    // Date          : 10-1-2018
    // Last Modified : 11-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getSurveyCompletedCount = function (data) {
        var id = data.id;
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + "getSurveyCompletedCount/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all invited users
    // Params        : 
    // Returns       : count of invited users
    // Author        : Rinsha
    // Date          : 10-1-2018
    // Last Modified : 11-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getInvitedUserCount = function (data) {
        var id = data.id;
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + "getInvitedUserCount/" + id, { headers: headers })
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

/***/ "../../../../../src/app/services/user.service.ts":
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var UserService = /** @class */ (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
        this.serviceUrl = config.siteUrl + '/user/';
    }
    UserService.prototype.setHeader = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    UserService.prototype.setHeaderWithAuthorization = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    UserService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    // ---------------------------------Start-----------------------------------------------
    // Function      : Get user email from user collection
    // Params        : user email registered by company
    // Returns       : staus and global user id
    // Author        : Rinsha
    // Date          : 05-01-2018
    // Last Modified : 05-01-2018, Rinsha
    // Desc          : Check whether the company registered email id is registered globally
    UserService.prototype.checkEmail = function (email) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "checkEmail/" + email, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start------------------------------------------------
    // Function      : Registration
    // Params        : User data from the form
    // Returns       : status and token
    // Author        : Rinsha
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Rinsha
    // Desc          : 
    UserService.prototype.registration = function (user) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "register", JSON.stringify(user), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Store User Data
    // Params        : Token, admin id and role
    // Returns       : 
    // Author        : Rinsha
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Rinsha
    // Desc          : To locally store admin data
    UserService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : User Login
    // Params        : user username,user password from form
    // Returns       : Token, user id and role
    // Author        : Rinsha
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Rinsha
    // Desc          : 
    UserService.prototype.userLogin = function (user) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/login", user, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End-----------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Get user email 
    // Params        : global user id
    // Returns       : user email
    // Author        : Rinsha
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Rinsha
    // Desc          : 
    UserService.prototype.getuserEmail = function (userId) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + 'getUserEmailByID/' + userId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.Config])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/services/xlsx-to-json.service.ts":
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
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var _ = __webpack_require__("../../../../lodash/lodash.js");
var XLSX = __webpack_require__("../../../../ts-xlsx/lib/main.browser.js");
var XlsxToJsonService = /** @class */ (function () {
    function XlsxToJsonService() {
    }
    XlsxToJsonService.prototype.processFileToJson = function (object, file) {
        var reader = new FileReader();
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            reader.onload = function (e) {
                var data = e.target['result'];
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });
                object.sheets = _this.parseWorksheet(workbook, true, true);
                observer.next(object);
                observer.complete();
            };
            reader.readAsBinaryString(file);
        });
    };
    XlsxToJsonService.prototype.parseWorksheet = function (workbook, readCells, toJSON) {
        if (toJSON === true) {
            return this.to_json(workbook);
        }
        var sheets = {};
        _.forEachRight(workbook.SheetNames, function (sheetName) {
            var sheet = workbook.Sheets[sheetName];
            sheets[sheetName] = this.parseSheet(sheet, readCells);
        });
        return sheets;
    };
    XlsxToJsonService.prototype.parseSheet = function (sheet, readCells) {
        var range = XLSX.utils.decode_range(sheet['!ref']);
        var sheetData = [];
        if (readCells === true) {
            _.forEachRight(_.range(range.s.r, range.e.r + 1), function (row) {
                var rowData = [];
                _.forEachRight(_.range(range.s.c, range.e.c + 1), function (column) {
                    var cellIndex = XLSX.utils.encode_cell({
                        'c': column,
                        'r': row
                    });
                    var cell = sheet[cellIndex];
                    rowData[column] = cell ? cell.v : undefined;
                });
                sheetData[row] = rowData;
            });
        }
        return {
            'sheet': sheetData,
            'name': sheet.name,
            'col_size': range.e.c + 1,
            'row_size': range.e.r + 1
        };
    };
    XlsxToJsonService.prototype.to_json = function (workbook) {
        var result = {};
        workbook.SheetNames.forEach(function (sheetName) {
            var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
            if (roa.length > 0) {
                result[sheetName] = roa;
            }
        });
        return result;
    };
    XlsxToJsonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], XlsxToJsonService);
    return XlsxToJsonService;
}());
exports.XlsxToJsonService = XlsxToJsonService;


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