import React from "react";
import {ProfileInfo, ProfileInfoType} from "./ProfileInfo/ProfileInfo";
import c from './Profile.module.scss'
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
        <div className={c.profileContainer}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateMyStatus={updateMyStatus}
                updateMyPhoto={updateMyPhoto}
                saveProfile={saveProfile}
                editMode={editMode}
                setEditMode={setEditMode}
            />
            <PostsContainer/>
        </div>
    );
};