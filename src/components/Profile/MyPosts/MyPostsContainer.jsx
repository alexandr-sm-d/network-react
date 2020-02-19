import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';
import { addNewPost, updateNewPostText } from '../../../redux/redusers/reduser-profilePage.js'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    // let posts = props.postsData.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);
    let state = props.store.getState().profilePage;

    function addPostOnPage() {
        props.store.dispatch(addNewPost())
    };

    let updateNewPost = (text) => {
        // let text = newPostElement.current.value;
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