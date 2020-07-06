import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import {reduxForm, Field} from 'redux-form';
import {validatorEmptyPost, validatorMaxLength} from '../../../utlis/validators/validatorsProfile';
import {Textarea} from '../../../common/FormsControls/FormsControls';
import { SendOutlined } from '@ant-design/icons';

const maxLength50 = validatorMaxLength(50);
const MyPosts = (props) => {

    function addPost(formData) {
        props.addPost(formData.postForSubmit)
        console.log(formData)
    };

    let posts = props.postsData
        .map((p) =>
            <Post message={p.message}
                  postID={p.id}
                  likeCounts={p.likeCounts}
                  deletePost={props.deletePost}
                  profile={props.profile}
                  key={p.id}
            />)
        .reverse();

    return (
        <div className={style.myPost}>
            <h2>My posts</h2>
            <MyPostsForm onSubmit={addPost}/>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
}

let MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.newPost}>
                <Field
                    component={Textarea}
                    name="postForSubmit"
                    placeholder="Enter your post"
                    validate={[validatorEmptyPost, maxLength50]}
                />
                <div className={style.addPostButton}>
                    <button className={style.submitPost}>
                        <SendOutlined/>
                    </button>
                </div>
            </div>
        </form>
    )
}

MyPostsForm = reduxForm({form: 'profileAddPost'})(MyPostsForm)


export default MyPosts;