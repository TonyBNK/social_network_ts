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
    UsersStatePropsType
} from "./usersReducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
});

export const store = createStore(rootReducer);

export type StateType = {
    profilePage: ProfilePageStateType
    dialogsPage: DialogsPageStateType
    friendsPage: FriendsPageType
    usersPage: UsersStatePropsType
};

export type ActionsType = ProfileActionsType | DialogsActionsType | UsersPageActionsType;

