import {v1} from "uuid";
import cat_with_glasses from "../../images/cat_with_glasses.jpg";
import cat_with_tongue from "../../images/cat_with_tongue.jpg";
import angry_cat from "../../images/angry_cat.webp";
import {ProfileActionType, ProfileStateType} from "../../types/types";


const initialState: ProfileStateType = {
    posts: [
        {
            id: v1(),
            ava: cat_with_tongue,
            name: 'Cat_with_tongue',
            post: "Кто насрал в мой лоток?",
            likesCount: 14
        },
        {
            id: v1(),
            ava: angry_cat,
            name: 'Angry_cat',
            post: "Кожанный мешок опять забыл покормить :(",
            likesCount: 23
        },
    ],
    profile: {},
    status: '',
    userId: null,
    editMode: false
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType):
    ProfileStateType => {
    switch (action.type) {
        case "social_network/profile/ADD_NEW_POST":
            return {
                ...state,
                posts: [
                    {
                        id: v1(),
                        ava: cat_with_glasses,
                        name: 'TonyBNK',
                        post: action.newPostText,
                        likesCount: 0
                    },
                    ...state.posts
                ]
            };
        case "social_network/profile/GET_USER":
            return {
                ...state,
                profile: action.profile
            }
        case "social_network/profile/SET_MY_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "social_network/profile/SET_MY_PHOTO":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        default:
            return state;
    }
}