import {appReducer, InitializeStateType} from "./appReducer";
import {setInitialized} from "../actions/actions";


let initialState: InitializeStateType;

beforeEach(() => {
    initialState = {
        isInitialize: false
    }
});

test('initialized value should be true', () => {
    let newState = appReducer(initialState, setInitialized());

    expect(newState.isInitialize).toBeTruthy();
});