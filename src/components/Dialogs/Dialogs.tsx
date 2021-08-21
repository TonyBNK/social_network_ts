import React from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Cat"},
        {id: 2, name: "Doge"},
        {id: 3, name: "Parrot"},
        {id: 4, name: "Hamster"},
        {id: 5, name: "Turtle"},
    ];

    let messages = [
        {id: 1, message: 'So much wow!'},
        {id: 2, message: 'Bark'},
        {id: 3, message: "What's up?"},
    ];

    let dialogsElements = dialogs.map(d => <Dialog id={d.id} name={d.name}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    );
};