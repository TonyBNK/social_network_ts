import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
export type ProfileInfoType = {
    profile: ProfileType | null
    status: string,
    updateStatus: (newStatus: string) => void
};
export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
        profile,
        status,
        updateStatus
    }
) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={c.info}>
            <div className={c.avatar}>
                <img src={profile.photos.large} alt="ava"/>
            </div>
            <ProfileStatus
                status={status}
                updateStatus={updateStatus}
            />
            <div className={c.description}>
                <span className={c.fullName}>{profile.fullName}</span>
            </div>
        </div>
    );
};