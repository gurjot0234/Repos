import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from'@angular/forms';
import { AppComponent }  from './app.component';

import{HomeComponent} from'./component/home.component'
import{AppRoutingModule} from './app-routing.module'
import{ServiceListComponent} from'./component/viewServiceRequest.component'
import{OrderBy} from'./component/orderBy'
import{serviceRequest} from'./component/serviceRequest'

@NgModule({

  imports:      [ BrowserModule,FormsModule,AppRoutingModule  ],
  declarations: [ AppComponent,ServiceListComponent,HomeComponent,OrderBy],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
