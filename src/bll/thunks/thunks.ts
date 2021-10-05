import {authAPI} from "../../api/api";
import {setAuthUserDataSuccess} from "../action-creators/actionCreators";
import {
    LogInType,
    SetAuthUserDataType,
    SetUserDataType
} from "../reducers/authReducer";
import {stopSubmit} from "redux-form";


export const setAuthUserData: SetAuthUserDataType = () => {
    return (dispatch) => {
        authAPI
            .getUsersAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setAuthUserDataSuccess(id, login, email, true));
                }
            })
    }
};
export const logIn: LogInType = (formData) => {
    return (dispatch) => {
        authAPI
            .logUserIn(formData)!
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData());
                } else {
                    const errorMessage = data.messages.length !== 0 ? data.messages[0] : 'Some error!';

                    dispatch(stopSubmit('login', {_error: errorMessage}));
                }
            })
    }
};
export const logOut = () => {
    return (dispatch: (action: SetUserDataType) => void) => {
        authAPI
            .logUserOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataSuccess(null, null, null, false));
                }
            })
    }
};