import React from "react";
import c from './Message.module.css';

export type MessageType = {
    message: string
};
export const Message: React.FC<MessageType> = (props) =>{
    return(
        <div className={c.message}>
            {props.message}
        </div>
    );
};