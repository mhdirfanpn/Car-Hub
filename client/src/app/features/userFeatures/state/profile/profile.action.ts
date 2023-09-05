import { createAction, props } from "@ngrx/store"
import { userData } from "src/app/interface"


export const LOAD_PROFILE = '[profile page] load profile'
export const LOAD_PROFILE_SUCCESS = '[profile page] load profile success'
export const UPDATE_PROFILE_ACTION = '[update profile page] update profile'
export const UPDATE_PROFILE_SUCCESS = '[update profile page] update profile success'
export const loadProfile= createAction(LOAD_PROFILE)

export const loadProfileSuccess = createAction(LOAD_PROFILE_SUCCESS, props<{ user: userData }>());

export const updateProfile = createAction(
    UPDATE_PROFILE_ACTION,
    props<{  user: userData }>()
  );
  
  export const updateProfileSuccess = createAction(
    UPDATE_PROFILE_SUCCESS,
    props<{  user: userData }>()
  );