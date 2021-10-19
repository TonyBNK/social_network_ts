import {v1} from "uuid";
import cat_with_tongue from "../../images/cat_with_tongue.jpg";
import angry_cat from "../../images/angry_cat.webp";
import profileReducer, {
    addNewPost,
    ProfileStateType,
    setUserProfileSuccess, setUserStatusSuccess,
} from "./profileReducer";


let initialState: ProfileStateType;

beforeEach(() => {
    initialState = {
        posts: [
            {
                id: v1(),
                ava: cat_with_tongue,
                post: "Кто насрал в мой лоток?",
                likesCount: 14
            },
            {
                id: v1(),
                ava: angry_cat,
                post: "Кожанный мешок опять забыл покормить }:(",
                likesCount: 23
            },
        ],
        profile: null,
        status: '',
        userId: null
    };
});

test('new post should be added', () => {
    let newState = profileReducer(initialState, addNewPost('Hello there!'));

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].post).toBe('Hello there!');
});

test('should got users profile', () => {
    let profile = {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        fullName: "onlyone015",
        lookingForAJob: false,
        lookingForAJobDescription: null,
        photos: {small: null, large: null},
        userId: 20115
    }

    let newState = profileReducer(initialState, setUserProfileSuccess(profile));
    expect(newState.profile!.userId).toBe(20115);
});

test('new status should be set', () => {
    let newState = profileReducer(initialState, setUserStatusSuccess('General Kenobi!'));

    expect(newState.status).toBe('General Kenobi!');
});