import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';

import {Config} from './config/config';
import { AdminService} from './services/admin.service';
import { CompanySidebarComponent } from './components/company-sidebar/company-sidebar.component';
import { CompanyTopBarComponent } from './components/company-top-bar/company-top-bar.component';
import { CompanyUsersComponent } from './components/company-users/company-users.component';
import { CompanyService } from './services/company.service';
import { CompanyCreateSurveyComponent } from './components/company-create-survey/company-create-survey.component';
import { CompanyListSurveyComponent } from './components/company-list-survey/company-list-survey.component';
import { CompanyEditSurveyComponent } from './components/company-edit-survey/company-edit-survey.component';
import { CompanySurveyPreviewComponent } from './components/company-survey-preview/company-survey-preview.component';
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
 // MatFormFieldModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';





const appRoutes: Routes = [
  {path: '', component: ReferenceComponentComponent },
  {path:'', redirectTo:'/reference', pathMatch:'full'},
  {path:'top-bar', component:TopBarComponent},
  {path:'side-bar', component:SideBarComponent},
  {path:'reference', component:ReferenceComponentComponent},
  {path:'admin-login', component:AdminLoginComponent},
  {path:'company-users', component:CompanyUsersComponent},
  {path:'company-create-survey', component:CompanyCreateSurveyComponent},
  {path:'company-list-survey', component:CompanyListSurveyComponent},
  {path:'company-edit-survey/:id', component:CompanyEditSurveyComponent},
  {path:'preview', component:CompanySurveyPreviewComponent},
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
    CompanySidebarComponent,
    CompanyTopBarComponent,
    CompanyUsersComponent,
    CompanyCreateSurveyComponent,
    CompanyListSurveyComponent,
    CompanyEditSurveyComponent,
    CompanySurveyPreviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    // MatFormFieldModule,
    DemoMaterialModule,
    NoopAnimationsModule,
    DragulaModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [Config,AdminService,CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }


//platformBrowserDynamic().bootstrapModule(AppModule);




