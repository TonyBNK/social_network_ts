import React from "react";
import {
    addNewMessageActionCreator,
    setNewMessageActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {Consumer} from "../../StoreContext";


export const DialogsContainer = () => {
    return (
        <Consumer>
            {
                store => {
                    const state = store.getState();

                    const onUpdateTextHandler = (text: string) => {
                        store.dispatch(setNewMessageActionCreator(text));
                    }

                    const onAddTextHandler = () => store.dispatch(addNewMessageActionCreator());

                    return <Dialogs
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText}
                        setNewMessage={onUpdateTextHandler}
                        addNewMessage={onAddTextHandler}
                    />
                }
            }
        </Consumer>
    );
};