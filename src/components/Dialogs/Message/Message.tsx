import React from "react";


export type MessageType = {
    id: string
    message: string
};
export const Message: React.FC<MessageType> = React.memo((
    {
        id,
        message
    }
) =>{
    return(
        <div>
            {message}
        </div>
    );
});