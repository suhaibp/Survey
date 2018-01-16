import 'core-js/es7/reflect';
import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyTopBarComponent } from './components/company-top-bar/company-top-bar.component';
import { CompanyCreateThemeComponent } from './components/company-create-theme/company-create-theme.component';
import { CompanyCreateThemeContainerComponent } from './components/company-create-theme-container/company-create-theme-container.component';

// ---------------------------------Start-------------------------------------------
// Function      : 
// Params        : 
// Returns       : 
// Author        : Manu Prasad
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Manu Prasad, Desc:
// Desc          : import libraries
import {Config} from './config/config';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { CompanyService } from './services/company.service';
import { UserService } from './services/user.service';
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
import { CompanyManageThemesComponent } from './components/company-manage-themes/company-manage-themes.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { CompanyEditThemeComponent } from './components/company-edit-theme/company-edit-theme.component';
import { CompanyEditThemeContainerComponent } from './components/company-edit-theme-container/company-edit-theme-container.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { UserSurveyComponent } from './components/user-survey/user-survey.component';
import { UserSurveySinglepageComponent } from './components/user-survey-singlepage/user-survey-singlepage.component';
import { UserSurveyClosedComponent } from './components/user-survey-closed/user-survey-closed.component';
import { UserSurveyUpcomingComponent } from './components/user-survey-upcoming/user-survey-upcoming.component';
import { CountDownTimerComponent } from './components/count-down-timer/count-down-timer.component';
import { UserSurveyMultipleComponent } from './components/user-survey-multiple/user-survey-multiple.component';
import { ReversePipe } from './pipe/reverse.pipe';
// IMPORT YOUR LIBRARY
import { StarRatingModule } from 'angular-star-rating';
import {Component} from "@angular/core";
import {RatingModule} from "ngx-rating";
import { D3Service } from 'd3-ng2-service';
// ----------------------------------End-------------------------------------------

const appRoutes: Routes = [
  { path: '', component: ReferenceComponentComponent },
  {path:'', redirectTo:'/reference', pathMatch:'full'},
  {path:'top-bar', component:TopBarComponent},
  {path:'side-bar', component:SideBarComponent},
  {path:'reference', component:ReferenceComponentComponent},
  {path:'create-theme', component:CompanyCreateThemeComponent},
  {path:'edit-theme/:id', component:CompanyEditThemeComponent},
  {path:'dashboard', component:CompanyDashboardComponent},
  {path:'survey/:id', component:UserSurveyComponent},
  {path:'testing', component:CompanyEditThemeContainerComponent},
]

// ---------------------------------Start-------------------------------------------
// Function      : 
// Params        : 
// Returns       : 
// Author        : Manu Prasad
// Date          : 27-12-2017
// Last Modified : 27-12-2017, Manu Prasad, Desc:
// Desc          : export libraries
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
  declarations: []
})
export class DemoMaterialModule {}
// ----------------------------------End-------------------------------------------



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    ReferenceComponentComponent,
    CompanySidebarComponent,
    CompanyTopBarComponent,
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
    ReversePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    ColorPickerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCTu2njB-RY-TxKiuWx-O7yqYcfNT31k_8'
    }),
    StarRatingModule.forRoot(),
    RatingModule
  ],
  providers: [
    CompanyService,
    Config,
    UserService,
    D3Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// platformBrowserDynamic().bootstrapModule(AppModule);

