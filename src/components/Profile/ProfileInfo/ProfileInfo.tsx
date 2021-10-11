import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {UserProfileType} from "../../../bll/reducers/profileReducer";



export type ProfileInfoType = {
    profile: UserProfileType | null
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

    const avatar = profile.photos.large || undefined;

    return (
        <div className={c.info}>
            <div className={c.avatar}>
                <img src={avatar} alt="ava"/>
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