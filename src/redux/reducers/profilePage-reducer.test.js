import reducerProfilePage, { addNewPostAC, deletePost } from "./profilePage-reducer";


let state = {
    postsData: [
        { id: 1, message: 'hi everyone!', likeCounts: 12 },
        { id: 2, message: 'its my firsr react project', likeCounts: 10 }
    ]
}

let actionAdd = addNewPostAC('hello');
let actionDelete = deletePost()


test('postsData length should be incremented', () => {
    let newState = reducerProfilePage(state, actionAdd)
    expect(newState.postsData.length).toBe(3)
});

test(`context thrid meesage should be 'hello'`, () => {
    let newState = reducerProfilePage(state, actionAdd)
    expect(newState.postsData[2].message).toBe('hello') 
})

test(`deleting post`, () => {
    let newState = reducerProfilePage(state, actionDelete)
    expect(newState.postsData.length).toBe(1)
})