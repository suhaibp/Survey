import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {scaleLinear} from "d3-scale";
import * as d3 from "d3";
import {Config} from './config/config';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ChartsModule } from 'ng2-charts';
import { AdminChat1Component } from './components/admin-chat1/admin-chat1.component';
import { AdminChat2Component } from './components/admin-chat2/admin-chat2.component';
import { AdminChatd3Component } from './components/admin-chatd3/admin-chatd3.component';
import { AdminChatd3pieComponent } from './components/admin-chatd3pie/admin-chatd3pie.component';
import { AdminService} from './services/admin.service';
import { CompanyService} from './services/company.service';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminSideBarComponent } from './components/admin-side-bar/admin-side-bar.component';
import { AdminTopBarComponent } from './components/admin-top-bar/admin-top-bar.component';
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
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';







const appRoutes: Routes = [
  { path: '', component: ReferenceComponentComponent },
  {path:'', redirectTo:'/reference', pathMatch:'full'},
  {path:'top-bar', component:TopBarComponent},
  {path:'side-bar', component:SideBarComponent},
  {path:'reference', component:ReferenceComponentComponent},
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
  {path:'admin-chart1', component:AdminChat1Component},
  {path:'admin-chartd3', component:AdminChatd3Component},
  {path:'admin-chatd3pie', component:AdminChatd3Component}
  
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
    AdminLoginComponent,
    AdminUsersComponent,
    AdminSideBarComponent,
    AdminTopBarComponent,
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
    AdminChat1Component,
    AdminChat2Component,
    AdminChatd3Component,
    AdminChatd3pieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [Config,AdminService,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);
