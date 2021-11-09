import React from "react";
import c from './Dialog.module.scss';
import {Avatar} from 'antd';
import {UserOutlined} from "@ant-design/icons";


export type DialogType = {
    id: string
    name: string
    ava: string
};
export const Dialog: React.FC<DialogType> = React.memo((
    {
        id,
        ava,
        name
    }
) => {
    return (
        <div className={c.dialogContainer}>
            <Avatar size={60} src={ava} icon={<UserOutlined/>}/>
            <div className={c.nameContainer}>
                {name}
            </div>
        </div>
    );
});