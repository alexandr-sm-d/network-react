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
            let stateClone = {...state};
            stateClone.postsData = [...state.postsData];

            if (stateClone.newPostText == '') {
                return stateClone;
            }

            function detectorID() {
                let num = stateClone.postsData.length - 1;
                return stateClone.postsData[num].id + 1;
            };

            function randomCountLikes() {
                return Math.round(100 * Math.random())
            }

            stateClone.postsData.push(
                {
                    id: detectorID(),
                    message: stateClone.newPostText,
                    likeCounts: randomCountLikes(),
                }
            );

            stateClone.newPostText = '';
            return stateClone;
        }

        case UPDATE_NEW_TEXT_POST: {
            let stateClone = {...state};
            stateClone.newPostText = action.newText;
            return stateClone;
        }

        default:
            return state;
    }
}

export const addNewPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) =>
    ({ type: UPDATE_NEW_TEXT_POST, newText: text });

export default reduserProfilePage;