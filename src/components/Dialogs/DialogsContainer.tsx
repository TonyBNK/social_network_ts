import {
    addNewMessage,
    DialogsPageStateType, setNewMessage,
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";


const mapStateToProps = (state: RootStateType): DialogsPageStateType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
});

export const DialogsContainer = compose<ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {setNewMessage, addNewMessage})
)(Dialogs);