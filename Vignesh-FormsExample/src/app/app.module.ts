import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormbareboneComponent } from './formbarebone/formbarebone.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    FormbareboneComponent,
    ViewmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    FormbareboneComponent,AppComponent,ViewmodelComponent
  ]
})
export class AppModule { }
