import { addNewPostAC, updateNewPostTextAC } from '../../../redux/redusers/reduser-profilePage.js'
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
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;