import React, {ChangeEvent, useEffect, useState} from "react";
import c from './ProfileStatus.module.scss';


type ProfileStatusPropsType = {
    status?: string
    updateMyStatus: (newStatus?: string) => void
}

const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = React.memo((
    {
        status,
        updateMyStatus
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [profileStatus, setProfileStatus] = useState<string | undefined>(status);

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
        <div className={c.statusContainer}>
            {
                editMode
                    ? <input
                        value={profileStatus}
                        onBlur={deactivateEditMode}
                        autoFocus
                        onChange={updateStatusLocally}/>
                    : <span onClick={activateEditMode}>
                            {status}
                    </span>
            }
        </div>
    )
});

export default ProfileStatusWithHooks;