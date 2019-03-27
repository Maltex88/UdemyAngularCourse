import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { HttpModule } from '@angular/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { SucsessComponent } from './succses/sucsess.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    SucsessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
