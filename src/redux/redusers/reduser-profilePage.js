export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_TEXT_POST';

let initialState = {
    postsData: [
        { id: 1, message: 'hi everyone!', likeCounts: 12 },
        { id: 2, message: 'its my firsr react project', likeCounts: 10 }
    ],
    newPostText: '',
}

const reduserProfilePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {

            if (state.newPostText == '') {
                return state;
            }

            function detectorID() {
                let num = state.postsData.length - 1;
                return state.postsData[num].id + 1;
            };

            function randomCountLikes() {
                return Math.round(100 * Math.random())
            }

            state.postsData.push(
                {
                    id: detectorID(),
                    message: state.newPostText,
                    likeCounts: randomCountLikes(),
                }
            );

            state.newPostText = '';
            return state;
        }

        case UPDATE_NEW_TEXT_POST: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state
    }
}

export const addNewPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_TEXT_POST, newText: text });

export default reduserProfilePage;