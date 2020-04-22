import reducerProfilePage, { addNewPostAC } from "./profilePage-reducer";


let state = {
    postsData: [
        { id: 1, message: 'hi everyone!', likeCounts: 12 },
        { id: 2, message: 'its my firsr react project', likeCounts: 10 }
    ]
}

let action = addNewPostAC('hello')


it('postsData length should be incremented', () => {
    let newState = reducerProfilePage(state, action)
    expect(newState.postsData.length).toBe(3)
});