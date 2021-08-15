import { Injectable } from "@angular/core";
import { Trip } from "@int-travel-history/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as TripActions from './trips.actions';
import * as TripSelectors from './trips.selectors';
import * as fromTrips from './trips.reducer';

@Injectable({
    providedIn: 'root',
})

export class TripFacade {
    allTrips$ = this.store.pipe(
        map((state) => TripSelectors.getAllTrips(state)),
    )
    selectedTrips$ = this.store.pipe(select(TripSelectors.getSelectedTrip));
    loaded$ = this.store.pipe(select(TripSelectors.getTripsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === TripActions.createTrip({} as any) .type ||
        action.type === TripActions.updateTrip({} as any) .type ||
        action.type === TripActions.deleteTrip({} as any) .type
        ),
    )

    selectTrip(tripId: string) {
        this.dispatch(TripActions.selectTrip({ tripId }))
    };

    loadTrips() {
        this.dispatch(TripActions.loadTrips())
    };

    loadTrip(tripId: string) {
        this.dispatch(TripActions.loadTrip({ tripId }))
    };

    saveTrip(trip: Trip) {
        trip.id ? this.updateTrip(trip) : this.createTrip(trip)
    };

    createTrip(trip: Trip) {
        this.dispatch(TripActions.createTrip({ trip }))
    };

    updateTrip(trip: Trip) {
        this.dispatch(TripActions.updateTrip({ trip }))
    };

    deleteTrip(trip: Trip) {
        this.dispatch(TripActions.deleteTrip({ trip }))
    };

    dispatch(action: Action) {
        this.store.dispatch(action)
    };

    constructor(
        private store: Store<fromTrips.TripPartialState>,
        private actions$: ActionsSubject
    ) {}
} 

