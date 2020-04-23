import { addNewPostAC, updateNewPostTextAC, deletePost } from '../../../redux/reducers/profilePage-reducer.js'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postBody) => dispatch(addNewPostAC(postBody)),
        deletePost: () => dispatch(deletePost())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;