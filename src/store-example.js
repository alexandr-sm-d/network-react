let store = {
    _subscriber() {
        console.log('no subscribers (observers)')
    },
    _state: {
        firstName: 'it-incubator.by',
        lastName: 'it-kamasutra.com'
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    setFirstName(value) {
        // send ajax to server
        this._state.firstName = value;
        this._subscriber();
    }
}
// store._state


let state = store.getState();
store.setFirstName('samuraiJS.com');
state = store.getState();

let subscriber = () => {
    let state = store.getState();
    renderPage(state);
};

store.subscribe(subscriber);

store.setFirstName('youtube.com');