import React from "react";
import c from './Message.module.css';

export type MessageType = {
    id: string
    message?: string
};
export const Message: React.FC<MessageType> = (props) =>{
    return(
        <div className={c.message}>
            {props.message}
        </div>
    );
};