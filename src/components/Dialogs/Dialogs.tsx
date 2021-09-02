import React, {ChangeEvent} from "react";
import c from './Dialogs.module.css';
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";

type DialogsPageStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessage: string
};
type DialogsPageType = {
    dialogsPageState: DialogsPageStateType
    setNewMessage: (text: string) => void
    addNewMessage: (text: string) => void
}
export const Dialogs: React.FC<DialogsPageType> = (props) => {

    let dialogsElements = props.dialogsPageState.dialogs.map(d => <Dialog id={d.id} name={d.name} ava={d.ava}/>);
    let messagesElements = props.dialogsPageState.messages.map(m => <Message id={m.id} message={m.message}/>);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.setNewMessage(e.currentTarget.value);
    }

    const onClickHandler = () => {
        props.addNewMessage(props.dialogsPageState.newMessage);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
                <div className={c.newMessage}>
                    <textarea value={props.dialogsPageState.newMessage}
                              onChange={onChangeHandler}/>
                    <button onClick={onClickHandler}>Send</button>
                </div>
            </div>
        </div>
    );
};