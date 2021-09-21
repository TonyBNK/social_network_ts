import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css';
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";
import {Redirect} from "react-router-dom";

type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
    setNewMessage: (text: string) => void
    addNewMessage: () => void
    isAuth: boolean
}
export const Dialogs: React.FC<DialogsPropsType> = (
    {
        dialogs,
        messages,
        newMessageText,
        setNewMessage,
        addNewMessage,
        isAuth
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

    if (!isAuth) return <Redirect to={'login'}/>

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