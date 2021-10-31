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
        isOwner,
        saveProfile,
        editMode,
        setEditMode
    }
) => {
    return (
        <div className={c.profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateMyStatus={updateMyStatus}
                         updateMyPhoto={updateMyPhoto}
                         isOwner={isOwner}
                         saveProfile={saveProfile}
                         editMode={editMode}
                         setEditMode={setEditMode}
            />
            <PostsContainer/>
        </div>
    );
};