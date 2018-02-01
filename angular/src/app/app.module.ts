import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import {Config} from './config/config';
import { FlashMessagesModule } from 'angular2-flash-messages';
import 'hammerjs';
import {scaleLinear} from "d3-scale";
// import * as d3 from "d3";

import { XlsxToJsonService} from './services/xlsx-to-json.service';
import { UserService} from './services/user.service';
import { AdminService} from './services/admin.service';
import { CompanyService} from './services/company.service';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';

import { CompanyCreateSurveyComponent } from './components/company-create-survey/company-create-survey.component';
import { CompanyListSurveyComponent } from './components/company-list-survey/company-list-survey.component';
import { CompanyEditSurveyComponent } from './components/company-edit-survey/company-edit-survey.component';
import { CompanySurveyPreviewComponent } from './components/company-survey-preview/company-survey-preview.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyTopBarComponent } from './components/company-top-bar/company-top-bar.component';
import { CompanyCreateThemeComponent } from './components/company-create-theme/company-create-theme.component';
import { CompanyCreateThemeContainerComponent } from './components/company-create-theme-container/company-create-theme-container.component';
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { AdminTopBarComponent } from './components/admin-top-bar/admin-top-bar.component';
import { AdminManageSurveyCategoryComponent } from './components/admin-manage-survey-category/admin-manage-survey-category.component';
import { AdminManageOrganizationTypeComponent } from './components/admin-manage-organization-type/admin-manage-organization-type.component';
import { AdminManageIndustryComponent } from './components/admin-manage-industry/admin-manage-industry.component';
import { AdminManageSurveyAttenderTypeComponent } from './components/admin-manage-survey-attender-type/admin-manage-survey-attender-type.component';
import { CompanyUsersComponent } from './components/company-users/company-users.component';
import { CompanyManageUserGroupsComponent } from './components/company-manage-user-groups/company-manage-user-groups.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminChatd3Component } from './components/admin-chatd3/admin-chatd3.component';
import { AdminChatd3pieComponent } from './components/admin-chatd3pie/admin-chatd3pie.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminCompanyComponent } from './components/admin-company/admin-company.component';
import { AdminAllCompaniesComponent } from './components/admin-all-companies/admin-all-companies.component';
import { AdminSubscribedComponent } from './components/admin-subscribed/admin-subscribed.component';
import { AdminTrialComponent } from './components/admin-trial/admin-trial.component';
import { AdminNotVerifiedComponent } from './components/admin-not-verified/admin-not-verified.component';
import { AdminExpiredComponent } from './components/admin-expired/admin-expired.component';
import { AdminCompanyActiveComponent } from './components/admin-company-active/admin-company-active.component';
import { AdminCompanyBlockedComponent } from './components/admin-company-blocked/admin-company-blocked.component';
import { AdminCompanyDeletedComponent } from './components/admin-company-deleted/admin-company-deleted.component';
import { AdminHeaderTitleComponent } from './components/admin-header-title/admin-header-title.component';
import { AdminAllUsersComponent } from './components/admin-all-users/admin-all-users.component';
import { AdminActiveUsersComponent } from './components/admin-active-users/admin-active-users.component';
import { AdminBlockedUsersComponent } from './components/admin-blocked-users/admin-blocked-users.component';
import { AdminDeletedUsersComponent } from './components/admin-deleted-users/admin-deleted-users.component';
import { AdminRequestUsersComponent } from './components/admin-request-users/admin-request-users.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { CompanyAdditnInfoComponent } from './components/company-additn-info/company-additn-info.component';
import { CompanyExpiredPageComponent } from './components/company-expired-page/company-expired-page.component';
import { CompanyEmailVerificationComponent } from './components/company-email-verification/company-email-verification.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { CompanyTopbarComponent } from './components/company-topbar/company-topbar.component';
import { UserResponseEmailComponent } from './components/user-response-email/user-response-email.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { NewpieComponent } from './components/newpie/newpie.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CompanyManageThemesComponent } from './components/company-manage-themes/company-manage-themes.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { CompanyEditThemeComponent } from './components/company-edit-theme/company-edit-theme.component';
import { CompanyEditThemeContainerComponent } from './components/company-edit-theme-container/company-edit-theme-container.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { UserSurveyComponent } from './components/user-survey/user-survey.component';
import { UserSurveySinglepageComponent } from './components/user-survey-singlepage/user-survey-singlepage.component';
import { UserSurveyClosedComponent } from './components/user-survey-closed/user-survey-closed.component';
import { UserSurveyUpcomingComponent } from './components/user-survey-upcoming/user-survey-upcoming.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { UserSurveyMultipleComponent } from './components/user-survey-multiple/user-survey-multiple.component';
import { CompanyUpgradeComponent } from './components/company-upgrade/company-upgrade.component';
import { CompanyPaymentComponent } from './components/company-payment/company-payment.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
 // MatFormFieldModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { AgmCoreModule } from '@agm/core';
