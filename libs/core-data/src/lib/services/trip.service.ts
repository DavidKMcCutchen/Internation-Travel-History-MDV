import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Trip } from "@int-travel-history/api-interfaces";

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  model = 'trips';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Trip[]>(this.getUrl())
  };

  find(tripId: string) {
    return this.httpClient.get<Trip>(this.getUrlById(tripId))
  };

  create(trips: Trip) {
    return this.httpClient.post<Trip>(this.getUrl(), trips)
  };

  update(trips: Trip) {
    return this.httpClient.patch<Trip>(this.getUrlById(trips.id), trips)
  };

  delete({ id }: Trip) {
    return this.httpClient.delete<Trip>(this.getUrlById(id))
  };

  private getUrl() {
    return `${BASE_URL}${this.model}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
