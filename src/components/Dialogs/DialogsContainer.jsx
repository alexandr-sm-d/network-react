import { sendNewMessage, updateMessageText } from '../../redux/redusers/reduser-dialogsPage.js'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendNewMessage: () => dispatch(sendNewMessage()),
        updateMessageBody: (text) => dispatch(updateMessageText(text)),
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
