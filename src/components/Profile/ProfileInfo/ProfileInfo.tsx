import React, {ChangeEvent} from "react";
import c from './ProfileInfo.module.scss';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatusWithHooks";
import {Nullable, UserProfileType} from "../../../types/types";
import catUser from "../../../images/catUser.png";


export type ProfileInfoType = {
    profile: Nullable<UserProfileType>
    status: Nullable<string>,
    updateMyStatus: (newStatus: Nullable<string>) => void
    updateMyPhoto: (file: File) => void
    isOwner: boolean
};
export const ProfileInfo: React.FC<ProfileInfoType> = React.memo((
    {
        profile,
        status,
        updateMyStatus,
        updateMyPhoto,
        isOwner
    }
) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && e.target.files.length && updateMyPhoto(e.target.files[0]);
    }

    return (
        <div className={c.info}>
            <div className={c.avatar}>
                <img src={(profile.photos && profile.photos.large) || catUser} alt="ava"/>
                {
                    isOwner && <input type="file" onChange={onMainPhotoChange}/>
                }
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