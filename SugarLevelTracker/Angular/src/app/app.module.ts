import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { SugarLevelListComponent } from './sugarlevel-list/sugarlevel-list.component';
import { SugarLevelEditComponent } from './sugarlevel-edit/sugarlevel-edit.component';
import SugarLevelService from './shared/api/sugar-level.service';
import {OktaAuthModule} from '@okta/okta-angular';




const appRoutes: Routes = [
  { path: '', redirectTo: '/sugarlevel-list', pathMatch: 'full' },
  {
    path: 'sugarlevel-list',
    component: SugarLevelListComponent
  },
  {
    path: 'sugarlevel-add',
    component: SugarLevelEditComponent
  },
  {
    path: 'sugarlevel-edit/:id',
    component: SugarLevelEditComponent
  }
];

const config = {
  issuer: 'https://dev-703495.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{clientId}'
};

@NgModule({
  declarations: [
    AppComponent,
    SugarLevelListComponent,
    SugarLevelEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [SugarLevelService],
  bootstrap: [AppComponent]
})
export class AppModule {}