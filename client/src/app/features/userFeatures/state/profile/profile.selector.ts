import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userState } from "./profile.state";

const getUserFeatureState = createFeatureSelector<userState>('profile');


export const getProfile = createSelector(getUserFeatureState,state=>{
    return state.user
})
