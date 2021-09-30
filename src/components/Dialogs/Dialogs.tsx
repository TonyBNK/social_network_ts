import React from "react";
import c from './Dialogs.module.css';
import {Dialog, DialogType} from "./Dialog/Dialog";
import {Message, MessageType} from "./Message/Message";
import {
    Field,
    InjectedFormProps,
    reduxForm
} from "redux-form";
import {FormDataType} from "../LoginPage";


type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    addNewMessage: (newMessageText: string) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (
    {
        dialogs,
        messages,
        addNewMessage,
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
    const submitAddNewMessage = (values: any) => {
        addNewMessage(values.newMessageText);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsList}
            </div>
            <div className={c.messages}>
                {messagesList}
                <NewPostReduxForm onSubmit={submitAddNewMessage}/>
            </div>
        </div>
    );
};

const NewMessageForm: React.FC<InjectedFormProps<FormDataType>> = (
    {
        handleSubmit
    }
) => {
    return (
        <form
            className={c.newMessage}
            onSubmit={handleSubmit}
        >
            <Field
                component={'textarea'}
                type={'text'}
                name={'newMessageText'}
            />
            <button>
                Send
            </button>
        </form>
    )
}

const NewPostReduxForm = reduxForm<FormDataType>({
    form: 'newMessage'
})(NewMessageForm);