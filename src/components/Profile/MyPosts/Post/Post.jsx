import React from 'react';
import style from './Post.module.css'
import {DeleteOutlined, LoadingOutlined} from "@ant-design/icons";
import {HeartOutlined} from "@ant-design/icons";


const Post = (props) => {
    const delPost = () => {
        props.deletePost(props.postID)
    }

    return (
        <div className={style.item}>
            {(props.profile)
                ?<img src={props.profile.photos.small || "https://avatars.mds.yandex.net/get-pdb/1706591/9d637326-f188-44f3-8117-76c62487dcd6/s1200"}/>
                :<LoadingOutlined style={{marginRight: '10px',}}/>
            }

            {props.message}
            <div className={style.actionForPost}>
                <span>
                    <HeartOutlined />
                </span> {props.likeCounts}
                <button onClick={delPost} className={style.deletePostBtn}>
                    <DeleteOutlined/>
                </button>
            </div>
        </div>
    )
}

export default Post;