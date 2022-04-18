import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { REMOVE_COMMENTS_REQUEST, UPDATE_LIKE_COMMENT_REQUEST } from '../../../reducer/post';

const CommentForm = ({post}) => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.user);
    const [commentsDisplay, setCommentsDisplay] = useState('none');
    const [countDisplay, setCountDisplay] = useState('block');

    const onoClickPostDetail = useCallback(() => {
        setCommentsDisplay('block');
        setCountDisplay('none');
    }, []);

    const onClickCommentLikeBtn = useCallback((v) => (e) => {
        if (e.target.src === "http://localhost:3000/images/insta_heart_empty.png") {
            e.target.src = "/images/insta_heart_red.png";
            dispatch({
                type: UPDATE_LIKE_COMMENT_REQUEST,
                data: {
                    PostId: post.id,
                    commentId: v.id,
                    likecount: 1
                }
            });
        } else if(e.target.src === "http://localhost:3000/images/insta_heart_red.png") {
            e.target.src = "/images/insta_heart_empty.png";
            dispatch({
                type: UPDATE_LIKE_COMMENT_REQUEST,
                data: {
                    PostId: post.id,
                    commentId: v.id,
                    likecount: 0
                }
            });
        }
    }, []);

    const onRemoveComment = useCallback((commentId) => () => {
        dispatch({
            type: REMOVE_COMMENTS_REQUEST,
            data: {
                PostId: post.id,
                commentId: commentId
            }
        })
    }, []);

    return (
        <CommentFormStyled>
            {post.Comments.length !== 0 && (
                <div>
                    <div className='comment-count' style={{display: countDisplay}} onClick={onoClickPostDetail}><button>댓글 <span>{post.Comments.length}</span>개 모두 보기</button></div>
                    <div style={{display: commentsDisplay}}>
                        <ul className="comments">
                            {post.Comments.map((v) => (
                                <li key={v.id}>
                                    <div>
                                        <div className='comment-avatar'>
                                            <img src={info.avatar} alt="user avatar" />
                                        </div>
                                        <div className='comment-info'>
                                            <div>
                                                <span>{info.nickname}</span> 
                                                <span>{v.words}</span>
                                            </div>
                                            <div>
                                                <button>좋아요 <span>{v.likecount}</span>개</button>
                                                <button onClick={onRemoveComment(v.id)}>댓글 삭제</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div><button><img src="/images/insta_heart_empty.png" alt="like" onClick={onClickCommentLikeBtn(v)} /></button></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </CommentFormStyled>
    )
}

export default CommentForm;

const CommentFormStyled = styled.div`
    & .comment-count button {
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color: rgba(var(--f52,142,142,142),1);
        margin-bottom: 8px;
        padding: 0;
    }
    & .comments {
        margin-bottom: 8px;
    }
    & .comments li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 0;
    }
    & .comments li div:nth-child(1) {
        display: flex;
        align-items: center;
    }
    & .comment-avatar img {
        width: 25px;
        border-radius: 50%;
    }
    & .comment-info div:nth-child(1) span:nth-of-type(1) {
        margin: 0 10px;
        color: rgba(var(--f75,38,38,38),1);
        font-size: 14px;
        font-weight: 600;
    }
    & .comment-info div:nth-child(1) span:nth-of-type(2) {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & .comment-info div:nth-child(2) button {
        margin-left: 10px;
        padding: 0;
        font-weight: 600;
        font-size: 12px;
        line-height: 16px;
        color: rgba(var(--f52,142,142,142),1);
    }
    & .comments li div:nth-child(2) img {
        width: 15px;
    }
`;