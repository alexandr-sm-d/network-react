import { sendNewMessage, updateMessageText } from '../../redux/redusers/reduser-dialogsPage.js'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => dispatch(sendNewMessage()),
        updateMessageBody: (text) => dispatch(updateMessageText(text)),
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;