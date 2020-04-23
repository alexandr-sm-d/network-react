import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { validatorEmptyPost, validatorMaxLength } from '../../../utlis/validators/validatorsProfile';
import { Textarea } from '../../../common/FormsControls/FormsControls';

const maxLength10 = validatorMaxLength(10);
const MyPosts = (props) => {
    // debugger
    function addPost(formData) {
        props.addPost(formData.postForSubmit)
        console.log(formData)
    };

    let posts = props.postsData.map((p) => <Post message={p.message} likeCounts={p.likeCounts} deletePost={props.deletePost}/>);

    return (
        <div className={classesStyle.myPost}>
            <h2>My posts</h2>
            <MyPostsForm onSubmit={addPost} />
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
                    component={Textarea}
                    name="postForSubmit"
                    placeholder="Enter your post"
                    validate={[validatorEmptyPost, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

MyPostsForm = reduxForm({ form: 'profileAddPost' })(MyPostsForm)

export default MyPosts;