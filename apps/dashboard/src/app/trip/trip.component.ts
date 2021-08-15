import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { emptyTrip, Trip } from '@int-travel-history/api-interfaces';
import { TripFacade } from '@int-travel-history/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'int-travel-history-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  allTrips$: Observable<Trip[]> = this.tripFacade.allTrips$; 
  selectedTrip$: Observable<Trip> = this.tripFacade.selectedTrips$;

  form: FormGroup;

  constructor(
    private tripFacade: TripFacade,
    private formBuilder: FormBuilder
    ) {
      this.tripFacade.mutations$.subscribe((_) => this.resetTrip());
    }

  ngOnInit() {
    this.initForm();
    this.tripFacade.loadTrips();
    this.resetTrip();
  };

  selectTrip(trip: Trip) {
    this.tripFacade.selectTrip(trip.id);
    this.form.patchValue(trip);
  };

  saveTrip(trip: Trip) {
    this.tripFacade.saveTrip(trip);
  };

  deleteTrip(trip: Trip) {
    this.tripFacade.deleteTrip(trip)
  };

  resetTrip() {
    this.form.reset();
    this.selectTrip(emptyTrip)
  };

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [''],
      dates: [''],
      description: ['']
    })
  }

}
