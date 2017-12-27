import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ReferenceComponentComponent } from './components/reference-component/reference-component.component';

const appRoutes: Routes = [
  { path: '', component: ReferenceComponentComponent },
  {path:'', redirectTo:'/reference', pathMatch:'full'},
  {path:'top-bar', component:TopBarComponent},
  {path:'side-bar', component:SideBarComponent},
  {path:'reference', component:ReferenceComponentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    ReferenceComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
