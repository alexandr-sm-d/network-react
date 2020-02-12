import { rerenderApp } from "./../render.js";

const state = {

    profilePage: {
        postsData: [
            { id: 1, message: 'hi everyone!', likeCounts: 12 },
            { id: 2, message: 'its my firsr react project', likeCounts: 10 }
        ],

        newPost: function (postMessage) {
            let saveThis = this;

            function detectorID() {
                let num = saveThis.postsData.length - 1;
                return saveThis.postsData[num].id + 1;
            };

            function randomCountLikes() {
                return Math.round(100*Math.random())
            }

            this.postsData.push(
                {
                    id: detectorID(),
                    message: postMessage,
                    likeCounts: randomCountLikes()
                }
            );
            rerenderApp(state);
            console.log(saveThis.postsData);
        },

        newPostText:'fuck',
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