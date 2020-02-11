import { rerenderApp } from "./../render.js";

const state = {

    profilePage: {
        postsData: [
            { id: 1, message: 'hi everyone!', likeCounts: 12 },
            { id: 2, message: 'its my firsr react project', likeCounts: 10 }
        ],

        newPost: function (postMessage) {
            this.postsData.push(
                {
                    id: 3,
                    message: postMessage,
                    likeCounts: 10
                }
            );
            rerenderApp(state);
        }
    },

    dialogsPage: {
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
    },

};

export default state;