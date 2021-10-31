import React from "react";
import {ProfileInfo, ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.css'
import {PostsContainer} from "./Posts/PostsContainer";

export const Profile: React.FC<ProfileInfoType> = (
    {
        profile,
        status,
        updateMyStatus,
        updateMyPhoto,
        isOwner
    }
) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateMyStatus={updateMyStatus}
                         updateMyPhoto={updateMyPhoto}
                         isOwner={isOwner}/>
            <PostsContainer/>
        </div>
    );
};