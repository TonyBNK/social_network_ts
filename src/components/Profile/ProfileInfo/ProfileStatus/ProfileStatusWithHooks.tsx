import React, {ChangeEvent, useEffect, useState} from "react";
import c from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = React.memo((
    {
        status,
        updateStatus
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [profileStatus, setProfileStatus] = useState<string>(status);

    useEffect(() => {
        setProfileStatus(status);
    }, [status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(profileStatus);
    }

    const updateStatusLocally = (e: ChangeEvent<HTMLInputElement>) => {
        setProfileStatus(e.currentTarget.value);
    }

    return (
        <div className={c.profileStatus}>
            {
                editMode
                    ? <div>
                        <input value={profileStatus}
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