import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_POST_REQUEST } from '../../../reducer/post';
import UpdatePost from './updatePost';

const ModalPopup = ({post, setIsOpen}) => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.user);
    const [updatePost, setUpdatePost] = useState('none');

    const onClickCencleBtn = useCallback(() => {
        setIsOpen({
            state: false, 
            post: post
        });
    }, []);

    const onClickDeletePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id
        });
        setIsOpen({
            state: false, 
            post: post
        });
    }, []);

    const onCLickUpdatePost = useCallback(() => {
        setUpdatePost('block');
    }, []);

    const onClickAddPostExit = useCallback(() => {
        setUpdatePost('none');
    }, []);
    
    return (
        <ModalPopupStyled>
            {info && post.User.id === info.id ? (
                <ul>
                    <li><button className="redText" onClick={onClickDeletePost}>삭제</button></li>
                    <li><button onClick={onCLickUpdatePost}>수정</button></li>
                    <li><button onClick={onClickCencleBtn}>취소</button></li>
                </ul>
            ) : ( 
                <ul>
                    <li><button className="redText">신고</button></li>
                    <li><button className="redText">팔로우 취소</button></li>
                    <li><button onClick={onClickCencleBtn}>취소</button></li>
                </ul>
            )}
            <UpdatePost display={updatePost} onClickAddPostExit={onClickAddPostExit} onClickCencleBtn={onClickCencleBtn} post={post} />
        </ModalPopupStyled>
    )
}

export default ModalPopup;

const ModalPopupStyled = styled.div`
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 50%);
    background-color: #fff;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 12px;
    text-align: center;
    & ul {
        margin: 0;
        padding: 0;
    }
    & li {
        width: 400px;
        height: 48px;
        padding: 4px 8px;
        
    }
    & li:not(:last-child) {
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & li button {
        font-size: 14px;
        font-weight: 700;
        width: 100%;
        height: 48px;
    }
    & .redText {
        color: rgba(var(--i30,237,73,86),1);
    }
`;