import {
    addNewMessage,
    DialogsPageStateType, setNewMessage,
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";


const mapStateToProps = (state: RootStateType): DialogsPageStateType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
});

export const DialogsContainer = connect(mapStateToProps, {
    setNewMessage,
    addNewMessage
})(Dialogs);