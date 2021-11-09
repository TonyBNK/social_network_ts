import {appReducer} from "./appReducer";
import {setInitialized} from "../actions/actions";
import {InitializeStateType} from "../../types/types";


let initialState: InitializeStateType;

beforeEach(() => {
    initialState = {
        isInitialize: false,
        isAuth: false,
        editMode: false
    }
});

test('initialized value should be true', () => {
    let newState = appReducer(initialState, setInitialized());

    expect(newState.isInitialize).toBeTruthy();
});