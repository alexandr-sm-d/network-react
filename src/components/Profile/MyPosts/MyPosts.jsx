import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {

    function addPost(formData) {
        props.addPost(formData.postForSubmit)
        console.log(formData)
    };

    let posts = props.postsData.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classesStyle.myPost}>
            <h2>My posts</h2>
            <MyPostsForm onSubmit={addPost}/>
            <div className={classesStyle.posts}>
                {posts}
            </div>
        </div>
    )
}

let MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="postForSubmit"
                    placeholder="Enter your post"
                    value={props.newPostText}
                    component="textarea"
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

MyPostsForm = reduxForm({form: 'profileAddPost'})(MyPostsForm)

export default MyPosts;