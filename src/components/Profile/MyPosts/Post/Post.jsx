import React from 'react';
import classesStyle from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classesStyle.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1706591/9d637326-f188-44f3-8117-76c62487dcd6/s1200" />
            {props.message}
            <div>
                <span>like</span> {props.likeCounts}
            </div>
        </div>
    )
}

export default Post;