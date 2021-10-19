import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../bll/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React, {ComponentType} from "react";
import {
    DialogsOwnType,
    DialogsPageDispatchType,
    DialogsPageStateType
} from "../../types/types";
import {addNewMessage} from "../../bll/actions/actions";


const mapStateToProps = (state: RootStateType): DialogsPageStateType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
});

export const DialogsContainer = compose<ComponentType>(
    withAuthRedirect,
    connect<DialogsPageStateType, DialogsPageDispatchType, DialogsOwnType, RootStateType>(mapStateToProps, {addNewMessage}),
    React.memo
)(Dialogs);