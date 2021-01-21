import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EventsApiService {
  url = "https://app.ticketmaster.com/discovery/v2/events.json";
  apiKey = "25sxtwfASukPLAly0SJ36i7UeNqwIWfR";
  events: any[] = [];
  
  constructor(private http: HttpClient) {}

  getEvents() {
    const requestUrl = this.getUrlWithAPIKey() + "&keyword=football";

    this.http.get(requestUrl).subscribe(
      (response: any) => {
        this.events = response._embedded.events;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getUrlWithAPIKey() {
    return `${this.url}?apikey=${this.apiKey}`;
  }
}
