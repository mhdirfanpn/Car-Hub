
import { createReducer, on,  Action } from "@ngrx/store";
import { initialState } from "./profile.state";
import { userState } from "./profile.state";
import { loadProfileSuccess, updateProfileSuccess } from "./profile.action";


const _profileReducer = createReducer(
    initialState,
    on(loadProfileSuccess,(state,action)=>{
        return {
            ...state,
            user : action.user
        }
    }),

    on(updateProfileSuccess, (state, action) => {
        return {
          ...state,
          user: action.user,
        };
      }),
)


export function profileReducer(state : userState | undefined,action: Action){
    return _profileReducer(state,action);
}