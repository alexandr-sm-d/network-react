import React from 'react';
import { addNewPost, updateNewPostText } from '../../../redux/redusers/reduser-profilePage.js'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    function addPostOnPage() {
        props.store.dispatch(addNewPost())
    };

    let updateNewPost = (text) => {
        props.store.dispatch(updateNewPostText(text))
    };


    return (
        <MyPosts addPost={addPostOnPage}
            updatePostContent={updateNewPost}
            newPostText={state.newPostText}
            postsData={state.postsData} />
    )
}

export default MyPostsContainer;