import {UsersStateType, UserType} from "../../types/types";
import {usersReducer} from "./usersReducer";
import {
    changeCurrentPage,
    follow, setFetching, setFollowingProcess, setUsersTotalCount,
    showUsers,
    unfollow
} from "../actions/actions";


let initialState: UsersStateType;
let users: Array<UserType>;

beforeEach(() => {
    initialState = {
        users: [
            {
                followed: false,
                id: 20296,
                name: "RuslanMirets",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            }, {
                followed: true,
                id: 20295,
                name: "RitaMargarita",
                photos: {small: null, large: null},
                status: null,
                uniqueUrlName: null
            }
        ],
        currentPage: 1,
        pageSize: 10,
        usersTotalCount: 0,
        isFetching: false,
        followingInProgress: []
    };
    users = [
        {
            followed: false,
            id: 20294,
            name: "Kenny22RUS",
            photos: {small: null, large: null},
            status: null,
            uniqueUrlName: null
        },
        {
            followed: false,
            id: 20291,
            name: "Danila12",
            photos: {small: null, large: null},
            status: null,
            uniqueUrlName: null
        },
        {
            followed: false,
            id: 20289,
            name: "Seymur747",
            photos: {small: null, large: null},
            status: null,
            uniqueUrlName: null
        }
    ]
});

test('user should become followed', () => {
    let newState = usersReducer(initialState, follow(20296));

    expect(newState.users[0].followed).toBeTruthy();
});

test('user should become unfollowed', () => {
    let newState = usersReducer(initialState, unfollow(20295));

    expect(newState.users[1].followed).not.toBeTruthy();
});

test('users should be set', () => {
    let newState = usersReducer(initialState, showUsers(users));

    expect(newState.users.length).toBe(3);
});

test('current page should be changed', () => {
    let newState = usersReducer(initialState, changeCurrentPage(2, 15));

    expect(newState.currentPage).toBe(2);
    expect(newState.pageSize).toBe(15);
});

test('users total count should be changed', () => {
    let newState = usersReducer(initialState, setUsersTotalCount(200));

    expect(newState.usersTotalCount).toBe(200);
});

test('fetching should be started', () => {
    let newState = usersReducer(initialState, setFetching(true));

    expect(newState.isFetching).toBeTruthy();
});

test('following progress should be set', () => {
    let newState = usersReducer(initialState, setFollowingProcess(true, 20295));

    expect(newState.followingInProgress.length).toBe(1);
});
