import { profileReducer } from "../features/userFeatures/state/profile/profile.reducer"
import { userState } from "../features/userFeatures/state/profile/profile.state"

export interface AppState {
    user : userState
}

export const AppReducer = {
   profile : profileReducer
}