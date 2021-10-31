import React, {ChangeEvent} from "react";
import c from './ProfileInfo.module.scss';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatusWithHooks";
import {Nullable, UserProfileType} from "../../../types/types";
import catUser from "../../../images/catUser.png";
import ProfileDescriptionForm
    from "./ProfileDescriptionForm/ProfileDescriptionForm";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";


export type ProfileInfoType = {
    profile: Nullable<UserProfileType>
    status: Nullable<string>,
    updateMyStatus: (newStatus: Nullable<string>) => void
    updateMyPhoto: (file: File) => void
    isOwner: boolean
    saveProfile: (formData: UserProfileType) => void
    editMode: boolean
    setEditMode: (isEdit: boolean) => void
};
export const ProfileInfo: React.FC<ProfileInfoType> = React.memo((
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
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files && e.target.files.length && updateMyPhoto(e.target.files[0]);
    }

    const onSubmitForm = (formData: UserProfileType) => {
        saveProfile(formData);
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
            {
                isOwner && <button onClick={() => setEditMode(true)}>
                    Edit
                </button>
            }
            {
                editMode
                    ? <ProfileDescriptionForm initialValues={profile} onSubmit={onSubmitForm}/>
                    : <ProfileDescription profile={profile}/>
            }
        </div>
    );
});


type ContactPropsType = {
    contactTitle: Nullable<string>
    contactValue: Nullable<string>
}
export const Contact: React.FC<ContactPropsType> = (
    {
        contactTitle,
        contactValue
    }
) => {
    return (
        <div className={c.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}
