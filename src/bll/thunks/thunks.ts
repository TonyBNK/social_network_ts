import {authAPI} from "../../api/api";
import {
    initialiazedSuccess,
    setAuthUserDataSuccess
} from "../actions/actions";
import {stopSubmit} from "redux-form";
import {AppThunkType} from "../store";
import {FormDataType} from "../../components/LoginPage";


export const setAuthUserData = (): AppThunkType<Promise<string | void>> => {
    return (dispatch) => {
        return authAPI
            .me()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data;
                    dispatch(setAuthUserDataSuccess(id, login, email, true));
                }
            })
    }
};
export const logIn = (formData: FormDataType): AppThunkType => {
    return (dispatch) => {
        authAPI
            .logIn(formData)!
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
export const logOut = (): AppThunkType => {
    return (dispatch) => {
        authAPI
            .logOut()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataSuccess(null, null, null, false));
                }
            })
    }
};
export const initializeApp = (): AppThunkType => {
    return (dispatch) => {
        dispatch(setAuthUserData())
            .then(() => {
                dispatch(initialiazedSuccess());
            })
    }
};