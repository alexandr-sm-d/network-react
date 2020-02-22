import { addNewPost, updateNewPostText } from '../../../redux/redusers/reduser-profilePage.js'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addNewPost()),
        updatePostContent: (text) => dispatch(updateNewPostText(text)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;