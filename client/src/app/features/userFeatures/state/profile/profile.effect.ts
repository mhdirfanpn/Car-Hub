import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { UserService } from '../../service/user.service';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import { loadProfile, loadProfileSuccess, updateProfile, updateProfileSuccess } from './profile.action';
import { userData } from 'src/app/interface';


@Injectable()
export class profileEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  loadProfile = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProfile),
      mergeMap(() => {
        return this.userService.getUserDetails().pipe(
          map((user: userData) => {
            return loadProfileSuccess({ user });
          })
        );
      })
    );
  });

  
  updateProfile$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProfile),
      switchMap((action) => {
        console.log("action",action)
        return this.userService.updateData(action.user).pipe(
          map((data) => {
            return updateProfileSuccess({ user: action.user });
          })
        );
      })
    );
  });
}