import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponente } from './html/html.component';
import { CssComponente } from './css/css.component';
import { JsComponente } from './js/js.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponente,
    CssComponente,
    JsComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
