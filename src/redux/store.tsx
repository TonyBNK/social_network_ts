import {applyMiddleware, combineReducers, createStore} from "redux";
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
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStateType = ReturnType<typeof rootReducer>;

export type ActionsType =
    ProfileActionsType
    | DialogsActionsType
    | UsersPageActionsType;

