import React from "react";
import {
    addNewMessageActionCreator,
    DialogsActionsType,
    DialogsDispatchPropsType,
    DialogsPageStateType,
    setNewMessageActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";


const mapStateToProps = (state: RootStateType): DialogsPageStateType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
});

const mapDispatchToProps = (dispatch: (action: DialogsActionsType) => void): DialogsDispatchPropsType => ({
    setNewMessage: (text: string) => {
        dispatch(setNewMessageActionCreator(text));
    },
    addNewMessage: () => {
        dispatch(addNewMessageActionCreator());
    }
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);