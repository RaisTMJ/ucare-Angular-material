import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ImGridComponent} from './im-grid/im-grid.component';
import {MatGridListModule, MatIconModule} from '@angular/material';
import {FlexModule} from '@angular/flex-layout';
import {UcWidgetModule} from 'ngx-uploadcare-widget';

@NgModule({
  declarations: [
    AppComponent,
    ImGridComponent
  ],
  exports: [
    ImGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    FlexModule,
    UcWidgetModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
