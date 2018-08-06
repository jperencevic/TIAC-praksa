import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { LiveViewComponent } from './live-view/live-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    FormViewComponent,
    LiveViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
