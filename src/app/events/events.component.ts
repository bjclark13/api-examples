import { Component, OnInit } from '@angular/core';
import { EventsApiService } from '../events-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public eventsAPI: EventsApiService) { }

  ngOnInit() {
    this.eventsAPI.getEvents();
  }

}
