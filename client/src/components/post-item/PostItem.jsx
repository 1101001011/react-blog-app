import React from 'react';
import {useNavigate} from "react-router-dom";
import PostStatistic from "../UI/post-statistic/PostStatistic";
import {MdOutlineModeEdit} from "react-icons/md";
import {IoCloseSharp} from "react-icons/io5";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getOnePost} from "../../store/reducers/postReducer";
import './postItem.scss'

const PostItem = ({post}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {currentUser} = useSelector(state => state.user)

    return (
        <div>
            <div className='container'>
                <img
                    className='post__image'
                    src="https://proprikol.ru/wp-content/uploads/2020/06/kartinki-zavtrak-35.jpg"
                    alt="post background"
                    onClick={() => dispatch(getOnePost({post, navigate, edit: false}))}
                />
                <div className='post__edits'>
                    <MdOutlineModeEdit
                        size={26}
                        onClick={() => dispatch(getOnePost({post, navigate, edit: true}))}
                    />
                    <IoCloseSharp
                        size={26}
                        className='ml-2 text-red-700'
                        onClick={() => dispatch(deletePost(post))}
                    />
                </div>
                <PostStatistic post={post}/>
            </div>
            <div className='pt-2 px-2'>
                <div className='font-medium'>
                    {post.title}
                </div>
                <div className='post__author'>
                    <div>{currentUser.name}</div>
                    <span className='px-2'>&bull;</span>
                    <div>{(post.createdAt).slice(0, 10)}</div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;