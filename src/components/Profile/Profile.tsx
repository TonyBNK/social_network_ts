import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import azgard from './../../images/azgard.jpg';
import cat_wit_glasses from './../../images/cat_with_glasses.jpg';
import { Posts, PostsActionsType, PostsStateType} from "./Posts/Posts";


type ProfilePageType = {
    profilePageState: PostsStateType
    dispatch: (action: PostsActionsType) => void
};
export const Profile: React.FC<ProfilePageType> = (props) => {

    return (
        <div className={c.profile}>
            <ProfileInfo titleImage={azgard}
                         ava={cat_wit_glasses}/>
            <Posts postsState={props.profilePageState}
                   dispatch={props.dispatch}/>
        </div>
    );
};