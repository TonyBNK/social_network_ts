import {applyMiddleware, combineReducers, createStore} from "redux";
import {authReducer} from "./reducers/authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./reducers/appReducer";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {friendsReducer} from "./reducers/friendsReducer";
import {
    AuthActionType,
    DialogsActionType, InitializeActionType,
    ProfileActionType,
    UsersPageActionType
} from "../types/types";
import {usersReducer} from "./reducers/usersReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootStateType = ReturnType<typeof rootReducer>;

export type RootActionsType =
    ProfileActionType
    | DialogsActionType
    | UsersPageActionType
    | AuthActionType
    | InitializeActionType;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>;

