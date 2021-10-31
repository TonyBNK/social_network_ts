import React from "react";
import c from "./ProfileDescription.module.scss";
import {Contact} from "../ProfileInfo";
import {UserProfileType} from "../../../../types/types";


type ProfileDescriptionPropsType = {
    profile: UserProfileType
}
export const ProfileDescription: React.FC<ProfileDescriptionPropsType> = (
    {
        profile
    }
) => {
    return (
        <div className={c.description}>
            <div className={c.fullName}>
                {profile.fullName}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div className={c.jobSearch}>
                <b>Looking for a
                    job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>Looking for a job
                    description</b>: {profile.lookingForAJobDescription}
            </div>
            <div className={c.contacts}>
                <b>Contacts</b>: {
                Object.entries({...profile.contacts}).map(entry => entry[1] && <Contact
                        key={entry[0]}
                        contactTitle={entry[0]}
                        contactValue={entry[1]}
                    />
                )
            }
            </div>
        </div>
    )
}
