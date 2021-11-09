import React from "react";
import c from './Friend.module.scss';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';


export type FriendType = {
    id: string
    name: string
    ava: string
}
export const Friend: React.FC<FriendType> = React.memo((
    {
        id,
        ava,
        name
    }
) => {
    return(
        <div className={c.friendContainer}>
            <Avatar size={60} src={ava} icon={<UserOutlined/>}/>
            <div>{name}</div>
        </div>
    );
});