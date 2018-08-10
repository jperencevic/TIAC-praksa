import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { FormViewComponent } from './form-view/form-view.component';
import { LiveViewComponent } from './live-view/live-view.component';
import { HttpClientModule } from '@angular/common/http';
import { TextfieldComponent } from './formcomp/textfield/textfield.component';
import { NumberfieldComponent } from './formcomp/numberfield/numberfield.component';
import { ColorpickComponent } from './formcomp/colorpick/colorpick.component';
import { BooleanComponent } from './formcomp/boolean/boolean.component';
import { LineStyleComponent } from './formcomp/line-style/line-style.component';
import { FontComponent } from './formcomp/font/font.component';
import { PositionComponent } from './formcomp/position/position.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    TableViewComponent,
    FormViewComponent,
    LiveViewComponent, 
    TextfieldComponent,
    NumberfieldComponent,
    ColorpickComponent,
    BooleanComponent,
    LineStyleComponent,
    FontComponent,
    PositionComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
