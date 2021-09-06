import React from "react";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {
    addNewMessageActionCreator,
    setNewMessageActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {Consumer} from "../../StoreContext";

export const DialogsContainer: React.FC<StoreType> = () => {
    return (
        <Consumer>
            {
                store => {
                    const state = store.getState();

                    const newMessageText = state.dialogsPage.newMessageText;

                    const dialogs = state.dialogsPage.dialogs.map(d =>
                        <Dialog
                            id={d.id}
                            name={d.name}
                            ava={d.ava}
                        />
                    );
                    const messages = state.dialogsPage.messages.map(m =>
                        <Message
                            id={m.id}
                            message={m.message}
                        />
                    );

                    const onUpdateTextHandler = (text: string) => {
                        store.dispatch(setNewMessageActionCreator(text));
                    }

                    const onAddTextHandler = () => store.dispatch(addNewMessageActionCreator());

                    return <Dialogs
                        dialogs={dialogs}
                        messages={messages}
                        newMessageText={newMessageText}
                        setNewMessage={onUpdateTextHandler}
                        addNewMessage={onAddTextHandler}
                    />
                }
            }
        </Consumer>
    );
};