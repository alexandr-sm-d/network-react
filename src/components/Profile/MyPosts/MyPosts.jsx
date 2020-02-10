import React from 'react';
import classesStyle from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    
    let postsData = [
        {id:1, message:'hi everyone!', likeCounts: 12},
        {id:1, message:'its my firsr react project', likeCounts: 10}
    ]

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
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts} />
                <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts} />
            </div>
        </div>
    )
}

export default MyPosts;