import React from "react";
import c from "./ProfileDescription.module.scss";
import {Contact} from "../ProfileInfo";
import {Nullable, UserProfileType} from "../../../../types/types";
import {Tabs} from 'antd';


const {TabPane} = Tabs;

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
            <Tabs defaultActiveKey="aboutMe">
                <TabPane tab="About me" key="aboutMe">
                    <p>
                        {profile.aboutMe}
                    </p>
                </TabPane>
                <TabPane tab="Job description" key="lookingForAJob">
                    <p>
                        {
                            profile.lookingForAJob
                                ? `Looking for a job!`
                                : `Not looking for a job!`
                        }
                    </p>
                    <p>
                        {profile.lookingForAJobDescription}
                    </p>
                </TabPane>
                <TabPane tab="Contacts" key="contacts">
                    {
                        profile.contacts && Object.keys(profile.contacts).map(key => profile.contacts && profile.contacts[key as keyof typeof profile.contacts] &&
                            <Contact
                                key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key as keyof typeof profile.contacts]}
                            />
                        )
                    }
                </TabPane>
            </Tabs>
        </div>
    )
}
