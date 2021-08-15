import { emptyTrip } from "@int-travel-history/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { tripAdapter, TRIP_FEATURE_KEY, TripState } from "./trips.reducer";

export const getTripState = createFeatureSelector<TripState>(TRIP_FEATURE_KEY);

const { selectAll, selectEntities } = tripAdapter.getSelectors();

export const getTripsLoaded = createSelector(
    getTripState,
    (state: TripState) => state.loaded
);

export const getTripError = createSelector(
    getTripState,
    (state: TripState) => state.error
);

export const getAllTrips = createSelector(
    getTripState,
    (state: TripState) => selectAll(state)
);

export const getTripEntities = createSelector(
    getTripState,
    (state: TripState) => selectEntities(state)
);

export const getSelectedTripId = createSelector(
    getTripState,
    (state: TripState) => state.selectedId
);

export const getSelectedTrip = createSelector(
    getTripEntities,
    getSelectedTripId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyTrip
);
