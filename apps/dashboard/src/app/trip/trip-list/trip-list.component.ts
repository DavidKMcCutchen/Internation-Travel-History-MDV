import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trip } from '@int-travel-history/api-interfaces';

@Component({
  selector: 'int-travel-history-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent{
  @Input() trips: Trip[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
