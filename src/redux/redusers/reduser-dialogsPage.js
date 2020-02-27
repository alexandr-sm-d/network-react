const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE';

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
            let stateClone = {...state};
            stateClone.messagesData = [...state.messagesData];

            if (stateClone.newMessageText == '') {
                return stateClone;
            }

            function detectorID() {
                let num = stateClone.messagesData.length - 1;
                return stateClone.messagesData[num].id + 1;
            };

            stateClone.messagesData.push(
                {
                    id: detectorID(),
                    message: stateClone.newMessageText,
                }
            );

            stateClone.newMessageText = ''
            return stateClone;
        }

        case UPDATE_NEW_TEXT_MESSAGE: {
            let stateClone = {...state};
            stateClone.newMessageText = action.newText;
            return stateClone;
        }

        default:
            return state;
    }
}

export const sendNewMessage = () => ({ type: SEND_MESSAGE });
export const updateMessageText = (text) =>
    ({ type: UPDATE_NEW_TEXT_MESSAGE, newText: text })

export default reduserDialogsPage;