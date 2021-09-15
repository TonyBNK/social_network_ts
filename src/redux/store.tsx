import {combineReducers, createStore} from "redux";
import profileReducer, {
    ProfileActionsType
} from "./profileReducer";
import dialogsReducer, {
    DialogsActionsType
} from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import usersReducer, {
    UsersPageActionsType
} from "./usersReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
});

export const store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>;

export type ActionsType =
    ProfileActionsType
    | DialogsActionsType
    | UsersPageActionsType;

