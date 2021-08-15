import { createAction, props } from "@ngrx/store";
import { Trip } from "@int-travel-history/api-interfaces";

// Select Entity

export const selectTrip = createAction(
    '[TRIP] Select Trip',
    props<{ tripId: string}>()
);

// Load All Entities

export const loadTrips = createAction(
    '[TRIP] Load Trips'
);

export const loadTripsSuccess = createAction(
    '[TRIP] Load Trips Success',
    props<{ trips: Trip[]}>()
);

export const loadTripsFailure = createAction(
    '[TRIP] Load Trips Failed',
    props<{ error: any}>()
);

// Load Single Entity

export const loadTrip = createAction(
    '[TRIP] Load Trip',
    props<{ tripId: string}>()
);

export const loadTripSuccess = createAction(
    '[TRIP] Load Trip Success',
    props<{ trip: Trip }>()
);

export const loadTripFailure = createAction(
    '[TRIP] Load Trip Failed',
    props<{ error: any}>()
);

// Load Entity Update

export const updateTrip = createAction(
    '[TRIPS] Update Trip',
    props<{ trip: Trip}>()
)

export const updateTripSuccess = createAction(
    '[TRIPS] Update Trip Succeeded',
    props<{ trip: Trip}>()
)

export const updateTripFailure = createAction(
    '[TRIPS] Update Trip Failed',
    props<{ error: any}>()
)

  // Load Entity Delete

export const deleteTrip = createAction(
    '[TRIP] Trip Deleted',
    props<{trip: Trip}>()
);

export const deleteTripSuccess = createAction(
    '[TRIP] Trip Deleted Success',
    props<{trip: Trip}>()
);

export const deleteTripFailure = createAction(
    '[TRIP] Trip Deleted Failure',
    props<{error: any}>()
);

  // Load Create Entity

export const createTrip = createAction(
    '[TRIP] Create Trip',
    props<{ trip: Trip}>()
);

export const createTripSuccess = createAction(
    '[TRIP] Create Trip Success',
    props<{ trip: Trip}>()
);

export const createTripFailure = createAction(
    '[TRIP] Create Trip Failure',
    props<{ error: any }>()
);

