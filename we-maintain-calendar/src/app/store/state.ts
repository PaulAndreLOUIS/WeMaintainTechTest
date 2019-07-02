import { ViewSize, User, Event } from '../models';

export interface State {
  currentDate: Date;
  currentUser: string;
  viewSize: ViewSize;
  allUsers: User[];
  allEvents: { [id: string]: Event | undefined };
}
