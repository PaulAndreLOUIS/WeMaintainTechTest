import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.scss']
})
export class DisplayEventComponent {
  @Input()
  public event: Event;
}
