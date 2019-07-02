import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/store/state';
import {
  selectCurrentDate,
  selectAllUsers,
  selectCurrentUserId,
  selectViewSize
} from 'src/app/store/selectors/selectors';
import { ChangeDateAction } from 'src/app/store/actions/current-date.action';
import { User, ViewSize } from 'src/app/models';
import { ChangeUserAction } from 'src/app/store/actions/current-user.action';
import { ChangeViewSizeAction } from 'src/app/store/actions/view-size.action';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public currentDate$: Observable<Date>;
  public currentUserId$: Observable<string>;
  public currentViewSize$: Observable<ViewSize>;
  public allUsers$: Observable<User[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.currentDate$ = this.store.pipe(select(selectCurrentDate));
    this.currentUserId$ = this.store.pipe(select(selectCurrentUserId));
    this.currentViewSize$ = this.store.pipe(select(selectViewSize));
    this.allUsers$ = this.store.pipe(select(selectAllUsers));
  }

  public onDateChange(newDate: Date) {
    this.store.dispatch(new ChangeDateAction(newDate));
  }

  public onUserChange(newUser: string) {
    this.store.dispatch(new ChangeUserAction(newUser));
  }

  public onViewSizeChange(newViewSize: ViewSize) {
    this.store.dispatch(new ChangeViewSizeAction(newViewSize));
  }
}
