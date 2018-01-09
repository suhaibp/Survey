import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {Config} from './config/config';

import { AdminService} from './services/admin.service';
import { CompanyService} from './services/company.service';
import { XlsxToJsonService} from './services/xlsx-to-json.service';
import { UserService} from './services/user.service';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { CompanyRegistrationComponent } from './components/company-registration/company-registration.component';
import { CompanyAdditnInfoComponent } from './components/company-additn-info/company-additn-info.component';
import { CompanyExpiredPageComponent } from './components/company-expired-page/company-expired-page.component';
import { CompanyEmailVerificationComponent } from './components/company-email-verification/company-email-verification.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyTopbarComponent } from './components/company-topbar/company-topbar.component';
import { CompanyUsersComponent } from './components/company-users/company-users.component';
import { UserResponseEmailComponent } from './components/user-response-email/user-response-email.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

import 'hammerjs';
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
  {path:'clogin', component:CompanyLoginComponent},
  {path:'creg', component:CompanyRegistrationComponent},
  {path:'additnInfo/:id', component:CompanyAdditnInfoComponent},
  {path:'email-verification/:id', component:CompanyEmailVerificationComponent},
  {path:'expired', component:CompanyExpiredPageComponent},
  {path:'profile', component:CompanyProfileComponent},
  {path:'company-users', component:CompanyUsersComponent},
  {path:'user-response-email/:id1/:id2', component:UserResponseEmailComponent},
  {path:'user-login/:id1/:id2', component:UserLoginComponent},
  {path:'user-register/:id1/:id2', component:UserRegistrationComponent},
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
    CompanyLoginComponent,
    CompanyRegistrationComponent,
    CompanyAdditnInfoComponent,
    CompanyExpiredPageComponent,
    CompanyEmailVerificationComponent,
    CompanyProfileComponent,
    CompanySidebarComponent, 
    CompanyTopbarComponent, 
    CompanyUsersComponent,
    UserResponseEmailComponent,
    UserLoginComponent, 
    UserRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DemoMaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [Config, AdminService, CompanyService, XlsxToJsonService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);
