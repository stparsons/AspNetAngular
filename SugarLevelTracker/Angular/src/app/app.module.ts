import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SugarlevelListComponent } from './sugarlevel-list/sugarlevel-list.component';
import { SugarlevelEditComponent } from './sugarlevel-edit/sugarlevel-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SugarlevelListComponent,
    SugarlevelEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
