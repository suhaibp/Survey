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
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var animations_2 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
__webpack_require__("../../../../hammerjs/hammer.js");
var xlsx_to_json_service_1 = __webpack_require__("../../../../../src/app/services/xlsx-to-json.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var top_bar_component_1 = __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.ts");
var side_bar_component_1 = __webpack_require__("../../../../../src/app/components/side-bar/side-bar.component.ts");
var reference_component_component_1 = __webpack_require__("../../../../../src/app/components/reference-component/reference-component.component.ts");
var admin_side_bar_component_1 = __webpack_require__("../../../../../src/app/components/admin-side-bar/admin-side-bar.component.ts");
var admin_top_bar_component_1 = __webpack_require__("../../../../../src/app/components/admin-top-bar/admin-top-bar.component.ts");
var admin_manage_survey_category_component_1 = __webpack_require__("../../../../../src/app/components/admin-manage-survey-category/admin-manage-survey-category.component.ts");
var admin_manage_organization_type_component_1 = __webpack_require__("../../../../../src/app/components/admin-manage-organization-type/admin-manage-organization-type.component.ts");
var admin_manage_industry_component_1 = __webpack_require__("../../../../../src/app/components/admin-manage-industry/admin-manage-industry.component.ts");
var admin_manage_survey_attender_type_component_1 = __webpack_require__("../../../../../src/app/components/admin-manage-survey-attender-type/admin-manage-survey-attender-type.component.ts");
var company_users_component_1 = __webpack_require__("../../../../../src/app/components/company-users/company-users.component.ts");
var company_sidebar_component_1 = __webpack_require__("../../../../../src/app/components/company-sidebar/company-sidebar.component.ts");
var company_top_bar_component_1 = __webpack_require__("../../../../../src/app/components/company-top-bar/company-top-bar.component.ts");
var company_manage_user_groups_component_1 = __webpack_require__("../../../../../src/app/components/company-manage-user-groups/company-manage-user-groups.component.ts");
var admin_login_component_1 = __webpack_require__("../../../../../src/app/components/admin-login/admin-login.component.ts");
var admin_chatd3_component_1 = __webpack_require__("../../../../../src/app/components/admin-chatd3/admin-chatd3.component.ts");
var admin_chatd3pie_component_1 = __webpack_require__("../../../../../src/app/components/admin-chatd3pie/admin-chatd3pie.component.ts");
var admin_users_component_1 = __webpack_require__("../../../../../src/app/components/admin-users/admin-users.component.ts");
var admin_dashboard_component_1 = __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts");
var admin_company_component_1 = __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.ts");
var admin_all_companies_component_1 = __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts");
var admin_subscribed_component_1 = __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts");
var admin_trial_component_1 = __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.ts");
var admin_not_verified_component_1 = __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts");
var admin_expired_component_1 = __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.ts");
var admin_company_active_component_1 = __webpack_require__("../../../../../src/app/components/admin-company-active/admin-company-active.component.ts");
var admin_company_blocked_component_1 = __webpack_require__("../../../../../src/app/components/admin-company-blocked/admin-company-blocked.component.ts");
var admin_company_deleted_component_1 = __webpack_require__("../../../../../src/app/components/admin-company-deleted/admin-company-deleted.component.ts");
var admin_header_title_component_1 = __webpack_require__("../../../../../src/app/components/admin-header-title/admin-header-title.component.ts");
var admin_all_users_component_1 = __webpack_require__("../../../../../src/app/components/admin-all-users/admin-all-users.component.ts");
var admin_active_users_component_1 = __webpack_require__("../../../../../src/app/components/admin-active-users/admin-active-users.component.ts");
var admin_blocked_users_component_1 = __webpack_require__("../../../../../src/app/components/admin-blocked-users/admin-blocked-users.component.ts");
var admin_deleted_users_component_1 = __webpack_require__("../../../../../src/app/components/admin-deleted-users/admin-deleted-users.component.ts");
var admin_request_users_component_1 = __webpack_require__("../../../../../src/app/components/admin-request-users/admin-request-users.component.ts");
var company_login_component_1 = __webpack_require__("../../../../../src/app/components/company-login/company-login.component.ts");
var company_registration_component_1 = __webpack_require__("../../../../../src/app/components/company-registration/company-registration.component.ts");
var company_additn_info_component_1 = __webpack_require__("../../../../../src/app/components/company-additn-info/company-additn-info.component.ts");
var company_expired_page_component_1 = __webpack_require__("../../../../../src/app/components/company-expired-page/company-expired-page.component.ts");
var company_email_verification_component_1 = __webpack_require__("../../../../../src/app/components/company-email-verification/company-email-verification.component.ts");
var company_profile_component_1 = __webpack_require__("../../../../../src/app/components/company-profile/company-profile.component.ts");
var user_response_email_component_1 = __webpack_require__("../../../../../src/app/components/user-response-email/user-response-email.component.ts");
var user_login_component_1 = __webpack_require__("../../../../../src/app/components/user-login/user-login.component.ts");
var user_registration_component_1 = __webpack_require__("../../../../../src/app/components/user-registration/user-registration.component.ts");
var newpie_component_1 = __webpack_require__("../../../../../src/app/components/newpie/newpie.component.ts");
var page_not_found_component_1 = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
__webpack_require__("../../../../hammerjs/hammer.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var table_1 = __webpack_require__("../../../cdk/esm5/table.es5.js");
var appRoutes = [
    { path: '', component: reference_component_component_1.ReferenceComponentComponent },
    { path: '', redirectTo: '/reference', pathMatch: 'full' },
    { path: 'top-bar', component: top_bar_component_1.TopBarComponent },
    { path: 'side-bar', component: side_bar_component_1.SideBarComponent },
    { path: 'admin-side-bar', component: admin_side_bar_component_1.AdminSideBarComponent },
    { path: 'admin-top-bar', component: admin_top_bar_component_1.AdminTopBarComponent },
    { path: 'app-company-sidebar', component: company_sidebar_component_1.CompanySidebarComponent },
    { path: 'app-company-top-bar', component: company_top_bar_component_1.CompanyTopBarComponent },
    { path: 'manage-survey-category', component: admin_manage_survey_category_component_1.AdminManageSurveyCategoryComponent },
    { path: 'admin-manage-industry', component: admin_manage_industry_component_1.AdminManageIndustryComponent },
    { path: 'admin-manage-organization-type', component: admin_manage_organization_type_component_1.AdminManageOrganizationTypeComponent },
    { path: 'admin-manage-survey-attender-type', component: admin_manage_survey_attender_type_component_1.AdminManageSurveyAttenderTypeComponent },
    { path: 'company-users', component: company_users_component_1.CompanyUsersComponent },
    { path: 'company-manage-user-groups', component: company_manage_user_groups_component_1.CompanyManageUserGroupsComponent },
    { path: 'reference', component: reference_component_component_1.ReferenceComponentComponent },
    { path: 'admin-login', component: admin_login_component_1.AdminLoginComponent },
    { path: 'admin-dashboard', component: admin_dashboard_component_1.AdminDashboardComponent },
    { path: 'admin-company', component: admin_company_component_1.AdminCompanyComponent },
    { path: 'admin-all-companies', component: admin_all_companies_component_1.AdminAllCompaniesComponent },
    { path: 'admin-subscribed', component: admin_subscribed_component_1.AdminSubscribedComponent },
    { path: 'admin-trial', component: admin_trial_component_1.AdminTrialComponent },
    { path: 'admin-not-verified', component: admin_not_verified_component_1.AdminNotVerifiedComponent },
    { path: 'admin-expired', component: admin_expired_component_1.AdminExpiredComponent },
    { path: 'admin-company-blocked', component: admin_company_blocked_component_1.AdminCompanyBlockedComponent },
    { path: 'admin-company-deleted', component: admin_company_deleted_component_1.AdminCompanyDeletedComponent },
    { path: 'admin-users', component: admin_users_component_1.AdminUsersComponent },
    { path: 'admin-all-users', component: admin_all_users_component_1.AdminAllUsersComponent },
    { path: 'admin-blocked-users', component: admin_blocked_users_component_1.AdminBlockedUsersComponent },
    { path: 'admin-company-active', component: admin_company_active_component_1.AdminCompanyActiveComponent },
    { path: 'admin-deleted-users', component: admin_deleted_users_component_1.AdminDeletedUsersComponent },
    { path: 'admin-request-users', component: admin_request_users_component_1.AdminRequestUsersComponent },
    { path: 'admin-chartd3', component: admin_chatd3_component_1.AdminChatd3Component },
    { path: 'admin-chatd3pie', component: admin_chatd3_component_1.AdminChatd3Component },
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
    { path: '404', component: page_not_found_component_1.PageNotFoundComponent },
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
                admin_side_bar_component_1.AdminSideBarComponent,
                admin_top_bar_component_1.AdminTopBarComponent,
                admin_manage_survey_category_component_1.AdminManageSurveyCategoryComponent,
                admin_manage_organization_type_component_1.AdminManageOrganizationTypeComponent,
                admin_manage_industry_component_1.AdminManageIndustryComponent,
                admin_manage_survey_attender_type_component_1.AdminManageSurveyAttenderTypeComponent,
                company_users_component_1.CompanyUsersComponent,
                company_sidebar_component_1.CompanySidebarComponent,
                company_top_bar_component_1.CompanyTopBarComponent,
                company_manage_user_groups_component_1.CompanyManageUserGroupsComponent,
                admin_login_component_1.AdminLoginComponent,
                admin_users_component_1.AdminUsersComponent,
                admin_dashboard_component_1.AdminDashboardComponent,
                admin_company_component_1.AdminCompanyComponent,
                admin_all_companies_component_1.AdminAllCompaniesComponent,
                admin_subscribed_component_1.AdminSubscribedComponent,
                admin_trial_component_1.AdminTrialComponent,
                admin_not_verified_component_1.AdminNotVerifiedComponent,
                admin_expired_component_1.AdminExpiredComponent,
                admin_company_blocked_component_1.AdminCompanyBlockedComponent,
                admin_company_deleted_component_1.AdminCompanyDeletedComponent,
                admin_company_active_component_1.AdminCompanyActiveComponent,
                admin_header_title_component_1.AdminHeaderTitleComponent,
                admin_all_users_component_1.AdminAllUsersComponent,
                admin_active_users_component_1.AdminActiveUsersComponent,
                admin_blocked_users_component_1.AdminBlockedUsersComponent,
                admin_deleted_users_component_1.AdminDeletedUsersComponent,
                admin_request_users_component_1.AdminRequestUsersComponent,
                admin_chatd3_component_1.AdminChatd3Component,
                admin_chatd3pie_component_1.AdminChatd3pieComponent,
                company_login_component_1.CompanyLoginComponent,
                company_registration_component_1.CompanyRegistrationComponent,
                company_additn_info_component_1.CompanyAdditnInfoComponent,
                company_expired_page_component_1.CompanyExpiredPageComponent,
                company_email_verification_component_1.CompanyEmailVerificationComponent,
                company_profile_component_1.CompanyProfileComponent,
                user_response_email_component_1.UserResponseEmailComponent,
                user_login_component_1.UserLoginComponent,
                user_registration_component_1.UserRegistrationComponent,
                newpie_component_1.NewpieComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                animations_1.BrowserAnimationsModule,
                animations_2.NoopAnimationsModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                DemoMaterialModule,
                material_1.MatNativeDateModule,
                angular2_flash_messages_1.FlashMessagesModule.forRoot(),
                router_1.RouterModule.forRoot(appRoutes),
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

/***/ "../../../../../src/app/components/admin-active-users/admin-active-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-active-users/admin-active-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <div *ngIf=\"notExist\"><h4>No Users Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n     <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"username\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>USER NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\" (click)=\"deleteUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\" (click)=\"blockUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\" (click)=\"unblockUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-active-users/admin-active-users.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminActiveUsersComponent = /** @class */ (function () {
    function AdminActiveUsersComponent(adminService, routes) {
        this.adminService = adminService;
        this.routes = routes;
        this.displayedColumns = ['slno', 'username', 'email', 'action'];
        this.notExist = false;
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All active users, delete,block,unblock
    AdminActiveUsersComponent.prototype.refresh = function () {
        var _this = this;
        var users = [];
        this.adminService.getAllactiveusers().subscribe(function (data) {
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new material_1.MatTableDataSource(data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminActiveUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get logged user details
        // Params        : 
        // Returns       : user details
        // Author        : Rinsha
        // Date          : 16-1-2018
        // Last Modified : 16-1-2018, Rinsha
        // Desc          :
        this.adminService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role == "user") {
                if (info.delete_status == true || info.block_status == true) {
                    _this.routes.navigate(['/404']);
                }
                _this.routes.navigate(['/survey', info.surveyId]);
            }
            if (info.role == "company") {
                if (info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified") {
                    _this.routes.navigate(['/clogin']);
                }
                if (info.cmp_status == "Expired") {
                    _this.routes.navigate(['/expired']);
                }
                if (info.is_profile_completed == false) {
                    _this.routes.navigate(['/additnInfo', info._id]);
                }
                _this.routes.navigate(['/dashboard']);
            }
        });
        // ---------------------------------End-------------------------------------------
        this.refresh();
    };
    AdminActiveUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //delete user
    AdminActiveUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.adminService.deleteUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block User
    AdminActiveUsersComponent.prototype.blockUser = function (id) {
        var _this = this;
        this.adminService.blockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock User
    AdminActiveUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.adminService.unblockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminActiveUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminActiveUsersComponent.prototype, "sort", void 0);
    AdminActiveUsersComponent = __decorate([
        core_1.Component({
            selector: 'admin-active-users',
            template: __webpack_require__("../../../../../src/app/components/admin-active-users/admin-active-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-active-users/admin-active-users.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminActiveUsersComponent);
    return AdminActiveUsersComponent;
}());
exports.AdminActiveUsersComponent = AdminActiveUsersComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }\r\n  .filter{\r\n    width: 5%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\">\r\n  \r\n    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n      <!-- <mat-option>None</mat-option> -->\r\n      <mat-option value=\"all\">All</mat-option>\r\n      <mat-option value=\"Active\">Active</mat-option>\r\n      <mat-option value=\"Block\">Block</mat-option>\r\n      <mat-option value=\"Delete\">Delete </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  \r\n  <!-- <p>You selected: {{selected}} </p> -->\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"companystatus\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_status}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <div *ngIf=\"row.block_status==false && row.delete_status==false\"> Active</div>\r\n          <div *ngIf=\"row.block_status==true && row.delete_status==false\"> Blocked</div>\r\n          <div *ngIf=\" row.delete_status==true\"> Deleted</div>\r\n        </mat-cell>\r\n      </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\" (click)=\"deleteCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\" (click)=\"blockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\" (click)=\"unblockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-all-companies/admin-all-companies.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminAllCompaniesComponent = /** @class */ (function () {
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017 
    // Last Modified : 03-01-2018
    // Desc          : All users
    function AdminAllCompaniesComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactperson', 'contactnumber', 'companystatus', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
    }
    AdminAllCompaniesComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllblockedcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAlldeletedcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
    };
    AdminAllCompaniesComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new material_1.MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminAllCompaniesComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminAllCompaniesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //delete company
    AdminAllCompaniesComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block company
    AdminAllCompaniesComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock company
    AdminAllCompaniesComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminAllCompaniesComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminAllCompaniesComponent.prototype, "sort", void 0);
    AdminAllCompaniesComponent = __decorate([
        core_1.Component({
            selector: 'admin-all-companies',
            template: __webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-all-companies/admin-all-companies.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminAllCompaniesComponent);
    return AdminAllCompaniesComponent;
}());
exports.AdminAllCompaniesComponent = AdminAllCompaniesComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-all-users/admin-all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-tooltip-host {\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 50px;\r\n  }\r\n  \r\n  .example-select {\r\n    margin: 0 10px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-all-users/admin-all-users.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <div *ngIf=\"notExist\"><h4>No Users Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"username\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>USER NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <div *ngIf=\"row.block_status==false && row.delete_status==false\"> Active</div>\r\n          <div *ngIf=\"row.block_status==true && row.delete_status==false\"> Blocked</div>\r\n          <div *ngIf=\" row.delete_status==true\"> Deleted</div>\r\n        </mat-cell>\r\n      </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\"  (click)=\"deleteUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\" (click)=\"blockUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\" (click)=\"unblockUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-all-users/admin-all-users.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminAllUsersComponent = /** @class */ (function () {
    function AdminAllUsersComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'username', 'email', 'status', 'action'];
        this.notExist = false;
        this.position = 'before';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017 
    // Last Modified : 
    // Desc          : All users, delete,block,unblock
    AdminAllUsersComponent.prototype.refresh = function () {
        var _this = this;
        var users = [];
        this.adminService.getAllusers().subscribe(function (data) {
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new material_1.MatTableDataSource(data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminAllUsersComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminAllUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //delete user
    AdminAllUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.adminService.deleteUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block User
    AdminAllUsersComponent.prototype.blockUser = function (id) {
        var _this = this;
        this.adminService.blockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock User
    AdminAllUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.adminService.unblockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminAllUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminAllUsersComponent.prototype, "sort", void 0);
    AdminAllUsersComponent = __decorate([
        core_1.Component({
            selector: 'admin-all-users',
            template: __webpack_require__("../../../../../src/app/components/admin-all-users/admin-all-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-all-users/admin-all-users.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminAllUsersComponent);
    return AdminAllUsersComponent;
}());
exports.AdminAllUsersComponent = AdminAllUsersComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-blocked-users/admin-blocked-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-blocked-users/admin-blocked-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <div *ngIf=\"notExist\"><h4>No Users Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"username\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>USER NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n  \r\n      <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\" (click)=\"deleteUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              \r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\"  (click)=\"unblockUser(row.email)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-blocked-users/admin-blocked-users.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminBlockedUsersComponent = /** @class */ (function () {
    function AdminBlockedUsersComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'username', 'email', 'action'];
        this.notExist = false;
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin blockuser management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All block users, delete,unblock
    AdminBlockedUsersComponent.prototype.refresh = function () {
        var _this = this;
        var users = [];
        this.adminService.getAllblockusers().subscribe(function (data) {
            // console.log(data);
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new material_1.MatTableDataSource(data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminBlockedUsersComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminBlockedUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //delete user
    AdminBlockedUsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.adminService.deleteUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock User
    AdminBlockedUsersComponent.prototype.unblockUser = function (id) {
        var _this = this;
        this.adminService.unblockUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminBlockedUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminBlockedUsersComponent.prototype, "sort", void 0);
    AdminBlockedUsersComponent = __decorate([
        core_1.Component({
            selector: 'admin-blocked-users',
            template: __webpack_require__("../../../../../src/app/components/admin-blocked-users/admin-blocked-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-blocked-users/admin-blocked-users.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminBlockedUsersComponent);
    return AdminBlockedUsersComponent;
}());
exports.AdminBlockedUsersComponent = AdminBlockedUsersComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-chatd3/admin-chatd3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.bar {\r\n  fill: steelblue;\r\n}\r\n\r\n.bar:hover {\r\n  fill: brown;\r\n}\r\n\r\n.axis-title {\r\n  fill: none;\r\n  stroke: black;\r\n  stroke-width: 0.5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-chatd3/admin-chatd3.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h1>{{title}}</h1>\r\n<!-- <h2>{{subtitle}}</h2> -->\r\n<svg width=\"960\" height=\"500\"></svg>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-chatd3/admin-chatd3.component.ts":
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
var d3Array = __webpack_require__("../../../../d3-array/index.js");
var d3Axis = __webpack_require__("../../../../d3-axis/index.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var AdminChatd3Component = /** @class */ (function () {
    function AdminChatd3Component(adminService, router, config) {
        this.adminService = adminService;
        this.router = router;
        this.config = config;
        this.title = 'Company Vs Survey';
        // subtitle = 'Bar Chart';
        this.barchart = [];
        this.margin = { top: 20, right: 20, bottom: 30, left: 40 };
        this.socket = socketIo(config.siteUrl);
    }
    AdminChatd3Component.prototype.refresh = function () {
        var _this = this;
        this.adminService.getchartbar().subscribe(function (data) {
            _this.barchart = [];
            data.forEach(function (elm) {
                console.log(elm);
                if (elm.count != 0) {
                    _this.barchart.push({ company: elm._id, count: (elm.count) });
                }
            });
            _this.initSvg();
            _this.initAxis();
            _this.drawAxis();
            _this.drawBars();
            //  console.log(data);
        });
    };
    AdminChatd3Component.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.socket.on('new survey created', function (data) {
            _this.refresh();
        });
        // this.initSvg();
        // this.initAxis();
        // this.drawAxis();
        // this.drawBars();
    };
    AdminChatd3Component.prototype.initSvg = function () {
        this.svg = d3.select("svg");
        this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
        this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
        this.g = this.svg.append("g")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
    };
    AdminChatd3Component.prototype.initAxis = function () {
        this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        this.x.domain(this.barchart.map(function (d) { return d.company; }));
        this.y.domain([0, d3Array.max(this.barchart, function (d) { return d.count; })]);
    };
    AdminChatd3Component.prototype.drawAxis = function () {
        this.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3Axis.axisBottom(this.x));
        this.g.append("g")
            .attr("class", "axis axis--y")
            .call(d3Axis.axisLeft(this.y))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("count");
    };
    AdminChatd3Component.prototype.drawBars = function () {
        var _this = this;
        this.g.selectAll(".bar")
            .data(this.barchart)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return _this.x(d.company); })
            .attr("y", function (d) { return _this.y(d.count); })
            .attr("width", this.x.bandwidth())
            .attr("height", function (d) { return _this.height - _this.y(d.count); });
    };
    AdminChatd3Component = __decorate([
        core_1.Component({
            selector: 'admin-chatd3',
            template: __webpack_require__("../../../../../src/app/components/admin-chatd3/admin-chatd3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-chatd3/admin-chatd3.component.css")]
        })
        // ---------------------------------Start-------------------------------------------
        // Function      : Admin dashboard
        // Params        : 
        // Returns       : 
        // Author        : sudha
        // Date          : 09-01-2018 
        // Last Modified : 11-01-2018
        // Desc          : company vs survey
        ,
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router, config_1.Config])
    ], AdminChatd3Component);
    return AdminChatd3Component;
}());
exports.AdminChatd3Component = AdminChatd3Component;
// -----------------------------------End------------------------------------------ 


/***/ }),

/***/ "../../../../../src/app/components/admin-chatd3pie/admin-chatd3pie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".arc text {\r\n  font: 14px sans-serif;\r\n  text-anchor: middle;\r\n}\r\n\r\n.arc path {\r\n  stroke: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-chatd3pie/admin-chatd3pie.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h1>{{title}}</h1>\r\n<!-- <h2>{{subtitle}}</h2> -->\r\n\r\n<svg id=\"sd\" width=\"960\" height=\"500\" ></svg>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-chatd3pie/admin-chatd3pie.component.ts":
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
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var AdminChatd3pieComponent = /** @class */ (function () {
    function AdminChatd3pieComponent(adminService, router, config) {
        this.adminService = adminService;
        this.router = router;
        this.config = config;
        this.title = 'Company Vs Status';
        this.margin = { top: 80, right: 20, bottom: 30, left: 50 };
        this.piechart = [];
        this.socket = socketIo(config.siteUrl);
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.radius = Math.min(this.width, this.height) / 2;
    }
    AdminChatd3pieComponent.prototype.refresh = function () {
        var _this = this;
        this.adminService.getchart1().subscribe(function (data) {
            console.log(data);
            _this.piechart = [];
            data.forEach(function (elm) {
                console.log(elm);
                if (elm.Count != 0) {
                    _this.piechart.push({ status: elm.label, count: elm.Count });
                }
            });
            console.log(_this.piechart);
            _this.initSvg();
            _this.drawPie();
        });
    };
    AdminChatd3pieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.socket.on('Not Verified', function (data) {
            _this.refresh();
        });
        this.socket.on('Trail', function (data) {
            _this.refresh();
        });
        this.socket.on('Subscribed', function (data) {
            _this.refresh();
        });
        this.socket.on('Expired', function (data) {
            _this.refresh();
        });
        // this.initSvg();
        // this.drawPie();
    };
    AdminChatd3pieComponent.prototype.initSvg = function () {
        this.color = d3Scale.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        this.pie = d3Shape.pie()
            .sort(null)
            .value(function (d) { return d.count; });
        this.svg = d3.select("#sd")
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
    };
    AdminChatd3pieComponent.prototype.drawPie = function () {
        var _this = this;
        var g = this.svg.selectAll(".arc")
            .data(this.pie(this.piechart))
            .enter().append("g")
            .attr("class", "arc");
        g.append("path").attr("d", this.arc)
            .style("fill", function (d) { return _this.color(d.data.status); });
        g.append("text").attr("transform", function (d) { return "translate(" + _this.labelArc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .text(function (d) { return d.data.status; });
    };
    AdminChatd3pieComponent = __decorate([
        core_1.Component({
            selector: 'admin-chatd3pie',
            template: __webpack_require__("../../../../../src/app/components/admin-chatd3pie/admin-chatd3pie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-chatd3pie/admin-chatd3pie.component.css")]
        })
        // ---------------------------------Start-------------------------------------------
        // Function      : Admin dashboard
        // Params        : 
        // Returns       : 
        // Author        : sudha
        // Date          : 09-01-2018 
        // Last Modified : 11-01-2018
        // Desc          : company vs status
        ,
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router, config_1.Config])
    ], AdminChatd3pieComponent);
    return AdminChatd3pieComponent;
}());
exports.AdminChatd3pieComponent = AdminChatd3pieComponent;
// -----------------------------------End------------------------------------------ 


/***/ }),

/***/ "../../../../../src/app/components/admin-company-active/admin-company-active.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .filter{\r\n    width: 10%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-company-active/admin-company-active.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\" >\r\n    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n      <!-- <mat-option>None</mat-option> -->\r\n      <mat-option value=\"all\">All</mat-option>\r\n      <mat-option value=\"Subscribed\">Subscribed</mat-option>\r\n      <mat-option value=\"Trail\">Trail</mat-option>\r\n      <mat-option value=\"Expired\">Expired</mat-option>\r\n      <mat-option value=\"Not Verified\">Not Verified</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n     <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"companystatus\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_status}}</mat-cell>\r\n    </ng-container>\r\n  \r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\"  (click)=\"deleteCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\"  (click)=\"blockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <!-- <button *ngIf=\"row.block_status==true && row.delete_status==false\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span><a  (click)=\"unblockCompany(row._id)\">Unblock</a></span>\r\n              </button> -->\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-company-active/admin-company-active.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminCompanyActiveComponent = /** @class */ (function () {
    function AdminCompanyActiveComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactperson', 'contactnumber', 'companystatus', 'action'];
        this.notExist = false;
        this.selected = 'all';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 03-01-2018
    // Desc          : All active companieslist, block,delete
    // --------------------------------------------------------------------------------------
    AdminCompanyActiveComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Subscribed') {
            this.adminService.getAllsubactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Trail') {
            this.adminService.getAlltrialactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Expired') {
            this.adminService.getAllexpiredactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Not Verified') {
            this.adminService.getAllnotverfiactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
    };
    AdminCompanyActiveComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new material_1.MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminCompanyActiveComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AdminCompanyActiveComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //delete company
    AdminCompanyActiveComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block company
    AdminCompanyActiveComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminCompanyActiveComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminCompanyActiveComponent.prototype, "sort", void 0);
    AdminCompanyActiveComponent = __decorate([
        core_1.Component({
            selector: 'admin-company-active',
            template: __webpack_require__("../../../../../src/app/components/admin-company-active/admin-company-active.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-company-active/admin-company-active.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminCompanyActiveComponent);
    return AdminCompanyActiveComponent;
}());
exports.AdminCompanyActiveComponent = AdminCompanyActiveComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-company-blocked/admin-company-blocked.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .filter{\r\n    width: 10%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-company-blocked/admin-company-blocked.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\" >\r\n    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n      <!-- <mat-option>None</mat-option> -->\r\n      <mat-option value=\"all\">All</mat-option>\r\n      <mat-option value=\"Subscribed\">Subscribed</mat-option>\r\n      <mat-option value=\"Trail\">Trail</mat-option>\r\n      <mat-option value=\"Expired\">Expired</mat-option>\r\n      <mat-option value=\"Not Verified\">Not Verified</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n\r\n     <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"companystatus\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_status}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\" (click)=\"deleteCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <!-- <button *ngIf=\"row.block_status==false && row.delete_status==false\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span><a  (click)=\"blockCompany(row._id)\">Block</a></span>\r\n              </button> -->\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\"  (click)=\"unblockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-company-blocked/admin-company-blocked.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminCompanyBlockedComponent = /** @class */ (function () {
    function AdminCompanyBlockedComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactperson', 'contactnumber', 'companystatus', 'action'];
        this.notExist = false;
        this.selected = 'all';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 03-01-2018
    // Desc          : All blocked companieslist
    // -----------------------------------
    AdminCompanyBlockedComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllblockedcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Subscribed') {
            this.adminService.getAllsubblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Trail') {
            this.adminService.getAlltrialblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Expired') {
            this.adminService.getAllexpiredblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Not Verified') {
            this.adminService.getAllnotverfiblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
    };
    AdminCompanyBlockedComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new material_1.MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminCompanyBlockedComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All blocked companieslist filter
    AdminCompanyBlockedComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete , unblock
    //delete company
    AdminCompanyBlockedComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock company
    AdminCompanyBlockedComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminCompanyBlockedComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminCompanyBlockedComponent.prototype, "sort", void 0);
    AdminCompanyBlockedComponent = __decorate([
        core_1.Component({
            selector: 'admin-company-blocked',
            template: __webpack_require__("../../../../../src/app/components/admin-company-blocked/admin-company-blocked.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-company-blocked/admin-company-blocked.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminCompanyBlockedComponent);
    return AdminCompanyBlockedComponent;
}());
exports.AdminCompanyBlockedComponent = AdminCompanyBlockedComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-company-deleted/admin-company-deleted.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-company-deleted/admin-company-deleted.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n      <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"companystatus\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> COMPANY STATUS </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.cmp_status}}</mat-cell>\r\n    </ng-container>\r\n   \r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-company-deleted/admin-company-deleted.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminCompanyDeletedComponent = /** @class */ (function () {
    function AdminCompanyDeletedComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactperson', 'contactnumber', 'companystatus'];
        this.notExist = false;
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All deleted companieslist
    // -----------------------------------
    AdminCompanyDeletedComponent.prototype.refresh = function () {
        var _this = this;
        var company = [];
        this.adminService.getAlldeletedcompanies().subscribe(function (data) {
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new material_1.MatTableDataSource(data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminCompanyDeletedComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All deleted companieslist filter
    AdminCompanyDeletedComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminCompanyDeletedComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminCompanyDeletedComponent.prototype, "sort", void 0);
    AdminCompanyDeletedComponent = __decorate([
        core_1.Component({
            selector: 'admin-company-deleted',
            template: __webpack_require__("../../../../../src/app/components/admin-company-deleted/admin-company-deleted.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-company-deleted/admin-company-deleted.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminCompanyDeletedComponent);
    return AdminCompanyDeletedComponent;
}());
exports.AdminCompanyDeletedComponent = AdminCompanyDeletedComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n/* .active1{\r\n    background-color: #eee;\r\n} */\r\n\r\n .active1 > a\r\n{background-color: #fff !important;\r\n    color:#ea5a5a !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n  \r\n                <div id=\"wrapper\">\r\n            \r\n                    <!-- Navigation -->\r\n                    <admin-top-bar></admin-top-bar>            \r\n        <admin-side-bar></admin-side-bar>\r\n            \r\n                    <div id=\"\">\r\n                        <div class=\"container-fluid\">\r\n                                \r\n                                            <!-- Page Heading -->\r\n                                          \r\n                                        <!-- Page Heading -->\r\n                                        <!-- <admin-header-title [title]=\"'Company'\"></admin-header-title> -->\r\n                                            <!-- /.row -->\r\n                            \r\n                                        </div>\r\n                        <div class=\"col-md-2\">\r\n                              <nav class=\"nav-sidebar\">\r\n                                  <ul class=\"nav tabs\">\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'AllCompanies'}\"><a (click)=\"updateView('AllCompanies')\" href=\"#tab1\" data-toggle=\"tab\">All Companies</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Subscribed'}\"><a (click)=\"updateView('Subscribed')\" href=\"#tab2\" data-toggle=\"tab\">Subscribed</a></li> \r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Trial'}\"><a (click)=\"updateView('Trial')\" href=\"#tab3\" data-toggle=\"tab\">Trial</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'NotVerified'}\"><a (click)=\"updateView('NotVerified')\" href=\"#tab4\" data-toggle=\"tab\">Not Verified</a></li>  \r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Expired'}\"><a (click)=\"updateView('Expired')\" href=\"#tab5\" data-toggle=\"tab\">Expired</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Activecmp'}\"><a (click)=\"updateView('Activecmp')\" href=\"#tab6\" data-toggle=\"tab\">Active</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab7\" data-toggle=\"tab\">Blocked</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Deleted'}\"><a (click)=\"updateView('Deleted')\" href=\"#tab8\" data-toggle=\"tab\">Deleted</a></li>\r\n                                                                   \r\n                                  </ul>\r\n                                </nav>\r\n                        </div>\r\n                        <div class=\"col-md-10\">\r\n                          \r\n                            <div *ngIf=\"viewComp == 'AllCompanies'\">\r\n                              <admin-all-companies></admin-all-companies>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Subscribed'\">\r\n                                <admin-subscribed></admin-subscribed>\r\n                              </div>\r\n                            <div *ngIf=\"viewComp == 'Trial'\">\r\n                              <admin-trial></admin-trial>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'NotVerified'\">\r\n                              <admin-not-verified></admin-not-verified>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Expired'\">\r\n                              <admin-expired></admin-expired>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Activecmp'\">\r\n                              <admin-company-active></admin-company-active>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Blocked'\">\r\n                              <admin-company-blocked></admin-company-blocked>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Deleted'\">\r\n                              <admin-company-deleted></admin-company-deleted>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <!-- /#page-wrapper -->\r\n                      \r\n                                 \r\n                      </div>\r\n                      \r\n                      <footer></footer> \r\n                        \r\n                      </body>"

/***/ }),

/***/ "../../../../../src/app/components/admin-company/admin-company.component.ts":
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
var AdminCompanyComponent = /** @class */ (function () {
    function AdminCompanyComponent() {
        this.viewComp = 'AllCompanies';
    }
    AdminCompanyComponent.prototype.ngOnInit = function () {
        //this.viewComp = 'AllCompanies';
        //this.title = 'Allusers List';
        console.log(this.viewComp);
    };
    AdminCompanyComponent.prototype.updateView = function (page) {
        this.viewComp = page;
        this.title = page + ' Users List';
    };
    AdminCompanyComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-company',
            template: __webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-company/admin-company.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminCompanyComponent);
    return AdminCompanyComponent;
}());
exports.AdminCompanyComponent = AdminCompanyComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n  \r\n                <div id=\"wrapper\">\r\n            \r\n                    <!-- Navigation -->\r\n                    <admin-top-bar></admin-top-bar>            \r\n        <admin-side-bar></admin-side-bar>\r\n            \r\n                    <div id=\"\">\r\n                        <div class=\"container-fluid\">\r\n                             <!-- Page Heading -->\r\n                                   \r\n                                \r\n                                        <!-- /.row -->\r\n                                       \r\n                         </div>   \r\n                         <div class=\"col-md-2\"> </div>  \r\n                                <div class=\"col-md-10\">\r\n                            \r\n                                    <div class=\"col-md-12\"><admin-chatd3></admin-chatd3></div>\r\n                             <div class=\"clearfix\"></div>\r\n                             <div class=\"col-md-12\"><admin-chatd3pie></admin-chatd3pie>  </div>\r\n                                     \r\n                                    </div>\r\n                                    \r\n</div>\r\n<!-- /#page-wrapper -->\r\n\r\n           \r\n</div>\r\n\r\n<footer></footer> \r\n  \r\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/admin-dashboard/admin-dashboard.component.ts":
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
var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = __decorate([
        core_1.Component({
            selector: 'admin-dashboard',
            template: __webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-dashboard/admin-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());
exports.AdminDashboardComponent = AdminDashboardComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-deleted-users/admin-deleted-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-deleted-users/admin-deleted-users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n    <div *ngIf=\"notExist\"><h4>No Users Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"username\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>USER NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n  </ng-container>\r\n  \r\n  \r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-deleted-users/admin-deleted-users.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminDeletedUsersComponent = /** @class */ (function () {
    function AdminDeletedUsersComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'username', 'email'];
        this.notExist = false;
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin deleteuser 
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All delete users
    AdminDeletedUsersComponent.prototype.refresh = function () {
        var _this = this;
        var users = [];
        this.adminService.getAlldeleteusers().subscribe(function (data) {
            // console.log(data);
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new material_1.MatTableDataSource(data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminDeletedUsersComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminDeletedUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminDeletedUsersComponent.prototype, "sort", void 0);
    AdminDeletedUsersComponent = __decorate([
        core_1.Component({
            selector: 'admin-deleted-users',
            template: __webpack_require__("../../../../../src/app/components/admin-deleted-users/admin-deleted-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-deleted-users/admin-deleted-users.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminDeletedUsersComponent);
    return AdminDeletedUsersComponent;
}());
exports.AdminDeletedUsersComponent = AdminDeletedUsersComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .filter{\r\n    width: 5%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\" >\r\n    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n      <!-- <mat-option>None</mat-option> -->\r\n      <mat-option value=\"all\">All</mat-option>\r\n      <mat-option value=\"Active\">Active</mat-option>\r\n      <mat-option value=\"Block\">Block</mat-option>\r\n      <mat-option value=\"Delete\">Delete </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n      <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <div *ngIf=\"row.block_status==false && row.delete_status==false\"> Active</div>\r\n          <div *ngIf=\"row.block_status==true && row.delete_status==false\"> Blocked</div>\r\n          <div *ngIf=\" row.delete_status==true\"> Deleted</div>\r\n        </mat-cell>\r\n      </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\" (click)=\"deleteCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\" (click)=\"blockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\" (click)=\"unblockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-expired/admin-expired.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminExpiredComponent = /** @class */ (function () {
    function AdminExpiredComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactperson', 'contactnumber', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 03-01-2018
    // Desc          : All expired companieslist
    // -----------------------------------
    AdminExpiredComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllexpiredcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllexpiredactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllexpiredblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAllexpireddeletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
    };
    AdminExpiredComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new material_1.MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminExpiredComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All expired companieslist filter
    AdminExpiredComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete , block, unblock
    //delete company
    AdminExpiredComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block company
    AdminExpiredComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock company
    AdminExpiredComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminExpiredComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminExpiredComponent.prototype, "sort", void 0);
    AdminExpiredComponent = __decorate([
        core_1.Component({
            selector: 'admin-expired',
            template: __webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-expired/admin-expired.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminExpiredComponent);
    return AdminExpiredComponent;
}());
exports.AdminExpiredComponent = AdminExpiredComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-header-title/admin-header-title.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-header-title/admin-header-title.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-10\">\r\n      <h4 class=\"page-header\">\r\n          {{title}}\r\n          \r\n      </h4>\r\n     \r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/admin-header-title/admin-header-title.component.ts":
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
var AdminHeaderTitleComponent = /** @class */ (function () {
    function AdminHeaderTitleComponent() {
    }
    AdminHeaderTitleComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderTitleComponent = __decorate([
        core_1.Component({
            selector: 'admin-header-title',
            template: __webpack_require__("../../../../../src/app/components/admin-header-title/admin-header-title.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-header-title/admin-header-title.component.css")],
            inputs: ['title']
        })
        // ---------------------------------Start-------------------------------------------
        // Function      : AdminHeaderTitle
        // Params        : 
        // Returns       : 
        // Author        : sudha
        // Date          : 29-12-2017
        // Last Modified : 
        // Desc          : AdminHeaderTitle
        // -----------------------------------
        ,
        __metadata("design:paramtypes", [])
    ], AdminHeaderTitleComponent);
    return AdminHeaderTitleComponent;
}());
exports.AdminHeaderTitleComponent = AdminHeaderTitleComponent;


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
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get logged user details
        // Params        : 
        // Returns       : user details
        // Author        : Rinsha
        // Date          : 12-1-2018
        // Last Modified : 12-1-2018, Rinsha
        // Desc          :
        this.adminService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role == "user") {
                if (info.delete_status == true || info.block_status == true) {
                    _this.routes.navigate(['/404']);
                }
                // this.routes.navigate(['/survey', info.surveyId]); 
            }
            if (info.role == "company") {
                if (info.delete_status == true || info.block_status == true || info.cmp_status == "Not Verified") {
                    _this.routes.navigate(['/clogin']);
                }
                if (info.cmp_status == "Expired") {
                    _this.routes.navigate(['/expired']);
                }
                if (info.is_profile_completed == false) {
                    _this.routes.navigate(['/additnInfo', info._id]);
                }
                // this.routes.navigate(['/dashboard]);
            }
        });
        // ---------------------------------End-------------------------------------------
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

/***/ "../../../../../src/app/components/admin-manage-industry/admin-manage-industry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 7px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-form-field {\r\n    width: 500px;\r\n  }\r\n  .heading{\r\n    color :#d9534f;\r\n    text-align: center\r\n}\r\nh4{\r\n    text-align: center;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-industry/admin-manage-industry.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  \r\n  <div id=\"wrapper\">\r\n            \r\n     <!-- Navigation -->\r\n        <admin-top-bar></admin-top-bar>            \r\n        <admin-side-bar></admin-side-bar>\r\n        <h3 class=\"heading\">Manage Industry</h3>\r\n        <br>\r\n       <div id=\"\">\r\n          <div id=\"myModal\"  class=\"modal fade\">\r\n              <div class=\"modal-dialog\"> \r\n      <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                   <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h4 class=\"modal-title\">Add New Industry </h4>\r\n                   </div>\r\n                   <br>\r\n                   <div *ngIf=\"atleastOneitem\" class=\"alert alert-danger\">\r\n                      Atleast one item required!\r\n                    </div>\r\n                    <div *ngIf=\"isError\" class=\"alert alert-danger\">\r\n                      {{errorMsg}}\r\n                   </div>\r\n                   <div *ngIf=\"isSuccess\" class=\"alert alert-danger\">\r\n                       {{errorMsg}}\r\n                    </div>\r\n                 <div class=\"modal-body\">\r\n                       <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"insertIndustry();\">\r\n                            <p>Industry Name</p>\r\n                             <div class=\"form-group\" *ngFor=\"let item of newIndustry; let i = index; trackBy:trackByIndex\" >\r\n                                  \r\n                                        <mat-form-field class=\"example-form-field\">\r\n                                        <input matInput type=\"text\" placeholder=\"Name\" name=\"industry_{{i}}\" required  [(ngModel)]=\"newIndustry[i].name\" (keypress)=\"_keyPress($event)\"/>\r\n                                        <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                          <mat-icon>close</mat-icon>\r\n                                        </button>\r\n                                        </mat-form-field>\r\n                      \r\n                                  <input type=\"button\" class=\"btn-danger\" value=\"X\"  (click)=\"closeMoreIndustry(i)\">\r\n                             </div>\r\n                                  <input type=\"button\" class=\"btn btn-danger\" value=\"Add new Industry\"  (click)=\"addMoreIndustry()\">\r\n                                  <input type=\"submit\" class=\"btn btn-danger\" value=\"Save\">\r\n                      \r\n                       </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn>Close</button>\r\n                </div>\r\n             </div>\r\n          </div>\r\n    </div>\r\n\r\n \r\n    <div id=\"myModal2\"  class=\"modal fade\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                       <h4 class=\"modal-title\">Edit Survey Industry </h4>\r\n                </div>\r\n                <br>\r\n                <div *ngIf=\"UpdatealreadyExist\" class=\"alert alert-danger\">\r\n                  <label value =\"industryName\"></label>\r\n                 Name Already Exist!\r\n                </div>\r\n                <div *ngIf=\"Updaterequired\" class=\"alert alert-danger\">\r\n                  Name is required!\r\n                </div>\r\n              <div class=\"modal-body\">\r\n                   <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"updateIndustry(industry);\">\r\n                        <p>Industry Name</p>\r\n                              <div class=\"form-group\"  >\r\n                                <div class=\"col-md-11\">\r\n                                    <mat-form-field class=\"example-form-field\">\r\n                                        <input matInput type=\"text\"  name=\"name\" required   [(ngModel)]=\"industry.name\" />\r\n                                        <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                          <mat-icon>close</mat-icon>\r\n                                        </button>\r\n                                      </mat-form-field>\r\n                                      \r\n                                </div>\r\n                                \r\n                              </div>\r\n             \r\n                         <input type=\"submit\" class=\"btn btn-danger\" value=\"Update\">\r\n    \r\n                </form>\r\n            </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn1>Close</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n  \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <!-- <div class=\"modal-header\"> -->\r\n          <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n        <!-- </div> -->\r\n        <div class=\"modal-body\">\r\n            <h4>Are you sure to delete?</h4>\r\n        \r\n        </div>\r\n      \r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" (click)=\"deleteIndustry(industryId)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n    <flash-messages></flash-messages>\r\n    <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\">+Add New</button>\r\n          <div class=\"example-header\" >\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n          </div>\r\n          <div class=\"noitem\" *ngIf=\"!existStatus\"><h4>No item Found!</h4></div>\r\n           <br>\r\n    <div class=\"example-container mat-elevation-z8 \">\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n            <ng-container matColumnDef=\"id\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n              </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                   <mat-header-cell *matHeaderCellDef mat-sort-header> NAME</mat-header-cell>\r\n                     <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n                 </ng-container>\r\n                  <ng-container matColumnDef=\"action\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\r\n                        <mat-menu #menu=\"matMenu\">\r\n                            <button  mat-menu-item (click)=\"getIndustryId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\r\n                                  <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\r\n                                  <span>Edit</span>\r\n                                  </button>\r\n                              <button mat-menu-item  (click)=\"getIndustryId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal3\"> \r\n                                  <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\r\n                                  <span>Delete</span>\r\n                              </button>\r\n                        </mat-menu> </mat-cell>\r\n              \r\n                     </ng-container>\r\n       \r\n    \r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                   <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                   </mat-row>\r\n                  </mat-table>\r\n    \r\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n                          \r\n                                     \r\n                          "

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-industry/admin-manage-industry.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminManageIndustryComponent = /** @class */ (function () {
    function AdminManageIndustryComponent(_adminService, _flashMessagesService, router, route) {
        this._adminService = _adminService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['id', 'name', 'action'];
        this.atleastOneitem = false;
        this.btnDisbled = false;
        this.isSuccess = false;
        this.isError = false;
        this.existStatus = false;
        this.Updaterequired = false;
        this.UpdatealreadyExist = false;
        this.newIndustry = [{ name: '' }];
        this.industry = {
            name: String
        };
        this.showAddSuccess = false;
    }
    AdminManageIndustryComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    AdminManageIndustryComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : keypress
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to avoid space and special characters in name field
    AdminManageIndustryComponent.prototype._keyPress = function (event) {
        var pattern = /[a-z A-Z1-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar) && event.charCode != 0) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    //  ---------------------------------end-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : loadData
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to get all survey Industry
    AdminManageIndustryComponent.prototype.loadData = function () {
        var _this = this;
        var users = [];
        this._adminService.getIndustry().subscribe(function (data1) {
            if (data1 != '') {
                _this.existStatus = true;
            }
            data1.forEach(function (item, index) {
                users.push({
                    name: item.name,
                    id: item._id
                });
            });
            _this.dataSource = new material_1.MatTableDataSource(users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addMoreIndustry
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Add more Industry
    AdminManageIndustryComponent.prototype.addMoreIndustry = function () {
        this.newIndustry.push({ name: '' });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : closeMoreOption
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close industry
    AdminManageIndustryComponent.prototype.closeMoreIndustry = function (index) {
        var _this = this;
        if (this.newIndustry.length > 1) {
            this.newIndustry.splice(index, 1);
        }
        else {
            this.atleastOneitem = true;
            setTimeout(function () {
                _this.atleastOneitem = false;
            }, 2000);
            // this._flashMessagesService.show('Atleast one item required!', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : insertIndustry
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close a industry
    AdminManageIndustryComponent.prototype.insertIndustry = function () {
        var _this = this;
        this._adminService.addIndustry(this.newIndustry).subscribe(function (data) {
            if (!data.success) {
                _this.isError = true;
                _this.errorMsg = data.msg;
                _this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.errorMsg = '';
                }, 2000);
            }
            else if (data.success) {
                _this.btnDisbled = true;
                _this.loadData();
                _this.closeBtn.nativeElement.click();
                // this.isSuccess = true;
                _this.errorMsg = data.msg;
                setTimeout(function () {
                    _this.isSuccess = false;
                    _this.errorMsg = '';
                    _this.btnDisbled = false;
                }, 2000);
                _this._flashMessagesService.show('Add Industry Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // this.closeBtn.nativeElement.click();
                _this.newIndustry = [{ name: '' }];
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : applyFilter
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : filter in angular material table 
    AdminManageIndustryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteIndustry
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete survey Industry
    AdminManageIndustryComponent.prototype.deleteIndustry = function (id) {
        var _this = this;
        this._adminService.deleteIndustry(id).subscribe(function (data2) {
            if (data2.success == false) {
                _this._flashMessagesService.show('Failed! This Industry is currently used by a company ', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.loadData();
                _this._flashMessagesService.show('Delete Industry Successfully!', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getIndustryId
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : pass id from modal and get it for the purpuse edit
    AdminManageIndustryComponent.prototype.getIndustryId = function (id) {
        var _this = this;
        this.industryId = id;
        this.sub = this.route.params.subscribe(function (params) {
            _this._adminService.getSingleindustry(_this.industryId).subscribe(function (data3) {
                _this.industry = data3;
            });
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateIndustry
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Update industry
    AdminManageIndustryComponent.prototype.updateIndustry = function (industry) {
        var _this = this;
        this._adminService.updateIndustry(industry).subscribe(function (data4) {
            if (data4.success == false && data4.msg == 'required') {
                _this.Updaterequired = true;
                setTimeout(function () {
                    _this.Updaterequired = false;
                }, 2000);
            }
            else {
                if (data4.success == false && data4.msg == 'alreadyexist') {
                    _this.UpdatealreadyExist = true;
                    setTimeout(function () {
                        _this.UpdatealreadyExist = false;
                    }, 2000);
                }
                else {
                    _this.loadData();
                    _this.closeBtn1.nativeElement.click();
                    _this._flashMessagesService.show('Update industry Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                }
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminManageIndustryComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminManageIndustryComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", Object)
    ], AdminManageIndustryComponent.prototype, "f", void 0);
    __decorate([
        core_1.ViewChild('f1'),
        __metadata("design:type", Object)
    ], AdminManageIndustryComponent.prototype, "f1", void 0);
    __decorate([
        core_1.ViewChild('closeBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageIndustryComponent.prototype, "closeBtn", void 0);
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageIndustryComponent.prototype, "closeBtn1", void 0);
    AdminManageIndustryComponent = __decorate([
        core_1.Component({
            selector: 'admin-manage-industry',
            template: __webpack_require__("../../../../../src/app/components/admin-manage-industry/admin-manage-industry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-manage-industry/admin-manage-industry.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService, angular2_flash_messages_1.FlashMessagesService, router_1.Router, router_1.ActivatedRoute])
    ], AdminManageIndustryComponent);
    return AdminManageIndustryComponent;
}());
exports.AdminManageIndustryComponent = AdminManageIndustryComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-manage-organization-type/admin-manage-organization-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 7px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-form-field {\r\n    width: 500px;\r\n  }\r\n  .heading{\r\n    color :#d9534f;\r\n    text-align: center\r\n}\r\nh4{\r\n    text-align: center;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-organization-type/admin-manage-organization-type.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n    \r\n    <div id=\"wrapper\">\r\n              \r\n       <!-- Navigation -->\r\n          <admin-top-bar></admin-top-bar>            \r\n          <admin-side-bar></admin-side-bar>\r\n          <h3 class=\"heading\">Manage Survey Organization type</h3>\r\n          <br> \r\n         <div id=\"\">\r\n            <div id=\"myModal\"  class=\"modal fade\">\r\n                <div class=\"modal-dialog\"> \r\n        <!-- Modal content-->\r\n                  <div class=\"modal-content\">\r\n                     <div class=\"modal-header\">\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                          <h4 class=\"modal-title\">Add Organization Type </h4>\r\n                     </div>\r\n                     <br>\r\n                     <div *ngIf=\"atleastOneitem\" class=\"alert alert-danger\">\r\n                        Atleast one item required!\r\n                      </div>\r\n                      <div *ngIf=\"isError\" class=\"alert alert-danger\">\r\n                        {{errorMsg}}\r\n                     </div>\r\n                     <div *ngIf=\"isSuccess\" class=\"alert alert-danger\">\r\n                         {{errorMsg}}\r\n                      </div>\r\n                   <div class=\"modal-body\">\r\n                         <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"insertOrganizationType();\">\r\n                              <p>Organization type Name</p>\r\n                               <div class=\"form-group\" *ngFor=\"let item of newOrganization; let i = index; trackBy:trackByIndex\" >\r\n                                   \r\n                                          <mat-form-field class=\"example-form-field\">\r\n                                          <input matInput type=\"text\" placeholder=\"Name\" name=\"organization_{{i}}\" required  [(ngModel)]=\"newOrganization[i].name\" (keypress)=\"_keyPress($event)\"/>\r\n                                          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                            <mat-icon>close</mat-icon>\r\n                                          </button>\r\n                                          </mat-form-field>\r\n                          \r\n                                    \r\n                                    <input type=\"button\" class=\"btn-danger\" value=\"X\"  (click)=\"closeMoreOrganizationType(i)\">\r\n                               </div>\r\n                                    <input type=\"button\" class=\"btn btn-danger\" value=\"Add new Organization type\"  (click)=\"addMoreOrganizationtype()\">\r\n                                    <input type=\"submit\" class=\"btn btn-danger\" value=\"Save\">\r\n                        \r\n                         </form>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn>Close</button>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n      </div>\r\n  \r\n   \r\n      <div id=\"myModal2\"  class=\"modal fade\">\r\n          <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                         <h4 class=\"modal-title\">Edit Survey Organization type </h4>\r\n                  </div>\r\n                  <br>\r\n                  <div *ngIf=\"UpdatealreadyExist\" class=\"alert alert-danger\">\r\n                    Name Already Exist!\r\n                  </div>\r\n                  <div *ngIf=\"Updaterequired\" class=\"alert alert-danger\">\r\n                    Name is required!\r\n                  </div>\r\n                <div class=\"modal-body\">\r\n                     <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"updateOrganizationType(organization);\">\r\n                          <p>Organization type Name</p>\r\n                                <div class=\"form-group\"  >\r\n                                  <div class=\"col-md-11\">\r\n                                      <mat-form-field class=\"example-form-field\">\r\n                                          <input matInput type=\"text\" placeholder=\"Name\" name=\"name\" required   [(ngModel)]=\"organization.reason\" />\r\n                                          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                            <mat-icon>close</mat-icon>\r\n                                          </button>\r\n                                        </mat-form-field>\r\n                                        \r\n                                  </div>\r\n                                  \r\n                                </div>\r\n               \r\n                           <input type=\"submit\" class=\"btn btn-danger\" value=\"Update\">\r\n      \r\n                  </form>\r\n              </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn1>Close</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n    \r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <!-- <div class=\"modal-header\"> -->\r\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n          <!-- </div> -->\r\n          <div class=\"modal-body\">\r\n              <h4>Are you sure to delete?</h4>\r\n          \r\n          </div>\r\n        \r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"button\" (click)=\"deleteOrganizationType(organizationId)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  \r\n  \r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n      <flash-messages></flash-messages>\r\n      <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\">+Add New</button>\r\n            <div class=\"example-header\" >\r\n                <mat-form-field>\r\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"noitem\" *ngIf=\"!existStatus\"><h4>No item Found!</h4></div>\r\n            <br>\r\n      <div class=\"example-container mat-elevation-z8 \">\r\n          <mat-table [dataSource]=\"dataSource\" matSort>\r\n              <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n                </ng-container>\r\n                  <ng-container matColumnDef=\"name\">\r\n                     <mat-header-cell *matHeaderCellDef mat-sort-header> NAME</mat-header-cell>\r\n                       <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n                   </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\r\n                          <mat-menu #menu=\"matMenu\">\r\n                              <button  mat-menu-item (click)=\"getOrganizationTypeId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\r\n                                    <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\r\n                                    <span>Edit</span>\r\n                                    </button>\r\n                                <button mat-menu-item  (click)=\"getOrganizationTypeId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal3\"> \r\n                                    <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\r\n                                    <span>Delete</span>\r\n                                </button>\r\n                          </mat-menu> </mat-cell>\r\n                \r\n                       </ng-container>\r\n         \r\n      \r\n  \r\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                     <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                     </mat-row>\r\n                    </mat-table>\r\n      \r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n                            \r\n                                       \r\n                            "

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-organization-type/admin-manage-organization-type.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminManageOrganizationTypeComponent = /** @class */ (function () {
    function AdminManageOrganizationTypeComponent(_adminService, _flashMessagesService, router, route) {
        this._adminService = _adminService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['id', 'name', 'action'];
        this.atleastOneitem = false;
        this.btnDisbled = false;
        this.isSuccess = false;
        this.isError = false;
        this.existStatus = false;
        this.Updaterequired = false;
        this.UpdatealreadyExist = false;
        this.newOrganization = [{ name: '' }];
        this.organization = {
            name: String
        };
        this.showAddSuccess = false;
    }
    AdminManageOrganizationTypeComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    AdminManageOrganizationTypeComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : keypress
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to avoid space and special characters in name field
    AdminManageOrganizationTypeComponent.prototype._keyPress = function (event) {
        var pattern = /[a-z A-Z1-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar) && event.charCode != 0) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    //  ---------------------------------end-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : loadData
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to get all survey organization type
    AdminManageOrganizationTypeComponent.prototype.loadData = function () {
        var _this = this;
        var users = [];
        this._adminService.getOrganizationType().subscribe(function (data1) {
            if (data1 != '') {
                _this.existStatus = true;
            }
            data1.forEach(function (item, index) {
                users.push({
                    name: item.name,
                    id: item._id
                });
            });
            _this.dataSource = new material_1.MatTableDataSource(users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    // ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addMoreOrganizationtype
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Add more Organization type
    AdminManageOrganizationTypeComponent.prototype.addMoreOrganizationtype = function () {
        this.newOrganization.push({ name: '' });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : closeMoreOrganizationType
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close Organization type
    AdminManageOrganizationTypeComponent.prototype.closeMoreOrganizationType = function (index) {
        var _this = this;
        if (this.newOrganization.length > 1) {
            this.newOrganization.splice(index, 1);
        }
        else {
            this.atleastOneitem = true;
            setTimeout(function () {
                _this.atleastOneitem = false;
            }, 2000);
            return false;
        }
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : insertOrganizationType
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close a Organization type
    AdminManageOrganizationTypeComponent.prototype.insertOrganizationType = function () {
        var _this = this;
        this._adminService.addOrganizationType(this.newOrganization).subscribe(function (data) {
            if (!data.success) {
                _this.isError = true;
                _this.errorMsg = data.msg;
                _this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.errorMsg = '';
                }, 2000);
            }
            else if (data.success) {
                _this.btnDisbled = true;
                _this.loadData();
                _this.closeBtn.nativeElement.click();
                // this.isSuccess = true;
                _this.errorMsg = data.msg;
                setTimeout(function () {
                    _this.isSuccess = false;
                    _this.errorMsg = '';
                    _this.btnDisbled = false;
                }, 2000);
                _this._flashMessagesService.show('Add Organization type Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // this.closeBtn.nativeElement.click();
                _this.newOrganization = [{ name: '' }];
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : applyFilter
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : filter in angular material table
    AdminManageOrganizationTypeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteOrganizationType
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete survey Organization type
    AdminManageOrganizationTypeComponent.prototype.deleteOrganizationType = function (id) {
        var _this = this;
        this._adminService.deleteOrganizationType(id).subscribe(function (data2) {
            if (data2.success == false) {
                _this._flashMessagesService.show('Failed! This Organization type is currently used by a company ', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.loadData();
                _this._flashMessagesService.show('Delete Organisation type Successfully!', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getOrganizationTypeId
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : pass id from modal and get it for the purpuse edit
    AdminManageOrganizationTypeComponent.prototype.getOrganizationTypeId = function (id) {
        var _this = this;
        this.organizationId = id;
        this.sub = this.route.params.subscribe(function (params) {
            _this._adminService.getSingleOrganizationType(_this.organizationId).subscribe(function (data3) {
                _this.organization = data3;
            });
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateOrganizationType
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : update Organization type
    AdminManageOrganizationTypeComponent.prototype.updateOrganizationType = function (organization) {
        var _this = this;
        this._adminService.updateOrganizationType(organization).subscribe(function (data4) {
            if (data4.success == false && data4.msg == 'required') {
                _this.Updaterequired = true;
                setTimeout(function () {
                    _this.Updaterequired = false;
                }, 2000);
            }
            else {
                if (data4.success == false && data4.msg == 'alreadyexist') {
                    _this.UpdatealreadyExist = true;
                    setTimeout(function () {
                        _this.UpdatealreadyExist = false;
                    }, 2000);
                }
                else {
                    _this.loadData();
                    _this.closeBtn1.nativeElement.click();
                    _this._flashMessagesService.show('Update Organization type Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                }
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminManageOrganizationTypeComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminManageOrganizationTypeComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", Object)
    ], AdminManageOrganizationTypeComponent.prototype, "f", void 0);
    __decorate([
        core_1.ViewChild('f1'),
        __metadata("design:type", Object)
    ], AdminManageOrganizationTypeComponent.prototype, "f1", void 0);
    __decorate([
        core_1.ViewChild('closeBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageOrganizationTypeComponent.prototype, "closeBtn", void 0);
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageOrganizationTypeComponent.prototype, "closeBtn1", void 0);
    AdminManageOrganizationTypeComponent = __decorate([
        core_1.Component({
            selector: 'admin-manage-organization-type',
            template: __webpack_require__("../../../../../src/app/components/admin-manage-organization-type/admin-manage-organization-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-manage-organization-type/admin-manage-organization-type.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService, angular2_flash_messages_1.FlashMessagesService, router_1.Router, router_1.ActivatedRoute])
    ], AdminManageOrganizationTypeComponent);
    return AdminManageOrganizationTypeComponent;
}());
exports.AdminManageOrganizationTypeComponent = AdminManageOrganizationTypeComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-manage-survey-attender-type/admin-manage-survey-attender-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 7px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-form-field {\r\n    width: 200px;\r\n  }\r\n  .example-form-field {\r\n    width: 500px;\r\n  }\r\n.heading{\r\n    color :#d9534f;\r\n    text-align: center\r\n}\r\nh4{\r\n    text-align: center;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-survey-attender-type/admin-manage-survey-attender-type.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n    \r\n    <div id=\"wrapper\">\r\n              \r\n       <!-- Navigation -->\r\n          <admin-top-bar></admin-top-bar>            \r\n          <admin-side-bar></admin-side-bar>\r\n          <h3 class=\"heading\">Manage Survey Attender type</h3>\r\n          <br>\r\n         <div id=\"\">\r\n            <div id=\"myModal\"  class=\"modal fade\">\r\n                <div class=\"modal-dialog\"> \r\n                   \r\n        <!-- Modal content-->\r\n                  <div class=\"modal-content\">\r\n                     <div class=\"modal-header\">\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                          <h4 class=\"modal-title\">Add Survey attender Type </h4>\r\n                     </div>\r\n                     <br>\r\n                     <div *ngIf=\"atleastOneitem\" class=\"alert alert-danger\">\r\n                        Atleast one item required!\r\n                      </div>\r\n                      <div *ngIf=\"isError\" class=\"alert alert-danger\">\r\n                        {{errorMsg}}\r\n                     </div>\r\n                     <div *ngIf=\"isSuccess\" class=\"alert alert-danger\">\r\n                         {{errorMsg}}\r\n                      </div>\r\n                   <div class=\"modal-body\">\r\n                         <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"insertAttenderType();\">\r\n                              <p>\r\n                                Survey attender type</p>\r\n                               <div class=\"form-group\" *ngFor=\"let item of newAttender; let i = index; trackBy:trackByIndex\" >\r\n                                   \r\n                                          <mat-form-field class=\"example-form-field\">\r\n                                          <input matInput type=\"text\" placeholder=\"Name\" name=\"attender{{i}}\" required  [(ngModel)]=\"newAttender[i].name\" (keypress)=\"_keyPress($event)\"/>\r\n                                          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                            <mat-icon>close</mat-icon>\r\n                                          </button>\r\n                                          </mat-form-field>\r\n                                          <input type=\"button\" class=\"btn-danger\" value=\"X\"  (click)=\"closeMoreattenderType(i)\">\r\n                                   \r\n                                  \r\n                               </div>\r\n                                    <input type=\"button\" class=\"btn btn-danger\" value=\"Add new survey attender type\"  (click)=\"addMoreAttendertype()\">\r\n                                    <input type=\"submit\" class=\"btn btn-danger\" value=\"Save\">\r\n                        \r\n                         </form>\r\n                  </div>\r\n                \r\n                  <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn>Close</button>\r\n                  </div>\r\n               </div>\r\n            </div>\r\n      </div>\r\n  \r\n   \r\n      <div id=\"myModal2\"  class=\"modal fade\">\r\n          <div class=\"modal-dialog\">\r\n              <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                         <h4 class=\"modal-title\">Edit Survey attender type </h4>\r\n                  </div>\r\n                  <br>\r\n                  <div *ngIf=\"UpdatealreadyExist\" class=\"alert alert-danger\">\r\n                    Name Already Exist!\r\n                  </div>\r\n                  <div *ngIf=\"Updaterequired\" class=\"alert alert-danger\">\r\n                    Name is required!\r\n                  </div>\r\n                <div class=\"modal-body\">\r\n                     <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"updateattenderType(attender);\">\r\n                          <p>survey attender type </p>\r\n                                <div class=\"form-group\"  >\r\n                                  <div class=\"col-md-11\">\r\n                                      <mat-form-field class=\"example-form-field\">\r\n                                          <input matInput type=\"text\" placeholder=\"Type name\" name=\"name\" required   [(ngModel)]=\"attender.name\" />\r\n                                          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                            <mat-icon>close</mat-icon>\r\n                                          </button>\r\n                                        </mat-form-field>\r\n                                        \r\n                                  </div>\r\n                                  \r\n                                </div>\r\n               \r\n                           <input type=\"submit\" class=\"btn btn-danger\" value=\"Update\">\r\n      \r\n                  </form>\r\n              </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn1>Close</button>\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n      <div class=\"modal-dialog\">\r\n    \r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n          <!-- <div class=\"modal-header\"> -->\r\n            <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n          <!-- </div> -->\r\n          <div class=\"modal-body\">\r\n              <h4>Are you sure to delete?</h4>\r\n          \r\n          </div>\r\n        \r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"button\" (click)=\"deleteattenderType(attenderId)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\r\n          </div>\r\n        </div>\r\n    \r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  \r\n  \r\n  <div class=\"col-md-6 col-md-offset-3\">\r\n      <flash-messages></flash-messages>\r\n      <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\">+Add New</button>\r\n            <div class=\"example-header\" >\r\n                <mat-form-field>\r\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"noitem\" *ngIf=\"!existStatus\"><h4>No item Found!</h4></div>\r\n            \r\n            <br>\r\n      <div class=\"example-container mat-elevation-z8 \">\r\n          <mat-table [dataSource]=\"dataSource\" matSort>\r\n              <ng-container matColumnDef=\"id\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n                </ng-container>\r\n                  <ng-container matColumnDef=\"name\">\r\n                     <mat-header-cell *matHeaderCellDef mat-sort-header> NAME</mat-header-cell>\r\n                       <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n                   </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\r\n                          <mat-menu #menu=\"matMenu\">\r\n                              <button  mat-menu-item (click)=\"getAttenderTypeId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\r\n                                    <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\r\n                                    <span>Edit</span>\r\n                                    </button>\r\n                                <button mat-menu-item  (click)=\"getAttenderTypeId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal3\"> \r\n                                    <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\r\n                                    <span>Delete</span>\r\n                                </button>\r\n                          </mat-menu> </mat-cell>\r\n                \r\n                       </ng-container>\r\n         \r\n      \r\n  \r\n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                     <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                     </mat-row>\r\n                    </mat-table>\r\n      \r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </body>\r\n                            \r\n                                       \r\n                            "

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-survey-attender-type/admin-manage-survey-attender-type.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminManageSurveyAttenderTypeComponent = /** @class */ (function () {
    function AdminManageSurveyAttenderTypeComponent(_adminService, _flashMessagesService, router, route) {
        this._adminService = _adminService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['id', 'name', 'action'];
        this.atleastOneitem = false;
        this.btnDisbled = false;
        this.isSuccess = false;
        this.isError = false;
        this.existStatus = false;
        this.Updaterequired = false;
        this.UpdatealreadyExist = false;
        this.newAttender = [{ name: '' }];
        this.attender = {
            name: String
        };
        this.showAddSuccess = false;
    }
    AdminManageSurveyAttenderTypeComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    AdminManageSurveyAttenderTypeComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : keypress
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to avoid space and special characters in name field
    AdminManageSurveyAttenderTypeComponent.prototype._keyPress = function (event) {
        var pattern = /[a-z A-Z1-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar) && event.charCode != 0) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    //  ---------------------------------end-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : loadData
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to get all survey survey attender type
    AdminManageSurveyAttenderTypeComponent.prototype.loadData = function () {
        var _this = this;
        var users = [];
        this._adminService.getAttenderType().subscribe(function (data1) {
            if (data1 != '') {
                _this.existStatus = true;
            }
            data1.forEach(function (item, index) {
                users.push({
                    name: item.name,
                    id: item._id
                });
            });
            _this.dataSource = new material_1.MatTableDataSource(users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addMoreAttendertype
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Add more survey attender type
    AdminManageSurveyAttenderTypeComponent.prototype.addMoreAttendertype = function () {
        this.newAttender.push({ name: '' });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : closeMoreattenderType
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close survey attender type
    AdminManageSurveyAttenderTypeComponent.prototype.closeMoreattenderType = function (index) {
        var _this = this;
        if (this.newAttender.length > 1) {
            this.newAttender.splice(index, 1);
        }
        else {
            this.atleastOneitem = true;
            setTimeout(function () {
                _this.atleastOneitem = false;
            }, 2000);
            return false;
        }
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : insertAttenderType
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close a survey attender  type
    AdminManageSurveyAttenderTypeComponent.prototype.insertAttenderType = function () {
        var _this = this;
        this._adminService.addAttenderType(this.newAttender).subscribe(function (data) {
            if (!data.success) {
                _this.isError = true;
                _this.errorMsg = data.msg;
                _this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.errorMsg = '';
                }, 2000);
            }
            else if (data.success) {
                _this.btnDisbled = true;
                _this.loadData();
                _this.closeBtn.nativeElement.click();
                // this.isSuccess = true;
                _this.errorMsg = data.msg;
                setTimeout(function () {
                    _this.isSuccess = false;
                    _this.errorMsg = '';
                    _this.btnDisbled = false;
                }, 2000);
                _this._flashMessagesService.show('Add Survey attender type Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // this.closeBtn.nativeElement.click();
                _this.newAttender = [{ name: '' }];
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : applyFilter
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          :filter in angular material table
    AdminManageSurveyAttenderTypeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteattenderType
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete survey survey attender type
    AdminManageSurveyAttenderTypeComponent.prototype.deleteattenderType = function (id) {
        var _this = this;
        this._adminService.deleteAttenderType(id).subscribe(function (data2) {
            if (data2.success == false) {
                _this._flashMessagesService.show('Failed! This Servey attender type is currently used by a company ', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.loadData();
                _this._flashMessagesService.show('Delete survey attender type Successfully!', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getAttenderTypeId
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : pass id from modal and get it for the purpuse edit
    AdminManageSurveyAttenderTypeComponent.prototype.getAttenderTypeId = function (id) {
        var _this = this;
        this.attenderId = id;
        this.sub = this.route.params.subscribe(function (params) {
            _this._adminService.getSingleAttenderType(_this.attenderId).subscribe(function (data3) {
                _this.attender = data3;
            });
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateattenderType
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : update serevey attender type
    AdminManageSurveyAttenderTypeComponent.prototype.updateattenderType = function (attender) {
        var _this = this;
        this._adminService.updateAttenderType(attender).subscribe(function (data4) {
            if (data4.success == false && data4.msg == 'required') {
                _this.Updaterequired = true;
                setTimeout(function () {
                    _this.Updaterequired = false;
                }, 2000);
            }
            else {
                if (data4.success == false && data4.msg == 'alreadyexist') {
                    _this.UpdatealreadyExist = true;
                    setTimeout(function () {
                        _this.UpdatealreadyExist = false;
                    }, 2000);
                }
                else {
                    _this.loadData();
                    _this.closeBtn1.nativeElement.click();
                    _this._flashMessagesService.show('Update survey attender type Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                }
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminManageSurveyAttenderTypeComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminManageSurveyAttenderTypeComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", Object)
    ], AdminManageSurveyAttenderTypeComponent.prototype, "f", void 0);
    __decorate([
        core_1.ViewChild('f1'),
        __metadata("design:type", Object)
    ], AdminManageSurveyAttenderTypeComponent.prototype, "f1", void 0);
    __decorate([
        core_1.ViewChild('closeBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageSurveyAttenderTypeComponent.prototype, "closeBtn", void 0);
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageSurveyAttenderTypeComponent.prototype, "closeBtn1", void 0);
    AdminManageSurveyAttenderTypeComponent = __decorate([
        core_1.Component({
            selector: 'admin-manage-survey-attender-type',
            template: __webpack_require__("../../../../../src/app/components/admin-manage-survey-attender-type/admin-manage-survey-attender-type.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-manage-survey-attender-type/admin-manage-survey-attender-type.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService, angular2_flash_messages_1.FlashMessagesService, router_1.Router, router_1.ActivatedRoute])
    ], AdminManageSurveyAttenderTypeComponent);
    return AdminManageSurveyAttenderTypeComponent;
}());
exports.AdminManageSurveyAttenderTypeComponent = AdminManageSurveyAttenderTypeComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-manage-survey-category/admin-manage-survey-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 7px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-form-field {\r\n    width: 500px;\r\n  }\r\n .heading{\r\n     color :#d9534f;\r\n     text-align: center\r\n }\r\n h4{\r\n    text-align: center;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-survey-category/admin-manage-survey-category.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  \r\n  <div id=\"wrapper\">\r\n            \r\n     <!-- Navigation -->\r\n        <admin-top-bar></admin-top-bar>            \r\n        <admin-side-bar></admin-side-bar>\r\n            <h3 class=\"heading\">Manage Survey Category</h3>\r\n            <br>\r\n       <div id=\"\">\r\n          <div id=\"myModal\"  class=\"modal fade\">\r\n              <div class=\"modal-dialog\"> \r\n      <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                   <div class=\"modal-header\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        <h4 class=\"modal-title\">Add Survey Category </h4>\r\n                   </div>\r\n                   <br>\r\n                   <div *ngIf=\"atleastOneitem\" class=\"alert alert-danger\">\r\n                    Atleast one item required!\r\n                  </div>\r\n                   <div *ngIf=\"isError\" class=\"alert alert-danger\">\r\n                       {{errorMsg}}\r\n                    </div>\r\n                    <div *ngIf=\"isSuccess\" class=\"alert alert-danger\">\r\n                        {{errorMsg}}\r\n                     </div>\r\n                  \r\n                    \r\n                 <div class=\"modal-body\">\r\n                       <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"insertCategory();\">\r\n                            <p>Category Name</p>\r\n                             <div class=\"form-group\" *ngFor=\"let item of newCategory; let i = index; trackBy:trackByIndex\" >\r\n                                \r\n                              <mat-form-field class=\"example-form-field\">\r\n                                  <input matInput type=\"text\" placeholder=\"Name\" name=\"category{{i}}\" required  [(ngModel)]=\"newCategory[i].name\" (keypress)=\"_keyPress($event)\"/>\r\n                                <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                  <mat-icon>close</mat-icon>\r\n                                </button>\r\n                              </mat-form-field>\r\n                        \r\n                                  <input type=\"button\" class=\"btn-danger\" value=\"X\"  (click)=\"closeMoreCategory(i)\">\r\n                             </div>\r\n                                  <input type=\"button\" class=\"btn btn-danger\" value=\"Add new Category\"  (click)=\"addMoreCategory()\">\r\n                                  <input type=\"submit\" class=\"btn btn-danger\" value=\"Save\"  [disabled]=\"btnDisbled\"> \r\n                      \r\n                       </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn>Close</button>\r\n                </div>\r\n             </div>\r\n          </div>\r\n    </div>\r\n\r\n \r\n    <div id=\"myModal2\"  class=\"modal fade\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                       <h4 class=\"modal-title\">Edit Survey Category </h4>\r\n                </div>\r\n                <br>\r\n                <div *ngIf=\"UpdatealreadyExist\" class=\"alert alert-danger\">\r\n                  Name Already Exist!\r\n                </div>\r\n                <div *ngIf=\"Updaterequired\" class=\"alert alert-danger\">\r\n                  Name is required!\r\n                </div>\r\n              <div class=\"modal-body\">\r\n                   <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"updateCategory(category);\">\r\n                        <p>Category Name</p>\r\n                              <div class=\"form-group\"  >\r\n                                <div class=\"col-md-11\">\r\n                                    <mat-form-field class=\"example-form-field\">\r\n                                        <input matInput type=\"text\"  name=\"name\" required   [(ngModel)]=\"category.name\" />\r\n                                        <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n                                          <mat-icon>close</mat-icon>\r\n                                        </button>\r\n                                      </mat-form-field>\r\n                                      \r\n                                </div>\r\n                                \r\n                              </div>\r\n             \r\n                         <input type=\"submit\" class=\"btn btn-danger\" value=\"Update\">\r\n    \r\n                </form>\r\n            </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn1>Close</button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"myModal3\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n  \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <!-- <div class=\"modal-header\"> -->\r\n          <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n        <!-- </div> -->\r\n        <div class=\"modal-body\">\r\n            <h4>Are you sure to delete?</h4>\r\n        \r\n        </div>\r\n      \r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" (click)=\"deleteCategory(catgId)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n    <flash-messages></flash-messages>\r\n    \r\n    <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\">+Add New</button>\r\n          <div class=\"example-header\" >\r\n              <mat-form-field>\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n              </mat-form-field>\r\n          </div>\r\n          \r\n            <div class=\"noitem\" *ngIf=\"!existStatus\"><h4>No item Found!</h4></div>\r\n          \r\n          <br>\r\n    <div class=\"example-container mat-elevation-z8 \">\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n             <ng-container matColumnDef=\"id\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n      </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                   <mat-header-cell *matHeaderCellDef mat-sort-header> NAME</mat-header-cell>\r\n                     <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n                 </ng-container>\r\n                  <ng-container matColumnDef=\"action\">\r\n                      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\r\n                        <mat-menu #menu=\"matMenu\">\r\n                            <button  mat-menu-item (click)=\"getCategoryId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal2\">\r\n                                  <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\r\n                                  <span>Edit</span>\r\n                                  </button>\r\n                              <button mat-menu-item  (click)=\"getCategoryId(row.id)\" data-toggle=\"modal\" data-target=\"#myModal3\"> \r\n                                  <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\r\n                                  <span>Delete</span>\r\n                              </button>\r\n                        </mat-menu> </mat-cell>\r\n              \r\n                     </ng-container>\r\n       \r\n    \r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                   <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                   </mat-row>\r\n                  </mat-table>\r\n    \r\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n                          \r\n                                     \r\n                          "

/***/ }),

/***/ "../../../../../src/app/components/admin-manage-survey-category/admin-manage-survey-category.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminManageSurveyCategoryComponent = /** @class */ (function () {
    function AdminManageSurveyCategoryComponent(_adminService, _flashMessagesService, router, route) {
        this._adminService = _adminService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.route = route;
        this.displayedColumns = ['id', 'name', 'action'];
        this.btnDisbled = false;
        this.atleastOneitem = false;
        this.isSuccess = false;
        this.isError = false;
        this.existStatus = false;
        this.Updaterequired = false;
        this.UpdatealreadyExist = false;
        this.newCategory = [{ name: '' }];
        this.category = {
            name: String
        };
        this.showAddSuccess = false;
    }
    AdminManageSurveyCategoryComponent.prototype.trackByIndex = function (index, value) {
        return index;
    };
    AdminManageSurveyCategoryComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : keypress
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to avoid space and special characters in name field
    AdminManageSurveyCategoryComponent.prototype._keyPress = function (event) {
        var pattern = /[a-z A-Z1-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar) && event.charCode != 0) {
            // invalid character, prevent input
            event.preventDefault();
        }
    };
    //  ---------------------------------end-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : loadData
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : to get all survey category
    AdminManageSurveyCategoryComponent.prototype.loadData = function () {
        var _this = this;
        var users = [];
        this._adminService.getCategory().subscribe(function (data1) {
            if (data1 != '') {
                _this.existStatus = true;
            }
            data1.forEach(function (item, index) {
                users.push({
                    name: item.name,
                    id: item._id
                });
            });
            _this.dataSource = new material_1.MatTableDataSource(users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addMoreCategory
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Add more category
    AdminManageSurveyCategoryComponent.prototype.addMoreCategory = function () {
        this.newCategory.push({ name: '' });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : closeMoreOption
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close category
    AdminManageSurveyCategoryComponent.prototype.closeMoreCategory = function (index) {
        var _this = this;
        if (this.newCategory.length > 1) {
            this.newCategory.splice(index, 1);
        }
        else {
            this.atleastOneitem = true;
            setTimeout(function () {
                _this.atleastOneitem = false;
            }, 2000);
            // this._flashMessagesService.show('Atleast one item required!', { cssClass: 'alert-danger', timeout: 1000 });
            return false;
        }
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : closeMoreOption
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : close a category
    AdminManageSurveyCategoryComponent.prototype.insertCategory = function () {
        var _this = this;
        this._adminService.addCategory(this.newCategory).subscribe(function (data) {
            if (!data.success) {
                _this.isError = true;
                _this.errorMsg = data.msg;
                _this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.errorMsg = '';
                }, 2000);
            }
            else if (data.success) {
                _this.btnDisbled = true;
                _this.loadData();
                _this.closeBtn.nativeElement.click();
                // this.isSuccess = true;
                _this.errorMsg = data.msg;
                setTimeout(function () {
                    _this.isSuccess = false;
                    _this.errorMsg = '';
                    _this.btnDisbled = false;
                }, 2000);
                _this._flashMessagesService.show('Add Category Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // this.closeBtn.nativeElement.click();
                _this.newCategory = [{ name: '' }];
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : applyFilter
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : filter in angular material table
    AdminManageSurveyCategoryComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteCategory
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : delete survey category
    AdminManageSurveyCategoryComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this._adminService.deleteCategory(id).subscribe(function (data2) {
            if (data2.success == false) {
                _this._flashMessagesService.show('Failed! This survey category is currently used in a survey ', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.loadData();
                _this._flashMessagesService.show('Delete Category Successfully!', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getCategoryId
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : pass id from modal and get it for the purpuse edit
    AdminManageSurveyCategoryComponent.prototype.getCategoryId = function (id) {
        var _this = this;
        this.catgId = id;
        this.sub = this.route.params.subscribe(function (params) {
            _this._adminService.getSinglecategory(_this.catgId).subscribe(function (data3) {
                _this.category = data3;
                // this.categoryName =this.category.name
            });
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateCategory
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Update Category
    AdminManageSurveyCategoryComponent.prototype.updateCategory = function (category) {
        var _this = this;
        this._adminService.updateCategory(category).subscribe(function (data4) {
            if (data4.success == false && data4.msg == 'required') {
                _this.Updaterequired = true;
                setTimeout(function () {
                    _this.Updaterequired = false;
                }, 2000);
            }
            else {
                if (data4.success == false && data4.msg == 'alreadyexist') {
                    _this.UpdatealreadyExist = true;
                    setTimeout(function () {
                        _this.UpdatealreadyExist = false;
                    }, 2000);
                }
                else {
                    _this.loadData();
                    _this.closeBtn1.nativeElement.click();
                    _this._flashMessagesService.show('Update Category Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                }
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminManageSurveyCategoryComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminManageSurveyCategoryComponent.prototype, "sort", void 0);
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", Object)
    ], AdminManageSurveyCategoryComponent.prototype, "f", void 0);
    __decorate([
        core_1.ViewChild('f1'),
        __metadata("design:type", Object)
    ], AdminManageSurveyCategoryComponent.prototype, "f1", void 0);
    __decorate([
        core_1.ViewChild('closeBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageSurveyCategoryComponent.prototype, "closeBtn", void 0);
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], AdminManageSurveyCategoryComponent.prototype, "closeBtn1", void 0);
    AdminManageSurveyCategoryComponent = __decorate([
        core_1.Component({
            selector: 'manage-survey-category',
            template: __webpack_require__("../../../../../src/app/components/admin-manage-survey-category/admin-manage-survey-category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-manage-survey-category/admin-manage-survey-category.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService, angular2_flash_messages_1.FlashMessagesService, router_1.Router, router_1.ActivatedRoute])
    ], AdminManageSurveyCategoryComponent);
    return AdminManageSurveyCategoryComponent;
}());
exports.AdminManageSurveyCategoryComponent = AdminManageSurveyCategoryComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .filter{\r\n    width: 5%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\" >\r\n    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n      <!-- <mat-option>None</mat-option> -->\r\n      <mat-option value=\"all\">All</mat-option>\r\n      <mat-option value=\"Active\">Active</mat-option>\r\n      <mat-option value=\"Block\">Block</mat-option>\r\n      <mat-option value=\"Delete\">Delete </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n      <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <div *ngIf=\"row.block_status==false && row.delete_status==false\"> Active</div>\r\n          <div *ngIf=\"row.block_status==true && row.delete_status==false\"> Blocked</div>\r\n          <div *ngIf=\" row.delete_status==true\"> Deleted</div>\r\n        </mat-cell>\r\n      </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\"  (click)=\"deleteCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\"  (click)=\"blockCompany(row._id)\"mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\" (click)=\"unblockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-not-verified/admin-not-verified.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminNotVerifiedComponent = /** @class */ (function () {
    function AdminNotVerifiedComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactperson', 'contactnumber', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : Allnotverficompanieslist
    AdminNotVerifiedComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllnotverficompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllnotverfiactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllnotverfiblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAllnotverfideletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
    };
    AdminNotVerifiedComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new material_1.MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminNotVerifiedComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    // -----------------------------------End------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : Allnotverficompanieslist filer
    AdminNotVerifiedComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    // -----------------------------------End------------------------------------------  
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete,block,unblock
    //delete company
    AdminNotVerifiedComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block company
    AdminNotVerifiedComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock company
    AdminNotVerifiedComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminNotVerifiedComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminNotVerifiedComponent.prototype, "sort", void 0);
    AdminNotVerifiedComponent = __decorate([
        core_1.Component({
            selector: 'admin-not-verified',
            template: __webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-not-verified/admin-not-verified.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminNotVerifiedComponent);
    return AdminNotVerifiedComponent;
}());
exports.AdminNotVerifiedComponent = AdminNotVerifiedComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-request-users/admin-request-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .filter{\r\n    width: 10%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-request-users/admin-request-users.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"example-header\">\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n  </div>\r\n    \r\n    <div class=\"example-container mat-elevation-z8\">\r\n      <div *ngIf=\"notExist\"><h4>No Users Found!</h4></div>\r\n      <mat-table [dataSource]=\"dataSource\" matSort>\r\n        <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"username\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>USER NAME </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\r\n        </ng-container>\r\n    \r\n     <!-- Name Column -->\r\n     <ng-container matColumnDef=\"email\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.email}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"requestedcompanies\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> REQUESTED COMPANIES </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> <i class=\"material-icons\" (click)=\"getCompany(row)\" data-toggle=\"modal\" data-target=\"#myModal\" data-id={{row._id}}  >visibility</i> \r\n     \r\n      </mat-cell>\r\n    </ng-container>\r\n      <ng-container matColumnDef=\"status\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">{{row.block_request[row.block_request.length-1].action_status}}\r\n          </mat-cell>\r\n        </ng-container>\r\n         <!-- Name Column -->\r\n     \r\n      \r\n      <ng-container matColumnDef=\"action\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n                <mat-icon>more_vert</mat-icon>\r\n              </button>\r\n              <mat-menu #menu=\"matMenu\">\r\n               \r\n                <button  (click)=\"acceptUser(row.email)\" mat-menu-item>\r\n                   \r\n                  <span>Accept</span>\r\n                </button>\r\n                <button  (click)=\"rejectUser(row.email)\" mat-menu-item>\r\n                   \r\n                  <span>Reject</span>\r\n                </button>\r\n              </mat-menu>\r\n           \r\n          </mat-cell>\r\n      </ng-container>\r\n    \r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n    \r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n    \r\n    \r\n     <!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n        <h4 class=\"modal-title\">Requested Companies</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Sl.No</th>\r\n              <th>COMPANY NAME</th>\r\n              <th>REQUESTED DATE</th>\r\n              <th>REASON</th>\r\n            </tr>\r\n          </thead>\r\n          <!-- <tbody *ngIf=\"involvedCompany.block_request.length ==0\">\r\n            <tr >\r\n                  <td colspan=\"4\" class=\"text-center\">No Company Involved</td>\r\n            </tr>\r\n        </tbody> -->\r\n          <tbody>\r\n            <tr *ngFor=\"let cmp of complaintCompanies;let i = index\">\r\n                <td >{{i+1}}</td>\r\n              <td>{{cmp.organization}}</td>\r\n              <td>{{cmp.date | date: 'dd-MM-yyyy'}}</td>\r\n              <td>{{cmp.reason}}</td>\r\n            </tr>\r\n           \r\n            \r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-request-users/admin-request-users.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var AdminRequestUsersComponent = /** @class */ (function () {
    function AdminRequestUsersComponent(adminService, router, config) {
        this.adminService = adminService;
        this.router = router;
        this.config = config;
        this.displayedColumns = ['slno', 'username', 'email', 'requestedcompanies', 'status', 'action'];
        this.notExist = false;
        this.involvedCompany = [];
        this.socket = socketIo(config.siteUrl);
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017 
    // Last Modified : 03-01-2018
    // Desc          : All users, delete,block,unblock 
    AdminRequestUsersComponent.prototype.refresh = function () {
        var _this = this;
        var company = [];
        this.adminService.getAllrequsers().subscribe(function (data) {
            _this.notExist = false;
            if (data.length == 0) {
                _this.notExist = true;
            }
            _this.dataSource = new material_1.MatTableDataSource(data);
            console.log(_this.dataSource);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    AdminRequestUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.socket.on('requestuser', function (data) {
            _this.refresh();
        });
    };
    AdminRequestUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    // //accept user
    AdminRequestUsersComponent.prototype.acceptUser = function (id) {
        var _this = this;
        this.adminService.acceptUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //reject User
    AdminRequestUsersComponent.prototype.rejectUser = function (id) {
        var _this = this;
        console.log(id);
        this.adminService.rejectUser(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    AdminRequestUsersComponent.prototype.getCompany = function (company) {
        this.involvedCompany = company;
        this.complaintCompanies = company.block_request[company.block_request.length - 1].companies;
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminRequestUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminRequestUsersComponent.prototype, "sort", void 0);
    AdminRequestUsersComponent = __decorate([
        core_1.Component({
            selector: 'admin-request-users',
            template: __webpack_require__("../../../../../src/app/components/admin-request-users/admin-request-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-request-users/admin-request-users.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router,
            config_1.Config])
    ], AdminRequestUsersComponent);
    return AdminRequestUsersComponent;
}());
exports.AdminRequestUsersComponent = AdminRequestUsersComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-side-bar/admin-side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 0px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #282c37;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n        padding-top: 20px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #ea5a5a !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 15px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n\r\n.nav .open>a, .nav .open>a:focus, .nav .open>a:hover {\r\n    background-color: #ea5a5a;\r\n    border-color: #337ab7;\r\n}\r\n.dropdown-menu>li>a.active2{background-color: #a71b1c;\r\n    color: #fff !important;}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-side-bar/admin-side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav side-nav\">\r\n  <!-- <li> -->\r\n      <!-- <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a> -->\r\n  <!-- </li> -->\r\n  <img style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> Survey</a>\r\n   <!-- ---------------------------------Start-------------------------------------------\r\n Function      : \r\n Params        : \r\n Returns       : \r\n Author        : Jooshifa\r\n Date          : 26-12-2017\r\n Last Modified : 26-12-2017, Jooshifa ,28-01-2018 sudha\r\n Desc          : Sidebar for master setttings -->\r\n \r\n <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n  <a routerLink=\"/admin-dashboard\"><i class=\"fa fa-tachometer\"></i> Dashboard</a>\r\n\r\n</li>\r\n<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n<a routerLink=\"/admin-company\"><i class=\"fa fa-building\"></i> Company</a>\r\n\r\n</li>\r\n<li  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n      <a routerLink=\"/admin-users\"><i class=\"fa fa-users\"></i> Users</a>\r\n \r\n</li>\r\n<li>\r\n  <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-cogs\"></i> Master Settings <span class=\"caret\"></span></a> \r\n  <ul class=\"dropdown-menu\" role=\"menu\">\r\n      <li><a routerLink=\"/manage-survey-category\">Manage Survey Category</a></li>\r\n      <li><a routerLink=\"/admin-manage-organization-type\">Manage Organization Type</a></li>\r\n      <li><a routerLink=\"/admin-manage-industry\">Manage Industry</a></li>\r\n      <li><a routerLink=\"/admin-manage-survey-attender-type\">Manage Survey attender type</a></li>\r\n\r\n\r\n </ul>\r\n</li>\r\n</ul>\r\n\r\n<!-- ----------------------------------End------------------------------------------- -->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin-side-bar/admin-side-bar.component.ts":
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
var AdminSideBarComponent = /** @class */ (function () {
    function AdminSideBarComponent() {
    }
    AdminSideBarComponent.prototype.ngOnInit = function () {
    };
    AdminSideBarComponent = __decorate([
        core_1.Component({
            selector: 'admin-side-bar',
            template: __webpack_require__("../../../../../src/app/components/admin-side-bar/admin-side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-side-bar/admin-side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSideBarComponent);
    return AdminSideBarComponent;
}());
exports.AdminSideBarComponent = AdminSideBarComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .filter{\r\n    width: 5%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\" >\r\n    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n      <!-- <mat-option>None</mat-option> -->\r\n      <mat-option value=\"all\">All</mat-option>\r\n      <mat-option value=\"Active\">Active</mat-option>\r\n      <mat-option value=\"Block\">Block</mat-option>\r\n      <mat-option value=\"Delete\">Delete </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n      <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n  \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <div *ngIf=\"row.block_status==false && row.delete_status==false\"> Active</div>\r\n          <div *ngIf=\"row.block_status==true && row.delete_status==false\"> Blocked</div>\r\n          <div *ngIf=\" row.delete_status==true\"> Deleted</div>\r\n        </mat-cell>\r\n      </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\" (click)=\"deleteCompany(row._id)\"mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\"  (click)=\"blockCompany(row._id)\"mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\"  (click)=\"unblockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-subscribed/admin-subscribed.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminSubscribedComponent = /** @class */ (function () {
    function AdminSubscribedComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['companyname', 'email', 'contactperson', 'contactnumber', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 03-01-2018
    // Desc          : All subscribed companieslist
    // -----------------------------------
    AdminSubscribedComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAllsubcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAllsubactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAllsubblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAllsubdeletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
    };
    AdminSubscribedComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new material_1.MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminSubscribedComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All subscribed companieslist filter
    AdminSubscribedComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete , block, unblock
    //delete company
    AdminSubscribedComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block company
    AdminSubscribedComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock company
    AdminSubscribedComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminSubscribedComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminSubscribedComponent.prototype, "sort", void 0);
    AdminSubscribedComponent = __decorate([
        core_1.Component({
            selector: 'admin-subscribed',
            template: __webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-subscribed/admin-subscribed.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminSubscribedComponent);
    return AdminSubscribedComponent;
}());
exports.AdminSubscribedComponent = AdminSubscribedComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-top-bar/admin-top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.notify {\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #2882f7;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n}\r\n\r\n\r\n.notify-count{\r\n    position: absolute;\r\n    top: -9px;\r\n    right: -8px;\r\n    background: #DE2413;\r\n    height: 15px;\r\n    width: 15px;\r\n    border-radius: 50%;\r\n    font-size: 10px;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    line-height: 14px;\r\n}\r\n.fa-bell{position:relative;}\r\n.media-object{width:100%;}\r\n\r\n\r\n\r\n.list-notificacao{\r\n    min-width: 400px;\r\n    background: #ffffff;\r\n    left:inherit;\r\n    right:0;\r\n  }\r\n  \r\n  .list-notificacao li{\r\n     border-bottom : 1px #d8d8d8 solid;\r\n     text-align    : justify;\r\n     padding       : 5px 10px 5px 10px;\r\n     cursor: pointer;\r\n     font-size: 12px;\r\n  }\r\n  \r\n  .list-notificacao li:hover{\r\n  background: #f1eeee;\r\n  }\r\n  \r\n  .list-notificacao li:hover .exclusaoNotificacao{\r\n  display: block;\r\n  }\r\n  \r\n  .list-notificacao li  p{\r\n   color: black;\r\n   width: 305px;\r\n  }\r\n  \r\n  .list-notificacao li .exclusaoNotificacao{\r\n      width: 25px;\r\n      min-height: 40px;\r\n      position: absolute;\r\n      right: 0;\r\n      display: none;\r\n  }\r\n  \r\n  .list-notificacao .media img{\r\n      width: 40px;\r\n      height: 40px;\r\n      float:left;\r\n      margin-right: 10px;\r\n  }\r\n  \r\n  .badgeAlert {\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    padding: 3px 5px;\r\n    font-size: 12px;\r\n    font-weight: 700;\r\n    color: #fff;\r\n    line-height: 1;\r\n    vertical-align: baseline;\r\n    white-space: nowrap;\r\n    text-align: center;\r\n    background-color: #d9534f;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    margin-top: -32px;\r\n    margin-left: 5px;\r\n  }\r\n  .notification{background-color:#fff !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-top-bar/admin-top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n  <!-- Brand and toggle get grouped for better mobile display -->\r\n  \r\n \r\n  <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\r\n  <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n      <div class=\"navbar-header\">\r\n          \r\n       <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n           <span class=\"sr-only\">Toggle navigation</span>\r\n           <span class=\"icon-bar\"></span>\r\n           <span class=\"icon-bar\"></span>\r\n           <span class=\"icon-bar\"></span>\r\n       </button>\r\n      \r\n      </div>\r\n         <ul class=\"nav navbar-nav pull-right profilz\">\r\n            <li class=\"dropdown notification\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                 <span class=\"glyphicon glyphicon-bell alertNotificacao\"></span>\r\n                 <span class='badgeAlert'>{{notif.count}}</span>\r\n                 <span class=\"\"></span></a>\r\n                    <ul class=\"list-notificacao dropdown-menu\">\r\n                        <h3>Block Requests</h3>\r\n                        <div *ngFor=\"let item of notif.users\">\r\n                            <div *ngFor=\"let cmp of item.block_request\"> \r\n                                <div *ngFor=\"let cmpy of cmp.companies\"> \r\n                                    <div *ngIf=\"cmpy.is_viewed==false\">\r\n                                        <li>\r\n                                            <div class=\"media\">\r\n                                                        \r\n                                                <div class=\"media-body\" >\r\n                                                    <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs button_exclusao' id='1'(click)=\"viewstatusUser(item._id,cmpy.company_id)\" >x</button>\r\n                                                     </div>\r\n                                                        <h4 class=\"media-heading\"  >{{item.name}}</h4>\r\n                                                         <p>Organization:{{cmpy.organization}}</p>\r\n                                                         <p> Reason : {{cmpy.reason}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                                \r\n                                        </li> \r\n                                    </div>  \r\n                                </div>   \r\n                            </div>\r\n                        </div>\r\n                    </ul>\r\n             </li>\r\n            <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Survey  Admin <span class=\"glyphicon glyphicon-user pull-right\"></span></a>\r\n                    <ul class=\"dropdown-menu\">\r\n                    \r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                        <a  (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out pull-right\"></span> LogOut </a>\r\n                        \r\n                    </li>\r\n                    </ul>\r\n            </li>\r\n\r\n          \r\n        </ul>\r\n     \r\n        \r\n  </div>\r\n  <!-- /.navbar-collapse -->\r\n</nav>\r\n\r\n<!-- Top Menu Items -->\r\n<ul class=\"nav navbar-right top-nav\">\r\n  <li class=\"dropdown\" *ngFor= \"let item of info\">\r\n          \r\n      <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell\"><div class=\"notify-count\">2</div></i> <b class=\"caret\"></b></a>\r\n      <ul class=\"dropdown-menu message-dropdown\">\r\n          <li class=\"message-preview\"  >\r\n              <a >\r\n                  <div class=\"media\">\r\n                      <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                      <span class=\"pull-left\">\r\n                          <img class=\"media-object\"\r\n                          \r\n                           alt=\"\">\r\n                      </span>\r\n                     </div>\r\n                     <div class=\"col-md-8\">\r\n                      <div class=\"media-body\">\r\n                          <h5 class=\"media-heading\">\r\n                              <strong>Name</strong>\r\n                          </h5>\r\n                          \r\n                          <p>Item confirmed by bidder</p>\r\n                      </div>\r\n                      </div>\r\n                      </div>\r\n                  </div>\r\n              </a>\r\n          </li>\r\n          <!-- <li class=\"message-footer\">\r\n              <a href=\"#\">Read All New Messages</a>\r\n          </li> -->\r\n      </ul>\r\n  </li>\r\n  \r\n  \r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/components/admin-top-bar/admin-top-bar.component.ts":
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
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var AdminTopBarComponent = /** @class */ (function () {
    function AdminTopBarComponent(adminService, router, config) {
        this.adminService = adminService;
        this.router = router;
        this.config = config;
        // notExist =false;
        this.notif = Object;
        this.socket = socketIo(config.siteUrl);
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 02-01-2018 
    // Last Modified : 05-01-2018
    // Desc          : All users, delete,block,unblock 
    AdminTopBarComponent.prototype.refresh = function () {
        var _this = this;
        //this.users = [];
        this.adminService.getAdminnotification().subscribe(function (data) {
            _this.notif = data;
            console.log(data);
        });
    };
    AdminTopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refresh();
        this.socket.on('requestuser', function (data) {
            _this.refresh();
        });
    };
    // viewstatus user
    AdminTopBarComponent.prototype.viewstatusUser = function (id, cmpid) {
        var _this = this;
        console.log(id, cmpid);
        this.adminService.viewstatusUser(id, cmpid).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    AdminTopBarComponent = __decorate([
        core_1.Component({
            selector: 'admin-top-bar',
            template: __webpack_require__("../../../../../src/app/components/admin-top-bar/admin-top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-top-bar/admin-top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router,
            config_1.Config])
    ], AdminTopBarComponent);
    return AdminTopBarComponent;
}());
exports.AdminTopBarComponent = AdminTopBarComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .filter{\r\n    width: 5%;\r\n    float: right;\r\n    clear: left;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"filter\" >\r\n    <mat-select  (change)=\"refresh()\" [(value)]=\"selected\">\r\n      <!-- <mat-option>None</mat-option> -->\r\n      <mat-option value=\"all\">All</mat-option>\r\n      <mat-option value=\"Active\">Active</mat-option>\r\n      <mat-option value=\"Block\">Block</mat-option>\r\n      <mat-option value=\"Delete\">Delete </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n<div class=\"example-header\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n</div>\r\n  \r\n  <div class=\"example-container mat-elevation-z8\">\r\n      <div *ngIf=\"notExist\"><h4>No Company Found!</h4></div>\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n      <!-- Name Column -->\r\n   <ng-container matColumnDef=\"slno\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Sl_No </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"companyname\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header>COMPANY NAME </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\"> {{row.organization}} </mat-cell>\r\n      </ng-container>\r\n  \r\n   <!-- Name Column -->\r\n   <ng-container matColumnDef=\"email\">\r\n    <mat-header-cell *matHeaderCellDef mat-sort-header> EMAIL </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\"> {{row.contact_email}} </mat-cell>\r\n  </ng-container>\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"contactperson\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT PERSON </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_first_name}}</mat-cell>\r\n    </ng-container>\r\n     <!-- Progress Column -->\r\n     <ng-container matColumnDef=\"contactnumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> CONTACT NUMBER </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.contact_number}}</mat-cell>\r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"status\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> STATUS </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\">\r\n          <div *ngIf=\"row.block_status==false && row.delete_status==false\"> Active</div>\r\n          <div *ngIf=\"row.block_status==true && row.delete_status==false\"> Blocked</div>\r\n          <div *ngIf=\" row.delete_status==true\"> Deleted</div>\r\n        </mat-cell>\r\n      </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n          <button mat-icon-button [matMenuTriggerFor]=\"menu\">\r\n              <mat-icon>more_vert</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n              <button *ngIf=\"row.delete_status==false\" (click)=\"deleteCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">delete</i>\r\n                <span>Delete</span>\r\n              </button>\r\n              <button *ngIf=\"row.delete_status==true\" mat-menu-item disabled>\r\n                <i class=\"material-icons\">delete_forever</i>\r\n              <span>Deleted</span>\r\n            </button>\r\n              <button *ngIf=\"row.block_status==false && row.delete_status==false\" (click)=\"blockCompany(row._id)\"mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Block</span>\r\n              </button>\r\n              <button *ngIf=\"row.block_status==true && row.delete_status==false\" (click)=\"unblockCompany(row._id)\" mat-menu-item>\r\n                  <i class=\"material-icons\">block</i>\r\n                <span>Unblock</span>\r\n              </button>\r\n            </mat-menu>\r\n         \r\n        </mat-cell>\r\n    </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "../../../../../src/app/components/admin-trial/admin-trial.component.ts":
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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var admin_service_1 = __webpack_require__("../../../../../src/app/services/admin.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AdminTrialComponent = /** @class */ (function () {
    function AdminTrialComponent(adminService, router) {
        this.adminService = adminService;
        this.router = router;
        this.displayedColumns = ['slno', 'companyname', 'email', 'contactperson', 'contactnumber', 'status', 'action'];
        this.notExist = false;
        this.selected = 'all';
    }
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : Allnot trailcompanieslist
    AdminTrialComponent.prototype.refresh = function () {
        var _this = this;
        console.log(this.selected);
        var company = [];
        if (this.selected == 'all') {
            this.adminService.getAlltrialcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Active') {
            this.adminService.getAlltrialactivecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Block') {
            this.adminService.getAlltrialblockcompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
        if (this.selected == 'Delete') {
            this.adminService.getAlltrialdeletecompanies().subscribe(function (data) {
                _this.loadToDataTable(data);
            });
        }
    };
    AdminTrialComponent.prototype.loadToDataTable = function (data) {
        this.notExist = false;
        if (data.length == 0) {
            this.notExist = true;
        }
        this.dataSource = new material_1.MatTableDataSource(data);
        console.log(this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    AdminTrialComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : All trail companieslist filer
    AdminTrialComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete,block,unblock
    //delete company
    AdminTrialComponent.prototype.deleteCompany = function (id) {
        var _this = this;
        this.adminService.deleteCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //block company
    AdminTrialComponent.prototype.blockCompany = function (id) {
        var _this = this;
        this.adminService.blockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    //unblock company
    AdminTrialComponent.prototype.unblockCompany = function (id) {
        var _this = this;
        this.adminService.unblockCompany(id).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.refresh();
            }
            else {
            }
        });
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], AdminTrialComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], AdminTrialComponent.prototype, "sort", void 0);
    AdminTrialComponent = __decorate([
        core_1.Component({
            selector: 'admin-trial',
            template: __webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-trial/admin-trial.component.css")]
        }),
        __metadata("design:paramtypes", [admin_service_1.AdminService,
            router_1.Router])
    ], AdminTrialComponent);
    return AdminTrialComponent;
}());
exports.AdminTrialComponent = AdminTrialComponent;


/***/ }),

/***/ "../../../../../src/app/components/admin-users/admin-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n/* .active1{\r\n    background-color: #eee;\r\n} */\r\n.active1 > a\r\n{background-color: #fff !important;\r\n    color:#ea5a5a !important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin-users/admin-users.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n  \r\n                <div id=\"wrapper\">\r\n            \r\n                    <!-- Navigation -->\r\n                    <admin-top-bar></admin-top-bar>            \r\n        <admin-side-bar></admin-side-bar>\r\n            \r\n                    <div id=\"\">\r\n                        <div class=\"container-fluid\">\r\n                                \r\n                                            <!-- Page Heading -->\r\n                                          \r\n                                      \r\n                                            <!-- /.row -->\r\n                            \r\n                                        </div>\r\n                        <div class=\"col-md-2\">\r\n                              <nav class=\"nav-sidebar\">\r\n                                  <ul class=\"nav tabs\">\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'All'}\"><a (click)=\"updateView('All')\" href=\"#tab1\" data-toggle=\"tab\">All Users</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Active'}\"><a (click)=\"updateView('Active')\" href=\"#tab4\" data-toggle=\"tab\">Active Users</a></li> \r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab2\" data-toggle=\"tab\">Blocked Users</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Delete'}\"><a (click)=\"updateView('Delete')\" href=\"#tab3\" data-toggle=\"tab\">Delete Users</a></li>  \r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Request'}\"><a (click)=\"updateView('Request')\" href=\"#tab5\" data-toggle=\"tab\">Block Request</a></li>                               \r\n                                  </ul>\r\n                                </nav>\r\n                        </div>\r\n                        <div class=\"col-md-10\">\r\n                            \r\n                          \r\n    \r\n                            <div *ngIf=\"viewComp == 'All'\">\r\n                              <admin-all-users></admin-all-users>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Active'\">\r\n                                <admin-active-users></admin-active-users>\r\n                              </div>\r\n                            <div *ngIf=\"viewComp == 'Blocked'\">\r\n                              <admin-blocked-users></admin-blocked-users>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Delete'\">\r\n                              <admin-deleted-users></admin-deleted-users>\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Request'\">\r\n                              <admin-request-users></admin-request-users>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <!-- /#page-wrapper -->\r\n                      \r\n                                 \r\n                      </div>\r\n                      \r\n                      <footer></footer> \r\n                        \r\n                      </body>"

/***/ }),

/***/ "../../../../../src/app/components/admin-users/admin-users.component.ts":
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
var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent() {
        this.viewComp = 'All';
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        console.log(this.viewComp);
    };
    AdminUsersComponent.prototype.updateView = function (page) {
        this.viewComp = page;
        this.title = page + ' Users List';
    };
    AdminUsersComponent = __decorate([
        core_1.Component({
            selector: 'admin-users',
            template: __webpack_require__("../../../../../src/app/components/admin-users/admin-users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/admin-users/admin-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());
exports.AdminUsersComponent = AdminUsersComponent;


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
        // Function      : get logged company details
        // Params        : 
        // Returns       : company details
        // Author        : Rinsha
        // Date          : 12-1-2018
        // Last Modified : 12-1-2018, Rinsha
        // Desc          :
        this.companyService.getLoggedUSerDetails().subscribe(function (info) {
            if (info.role == "admin") {
                // this.routes.navigate(['/admin dashboard']);
            }
            if (info.role == "user") {
                if (info.delete_status == true || info.block_status == true) {
                    // this.routes.navigate(['/404]); 
                }
                // this.routes.navigate(['/survey', info.surveyId]); 
            }
        });
        // ---------------------------------End-------------------------------------------
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

module.exports = "<body class=\"login-body\">\n   \n\t<div class=\"login-page\">\n  <div class=\"form\">\n\t<h2>Login</h2>\n\t\n    <form class=\"login-form\" role=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && login()\" novalidate>\n    <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n\t\t\t<input type=\"text\" placeholder=\"Username\" class=\"styles1\" required [(ngModel)]=\"newLogin.contact_person_email\" name=\"email\" #email=\"ngModel\"/>\n\t\t\t<div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Username is required</div>\n\t  </div>\n\t   <div class=\"input-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa\" aria-hidden=\"true\"></i></span>\n\t\t\t<input type=\"password\" placeholder=\"Password\" class=\"styles1\" required [(ngModel)]=\"newLogin.password\" name=\"password\" #password=\"ngModel\"/>\n\t\t\t<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\t  </div>\n     <br/>\n\t\t\t<button [disabled]=\"btnDisbled\" type=\"submit\" class=\"btn btn-danger\">Sign In</button>\n\t\t\t<br>\n\t\t <div class=\"text-danger text-center\">\n\t\t\t\t{{msg}}\n\t </div>\n\t\t<br/>\n\n\t\t<div class=\"row omb_row-sm-offset-3 omb_socialButtons\">\n    \t    <div class=\"col-xs-12 col-sm-12\">\n\t\t        <a href=\"/auth/facebook\" class=\"btn btn-lg btn-block omb_btn-facebook\" style=\"color:#fff;\">\n\t\t\t        <i class=\"fa fa-facebook visible-xs\"></i>\n\t\t\t        <span class=\"hidden-xs\">Sign In With Facebook</span>\n\t\t        </a>\n\t        </div>\n        \t\n        \t<div class=\"col-xs-12 col-sm-12\">\n\t\t        <a href=\"/auth/google\" class=\"btn btn-lg btn-block omb_btn-google\" style=\"color:#fff;\">\n\t\t\t        <i class=\"fa fa-google-plus visible-xs\"></i>\n\t\t\t        <span class=\"hidden-xs\">Sign In With Google+</span>\n\t\t        </a>\n\t        </div>\t\n\t    </div>\n\t\t<button type=\"button\" [routerLink]=\"['/creg']\" class=\"btn btn-danger\">SignUp</button>\n    </form>\n\t\t\t\t\t\t\t\t\n  </div>\n</div>\n\n</body>\n\n\n\n"

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

/***/ "../../../../../src/app/components/company-manage-user-groups/company-manage-user-groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 7px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  .example-form-field {\r\n    width: 500px;\r\n  }\r\n  .heading{\r\n    color :#d9534f;\r\n    text-align: center\r\n}\r\nh4{\r\n    text-align: center;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-manage-user-groups/company-manage-user-groups.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<body>\r\n  \r\n                <div id=\"wrapper\">\r\n            \r\n                    <!-- Navigation -->\r\n        <app-company-top-bar></app-company-top-bar>            \r\n        <app-company-sidebar></app-company-sidebar>\r\n            \r\n                    <div id=\"\">\r\n                        <div class=\"container-fluid\">\r\n                                \r\n                                            <!-- Page Heading -->\r\n                                          \r\n                                      \r\n                                            <!-- /.row -->\r\n                            \r\n                                        </div>\r\n                                  \r\n<div class=\"col-md-6 col-md-offset-3\">\r\n    <flash-messages></flash-messages>\r\n  \r\n  <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\">+Add New</button>\r\n        <div class=\"example-header\" >\r\n            <mat-form-field>\r\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n            </mat-form-field>\r\n        </div>\r\n        \r\n          <div class=\"noitem\" *ngIf=\"!existStatus\"><h4>No item Found!</h4></div>\r\n        \r\n        <br>\r\n  <div class=\"example-container mat-elevation-z8 \">\r\n      <mat-table [dataSource]=\"dataSource\" matSort>\r\n           <ng-container matColumnDef=\"id\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n    </ng-container>\r\n              <ng-container matColumnDef=\"name\">\r\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> GROUP NAME</mat-header-cell>\r\n                   <mat-cell *matCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n               </ng-container>\r\n                <ng-container matColumnDef=\"action\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> ACTION</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\"><mat-icon>more_vert</mat-icon> </button>\r\n                      <mat-menu #menu=\"matMenu\">\r\n                          <button  mat-menu-item (click)=\"getEditId(row.id,row.name)\" data-toggle=\"modal\" data-target=\"#myModal2\">\r\n                                <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\r\n                                <span>Edit</span>\r\n                                </button>\r\n                            <button mat-menu-item  (click)=\"getId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\"> \r\n                                <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\r\n                                <span>Delete</span>\r\n                            </button>\r\n                      </mat-menu> </mat-cell>\r\n            \r\n                   </ng-container>\r\n     \r\n  \r\n\r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                 <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                 </mat-row>\r\n                </mat-table>\r\n  \r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- --------------------------------------------- delete modal ----------------------------------------------------------------- -->\r\n    <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n      \r\n          <!-- Modal content-->\r\n          <div class=\"modal-content\">\r\n            <!-- <div class=\"modal-header\"> -->\r\n              <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n            <!-- </div> -->\r\n            <div class=\"modal-body\">\r\n                <h4>Are you sure to delete?</h4>\r\n            \r\n            </div>\r\n          \r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              <button type=\"button\" (click)=\"deleteUserGroup(id)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\r\n            </div>\r\n          </div>\r\n      \r\n        </div>\r\n      </div>\r\n\r\n\r\n<!-- -------------------------------------------------------------add user group modal--------------------------------------------------------------------- -->\r\n\r\n<div id=\"myModal\"  class=\"modal fade\">\r\n  <div class=\"modal-dialog\">\r\n  \r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\r\n        <h4 class=\"modal-title\">Add New Group</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        \r\n    <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addGroup(newGroup);\" novalidate>\r\n    \r\n        <div class=\"form-group\" >\r\n            <label> Group name </label>\r\n            <br>\r\n            <div *ngIf=\"isError\" class=\"alert alert-danger\">\r\n                {{errorMsg}}\r\n           </div>\r\n          \r\n           <div class=\"col-md-7\">\r\n            <div>\r\n              <div class=\"inputitem\">\r\n              <mat-form-field class=\"inputfileds\">\r\n                <input matInput placeholder=\"Group name\" name =\"group\" [(ngModel)]=\"newGroup.group\"  required >\r\n                <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\r\n              </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div style=\"clear: both;\"></div>\r\n           \r\n            <div class=\"inputitem\">\r\n                <mat-form-field class=\"inputfileds\">\r\n          \r\n                  <mat-select placeholder=\"Users\" name='selected'  #users=\"ngModel\"  [(ngModel)]=\"newGroup.email\" multiple>\r\n                    <mat-option [value]=\"users\" *ngFor=\"let users of userData;\"  >{{users.email}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n          </div>\r\n            <br>\r\n            <div style=\"clear: both;\"></div>\r\n            <div *ngIf=\"showAddGroup\">\r\n            <mat-form-field class=\"inputfileds\" >\r\n                <input matInput placeholder=\"Group Name\" [(ngModel)]=\"newGroup\" name=\"newGroup\" >\r\n              </mat-form-field>\r\n              <button  class=\"btn btn-danger ourbutton\" (click)=\"addGroup()\">Add</button>\r\n              </div>\r\n              \r\n        </div>\r\n        <br>\r\n        <button type= \"submit\" [disabled]=\"btnDisbled\" class=\"btn btn-danger ourbutton\" >Submit</button>\r\n       \r\n    </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n      </div>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n\r\n<!-- ----------------------------------------------------------------------Edit modal-------------------------------------------------------------------------- -->\r\n<div id=\"myModal2\"  class=\"modal fade\">\r\n    <div class=\"modal-dialog\">\r\n  \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\r\n          <h4 class=\"modal-title\">Add New Group</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          \r\n      <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && updateUserGroup(newGroup,id);\" novalidate>\r\n      \r\n          <div class=\"form-group\" >\r\n              <label> Group name </label>\r\n              <br>\r\n              <div *ngIf=\"isError\" class=\"alert alert-danger\">\r\n                  {{errorMsg}}\r\n             </div>\r\n            \r\n             <div class=\"col-md-7\">\r\n              <div>\r\n                <div class=\"inputitem\">\r\n                   \r\n                <mat-form-field class=\"inputfileds\">\r\n                  <input matInput placeholder=\"Group name\" name =\"group\" [(ngModel)]=\"newGroup.group\"  required >\r\n                  <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\r\n                </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div style=\"clear: both;\"></div>\r\n             \r\n              <div class=\"inputitem\">\r\n                  <mat-form-field class=\"inputfileds\">\r\n            \r\n                    <!-- <mat-select placeholder=\"Users\" name='edituser'  [(ngModel)]=\"newGroup.email\" multiple> -->\r\n                    <mat-select placeholder=\"Users\" name='edituser'  [(ngModel)]=\"newGroup.email\" multiple>\r\n                      <mat-option [value]=\"users.email\" *ngFor=\"let users of userData;\"   >{{users.email}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n              </div>\r\n            </div>\r\n              <br>\r\n              <div style=\"clear: both;\"></div>\r\n              <div *ngIf=\"showAddGroup\">\r\n              <mat-form-field class=\"inputfileds\" >\r\n                  <input matInput placeholder=\"Group Name\" [(ngModel)]=\"newGroup\" name=\"newGroup\" >\r\n                </mat-form-field>\r\n                <button  class=\"btn btn-danger ourbutton\" (click)=\"addGroup()\">Add</button>\r\n                </div>\r\n                \r\n          </div>\r\n          <br>\r\n          <button type= \"submit\"  class=\"btn btn-danger ourbutton\" >Submit</button>\r\n         \r\n      </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n\r\n    </div>\r\n </div>\r\n  </body>"

/***/ }),

/***/ "../../../../../src/app/components/company-manage-user-groups/company-manage-user-groups.component.ts":
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
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var CompanyManageUserGroupsComponent = /** @class */ (function () {
    function CompanyManageUserGroupsComponent(companyService, _flashMessagesService) {
        this.companyService = companyService;
        this._flashMessagesService = _flashMessagesService;
        this.existStatus = false;
        this.displayedColumns = ['id', 'name', 'action'];
        this.newGroup = { group: '', email: [], id: '' };
        this.newGrouparray = [];
        this.btnDisbled = false;
        this.atleastOneitem = false;
        this.isSuccess = false;
        this.isError = false;
        this.Updaterequired = false;
        this.UpdatealreadyExist = false;
    }
    CompanyManageUserGroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        this.companyService.getMyUsers().subscribe(function (userDatas) {
            // console.log(userData);
            // console.log(userData)
            _this.userData = userDatas;
        });
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : applyFilter
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          :filter data in angular table
    CompanyManageUserGroupsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //  ---------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : loadData
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          : to get all user groups
    CompanyManageUserGroupsComponent.prototype.loadData = function () {
        var _this = this;
        var users = [];
        this.companyService.getAllUserGroup().subscribe(function (data1) {
            if (data1 != '') {
                _this.existStatus = true;
            }
            data1.group.forEach(function (item, index) {
                users.push({
                    name: item.name,
                    id: item._id
                });
            });
            _this.dataSource = new material_1.MatTableDataSource(users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getId
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          :fget id of a group
    CompanyManageUserGroupsComponent.prototype.getId = function (id) {
        this.id = id;
        //  console.log(this.id)
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getEditId,getSingleUserGroup
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          :get name and id of group and get single user group
    CompanyManageUserGroupsComponent.prototype.getEditId = function (id, name) {
        var _this = this;
        //  console.log(id);
        this.id = id;
        this.newGroup.group = name;
        this.companyService.getSingleUserGroup(this.id).subscribe(function (singleGroupUsers) {
            _this.newGroup.email = singleGroupUsers;
            // this.newGrouparray.push(singleGroupUsers);
        });
        //   this.companyService.getMyUsers().subscribe(userData=>{
        //     userData.forEach(useremail=>{
        //     this.newGrouparray.push(userData.email)
        //     // console.log(useremail.email);
        //     })
        //     // console.log(userData);
        //     // console.log(userData)
        //     // this.userData =userData
        // });
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getId
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          :fget id of a group
    CompanyManageUserGroupsComponent.prototype.updateUserGroup = function (newGroup, id) {
        var _this = this;
        this.newGroup.id = id;
        // console.log(id)
        // console.log(newGroup);
        this.companyService.updateUserGroup(this.newGroup).subscribe(function (updateData) {
            if (!updateData.success) {
                _this.isError = true;
                _this.errorMsg = updateData.msg;
                // this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.errorMsg = '';
                }, 2000);
            }
            else if (updateData.success) {
                // this.btnDisbled = true
                _this.loadData();
                _this.closeBtn1.nativeElement.click();
                // this.isSuccess = true;
                _this._flashMessagesService.show('Update User Group Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // this.closeBtn.nativeElement.click();
                _this.newGroup = { group: '', email: [], id: '' };
            }
        });
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteUserGroup
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          :gelete a usergroup
    CompanyManageUserGroupsComponent.prototype.deleteUserGroup = function (id) {
        var _this = this;
        this.companyService.deleteUserGroup(id).subscribe(function (data2) {
            if (data2.success == false) {
                console.log("success is false");
                _this._flashMessagesService.show('Failed! ', { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.loadData();
                console.log("success is true");
                _this._flashMessagesService.show('Delete User group Successfully!', { cssClass: 'alert-success', timeout: 1000 });
            }
        });
    };
    //  ---------------------------------end---------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addGroup
    // Params        : newGroup
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          :add a user group
    CompanyManageUserGroupsComponent.prototype.addGroup = function (newGroup) {
        var _this = this;
        //  console.log(newGroup);
        this.companyService.addUserGroupsInCompany(this.newGroup).subscribe(function (addGroup) {
            if (!addGroup.success) {
                _this.isError = true;
                _this.errorMsg = addGroup.msg;
                _this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.errorMsg = '';
                }, 2000);
            }
            else if (addGroup.success) {
                _this.btnDisbled = true;
                _this.loadData();
                _this.closeBtn.nativeElement.click();
                // this.isSuccess = true;
                _this._flashMessagesService.show('Add User Groups Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // this.closeBtn.nativeElement.click();
                _this.newGroup = { group: '', email: [], id: '' };
                _this.btnDisbled = false;
            }
        });
        //  console.log("componennt");
        //  console.log(newGroup);
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", Object)
    ], CompanyManageUserGroupsComponent.prototype, "f", void 0);
    __decorate([
        core_1.ViewChild('f1'),
        __metadata("design:type", Object)
    ], CompanyManageUserGroupsComponent.prototype, "f1", void 0);
    __decorate([
        core_1.ViewChild('closeBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyManageUserGroupsComponent.prototype, "closeBtn", void 0);
    __decorate([
        core_1.ViewChild('closeBtn1'),
        __metadata("design:type", core_1.ElementRef)
    ], CompanyManageUserGroupsComponent.prototype, "closeBtn1", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], CompanyManageUserGroupsComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], CompanyManageUserGroupsComponent.prototype, "sort", void 0);
    CompanyManageUserGroupsComponent = __decorate([
        core_1.Component({
            selector: 'company-manage-user-groups',
            template: __webpack_require__("../../../../../src/app/components/company-manage-user-groups/company-manage-user-groups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-manage-user-groups/company-manage-user-groups.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, angular2_flash_messages_1.FlashMessagesService])
    ], CompanyManageUserGroupsComponent);
    return CompanyManageUserGroupsComponent;
}());
exports.CompanyManageUserGroupsComponent = CompanyManageUserGroupsComponent;


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

module.exports = "    <app-company-sidebar></app-company-sidebar>\r\n    <app-company-top-bar></app-company-top-bar>\r\n<flash-messages></flash-messages>\r\n<br>\r\n<div class=\"container\">\r\n  <div class=\"panel panel-default panel-primary\">\r\n    <div class=\"panel-body\">\r\n      \r\n      <div class=\"form-group example-container\">\r\n          <div class=\"col-md-12 names\">\r\n            <label class=\"col-xs-12\">Email : {{company?.contact_person_email}}</label><br>\r\n            <label class=\"col-xs-12\">Name : {{company?.contact_person_fname}} {{company?.contact_person_lname}}</label><br/>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Organization </label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\r\n                  <input matInput [(ngModel)]=\"newReg.organization\" name=\"organization\"  required formControlName=\"orgValidation\">\r\n              </mat-form-field>\r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Organization Type</label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\r\n                  <mat-select [ngModel]=\"typeId\" name=\"organization_type\" required formControlName=\"organization_typeValidation\">\r\n                      <mat-option *ngFor=\"let type of orgType\" [value]=\"type._id\" (click)=\"getOrgType(type)\">\r\n                        {{ type.name }}\r\n                      </mat-option>\r\n                    </mat-select>\r\n              </mat-form-field>\r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Industry </label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\"> \r\n                        <mat-select [(ngModel)]=\"industryId\" name=\"industry\" required formControlName=\"industryValidation\">\r\n                            <mat-option *ngFor=\"let item of industry\" [value]=\"item._id\" (click)=\"getIndustry(item)\" >\r\n                              {{ item.name }}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                    </mat-form-field>\r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Location </label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\r\n                  <input matInput [(ngModel)]=\"newReg.location\" name=\"location\" required formControlName=\"locationValidation\">\r\n                </mat-form-field>\r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Company Strength </label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\r\n                  <input type=\"number\" matInput [(ngModel)]=\"newReg.company_strength\" name=\"company_strength\" required formControlName=\"strengthValidation\">\r\n                </mat-form-field>\r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Phone Number </label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\r\n                  <input matInput [(ngModel)]=\"newReg.contact_no\" name=\"contact_no\" maxlength=\"10\" minlength=\"10\" required formControlName=\"number\">\r\n                  <mat-error>Not a valid phone number</mat-error>\r\n                </mat-form-field> \r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Job Role </label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\r\n                  <input matInput [(ngModel)]=\"newReg.job_role\" name=\"job_role\" required formControlName=\"jobRoleValidation\">\r\n                </mat-form-field>\r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Job Level </label>\r\n              <mat-form-field [formGroup]=\"ProfileFormGroup\">\r\n                  <input matInput [(ngModel)]=\"newReg.job_level\" name=\"job_level\" required formControlName=\"jobLevelValidation\">\r\n                </mat-form-field>\r\n          </div>\r\n        \r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <label class=\"control-label col-md-3 col-sm-3 col-xs-12\" >Survey Attenders </label>\r\n              <div class=\"col-md-6\">\r\n                  <br>\r\n                  <div class=\"row\">\r\n                  <section class=\"example-section\" *ngFor=\"let data of surveyattenders; let i = index;\">\r\n                  <mat-checkbox [checked]=\"modelArr && modelArr.includes(data._id)\" class=\"example-margin\" name=\"data_{{i}}\" [(ngModel)]=\"surveyattenders[i].check\" >{{data.name}}</mat-checkbox>\r\n                </section>\r\n                </div>\r\n              </div>\r\n          </div>\r\n         \r\n          <div class=\"clearfix\"></div>\r\n          <br>\r\n          <br>\r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n            <div class=\"col-md-1 col-sm-2 col-xs-6\"> \r\n            <button type=\"submit\" class=\"btn btn-danger\" (click)=\"updateProfile()\">Update</button>\r\n            </div>\r\n            <div class=\"col-md-1 col-sm-2 col-xs-6\"> \r\n            <div *ngIf=\"showSubscribe\">\r\n            <button type=\"button\" (click)=\"subscribe()\" class=\"btn btn-danger\">Subscribe</button>\r\n            </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n</div>"

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

module.exports = "<ul class=\"nav navbar-nav side-nav\">\r\n  <!-- <li> -->\r\n      <!-- <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a> -->\r\n  <!-- </li> -->\r\n  <img style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> Survey</a>\r\n \r\n  <li >\r\n          <a><i class=\"fa fa-users\"></i> Dashboard</a>\r\n     \r\n  </li>\r\n  <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n      <!-- <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-product-hunt\"></i> Users</a>  -->\r\n      <a [routerLink]=\"['/company-users']\" ><i class=\"fa fa-product-hunt\"></i> Users</a> \r\n      \r\n  </li>\r\n  <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\r\n    <!-- <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-product-hunt\"></i> Users</a>  -->\r\n    <a [routerLink]=\"['/company-manage-user-groups']\" ><i class=\"fa fa-users\"></i> Manage user groups</a> \r\n    \r\n</li>\r\n  <li>\r\n      <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Groups </a>\r\n     \r\n  </li>\r\n  <li>\r\n      <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Themes </a>\r\n     \r\n  </li>\r\n\r\n  <li>\r\n      <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Survey </a>\r\n     \r\n  </li>\r\n  \r\n  \r\n</ul>"

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

module.exports = "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    \r\n   \r\n    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->\r\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n        <div class=\"navbar-header\">\r\n            \r\n         <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n             <span class=\"sr-only\">Toggle navigation</span>\r\n             <span class=\"icon-bar\"></span>\r\n             <span class=\"icon-bar\"></span>\r\n             <span class=\"icon-bar\"></span>\r\n         </button>\r\n        \r\n        </div>\r\n   \r\n        <ul class=\"nav navbar-nav pull-right profilz\">\r\n            \r\n                <li class=\"dropdown notification\">\r\n                     \r\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                          <span class=\"glyphicon glyphicon-bell alertNotificacao\"></span>\r\n                          <span class='badgeAlert'>{{count}}</span>\r\n                          <span class=\"\"></span></a>\r\n                         \r\n                        <ul class=\"list-notificacao dropdown-menu\" >\r\n                              <h5>Accepted Users</h5>\r\n                          <li id='item_notification_1' *ngFor=\"let users of dataArray;\" >\r\n                              <div class=\"media\" >\r\n                            \r\n                                 <div class=\"media-body\" (click)=\"notifViewed(users.email,users.id)\">\r\n                                    <div class='exclusaoNotificacao'><button class='btn btn-danger btn-xs button_exclusao' id='1' (click)=\"notifViewed(users.email,users.id)\">x</button>\r\n                                    </div>\r\n                                    <h4 class=\"media-heading\"></h4>\r\n                                   \r\n                                    <h5>Admin has blocked the user {{users.email}}</h5>\r\n                                  </div>\r\n                           </div>\r\n                           </li>    \r\n                          \r\n                        </ul>\r\n                    \r\n                     </li>\r\n            <li class=\"dropdown\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Iasmani Pinazo <span class=\"glyphicon glyphicon-user pull-right\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\">Profile <span class=\"glyphicon glyphicon-cog pull-right\"></span></a></li>\r\n                \r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                    <a  (click)=\"logout()\" ><span class=\"glyphicon glyphicon-log-out pull-right\"></span> LogOut </a>\r\n                    \r\n                </li>\r\n              </ul>\r\n            </li>\r\n  \r\n            \r\n          </ul>\r\n       \r\n          \r\n    </div>\r\n    <!-- /.navbar-collapse -->\r\n  </nav>\r\n  \r\n  <!-- Top Menu Items -->\r\n  <ul class=\"nav navbar-right top-nav\">\r\n    <li class=\"dropdown\" *ngFor= \"let item of info\">\r\n            \r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-bell\"><div class=\"notify-count\">2</div></i> <b class=\"caret\"></b></a>\r\n        <ul class=\"dropdown-menu message-dropdown\">\r\n            <li class=\"message-preview\"  >\r\n                <a >\r\n                    <div class=\"media\">\r\n                        <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                        <span class=\"pull-left\">\r\n                            <img class=\"media-object\"\r\n                            \r\n                             alt=\"\">\r\n                        </span>\r\n                       </div>\r\n                       <div class=\"col-md-8\">\r\n                        <div class=\"media-body\">\r\n                            <h5 class=\"media-heading\">\r\n                                <strong>Name</strong>\r\n                            </h5>\r\n                            \r\n                            <p>Item confirmed by bidder</p>\r\n                        </div>\r\n                        </div>\r\n                        </div>\r\n                    </div>\r\n                </a>\r\n            </li>\r\n            <!-- <li class=\"message-footer\">\r\n                <a href=\"#\">Read All New Messages</a>\r\n            </li> -->\r\n        </ul>\r\n    </li>\r\n    \r\n    \r\n  </ul>"

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
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var CompanyTopBarComponent = /** @class */ (function () {
    function CompanyTopBarComponent(companyService, config) {
        this.companyService = companyService;
        this.config = config;
        this.dataArray = [];
        this.userData = {
            userEmail: '',
            userId: ''
        };
        this.viewNotification = false;
        this.socket = socketIo(config.siteUrl);
    }
    CompanyTopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadData();
        this.socket.on('acceptuser', function (data) {
            _this.loadData();
        });
    };
    CompanyTopBarComponent.prototype.loadData = function () {
        var _this = this;
        this.companyService.getAcceptedNotification().subscribe(function (data) {
            // console.log(data);
            if (data.arr1 == '' || data.arr1 == null) {
                _this.count = 0;
            }
            else {
                // console.log(data);
                //  this.count = data.arr1.notifCount
                // data.arra1.
                _this.dataArray = [];
                data.arr1.forEach(function (element) {
                    _this.count = element.notifCount;
                    // console.log( element);
                    _this.dataArray.push(element);
                    // console.log(this.dataArray);
                    // this.dataEmail = element
                });
            }
        });
    };
    CompanyTopBarComponent.prototype.notifViewed = function (email, id) {
        var _this = this;
        // console.log(id);
        // console.log(email);
        this.userData.userEmail = email;
        this.userData.userId = id;
        // console.log(this.userData);
        // console.log(this.dataArray)
        this.companyService.updateNotifViewed(this.userData).subscribe(function (data) {
            if (data.success) {
                _this.loadData();
                window.location.reload();
            }
            //  console.log(data)
        });
    };
    CompanyTopBarComponent = __decorate([
        core_1.Component({
            selector: 'app-company-top-bar',
            template: __webpack_require__("../../../../../src/app/components/company-top-bar/company-top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/company-top-bar/company-top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, config_1.Config])
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
exports.push([module.i, ".test:after {\r\n    content: '\\2807';\r\n    font-size:25px;\r\n    }\r\n\r\nbody {\r\n    margin-top: 100px;\r\n    background-color: #222;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n}\r\n\r\n#wrapper {\r\n    padding-left: 0;\r\n}\r\n\r\n#page-wrapper {\r\n    width: 100%;\r\n    padding: 0;\r\n    background-color: #fff;\r\n}\r\n\r\n.huge {\r\n    font-size: 50px;\r\n    line-height: normal;\r\n}\r\n\r\n@media(min-width:768px) {\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 10px;\r\n    }\r\n}\r\n\r\n/* Top Navigation */\r\n\r\n.top-nav {\r\n    padding: 0 15px;\r\n}\r\n\r\n.top-nav>li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\n.top-nav>li>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    line-height: 20px;\r\n    color: #999;\r\n}\r\n\r\n.top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color: #fff;\r\n    background-color: #000;\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu {\r\n    float: left;\r\n    position: absolute;\r\n    margin-top: 0;\r\n    border: 1px solid rgba(0,0,0,.15);\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}\r\n\r\n.top-nav>.open>.dropdown-menu>li>a {\r\n    white-space: normal;\r\n}\r\n\r\nul.message-dropdown {\r\n    padding: 0;\r\n    max-height: 250px;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nli.message-preview {\r\n    width: 275px;\r\n    border-bottom: 1px solid rgba(0,0,0,.15);\r\n}\r\n\r\nli.message-preview>a {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\nli.message-footer {\r\n    margin: 5px 0;\r\n}\r\n\r\nul.alert-dropdown {\r\n    width: 200px;\r\n}\r\n\r\n/* Side Navigation */\r\n\r\n@media(min-width:768px) {\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 51px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #000 !important;\r\n    }\r\n}\r\n\r\n.side-nav>li>ul {\r\n    padding: 0;\r\n}\r\n\r\n.side-nav>li>ul>li>a {\r\n    display: block;\r\n    padding: 10px 15px 10px 38px;\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n\r\n.side-nav>li>ul>li>a:hover {\r\n    color: #fff;\r\n}\r\n\r\n/* Flot Chart Containers */\r\n\r\n.flot-chart {\r\n    display: block;\r\n    height: 400px;\r\n}\r\n\r\n.flot-chart-content {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n/* Custom Colored Panels */\r\n\r\n.huge {\r\n    font-size: 40px;\r\n}\r\n\r\n.panel-green {\r\n    border-color: #5cb85c;\r\n}\r\n\r\n.panel-green > .panel-heading {\r\n    border-color: #5cb85c;\r\n    color: #fff;\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.panel-green > a {\r\n    color: #5cb85c;\r\n}\r\n\r\n.panel-green > a:hover {\r\n    color: #3d8b3d;\r\n}\r\n\r\n.panel-red {\r\n    border-color: #d9534f;\r\n}\r\n\r\n.panel-red > .panel-heading {\r\n    border-color: #d9534f;\r\n    color: #fff;\r\n    background-color: #d9534f;\r\n}\r\n\r\n.panel-red > a {\r\n    color: #d9534f;\r\n}\r\n\r\n.panel-red > a:hover {\r\n    color: #b52b27;\r\n}\r\n\r\n.panel-yellow {\r\n    border-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > .panel-heading {\r\n    border-color: #f0ad4e;\r\n    color: #fff;\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a {\r\n    color: #f0ad4e;\r\n}\r\n\r\n.panel-yellow > a:hover {\r\n    color: #df8a13;\r\n}\r\n.active1{\r\n    background-color: #eee;\r\n}\r\n.buttonleft>li{\r\n    border:none !important;\r\n    text-align: center;\r\n    padding: 4px;\r\n} \r\n\r\n.ourbutton2{    border-radius: 20px;\r\n        padding: 7px 40px;}\r\n.buttonleft{padding:2em 0;min-height: 300px;}\r\n\r\n\r\n\r\n\r\n.ourbutton{    border-radius: 20px;\r\n    padding: 5px 20px;}\r\n\r\n.modal-content{border-radius:0;box-shadow:none;}\r\n.modal-header {\r\n    padding: 7px 15px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    background: #da524f;\r\n}\r\n.modal-title {\r\n    margin: 0;\r\n    line-height: 26px;\r\n    font-size: 15px;\r\n    color: #fff;\r\n}\r\n.close {\r\n   \r\n    font-size: 21px;\r\n    font-weight: 400;\r\n    line-height: 28px;\r\n    color: #fff;\r\n    text-shadow: none;\r\n    filter: alpha(opacity=20);\r\n    opacity: inherit;\r\n    padding-top:0px;\r\n}\r\na{outline:none; }\r\n.btn.active.focus, .btn.active:focus, .btn.focus, .btn:active.focus, .btn:active:focus, .btn:focus{outline:none;}\r\n\r\n.inputfileds{\r\n    width: 300px !important;\r\n}\r\n.inputitem{\r\n    margin-bottom:-15px;\r\n    float: left;\r\n    width: 305px;\r\n    /* width: 400px; */\r\n}\r\n  \r\n\r\n\r\n/* Structure */\r\n.example-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-width: 300px;\r\n  }\r\n  \r\n  .example-header {\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n  }\r\n  \r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .mat-table {\r\n    overflow: auto;\r\n    max-height: 500px;\r\n  }\r\n  h4{\r\n    text-align: center;\r\n }\r\n .dropdown{\r\n    float:right;\r\n    margin-right :17%\r\n }\r\n .cdk-overlay-container {\r\n    z-index: 1052 !important;\r\n }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/company-users/company-users.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  \r\n                <div id=\"wrapper\">\r\n            \r\n                    <!-- Navigation -->\r\n        <app-company-top-bar></app-company-top-bar>            \r\n        <app-company-sidebar></app-company-sidebar>\r\n            \r\n                    <div id=\"\">\r\n                        <div class=\"container-fluid\">\r\n                                \r\n                                            <!-- Page Heading -->\r\n                                          \r\n                                      \r\n                                            <!-- /.row -->\r\n                            \r\n                                        </div>\r\n                        <div class=\"col-md-2\">\r\n                              <nav class=\"nav-sidebar\">\r\n                                  <ul class=\"nav tabs buttonleft\">\r\n                                        <li >\r\n                                          <button  class=\"btn btn-danger ourbutton2\" (click)=\"openModal()\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#myModal\">Add New</button>\r\n                                        </li>\r\n                                        <li >\r\n                                          <button  class=\"btn btn-danger ourbutton2\" (click)=\"openModal()\"  data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editModal\" >Edit User</button>\r\n                                          <!-- <button  class=\"btn btn-danger ourbutton2\" (click)=\"getEditUser(user);\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#editModal\" >Edit User</button> -->\r\n                                        </li>\r\n                                        <li >\r\n                                          <button  class=\"btn btn-danger ourbutton2\" (click)=\"openModal()\" data-backdrop=\"static\" data-keyboard=\"false\" data-toggle=\"modal\" data-target=\"#importModal\" >Import from Excel</button>\r\n                                        </li>\r\n                                        <!-- <li [ngClass]=\"{'active1': viewComp == 'Active'}\"><a (click)=\"updateView('Active')\" href=\"#tab4\" data-toggle=\"tab\">Active Users</a></li> \r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Blocked'}\"><a (click)=\"updateView('Blocked')\" href=\"#tab2\" data-toggle=\"tab\">Blocked Users</a></li>\r\n                                        <li [ngClass]=\"{'active1': viewComp == 'Delete'}\"><a (click)=\"updateView('Delete')\" href=\"#tab3\" data-toggle=\"tab\">Delete Users</a></li>   -->\r\n                                                                     \r\n                                  </ul>\r\n                                </nav>\r\n                        </div>\r\n                        <div class=\"col-md-10\">\r\n\r\n                            <div *ngIf=\"viewComp == 'All'\">\r\n                              <!-- <all-users></all-users> -->\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Active'\">\r\n                                <!-- <active-users></active-users> -->\r\n                              </div>\r\n                            <div *ngIf=\"viewComp == 'Blocked'\">\r\n                              <!-- <disabled-users></disabled-users> -->\r\n                            </div>\r\n                            <div *ngIf=\"viewComp == 'Delete'\">\r\n                              <!-- <deleted-users></deleted-users> -->\r\n                            </div>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                      <!-- /#page-wrapper -->\r\n                      \r\n                                 \r\n                      </div>\r\n\r\n              <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\r\n                  <div class=\"modal-dialog\">\r\n                \r\n                    <!-- Modal content-->\r\n                    <div class=\"modal-content\">\r\n                      <!-- <div class=\"modal-header\"> -->\r\n                        <!-- <h4 class=\"modal-title\">Are you sure to delete?</h4> -->\r\n                      <!-- </div> -->\r\n                      <div class=\"modal-body\">\r\n                          <h4>Are you sure to delete?</h4>\r\n                      \r\n                      </div>\r\n                    \r\n                      <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        <button type=\"button\" (click)=\"deleteUser(userId)\" class=\"btn btn-default\" data-dismiss=\"modal\">Delete</button>\r\n                      </div>\r\n                    </div>\r\n                \r\n                  </div>\r\n                </div>\r\n\r\n                <div id=\"myModal2\"  class=\"modal fade\">\r\n                    <div class=\"modal-dialog\"> \r\n            <!-- Modal content-->\r\n                      <div class=\"modal-content\">\r\n                         <div class=\"modal-header\">\r\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                              <h4 class=\"modal-title\">User Block Request </h4>\r\n                         </div>\r\n                         <br>\r\n                         <div *ngIf=\"isError\" class=\"alert alert-danger\">\r\n                          {{errorMsg}}\r\n                       </div>\r\n                       <div *ngIf=\"isSuccess\" class=\"alert alert-danger\">\r\n                           {{errorMsg}}\r\n                        </div>\r\n                       \r\n                          \r\n                        <div class=\"modal-body\">\r\n                             <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"sendBlockRequest(newBlock)\">\r\n                                  <p>Category Name</p>\r\n                                  \r\n                                      {{newBlock.email}}\r\n                            <br>\r\n                                   <div class=\"form-group\" >\r\n                                     <textarea class=\"form-control\" rows=\"5\" name = \"reason\" id=\"comment\" placeholder=\"Reason\" [(ngModel)]=\"newBlock.reason\"></textarea>\r\n                                 </div>\r\n                                        <input type=\"submit\" class=\"btn btn-danger\" value=\"Send\"  [disabled]=\"btnDisbled\">\r\n                                 </form>\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" #closeBtn>Close</button>\r\n                      </div>\r\n                   </div>\r\n                </div>\r\n          </div>\r\n      \r\n                <flash-messages></flash-messages>\r\n                <!-- group filter -->\r\n            <div class=\"col-md-2 dropdown\">\r\n            \r\n              <mat-form-field class=\"inputfileds\">\r\n                  <mat-select placeholder=\"Groups\" name='selected' #group=\"ngModel\" [(ngModel)]=\"newBlock.groups\" (click)=\"filterGroup(newBlock.groups)\">\r\n                    <mat-option [value]=\"grp.name\" *ngFor=\"let grp of groups;\" >{{grp.name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                \r\n            </div>\r\n                  <br>\r\n                      <div class=\"col-md-7\">\r\n                      <div class=\"example-header\" >\r\n                          <mat-form-field>\r\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                          </mat-form-field>\r\n                      </div>\r\n                      \r\n                        <div class=\"noitem\" *ngIf=\"existStatus\"><h4>No item Found!</h4></div>\r\n                      \r\n                      <br>\r\n                      <div class=\"example-container mat-elevation-z8 \">\r\n                          <mat-table [dataSource]=\"dataSource\" matSort>\r\n                               <ng-container matColumnDef=\"id\">\r\n                          <mat-header-cell *matHeaderCellDef mat-sort-header> SL NO. </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let row; let i = index\"> {{i+1}} </mat-cell>\r\n                        </ng-container>\r\n                                  <ng-container matColumnDef=\"email\">\r\n                                     <mat-header-cell *matHeaderCellDef mat-sort-header> NAME</mat-header-cell>\r\n                                       <mat-cell *matCellDef=\"let row\"> {{row.email}}</mat-cell>\r\n                                   </ng-container>\r\n                                    <ng-container  matColumnDef=\"action\">\r\n                                        <mat-header-cell *matHeaderCellDef mat-sort-header > ACTION</mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let row\"><button mat-icon-button [matMenuTriggerFor]=\"menu\" ><mat-icon>more_vert</mat-icon> </button>\r\n                                          <mat-menu #menu=\"matMenu\">\r\n                                            <div>\r\n                                             \r\n                                              <button *ngIf=\"row.block_req_status==false\"  mat-menu-item (click)=\"getUserEmail(row.id,row.email)\" data-toggle=\"modal\" data-target=\"#myModal2\">\r\n                                                  <mat-icon><i class=\"material-icons\">block</i></mat-icon>\r\n                                                  <span>Sent Block Request</span>\r\n                                                  </button>\r\n                                                  <button *ngIf=\"row.block_req_status==true\"  mat-menu-item >\r\n                                                      <mat-icon><i class=\"material-icons\">block</i></mat-icon>\r\n                                                      <span>Already sent Block request</span>\r\n                                                      </button>\r\n                                                  </div>\r\n                                              <button  mat-menu-item (click)=\"getUserId(row.id)\" data-toggle=\"modal\" data-target=\"#editModal\">\r\n                                                    <mat-icon><i class=\"material-icons\">mode_edit</i></mat-icon>\r\n                                                    <span>Edit</span>\r\n                                                    </button>\r\n                                                <button mat-menu-item  (click)=\"getUserId(row.id)\" data-toggle=\"modal\" data-target=\"#deleteModal\"> \r\n                                                    <mat-icon><i class=\"material-icons\">delete</i></mat-icon>\r\n                                                    <span>Delete</span>\r\n                                                </button>\r\n                                          </mat-menu> </mat-cell>\r\n                                \r\n                                       </ng-container>\r\n                         \r\n                      \r\n                  \r\n                                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                                     <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                                     </mat-row>\r\n                                    </mat-table>\r\n                      \r\n                                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n                          </div>\r\n                        </div>\r\n                        \r\n                      <div id=\"editModal\"  class=\"modal fade\"></div>\r\n                      \r\n\r\n<!-- -------------------------------------------------------------------------------------------edit------------------------- -->\r\n                      <div id=\"editModal\"  class=\"modal fade\" >\r\n                        <div class=\"modal-dialog\">\r\n                        \r\n                          <!-- Modal content-->\r\n                          <div class=\"modal-content\">\r\n                            <div class=\"modal-header\">\r\n                              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn1>&times;</button>\r\n                              <h4 class=\"modal-title\">Edit User</h4>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                              \r\n                          <form  role=\"form\"  #f1=\"ngForm\" (ngSubmit)=\"f1.form.valid && updateUsers();\" novalidate>\r\n                               \r\n                              <div class=\"form-group\" >\r\n                                  <label > Email </label>\r\n                                  <br>\r\n                                  <div *ngIf=\"isError1\" class=\"text-danger text-left\">\r\n                                      {{msg1}}\r\n                                 </div>\r\n                                 <div *ngIf=\"isSuccess1\" class=\"text-success text-left\">\r\n                                    {{msg1}}\r\n                              </div>\r\n                                 \r\n                                  <div  >\r\n                                    <div class=\"inputitem\">\r\n                                    <mat-form-field *ngIf=\"!selUser.is_registered\" class=\"inputfileds\">\r\n                                      <input matInput  [value]=\"selUser.email\" placeholder=\"Email address\" required email  #email=\"ngModel\" name=\"email\" [(ngModel)]=\"selUser.newEmail\"  >\r\n                                      <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\r\n                                    \r\n                                    </mat-form-field>\r\n                                    <div *ngIf=\"selUser.is_registered\">\r\n                                    <label >{{selUser.email}}</label>\r\n                                    </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div style=\"clear: both;\"></div>\r\n                                  <br/>\r\n                           \r\n                                  <br/>\r\n                                  <div class=\"inputitem\">\r\n                                      <mat-form-field class=\"inputfileds\">\r\n                                        <mat-select placeholder=\"Groups\" name='editgrup'[(ngModel)]=\"selUserGroups\" multiple>\r\n                                          <mat-option [value]=\"grp._id\" *ngFor=\"let grp of groups;\" >{{grp.name}}</mat-option>\r\n                                        </mat-select>\r\n                                      </mat-form-field>\r\n                                  </div>\r\n                              \r\n                                  <br>\r\n                                  <div style=\"clear: both;\"></div>\r\n                              </div>\r\n                              <br>\r\n                              <button type= \"submit\" [disabled]=\"updateBtnDisbled\" class=\"btn btn-danger ourbutton\" >Update</button>\r\n                             \r\n                          </form>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                            </div>\r\n                          </div>\r\n                          \r\n                        </div>\r\n                      </div>\r\n\r\n<!-- --------------------------------------------------------------------import-------------------------------------------------------------------------------------------------- -->\r\n<div id=\"importModal\"  class=\"modal fade\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn2>&times;</button>\r\n          <h4 class=\"modal-title\">Import From Excel</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form  role=\"form\"  #f2=\"ngForm\" (ngSubmit)=\"f2.form.valid && import();\" novalidate>\r\n           <div class=\"form-group\" >\r\n             <div class=\"row\">\r\n             <div class=\"col-md-6\">\r\n                <label > File </label>\r\n                <!-- <br> -->\r\n                <input #myInput type=\"file\" (change)=\"handleFile($event)\" accept=\".xlsx\"/>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <br>\r\n              Sample Excel :   <a href=\"/assets/sampleFile/sample.xlsx\" target=\"_self\" download>\r\n                <i class=\"fa fa-download\"></i>\r\n              </a>\r\n            </div>\r\n            </div>\r\n              <br>\r\n              <div *ngIf=\"isError\" class=\"text-danger text-left\">\r\n                {{msg}}\r\n           </div>\r\n           <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\r\n              {{msg}}\r\n        </div>\r\n              <div class=\"inputitem\">\r\n                <mat-form-field class=\"inputfileds\">\r\n                  <mat-select placeholder=\"Groups\" name='selected' #group=\"ngModel\" [(ngModel)]=\"newUser.groups\" multiple>\r\n                    <mat-option [value]=\"grp\" *ngFor=\"let grp of groups;\"  >{{grp.name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div style=\"float: left;\">\r\n                <button  class=\"btn btn-danger ourbutton\" (click)=\"showGroupAddOption()\">Add Group</button>\r\n              </div>\r\n              <br>\r\n              <div style=\"clear: both;\"></div>\r\n              <div *ngIf=\"showAddGroup\">\r\n              <mat-form-field class=\"inputfileds\" >\r\n                <input matInput placeholder=\"Group Name\" [(ngModel)]=\"newGroup\" name=\"newGroup\" >\r\n              </mat-form-field>\r\n              <button  class=\"btn btn-danger ourbutton\" (click)=\"addGroup()\">Add</button>\r\n              </div>\r\n            </div>\r\n         \r\n          <button type= \"submit\" [disabled]=\"updateBtnDisbled\" class=\"btn btn-danger ourbutton\" >Update</button>\r\n         \r\n      </form>\r\n      </div>\r\n\r\n       \r\n        \r\n        <div class=\"modal-footer\">\r\n          </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n<!-- ------------------------------------------------------------------------add---------------------------------------------------------------------------------------------- -->\r\n                      \r\n                      <div id=\"myModal\"  class=\"modal fade\">\r\n                          <div class=\"modal-dialog\">\r\n                          \r\n                            <!-- Modal content-->\r\n                            <div class=\"modal-content\">\r\n                              <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" #closeBtn>&times;</button>\r\n                                <h4 class=\"modal-title\">Add User</h4>\r\n                              </div>\r\n                              <div class=\"modal-body\">\r\n                                \r\n                            <form  role=\"form\"  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && addUsers();\" novalidate>\r\n                            \r\n                                <div class=\"form-group\" >\r\n                                    <label > Email </label>\r\n                                    <br>\r\n                                    <div *ngIf=\"isError\" class=\"text-danger text-left\">\r\n                                        {{msg}}\r\n                                   </div>\r\n                                   <div *ngIf=\"isSuccess\" class=\"text-success text-left\">\r\n                                      {{msg}}\r\n                                </div>\r\n                                   \r\n                                    <div  *ngFor=\"let item of newUser.email; let i = index; trackBy:trackByIndex\" >\r\n                                      <div class=\"inputitem\">\r\n                                      <mat-form-field class=\"inputfileds\">\r\n                                        <input matInput placeholder=\"Email address\" required email  #email{{i}}=\"ngModel\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\" >\r\n                                        <!-- <input matInput placeholder=\"Email address\" [formControl]=\"emailFormControl\" name=\"emails_{{i}}\" [(ngModel)]=\"newUser.email[i]\"  required > -->\r\n                                      \r\n                                      </mat-form-field>\r\n                                      \r\n                                      </div>\r\n                                      <div style=\"float: left;padding-top: 14px;width:220px;\">\r\n                                          <button class=\"btn-danger\" (click)=\"removeOption(i)\" style=\"float: left;\" >X</button>\r\n                                      </div>\r\n                                    </div>\r\n                                    <div style=\"clear: both;\"></div>\r\n                                    <br/>\r\n                                    <button  class=\"btn btn-danger ourbutton\" (click)=\"addMoreOption()\" >Add More</button>\r\n                                    <br/>\r\n                                    <br/>\r\n                                    <div class=\"inputitem\">\r\n                                        <mat-form-field class=\"inputfileds\">\r\n                                          <mat-select placeholder=\"Groups\" name='selected' #group=\"ngModel\" [(ngModel)]=\"newUser.groups\" multiple>\r\n                                            <mat-option [value]=\"grp\" *ngFor=\"let grp of groups;\"  >{{grp.name}}</mat-option>\r\n                                          </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div style=\"float: left;\">\r\n                                        <button  class=\"btn btn-danger ourbutton\" (click)=\"showGroupAddOption()\">Add Group</button>\r\n                                    </div>\r\n                                    <br>\r\n                                    <div style=\"clear: both;\"></div>\r\n                                    <div *ngIf=\"showAddGroup\">\r\n                                    <mat-form-field class=\"inputfileds\" >\r\n                                        <input matInput placeholder=\"Group Name\" [(ngModel)]=\"newGroup\" name=\"newGroup\" >\r\n                                      </mat-form-field>\r\n                                      <button  class=\"btn btn-danger ourbutton\" (click)=\"addGroup()\">Add</button>\r\n                                      </div>\r\n                                      \r\n                                </div>\r\n                                <br>\r\n                                <button type= \"submit\" [disabled]=\"btnDisbled\" class=\"btn btn-danger ourbutton\" >Submit</button>\r\n                               \r\n                            </form>\r\n                              </div>\r\n                              <div class=\"modal-footer\">\r\n                              </div>\r\n                            </div>\r\n                            \r\n                          </div>\r\n                        </div>\r\n\r\n\r\n                        \r\n                      \r\n                      <footer></footer> \r\n                        \r\n                      </body>"

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
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var company_service_1 = __webpack_require__("../../../../../src/app/services/company.service.ts");
var material_2 = __webpack_require__("../../../material/esm5/material.es5.js");
var angular2_flash_messages_1 = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
var xlsx_to_json_service_1 = __webpack_require__("../../../../../src/app/services/xlsx-to-json.service.ts");
var CompanyUsersComponent = /** @class */ (function () {
    function CompanyUsersComponent(companyService, _flashMessagesService) {
        this.companyService = companyService;
        this._flashMessagesService = _flashMessagesService;
        this.newBlock = {
            id: String,
            email: String,
            reason: '',
            groups: ''
        };
        this.displayedColumns = ['id', 'email', 'action'];
        this.newUser = { email: [''], groups: [] };
        this.isError = false;
        this.isSuccess = false;
        this.msg = '';
        this.errorMsg = '';
        this.isError1 = false;
        this.isSuccess1 = false;
        this.msg1 = '';
        this.existStatus = false;
        this.showAddGroup = false;
        this.newGroup = '';
        this.xlsxToJsonService = new xlsx_to_json_service_1.XlsxToJsonService();
        this.btnDisbled = false;
        this.updateBtnDisbled = false;
        this.selUser = { email: '', groups: [], newEmail: '', is_registered: false };
        this.selUserGroups = [];
    }
    CompanyUsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    CompanyUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.selGroups = ['Symptots'];
        this.loadData();
        this.companyService.getAllUserGroup().subscribe(function (data) {
            _this.groups = data.group;
            _this.groupsObject = data.groupById;
        });
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
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : loadData
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 04-12-2018
    // Last Modified : 04-12-2018, Jooshifa 
    // Desc          : to load saved user email
    CompanyUsersComponent.prototype.loadData = function () {
        var _this = this;
        var users = [];
        this.companyService.getMyUsers().subscribe(function (data1) {
            _this.userData = data1;
            _this.comp_id1 = _this.userData._id;
            // console.log(data.users)
            //  data1.forEach((item, index) => {
            //   //  console.log(item)
            //            users.push({
            //            email: item,
            //            id :item._id
            //            });
            //   });
            //    this.dataSource = new MatTableDataSource(users);
            //    this.dataSource.paginator = this.paginator;
            //    this.dataSource.sort = this.sort;
            // data1.forEach(element => {
            //   element.users.forEach((item, index) => {
            //     // console.log(item)
            //     users.push({
            //           email: item.email,
            //           id :item._id
            //           });
            //   });
            // });
            _this.dataSource = new material_1.MatTableDataSource(data1);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    //  ---------------------------------end-----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getCategoryId
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : pass id from modal and get it for the purpuse edit
    CompanyUsersComponent.prototype.getUserId = function (id) {
        this.userId = id;
        // console.log(this.userId)
    };
    //  ---------------------------------end----------------------------------------------
    CompanyUsersComponent.prototype.getUserEmail = function (id, email) {
        this.newBlock.id = id;
        this.newBlock.email = email;
    };
    //  ---------------------------------end----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : filterGroup
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          : to filter based on groups
    CompanyUsersComponent.prototype.filterGroup = function (groups) {
        var _this = this;
        // console.log(groups)
        this.companyService.getUserByGroup(groups).subscribe(function (data2) {
            if (data2.success == false) {
                //  console.log("data not exist")
                _this.existStatus = true;
            }
            else {
                console.log(data2);
                if (data2) {
                    // console.log("data exist")
                    _this.userData = data2;
                    _this.comp_id1 = _this.userData._id;
                    _this.dataSource = new material_1.MatTableDataSource(data2);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
            }
        });
    };
    //  ---------------------------------end----------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteUser
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 04-01-2018
    // Last Modified : 04-01-2018, Jooshifa 
    // Desc          : Delete a user
    CompanyUsersComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.companyService.deleteUser(userId).subscribe(function (deleteData) {
            console.log(deleteData);
            if (deleteData.success == false) {
                _this._flashMessagesService.show(' Survey invitation is  already sent, cant delete! ', { cssClass: 'alert-danger', timeout: 3000 });
                // console.log("error")
            }
            else {
                _this.loadData();
                _this._flashMessagesService.show('Delete User Successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // console.log("success")
            }
        });
    };
    // -----------------------------------end----------------------------------------------------
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
    };
    //  ---------------------------------Start-------------------------------------------
    // Function      : sendBlockRequest
    // Params        : request
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 04-12-2018
    // Last Modified : 04-12-2018, Jooshifa 
    // Desc          : send block request to admin to block a user
    CompanyUsersComponent.prototype.sendBlockRequest = function (request) {
        var _this = this;
        this.companyService.sendBlockRequest(request).subscribe(function (data4) {
            if (!data4.success) {
                console.log(data4);
                _this.isError = true;
                _this.errorMsg = data4.msg;
                _this.btnDisbled = false;
                setTimeout(function () {
                    _this.isError = false;
                    _this.errorMsg = '';
                }, 2000);
            }
            else if (data4.success) {
                _this.btnDisbled = true;
                _this.loadData();
                _this.closeBtn.nativeElement.click();
                // this.isSuccess = true;
                _this.errorMsg = data4.msg;
                setTimeout(function () {
                    _this.isSuccess = false;
                    _this.errorMsg = '';
                    _this.btnDisbled = false;
                }, 2000);
                _this._flashMessagesService.show('Sent Block request successfully!', { cssClass: 'alert-success', timeout: 1000 });
                // this.closeBtn.nativeElement.click();
            }
        });
    };
    //  ---------------------------------End-------------------------------------------
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
        core_1.ViewChild(material_2.MatPaginator),
        __metadata("design:type", material_2.MatPaginator)
    ], CompanyUsersComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_2.MatSort),
        __metadata("design:type", material_2.MatSort)
    ], CompanyUsersComponent.prototype, "sort", void 0);
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
        __metadata("design:paramtypes", [company_service_1.CompanyService, angular2_flash_messages_1.FlashMessagesService])
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

module.exports = "<mat-form-field >\n    <mat-select placeholder=\"Select Survey\" [(ngModel)]=\"list.survey\" name=\"survey\" (change)=\"refresh()\" >\n        <mat-option *ngFor=\"let item of allSurvey\" [value]=\"item._id\">\n          {{ item.name }}\n        </mat-option>\n      </mat-select>\n</mat-form-field>\n<svg width=\"960\" height=\"500\"></svg>\n"

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
var socketIo = __webpack_require__("../../../../socket.io-client/lib/index.js");
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
var NewpieComponent = /** @class */ (function () {
    function NewpieComponent(companyService, route, config) {
        this.companyService = companyService;
        this.route = route;
        this.config = config;
        this.list = {
            survey: ''
        };
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
        this.socket = socketIo(config.siteUrl);
    }
    NewpieComponent.prototype.ngOnInit = function () {
        var _this = this;
        // ---------------------------------Start-------------------------------------------
        // Function      : get all survey
        // Params        : 
        // Returns       : list of all  survey
        // Author        : Rinsha
        // Date          : 16-1-2018
        // Last Modified : 16-1-2018, Rinsha
        // Desc          : 
        this.companyService.getAllSurvey().subscribe(function (info) {
            _this.allSurvey = info;
        });
        // ---------------------------------End-------------------------------------------
        this.loadData();
        this.socket.on('Mail Responsed', function (data) {
            _this.loadData();
        });
    };
    NewpieComponent.prototype.loadData = function () {
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
        if (this.list.survey != '') {
            data = { id: this.list.survey };
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
    };
    // ---------------------------------End-------------------------------------------
    NewpieComponent.prototype.initSvg = function () {
        this.color = d3Scale.scaleOrdinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b"]);
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
    NewpieComponent.prototype.refresh = function () {
        d3.select("svg").remove();
        var svg = d3.select("body").append("svg").attr("width", "960").attr("height", "500"), inner = svg.append("g");
        this.loadData();
    };
    NewpieComponent = __decorate([
        core_1.Component({
            selector: 'newpie',
            template: __webpack_require__("../../../../../src/app/components/newpie/newpie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/newpie/newpie.component.css")]
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService, router_1.ActivatedRoute, config_1.Config])
    ], NewpieComponent);
    return NewpieComponent;
}());
exports.NewpieComponent = NewpieComponent;


/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#fof{display:block; width:100%; margin:100px 0; line-height:1.6em; text-align:center;}\r\n#fof .hgroup{text-transform:uppercase;}\r\n#fof .hgroup h1{margin-bottom:25px; font-size:80px;}\r\n#fof .hgroup h1 span{display:inline-block; margin-left:5px; padding:2px; border:1px solid #CCCCCC; overflow:hidden;}\r\n#fof .hgroup h1 span strong{display:inline-block; padding:0 20px 20px; border:1px solid #CCCCCC; font-weight:normal;}\r\n#fof .hgroup h2{font-size:60px;}\r\n#fof .hgroup h2 span{display:block; font-size:30px;}\r\n#fof p{margin:25px 0 0 0; padding:0; font-size:16px;}\r\n#fof p:first-child{margin-top:0;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper row2\">\n  <div id=\"container\" class=\"clear\">\n    <section id=\"fof\" class=\"clear\">\n      <div class=\"hgroup\">\n        <h1><span><strong>4</strong></span><span><strong>0</strong></span><span><strong>4</strong></span></h1>\n        <h2>Error ! <span>Page Not Found</span></h2>\n      </div>\n      <p>For Some Reason The Page You Requested Could Not Be Found On Our Server</p>\n      <p><a href=\"javascript:history.go(-1)\">&laquo; Go Back</a> \n      </p>\n    </section>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
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
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


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

module.exports = "<ul class=\"nav navbar-nav side-nav\">\r\n    <!-- <li> -->\r\n        <!-- <a routerLink=\"/dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a> -->\r\n    <!-- </li> -->\r\n    <img style=\"float: left\" > <a class=\"navbar-brand\" routerLink=\"/dashboard\"> Survey</a>\r\n    <li class=\"active\">\r\n        <a routerLink=\"/admin-users\"><i class=\"fa fa-users\"></i> Dashboard</a>\r\n   \r\n</li>\r\n<li class=\"active\">\r\n    <a routerLink=\"/admin-users\"><i class=\"fa fa-users\"></i> Company</a>\r\n\r\n</li>\r\n    <li class=\"active\">\r\n            <a routerLink=\"/admin-users\"><i class=\"fa fa-users\"></i> Users</a>\r\n       \r\n    </li>\r\n    <li>\r\n        <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-product-hunt\"></i> Manage Product <span class=\"caret\"></span></a> \r\n        <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li><a href=\"#\">Action</a></li>\r\n            <li><a href=\"#\">Another action</a></li>\r\n            <li><a href=\"#\">Something else here</a></li>\r\n            <li class=\"divider\"></li>\r\n            <li><a href=\"#\">Separated link</a></li>\r\n          </ul>\r\n        \r\n    </li>\r\n    <li>\r\n        <a ><i class=\"fa fa-fw fa-arrows-v\"></i> Auctions </a>\r\n       \r\n    </li>\r\n</ul>\r\n"

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
        this.userService.userLogin(this.newLogin, this.surveyId).subscribe(function (data) {
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
        this.userService.registration(this.newReg, this.surveyId).subscribe(function (data) {
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
var config_1 = __webpack_require__("../../../../../src/app/config/config.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
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
    //  ---------------------------------Start-------------------------------------------
    // Function      : addCategory
    // Params        : catg
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for add survey category in admin master settings
    AdminService.prototype.addCategory = function (catg) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/addsurveycategory", JSON.stringify(catg), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : addIndustry
    // Params        : indus
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for add industry in admin master settings
    AdminService.prototype.addIndustry = function (indus) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/addindustry", JSON.stringify(indus), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // <----------------------------------End-----------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : addOraganization
    // Params        : org
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for add Organization type in admin master settings
    AdminService.prototype.addOrganizationType = function (org) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/addorganizationtype", JSON.stringify(org), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : addAttenderType
    // Params        : attnd
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 27-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for add survey attender type in admin master settings
    AdminService.prototype.addAttenderType = function (attnd) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/addattendertype", JSON.stringify(attnd), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getCategory
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get all saved survey categories
    AdminService.prototype.getCategory = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getsurveycategory", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getIndustry
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get all industries
    AdminService.prototype.getIndustry = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getindustry", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getOrganization
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get all oraganization types
    AdminService.prototype.getOrganizationType = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getorganizationtype", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getAttenderType
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get all survey attender types
    AdminService.prototype.getAttenderType = function () {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getattendertype", { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteCategory
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for delete a survey category
    AdminService.prototype.deleteCategory = function (id) {
        var h = this.setHeader();
        return this.http.delete(this.serviceUrl + "/deletesurveycategory/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteIndustry
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for delete a industry
    AdminService.prototype.deleteIndustry = function (id) {
        var h = this.setHeader();
        return this.http.delete(this.serviceUrl + "/deleteindustry/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteOrganizationType
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for delete a Organization type
    AdminService.prototype.deleteOrganizationType = function (id) {
        var h = this.setHeader();
        return this.http.delete(this.serviceUrl + "/deleteorganizationtype/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteAttenderType
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 28-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for delete a survey attender type
    AdminService.prototype.deleteAttenderType = function (id) {
        var h = this.setHeader();
        return this.http.delete(this.serviceUrl + "/deleteattendertype/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getSinglecategory
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get a single category 
    AdminService.prototype.getSinglecategory = function (id) {
        // console.log("id get in service");
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getsinglesurveycategory/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getSingleindustry
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get a single industry 
    AdminService.prototype.getSingleindustry = function (id) {
        // console.log("id get in service");
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getsingleindustry/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getSingleOrganizationType
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get a single Organization type 
    AdminService.prototype.getSingleOrganizationType = function (id) {
        // console.log("id get in service");
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getsingleorganizationtype/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getSingleAttenderType
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : for get a single survey attender type 
    AdminService.prototype.getSingleAttenderType = function (id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getsingleattendertype/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : updatecategory
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Update a category name
    AdminService.prototype.updateCategory = function (catgr) {
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "/updatesurveycategory/" + catgr._id, (catgr), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateIndustry
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Update a industry 
    AdminService.prototype.updateIndustry = function (indus) {
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "/updateindustry/" + indus._id, (indus), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : updatecategory
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Update a category name
    AdminService.prototype.updateOrganizationType = function (orgn) {
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "/updateorganizationtype/" + orgn._id, (orgn), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : updatecategory
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Update a category name
    AdminService.prototype.updateAttenderType = function (attender) {
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "/updateattendertype/" + attender._id, (attender), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    AdminService.prototype.setHeaderWithAuthorization = function () {
        var headers = new http_1.Headers();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return (headers);
    };
    AdminService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
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
        return this.http.post(this.serviceUrl + "login", admin, { headers: h })
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
    // ---------------------------------------End--------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 28-12-2017
    // Last Modified : 
    // Desc          : all companieslist
    AdminService.prototype.getAllcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all subscribedcompanies
    //all subscribedcompanies
    AdminService.prototype.getAllsubcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all subscribedactivecompanies
    AdminService.prototype.getAllsubactivecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all subscribedblockcompanies
    AdminService.prototype.getAllsubblockcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all subscribeddeletecompanies
    AdminService.prototype.getAllsubdeletecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allsubdeletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all trailcompanies
    AdminService.prototype.getAlltrialcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all trialactivecompanies
    AdminService.prototype.getAlltrialactivecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all trialblockcompanies
    AdminService.prototype.getAlltrialblockcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all trialdeletecompanies
    AdminService.prototype.getAlltrialdeletecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alltrialdeletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all notverifiedcompanies
    //all not verified companies
    AdminService.prototype.getAllnotverficompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverficompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all notverfiactivecompanies
    AdminService.prototype.getAllnotverfiactivecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverfiactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all notverfiblockcompanies
    AdminService.prototype.getAllnotverfiblockcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverfiblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all notverfideletecompanies
    AdminService.prototype.getAllnotverfideletecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allnotverfideletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all expired companies
    //all expired companies
    AdminService.prototype.getAllexpiredcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpiredcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all expiredactivecompanies
    AdminService.prototype.getAllexpiredactivecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpiredactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all expiredblockcompanies
    AdminService.prototype.getAllexpiredblockcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpiredblockcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-01-2018
    // Last Modified : 
    // Desc          : all expireddeletecompanies
    AdminService.prototype.getAllexpireddeletecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allexpireddeletecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Allactivecompanies
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : Allactivecompanies
    AdminService.prototype.getAllactivecompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allactivecompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all blocked companies
    //all blocked companies
    AdminService.prototype.getAllblockedcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allblockedcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all deleted companies
    //all deleted companies
    AdminService.prototype.getAlldeletedcompanies = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alldeletedcompanies', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : company id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete company
    //delete company
    AdminService.prototype.deleteCompany = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.serviceUrl + 'deletecompany/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : company id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : block company
    //block company
    AdminService.prototype.blockCompany = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'blockcompany/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin company management
    // Params        : company id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : unblock company
    //unblock company
    AdminService.prototype.unblockCompany = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'unblockcompany/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all users
    AdminService.prototype.getAllusers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all active users
    AdminService.prototype.getAllactiveusers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allactiveusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all block users
    AdminService.prototype.getAllblockusers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allblockusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : all delete users
    AdminService.prototype.getAlldeleteusers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'alldeleteusers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : delete user
    AdminService.prototype.deleteUser = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.serviceUrl + 'deleteuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        :  id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : block user
    AdminService.prototype.blockUser = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'blockuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : id
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 
    // Desc          : unblock user
    AdminService.prototype.unblockUser = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'unblockuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 29-12-2017
    // Last Modified : 01-01-2018
    // Desc          : all requested users
    AdminService.prototype.getAllrequsers = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'allrequsers', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 01-01-2018
    // Last Modified : 03-01-2018
    // Desc          : reject users notifcation
    AdminService.prototype.rejectUser = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'rejectuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-04-2018
    // Last Modified : 
    // Desc          : accept user notifcation
    AdminService.prototype.acceptUser = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.serviceUrl + 'acceptuser/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin notification management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 02-01-2018
    // Last Modified : 
    // Desc          : notification
    AdminService.prototype.getAdminnotification = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'notification', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin user notification management
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 03-04-2018
    // Last Modified : 
    // Desc          : view status user notifcation
    AdminService.prototype.viewstatusUser = function (id, cmpid) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var data = { user_id: id, company_id: cmpid };
        return this.http.put(this.serviceUrl + 'viewstatususer', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin piechart
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 05-01-2018
    // Last Modified : 
    // Desc          : adminchart company vs status
    AdminService.prototype.getchart1 = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'adminchart1', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : Admin piechart
    // Params        : 
    // Returns       : 
    // Author        : sudha
    // Date          : 10-01-2018
    // Last Modified : 11-01-2018
    // Desc          : adminchart company vs survey
    AdminService.prototype.getchartbar = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serviceUrl + 'admind3', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // -----------------------------------End------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get logged user details
    // Params        : 
    // Returns       : user details
    // Author        : Rinsha
    // Date          : 12-1-2018
    // Last Modified : 12-1-2018, Rinsha
    // Desc          :
    AdminService.prototype.getLoggedUSerDetails = function () {
        var h = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + "getLoggedinUser", { headers: h })
            .map(function (res) { return res.json(); });
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
    function CompanyService(http, config) {
        this.http = http;
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
        return this.http.get(this.serviceUrl + 'get-themes', { headers: headers })
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
        return this.http.get(this.serviceUrl + 'get-fonts', { headers: headers })
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
        return this.http.get(this.serviceUrl + 'get-font-sizes', { headers: headers })
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
        return this.http.get(this.serviceUrl + 'get-my-users', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : deleteUser
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 04-01-2018
    // Last Modified : 04-01-2018, Jooshifa
    // Desc          : Delete a user (change delete_status true)
    CompanyService.prototype.deleteUser = function (data) {
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "deleteuser/" + data, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : getSingleUSer
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 05-01-2018
    // Last Modified : 05-01-2018, Jooshifa
    // Desc          :get single user data inside a company
    CompanyService.prototype.getSingleUser = function (id) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "/getsingleuser/" + id, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : updatecategory
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 29-12-2017
    // Last Modified : 29-12-2017, Jooshifa 
    // Desc          : Update a category name
    CompanyService.prototype.sendBlockRequest = function (send) {
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "sendblockrequest/" + send.id, (send), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : getAcceptedNotification
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          : get accepted notification when company block a user
    CompanyService.prototype.getAcceptedNotification = function () {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + "getacceptednotification", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End----------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getUserByGroup
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 08-01-2018
    // Last Modified : 08-01-2018, Jooshifa 
    // Desc          : get users based on groups
    CompanyService.prototype.getUserByGroup = function (group) {
        var headers = this.setHeader();
        return this.http.get(this.serviceUrl + "getuserbygroup/" + group, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateNotifViewed
    // Params        : 
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 09-01-2018
    // Last Modified : 09-01-2018, Jooshifa 
    // Desc          : gto update company is viewed to true when the notification is viewed by user
    CompanyService.prototype.updateNotifViewed = function (view) {
        // console.log(view);
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "updateviewednotification", (view), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : deleteUserGroup
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 09-01-2018
    // Last Modified : 09-01-2018, Jooshifa 
    // Desc          : to delete a user group
    CompanyService.prototype.deleteUserGroup = function (userGroupId) {
        console.log(userGroupId);
        var h = this.setHeader();
        return this.http.delete(this.serviceUrl + "deleteusergroups/" + userGroupId, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : addUserGroups
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 10-01-2018
    // Last Modified : 10-01-2018, Jooshifa 
    // Desc          : to delete a user group
    CompanyService.prototype.addUserGroupsInCompany = function (data) {
        // console.log(data)
        var headers = this.setHeader();
        return this.http.post(this.serviceUrl + 'add-user-group', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End-------------------------------------------
    //  ---------------------------------Start-------------------------------------------
    // Function      : getSingleUserGroup
    // Params        : id
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 10-01-2018
    // Last Modified : 10-01-2018, Jooshifa 
    // Desc          : to get single users groups for pass to edit modal
    CompanyService.prototype.getSingleUserGroup = function (data) {
        var h = this.setHeader();
        return this.http.get(this.serviceUrl + "getsingleGroupuser/" + data, { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
    //  ---------------------------------Start-------------------------------------------
    // Function      : updateUserGroup
    // Params        : new group (emails of users)
    // Returns       : 
    // Author        : Jooshifa
    // Date          : 11-01-2018
    // Last Modified : 11-01-2018, Jooshifa 
    // Desc          : to update user groups from  company
    CompanyService.prototype.updateUserGroup = function (data) {
        // console.log(data)
        var h = this.setHeader();
        return this.http.put(this.serviceUrl + "updateUserGroups", (data), { headers: h })
            .map(function (res) { return res.json(); });
    };
    // < ----------------------------------End------------------------------------------- 
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
    // ----------------------------------End-------------------------------------------
    // ---------------------------------Start-------------------------------------------
    // Function      : get all survey
    // Params        : 
    // Returns       : count of mail responsed users, mail viewed users
    // Author        : Rinsha
    // Date          : 16-1-2018
    // Last Modified : 16-1-2018, Rinsha
    // Desc          : 
    CompanyService.prototype.getAllSurvey = function () {
        var headers = this.setHeaderWithAuthorization();
        return this.http.get(this.serviceUrl + "getAllSurvey", { headers: headers })
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
    UserService.prototype.registration = function (user, surveyId) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "register/" + surveyId, JSON.stringify(user), { headers: h })
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
    UserService.prototype.userLogin = function (user, surveyId) {
        var h = this.setHeader();
        return this.http.post(this.serviceUrl + "/login/" + surveyId, user, { headers: h })
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


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map