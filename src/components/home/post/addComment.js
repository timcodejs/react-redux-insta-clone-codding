import React, { useCallback } from 'react'
import styled from 'styled-components';
import { useInput } from '../../../hook/useinput';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENTS_REQUEST } from '../../../reducer/post';

const AddComment = ({post}) => {
    const [comment, onChangeComment, setComment] = useInput("");
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.user);

    const onCLickCommentBtn = useCallback(() => {
        dispatch({
            type: ADD_COMMENTS_REQUEST,
            data: {
                PostId: post.id,
                nickname: info.nickname,
                avatar: info.avatar,
                words: comment,
            }
        });
        setComment("");
    }, [comment]);

    return (
        <CommentInputStyled>
            <div>
                <div>
                    <img src="/images/insta_smile.png" alt="smileimage" />
                    <input type="text" placeholder="댓글 달기..." value={comment} onChange={onChangeComment} />
                </div>
                <button onClick={onCLickCommentBtn}>게시</button>
            </div>
        </CommentInputStyled>
    )
}

export default AddComment;

const CommentInputStyled = styled.div`
    border-top: 1px solid rgba(var(--ce3,239,239,239),1);
    & > div {
        padding: 6px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & > div div {
        display: flex;
        align-items: center;
    }
    & input {
        border: 0;
        margin: 0 16px;
        width: 470px;
        height: 30px;
    }
    & button {
        color: rgba(var(--d69,0,149,246),1);
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        opacity: .3;
    }
    input:focus {
        outline: none;
    }
`