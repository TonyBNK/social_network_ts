import React from "react";

type MessageType = {
    message: string
};
export const Message: React.FC<MessageType> = (props) =>{
    return(
        <div>{props.message}</div>
    );
};