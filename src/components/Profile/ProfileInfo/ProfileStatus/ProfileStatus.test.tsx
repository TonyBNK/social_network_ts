import ProfileStatus from "./ProfileStatus";
import TestRenderer from "react-test-renderer";


let component: any;
let instance: any;
let root: any;
const mockCallback = jest.fn();

beforeEach(() => {
    component = TestRenderer.create(
        <ProfileStatus
            status={'Hello there'}
            updateMyStatus={mockCallback}
        />
    );
    instance = component.getInstance();
    root = component.root;
});

test('Profile status start value should be correct', () => {
    expect(instance.state.status).toBe('Hello there');
    expect(instance.state.isEdit).toBeFalsy();
});

test('After profile status creation <span> should be displayed', () => {
    const span = root.findByType('span');
    expect(span).not.toBeNull();
});

test('After profile status creation <span> should contain correct status', () => {
    const span = root.findByType('span');
    expect(span.children).toEqual(["Hello there"]);
});

test('After profile status creation <input> should not be displayed', () => {
    expect(() => {
        root.findByType('input');
    }).toThrow();
});

test('status should be changeable after double clicking', () => {
    const span = root.findByType('span');
    span.props.onDoubleClick();
    const input = root.findByType('input');
    expect(instance.state.isEdit).toBeTruthy();
    expect(input.props.value).toBe('Hello there');
});

test('callback should be called', () => {
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
});
