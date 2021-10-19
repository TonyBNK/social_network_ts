import {setAuthUserDataSuccess} from "../actions/actions";
import {authReducer, UserAuthStateType} from "./authReducer";

let initialState: UserAuthStateType;

beforeEach(() => {
    initialState = {
        userId: null,
        login: null,
        email: null,
        isAuth: false
    }
});

test('state should be initialized with profile data', () => {
    let newState = authReducer(initialState, setAuthUserDataSuccess(
        1, 'tony', 'tony@mail.ru', true)
    );

    expect(newState.userId).toBe(1);
    expect(newState.login).toBe('tony');
    expect(newState.email).toBe('tony@mail.ru');
    expect(newState.isAuth).toBeTruthy();
});