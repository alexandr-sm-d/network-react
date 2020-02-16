import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';
import {addNewPost, updateNewPostText} from './../../../redux/state.js'

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    function addPost() {
        props.dispatch(addNewPost())
    };

    let changeValueTextarea = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostText(text))
    }


    let posts = props.postsData.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classesStyle.myPost}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={changeValueTextarea}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classesStyle.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;