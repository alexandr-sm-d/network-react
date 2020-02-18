export const SEND_MESSAGE = 'SEND_MESSAGE';
export const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE';

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Vlad' },
        { id: 3, name: 'Mike' },
        { id: 4, name: 'Andrey' },
    ],
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'How old are you' },
    ],
    newMessageText: '',
}

const reduserDialogsPage = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {

            if (state.newMessageText == '') {
                return state;
            }

            function detectorID() {
                let num = state.messagesData.length - 1;
                return state.messagesData[num].id + 1;
            };

            state.messagesData.push(
                {
                    id: detectorID(),
                    message: state.newMessageText,
                }
            );

            state.newMessageText = ''
            return state;
        }

        case UPDATE_NEW_TEXT_MESSAGE: {
            state.newMessageText = action.newText;
            return state;
        }

        default:
            return state;
    }
}

export const sendNewMessage = () => ({ type: SEND_MESSAGE });
export const updateMessageText = (text) =>
    ({ type: UPDATE_NEW_TEXT_MESSAGE, newText: text })

export default reduserDialogsPage;