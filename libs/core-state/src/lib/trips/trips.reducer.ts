import { Trip } from "@int-travel-history/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as TripActions from './trips.actions';

export const TRIP_FEATURE_KEY = 'trips';

export interface TripState extends EntityState<Trip> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface TripPartialState {
    readonly [TRIP_FEATURE_KEY]: TripState
};

export const tripAdapter: EntityAdapter<Trip> = createEntityAdapter<Trip>();

export const initialTripState: TripState = tripAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailure = (state, { error }): TripState => ({ ...state, error });

const onDispatch = (state, action): TripState => ({
    ...state,
    loaded: false,
    error: null
});

const _tripReducer = createReducer(
    initialTripState,
    on(
        TripActions.loadTripFailure,
        TripActions.loadTripsFailure,
        TripActions.createTripFailure,
        TripActions.updateTripFailure,
        TripActions.deleteTripFailure,
        onFailure
    ),
    on(
        TripActions.loadTrip,
        TripActions.loadTrips,
        TripActions.createTrip,
        TripActions.updateTrip,
        TripActions.deleteTrip,
        onDispatch
    ),
    on(
        TripActions.loadTripSuccess, (state, {trip}) =>
        tripAdapter.upsertOne(trip, {...state, loaded: true})
    ),
    on(
        TripActions.selectTrip, (state, {tripId}) => ({
            ...state,
            selectedId: tripId
        })
    ),
    on(
        TripActions.loadTripsSuccess, (state, { trips }) =>
        tripAdapter.setAll(trips, {...state, loaded: true}) 
    ),
    on(
        TripActions.deleteTripSuccess, (state, { trip }) =>
        tripAdapter.removeOne(trip.id, {...state, loaded: true})
    ),
    on(
        TripActions.updateTripSuccess, (state, { trip }) =>
        tripAdapter.updateOne(
            {id: trip.id, changes: trip},
            {...state, loaded: true}
        )
    ),
    on(
        TripActions.createTripSuccess, (state, { trip }) =>
        tripAdapter.addOne(trip, {...state, loaded: true})
    ),
)

export function tripReducer(
    state: TripState | undefined,
    action: Action
) {
    return _tripReducer(state, action)
};
