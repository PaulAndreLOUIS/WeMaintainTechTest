import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User, ViewSize } from 'src/app/models';
import * as moment from 'moment';

export const selectAllEvents = createFeatureSelector<{
  [id: string]: Event | undefined;
}>('allEvents');
export const selectAllUsers = createFeatureSelector<User[]>('allUsers');
export const selectCurrentDate = createFeatureSelector<Date>('currentDate');
export const selectCurrentUserId = createFeatureSelector<string>('currentUser');
export const selectViewSize = createFeatureSelector<ViewSize>('viewSize');

export const selectCurrentUser = createSelector(
  selectCurrentUserId,
  selectAllUsers,
  (id: string, users: User[]) => {
    return users.find(user => user.id === id);
  }
);

// export const selectDaysInView = createSelector(
//   selectCurrentDate,
//   selectViewSize,
//   (currentDate, viewSize) => {
//     switch (viewSize) {
//       case ViewSize.Day:
//         return moment(currentDate).format;
//       case ViewSize.Week:
//         return;
//       case ViewSize.Month:
//         return;
//       default:
//         return [];
//     }
//   }
// );
