import React from "react";
import c from './ProfileInfo.module.css';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatusWithHooks";
import {Nullable, UserProfileType} from "../../../types/types";



export type ProfileInfoType = {
    profile: Nullable<UserProfileType>
    status: Nullable<string>,
    updateMyStatus: (newStatus: Nullable<string>) => void
};
export const ProfileInfo: React.FC<ProfileInfoType> = React.memo((
    {
        profile,
        status,
        updateMyStatus
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
                updateMyStatus={updateMyStatus}
            />
            <div className={c.description}>
                <span className={c.fullName}>{profile.fullName}</span>
            </div>
        </div>
    );
});