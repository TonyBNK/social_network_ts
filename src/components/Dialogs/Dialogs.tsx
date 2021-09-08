import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css';
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";

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
    const dialogsList = dialogs.map(d =>
        <Dialog
            id={d.id}
            name={d.name}
            ava={d.ava}
        />
    );
    const messagesList = messages.map(m =>
        <Message
            id={m.id}
            message={m.message}
        />
    );

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMessage(e.currentTarget.value);
    }

    const onClickHandler = () => addNewMessage();

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsList}
            </div>
            <div className={c.messages}>
                {messagesList}
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