import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User, ViewSize, Event } from 'src/app/models';
import * as moment from 'moment';
import { CalendarData } from 'src/app/view-models/calendar-data';

const indexFormat = 'YYYYMMDD';
const niceDateFormat = 'dddd, MMMM Do YYYY';

export const selectAllEvents = createFeatureSelector<{
  [id: string]: Event;
}>('allEvents');
export const selectAllUsers = createFeatureSelector<User[]>('allUsers');
export const selectCurrentDate = createFeatureSelector<Date>('currentDate');
export const selectCurrentUserId = createFeatureSelector<string>('currentUser');
export const selectViewSize = createFeatureSelector<ViewSize>('viewSize');

export const selectCurrentUser = createSelector(
  selectCurrentUserId,
  selectAllUsers,
  (id: string, users: User[]): User | undefined =>
    users.find(user => user.id === id)
);

export const selectDaysToDisplay = createSelector(
  selectCurrentDate,
  selectViewSize,
  (currentDate, viewSize): Date[] => {
    switch (viewSize) {
      case ViewSize.Day:
        return [moment(currentDate).toDate()];
      case ViewSize.Week:
        return getDaysOfWeek(currentDate);
      case ViewSize.Month:
        return getDaysOfMonth(currentDate);
      default:
        return [];
    }
  }
);

function getDaysOfWeek(selected: Date) {
  const week: Date[] = [];
  for (let i = 0; i < 7; i++) {
    week.push(
      moment(selected)
        .day(i)
        .toDate()
    );
  }
  return week;
}

function getDaysOfMonth(selected: Date) {
  const month: Date[] = [];
  const numberOfDaysInThisMonth = moment(selected).daysInMonth();
  for (let i = 1; i <= numberOfDaysInThisMonth; i++) {
    month.push(
      moment(selected)
        .date(i) // date is 1 indexed because lol, that is why i starts at 1 here
        .toDate()
    );
  }
  return month;
}

export const selectEventsToDisplay = createSelector(
  selectAllEvents,
  selectCurrentUserId,
  selectDaysToDisplay,
  (events, currentUser, days) => {
    const result: CalendarData = {};

    days.forEach(
      day =>
        (result[moment(day).format(indexFormat)] = {
          displayDate: moment(day).format(niceDateFormat),
          events: []
        })
    );

    for (const id in events) {
      if (
        events[id].attendees.includes(currentUser) &&
        days.some(day => moment(day).diff(moment(events[id].date)) === 0)
      ) {
        result[moment(events[id].date).format(indexFormat)].events.push(
          events[id]
        );
      }
    }

    for (const date in result) {
      result[date].events.sort((a, b) =>
        a.startTime > b.startTime ? 1 : a.startTime === b.startTime ? 0 : -1
      );
    }

    return result;
  }
);
