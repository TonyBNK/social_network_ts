import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css';
import {DialogType} from "./Dialog/Dialog";
import {MessageType} from "./Message/Message";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    setNewMessage: (text: string) => void
    addNewMessage: () => void
}
export const Dialogs: React.FC<DialogsPropsType> = (
    {
        dialogs,
        messages,
        newMessageText,
        setNewMessage,
        addNewMessage
    }
) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value);
    }

    const onClickHandler = () => addNewMessage();

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogs}
            </div>
            <div className={c.messages}>
                {messages}
                <div className={c.newMessage}>
                    <textarea
                        value={newMessageText}
                        onChange={onChangeHandler}
                    />
                    <button onClick={onClickHandler}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};