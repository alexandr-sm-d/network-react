import { addNewPostAC, updateNewPostTextAC, deletePost } from '../../../redux/reducers/profilePage-reducer.js'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { reset } from 'redux-form';

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postBody) => {
            dispatch(addNewPostAC(postBody))
            dispatch(reset('profileAddPost')) //check it!!!
        },
        deletePost: () => dispatch(deletePost())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;