import React, {ChangeEvent} from "react";
import c from './ProfileInfo.module.scss';
import {Preloader} from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatusWithHooks";
import {Nullable, UserProfileType} from "../../../types/types";
import avatar from "../../../images/catUser.png";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";
import {Avatar, Button} from 'antd';
import {EditOutlined} from "@ant-design/icons";
import {ProfileDescriptionForm} from "./ProfileDescriptionForm/ProfileDescriptionForm";


export type ProfileInfoType = {
    profile: Nullable<UserProfileType>
    status?: string
    updateMyStatus: (newStatus?: string) => void
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
        <div className={c.infoContainer}>
            <div className={c.avatarContainer}>
                <Avatar size={150} src={profile.photos?.large || avatar}/>
                {
                    isOwner &&
                    <>
                        <div className={c.overlay}></div>
                        <input type="file" onChange={onMainPhotoChange}/>
                    </>
                }
            </div>
            <ProfileStatus
                status={status}
                updateMyStatus={updateMyStatus}
            />
            <div className={c.descriptionContainer}>
                {
                    (isOwner && !editMode) &&
                    <div className={c.ownerContainer}>
                        <Button onClick={() => setEditMode(true)}
                                shape='circle'
                                icon={<EditOutlined/>}/>
                    </div>
                }
                {
                    editMode
                        ? <ProfileDescriptionForm initialValues={profile}
                                                  onSubmit={onSubmitForm}
                                                  cancelEditMode={() => setEditMode(false)}/>
                        : <ProfileDescription profile={profile}/>
                }
            </div>
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
        <p className={c.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </p>
    )
}
