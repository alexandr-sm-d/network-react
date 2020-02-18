import reduserDialogsPage from "./redusers/reduser-dialogsPage";
import reduserProfilePage from "./redusers/reduser-profilePage";

//rerenderApp ниже - заглушка, чтобы потом переопределить.

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
            newMessageText: '',
        },
    },

    getState() {
        return this._state;
    },

    rerenderApp() {
        console.log('hi-hi!');
    },

    subscribe(observer) {
        this.rerenderApp = observer;
    },

    dispatch(action) {
        this.getState().profilePage = reduserProfilePage(this.getState().profilePage, action);
        this.getState().dialogsPage = reduserDialogsPage(this.getState().dialogsPage, action);
        this.rerenderApp(store); //redux store как аргумент сам не передает!!! нужно вручную (*)
    }
}

export default store;
window.store = store;