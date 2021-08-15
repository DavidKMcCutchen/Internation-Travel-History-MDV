import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "@int-travel-history/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip/trip.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { CoreDataModule } from '@int-travel-history/core-data';
import { CoreStateModule } from "@int-travel-history/core-state";
@NgModule({
  declarations: [AppComponent, TripComponent, TripListComponent, TripDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
