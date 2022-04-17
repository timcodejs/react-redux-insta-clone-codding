import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { REMOVE_POST_REQUEST } from '../../../reducer/post';

const ModalPopup = ({post, display, setPopupDisplay}) => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.user);

    const onClickCencleBtn = useCallback(() => {
        setPopupDisplay('none');
    }, []);

    const onClickDeletePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id
        });
        setPopupDisplay('none');
    }, []);

    return (
        <ModalPopupStyled style={{display: display}}>
            {info && post.User.id === info.id ? (
                <ul>
                    <li><button className="redText" onClick={onClickDeletePost}>삭제</button></li>
                    <li><button>수정</button></li>
                    <li><button onClick={onClickCencleBtn}>취소</button></li>
                </ul>
            ) : (
                <ul>
                    <li><button className="redText">신고</button></li>
                    <li><button className="redText">팔로우 취소</button></li>
                    <li><button onClick={onClickCencleBtn}>취소</button></li>
                </ul>
            )}
        </ModalPopupStyled>
    )
}

export default ModalPopup;

const ModalPopupStyled = styled.div`
    position: fixed;
    left: 50%;
    transform: translate(-20%, 50%);
    background-color: #fff;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 12px;
    text-align: center;
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