import { ReversePipe } from './pipe/reverse.pipe';
import { StarRatingModule } from 'angular-star-rating';
import {Component} from "@angular/core";
import {RatingModule} from "ngx-rating";
import { CompanyChart2Component } from './components/company-chart2/company-chart2.component';

const appRoutes: Routes = [
  { path: '', component: CompanyLoginComponent },
  {path:'', redirectTo:'/clogin', pathMatch:'full'},
  {path:'top-bar', component:TopBarComponent},
  {path:'side-bar', component:SideBarComponent},
  {path:'admin-side-bar', component:AdminSideBarComponent},
  {path:'admin-top-bar', component:AdminTopBarComponent},
  {path:'app-company-sidebar', component:CompanySidebarComponent},
  {path:'app-company-top-bar', component:CompanyTopBarComponent},
  {path:'manage-survey-category', component:AdminManageSurveyCategoryComponent},
  {path:'admin-manage-industry', component:AdminManageIndustryComponent},
  {path:'admin-manage-organization-type', component:AdminManageOrganizationTypeComponent},
  {path:'admin-manage-survey-attender-type', component:AdminManageSurveyAttenderTypeComponent},
  {path:'company-users', component:CompanyUsersComponent},
  {path:'company-manage-user-groups', component:CompanyManageUserGroupsComponent},
  {path:'reference', component:ReferenceComponentComponent},
  {path:'create-theme', component:CompanyCreateThemeComponent},
  {path:'edit-theme/:id', component:CompanyEditThemeComponent},
  {path:'dashboard', component:CompanyDashboardComponent},
  {path:'dashboard/:id', component:CompanyDashboardComponent},
  {path:'survey/:id', component:UserSurveyComponent},
  {path:'testing', component:CompanyEditThemeContainerComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'admin-company', component:AdminCompanyComponent},
  {path:'admin-all-companies', component:AdminAllCompaniesComponent},
  {path:'admin-subscribed', component:AdminSubscribedComponent},
  {path:'admin-trial', component:AdminTrialComponent},
  {path:'admin-not-verified', component:AdminNotVerifiedComponent},
  {path:'admin-expired', component:AdminExpiredComponent},
  {path:'admin-company-blocked', component:AdminCompanyBlockedComponent},
  {path:'admin-company-deleted', component:AdminCompanyDeletedComponent},
  {path:'admin-users', component:AdminUsersComponent},
  {path:'admin-all-users', component:AdminAllUsersComponent},
  {path:'admin-blocked-users', component:AdminBlockedUsersComponent},
  {path:'admin-company-active', component:AdminCompanyActiveComponent},
  {path:'admin-deleted-users', component:AdminDeletedUsersComponent},
  {path:'admin-request-users', component:AdminRequestUsersComponent},
  {path:'admin-chartd3', component:AdminChatd3Component},
  {path:'admin-chatd3pie', component:AdminChatd3Component},
  {path:'clogin', component:CompanyLoginComponent},
  {path:'creg', component:CompanyRegistrationComponent},
  {path:'additnInfo/:id', component:CompanyAdditnInfoComponent},
  {path:'email-verification/:id', component:CompanyEmailVerificationComponent},
  {path:'expired', component:CompanyUpgradeComponent},
  {path:'profile', component:CompanyProfileComponent},
  {path:'company-users', component:CompanyUsersComponent},
  {path:'user-response-email/:id1/:id2', component:UserResponseEmailComponent},
  {path:'user-login/:id1/:id2', component:UserLoginComponent},
  {path:'user-register/:id1/:id2', component:UserRegistrationComponent},
  {path:'pie', component:NewpieComponent},
  {path:'pie/:id', component:NewpieComponent},
  {path:'404', component:PageNotFoundComponent},
  {path:'company-create-survey', component:CompanyCreateSurveyComponent},
  {path:'company-list-survey', component:CompanyListSurveyComponent},
  {path:'company-edit-survey/:id', component:CompanyEditSurveyComponent},
  {path:'preview', component:CompanySurveyPreviewComponent},
  {path:'creg/:id', component:CompanyRegistrationComponent},
  {path:'payment/:id', component:CompanyPaymentComponent},
  {path:'upgrade', component:CompanyUpgradeComponent},
  
]
@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class DemoMaterialModule {}
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    ReferenceComponentComponent,
    CompanyCreateSurveyComponent,
    CompanyListSurveyComponent,
    CompanyEditSurveyComponent,
    CompanySurveyPreviewComponent,
    CompanySidebarComponent,
    CompanyCreateThemeComponent,
    CompanyCreateThemeContainerComponent,
    CompanyManageThemesComponent,
    CompanyEditThemeComponent,
    CompanyEditThemeContainerComponent, 
    CompanyDashboardComponent,
    UserSurveyComponent, 
    UserSurveySinglepageComponent, 
    UserSurveyClosedComponent,
    UserSurveyUpcomingComponent, 
    CountDownTimerComponent,
    UserSurveyMultipleComponent,
    ReversePipe,
    AdminSideBarComponent,
    AdminTopBarComponent,
    AdminManageSurveyCategoryComponent,
    AdminManageOrganizationTypeComponent,
    AdminManageIndustryComponent,
    AdminManageSurveyAttenderTypeComponent,
    CompanyUsersComponent, 
    CompanyTopBarComponent,
    CompanyManageUserGroupsComponent,
    AdminLoginComponent,
    AdminUsersComponent,
    AdminDashboardComponent,
    AdminCompanyComponent,
    AdminAllCompaniesComponent,
    AdminSubscribedComponent,
    AdminTrialComponent,
    AdminNotVerifiedComponent,
    AdminExpiredComponent,
    AdminCompanyBlockedComponent,
    AdminCompanyDeletedComponent,
    AdminCompanyActiveComponent,
    AdminHeaderTitleComponent,
    AdminAllUsersComponent,
    AdminActiveUsersComponent,
    AdminBlockedUsersComponent,
    AdminDeletedUsersComponent,
    AdminRequestUsersComponent,
    AdminChatd3Component,
    AdminChatd3pieComponent,
    CompanyLoginComponent,
    CompanyRegistrationComponent,
    CompanyAdditnInfoComponent,
    CompanyExpiredPageComponent,
    CompanyEmailVerificationComponent,
    CompanyProfileComponent,
    UserResponseEmailComponent,
    UserLoginComponent, 
    UserRegistrationComponent,
    NewpieComponent,
    PageNotFoundComponent,
    CompanyChart2Component,
    CompanyUpgradeComponent,
    CompanyPaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    DemoMaterialModule,
    MatNativeDateModule,
    DragulaModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ColorPickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTu2njB-RY-TxKiuWx-O7yqYcfNT31k_8'
    }),
    StarRatingModule.forRoot(),
    RatingModule
  ],
  providers: [Config, AdminService, CompanyService, XlsxToJsonService, UserService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);
