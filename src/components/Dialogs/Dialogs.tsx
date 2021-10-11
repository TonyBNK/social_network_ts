import React from "react";
import c from './Dialogs.module.css';
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../LoginPage";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/FormsControls";
import {DialogsPropsType} from "../../bll/reducers/dialogsReducer";


const maxLength50 = maxLengthCreator(50);

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
                component={Textarea}
                name={'newMessageText'}
                placeholder={'Type new message...'}
                validate={[required, maxLength50]}
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