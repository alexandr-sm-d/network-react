import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    
    let postsData = [
        {id:1, message:'hi everyone!', likeCounts: 12},
        {id:1, message:'its my firsr react project', likeCounts: 10}
    ]

    let posts = postsData.map((p) => <Post message={p.message} likeCounts={p.likeCounts} />);

    return (
        <div className={classesStyle.myPost}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classesStyle.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;