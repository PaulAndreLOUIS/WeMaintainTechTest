import { Event } from '../models/event';

export interface CalendarData {
  [id: string]: {
    displayDate: string;
    events: Event[];
  };
}

export interface CalendarDatum {
  displayDate: string;
  events: Event[];
}
