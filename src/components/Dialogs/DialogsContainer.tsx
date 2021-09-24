import {
    addNewMessage,
    DialogsPageStateType, setNewMessage,
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state: RootStateType): DialogsPageStateType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
});

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {
    setNewMessage,
    addNewMessage
})(Dialogs));