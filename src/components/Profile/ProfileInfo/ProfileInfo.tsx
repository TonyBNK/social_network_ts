import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../Preloader/Preloader";


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
    titleImage: string
    profile: ProfileType | null
};
export const ProfileInfo: React.FC<ProfileInfoType> = (
    {
        profile,
        titleImage
    }
) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={c.info}>
            <div className={c.titleImage}>
                <img src={titleImage} alt="azgard"/>
            </div>
            <div className={c.avatar}>
                <img src={profile.photos.large} alt="ava"/>
            </div>
            <div className={c.description}>
                <span className={c.fullName}>{profile.fullName}</span>
            </div>
        </div>
    );
};