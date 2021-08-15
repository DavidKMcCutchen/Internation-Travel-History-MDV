import { Injectable } from "@angular/core";
import { Trip } from "@int-travel-history/api-interfaces";
import { TripService } from "@int-travel-history/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as TripActions from './trips.actions';
import { filter, map, tap } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class TripEffects {
    loadTrip$ = createEffect(() =>
    this.actions$.pipe(
        ofType(TripActions.loadTrip),
        fetch({
            run: (action) =>
            this.tripService
                .find(action.tripId)
                .pipe(
                    map((trip: Trip) => TripActions.loadTripSuccess({ trip }))
                ),
            onError: (action, error) => TripActions.loadTripFailure({ error })    
        })
    ));

    loadTrips$ = createEffect(() =>
    this.actions$.pipe(
        ofType(TripActions.loadTrips),
        fetch({
            run: () =>
            this.tripService
                .all()
                .pipe(
                    map((trips: Trip[]) => TripActions.loadTripsSuccess({ trips }))
                ),
            onError: (action, error) => TripActions.loadTripsFailure({ error })   
        })
    ));

    updateTrip$ = createEffect(() =>
    this.actions$.pipe(
        ofType(TripActions.updateTrip),
        pessimisticUpdate({
            run: (action) =>
            this.tripService
                .update(action.trip)
                .pipe(
                    map((trip: Trip) => TripActions.updateTripSuccess({ trip }))
                ),
            onError: (action, error) => TripActions.updateTripFailure({ error })    
        })
    ));

    createTrip$ = createEffect(() =>
    this.actions$.pipe(
        ofType(TripActions.createTrip),
        pessimisticUpdate({
            run: (action) =>
            this.tripService
                .create(action.trip)
                .pipe(
                    map((trip: Trip) => TripActions.createTripSuccess({ trip }))
                ),
            onError: (action, error) => TripActions.createTripFailure({ error })    
        })
    ),
    );

    deleteTrip$ = createEffect(() => 
    this.actions$.pipe(
        ofType(TripActions.deleteTrip),
        pessimisticUpdate({
            run: (action) =>
            this.tripService
                .delete(action.trip)
                .pipe(
                    map((trip: Trip) => TripActions.deleteTripSuccess({ trip: action.trip }))
                ),
            onError: (action, error) => TripActions.deleteTripFailure({ error })    
        })
    ));

    constructor(private actions$: Actions, private tripService: TripService) {}
}