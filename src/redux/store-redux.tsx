import {combineReducers, createStore } from "redux";
import profileReducer, {
    ProfileActionsType,
    ProfilePageStateType
} from "./profileReducer";
import dialogsReducer, {
    DialogsActionsType,
    DialogsPageStateType
} from "./dialogsReducer";
import friendsReducer, {FriendsPageType} from "./friendsReducer";
import usersReducer, {
    UsersPageActionsType,
    UsersPageType
} from "./usersReducer";


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
});

export const store = createStore(reducers);

export type StateType = {
    profilePage: ProfilePageStateType
    dialogsPage: DialogsPageStateType
    friendsPage: FriendsPageType
    usersPage: UsersPageType
};

export type ActionsType = ProfileActionsType | DialogsActionsType | UsersPageActionsType;

