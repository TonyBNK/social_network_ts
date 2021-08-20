import React from "react";
import {NavLink} from "react-router-dom";
import c from './Dialogs.module.css';

type DialogPropsType = {
    id: number
    name: string
};

const Dialog: React.FC<DialogPropsType> = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={c.dialog}>
            <NavLink to={path} activeClassName={c.active}>{props.name}</NavLink>
        </div>
    );
};

type MessageType = {
    message: string
};
const Message: React.FC<MessageType> = (props) =>{
    return(
        <div>{props.message}</div>
    );
};

export const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <Dialog id={1} name="Cat"/>
                <Dialog id={2} name="Doge"/>
                <Dialog id={3} name="Parrot"/>
                <Dialog id={4} name="Hamster"/>
                <Dialog id={5} name="Turtle"/>
            </div>
            <div className={c.messages}>
                <Message message='So much wow!'/>
                <Message message='Bark'/>
                <Message message="What's up?"/>
            </div>
        </div>
    );
};