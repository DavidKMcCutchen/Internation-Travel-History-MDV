import { ActionReducerMap } from "@ngrx/store";
import * as fromTrips from './trips/trips.reducer';

export interface AppState {
    [fromTrips.TRIP_FEATURE_KEY]: fromTrips.TripState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromTrips.TRIP_FEATURE_KEY]: fromTrips.tripReducer
};