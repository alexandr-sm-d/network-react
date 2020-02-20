import React from 'react';
import { addNewPost, updateNewPostText } from '../../../redux/redusers/reduser-profilePage.js'
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext.js';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;

                    function addPostOnPage() {
                        store.dispatch(addNewPost())
                    };

                    let updateNewPost = (text) => {
                        store.dispatch(updateNewPostText(text))
                    };

                    return (
                        <MyPosts addPost={addPostOnPage}
                            updatePostContent={updateNewPost}
                            newPostText={state.newPostText}
                            postsData={state.postsData} />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;