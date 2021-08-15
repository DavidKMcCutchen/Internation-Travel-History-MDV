import { Component } from '@angular/core';


@Component({
  selector: 'int-travel-history-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Trips';
  links = [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'trips', icon: 'view_list', title: 'Trips'}
  ]
}
