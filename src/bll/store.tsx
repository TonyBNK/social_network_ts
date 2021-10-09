import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {
    ProfileActionsType
} from "./reducers/profileReducer";
import dialogsReducer, {
    DialogsActionsType
} from "./reducers/dialogsReducer";
import friendsReducer from "./reducers/friendsReducer";
import usersReducer, {
    UsersPageActionsType
} from "./reducers/usersReducer";
import {AuthActionsType, authReducer} from "./reducers/authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer, InitializeActionsType} from "./reducers/appReducer";

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
    ProfileActionsType
    | DialogsActionsType
    | UsersPageActionsType
    | AuthActionsType
    | InitializeActionsType;

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootStateType, unknown, RootActionsType>;

