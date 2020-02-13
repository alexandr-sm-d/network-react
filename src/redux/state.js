//rerenderApp ниже - заглушка, чтобы потом переопределить

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'hi everyone!', likeCounts: 12 },
                { id: 2, message: 'its my firsr react project', likeCounts: 10 }
            ],
    
            newPostText: '',    
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
    },

    getState() {
        return this._state;
    },

    // newPost: function () {
    //     let saveThis = this;

    //     function detectorID() {
    //         let num = saveThis.postsData.length - 1;
    //         return saveThis.postsData[num].id + 1;
    //     };

    //     function randomCountLikes() {
    //         return Math.round(100 * Math.random())
    //     }

    //     this.postsData.push(
    //         {
    //             id: detectorID(),
    //             message: state.profilePage.newPostText,
    //             likeCounts: randomCountLikes()
    //         }
    //     );

    //     state.profilePage.newPostText = ''
    //     rerenderApp(state);
    // },

    updateTextPost (newText) {
        // debugger;
        this._state.profilePage.newPostText = newText;
        this.rerenderApp(store);
    },

    rerenderApp () {
        console.log('hi-hi!');
    },

    subscribe (observer) {
        this.rerenderApp = observer;
    }
}

export default store;
window.store = store;





