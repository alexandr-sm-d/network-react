import React from 'react';
import classesStyle from './Post.module.css'
import {DeleteOutlined} from "@ant-design/icons";


const Post = (props) => {
    const delPost = () => {
        props.deletePost(props.postID)
    }

    return (
        <div className={classesStyle.item}>
            <img src="https://avatars.mds.yandex.net/get-pdb/1706591/9d637326-f188-44f3-8117-76c62487dcd6/s1200"/>
            {props.message}
            <div>
                <span>like</span> {props.likeCounts}
                <button onClick={delPost} className={classesStyle.deletePostBtn}>
                    <DeleteOutlined/>
                </button>
            </div>
        </div>
    )
}

export default Post;