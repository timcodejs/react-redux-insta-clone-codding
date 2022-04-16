import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CommentForm = ({post}) => {
    const { info } = useSelector((state) => state.user);
    const [commentsDisplay, setCommentsDisplay] = useState('none');
    const [countDisplay, setCountDisplay] = useState('block');

    const onoClickPostDetail = useCallback(() => {
        setCommentsDisplay('block');
        setCountDisplay('none');
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
                                        <img src={info.avatar} alt="user avatar" />
                                        <span>{info.nickname}</span> 
                                        <span>{v.words}</span>
                                    </div>
                                    <div><button><img src="/images/insta_heart_empty.png" alt="like" /></button></div>
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
    & .comments li div:nth-child(1) img {
        width: 25px;
        border-radius: 50%;
    }
    & .comments li div:nth-child(1) span:nth-of-type(1) {
        margin: 0 10px;
        color: rgba(var(--f75,38,38,38),1);
        font-size: 14px;
        font-weight: 600;
    }
    & .comments li div:nth-child(1) span:nth-of-type(2) {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & .comments li div:nth-child(2) img {
        width: 15px;
    }
`;