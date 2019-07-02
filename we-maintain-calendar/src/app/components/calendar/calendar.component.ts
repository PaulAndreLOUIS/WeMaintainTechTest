import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Event } from 'src/app/models';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {
  @Input()
  public calendarData: {
    [id: string]: {
      displayDate: string;
      events: Event[];
    };
  };

  @Output()
  public eventClicked = new EventEmitter<Event>();

  @Output()
  public createEvent = new EventEmitter<void>();
}
