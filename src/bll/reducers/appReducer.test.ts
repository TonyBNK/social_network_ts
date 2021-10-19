import {appReducer, InitializeStateType} from "./appReducer";
import {initialiazedSuccess} from "../actions/actions";


let initialState: InitializeStateType;

beforeEach(() => {
    initialState = {
        isInitialize: false
    }
});

test('initialized value should be true', () => {
    let newState = appReducer(initialState, initialiazedSuccess());

    expect(newState.isInitialize).toBeTruthy();
});