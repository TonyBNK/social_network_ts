import React, {ChangeEvent, useEffect, useState} from "react";
import c from './ProfileStatus.module.css';
import {Nullable} from "../../../../types/types";

type ProfileStatusPropsType = {
    status: Nullable<string>,
    updateMyStatus: (newStatus: Nullable<string>) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = React.memo((
    {
        status,
        updateMyStatus
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [profileStatus, setProfileStatus] = useState<Nullable<string>>(status);

    useEffect(() => {
        setProfileStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateMyStatus(profileStatus);
    }

    const updateStatusLocally = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileStatus(e.currentTarget.value);
    }

    return (
        <div className={c.profileStatus}>
            {
                editMode
                    ? <div>
                        <input value={profileStatus || ''}
                               onBlur={deactivateEditMode}
                               autoFocus
                               onChange={updateStatusLocally}/>
                    </div>
                    : <div>
                        <span onDoubleClick={activateEditMode}>
                            {status}
                        </span>
                    </div>
            }
        </div>
    )
});

export default ProfileStatusWithHooks;