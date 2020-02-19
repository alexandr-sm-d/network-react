import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    function addPost() {
        // props.dispatch(addNewPost())
        props.addPost()
    };

    let changeValueTextarea = () => {
        let text = newPostElement.current.value;
        // props.dispatch(updateNewPostText(text))
        props.updatePostContent(text)
    };

    let posts = props.postsData.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classesStyle.myPost}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        placeholder="Enter your post"
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