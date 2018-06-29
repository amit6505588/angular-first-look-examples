import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import './rxjs-extensions';
import { VehicleListComponent } from './vehicle-list.component';
import { VehicleComponent } from './vehicle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, VehicleComponent, VehicleListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
