import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    console.log(props);
    let newPostElement = React.createRef();

    function addPost() {
        props.newPost(newPostElement.current.value);
        newPostElement.current.value = '';
    };

    let posts = props.postsData.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classesStyle.myPost}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}>                        
                    </textarea>
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