import React, { useCallback } from 'react';
import styled from 'styled-components';

const CommentForm = ({post}) => {
    const onoClickPostDetail = useCallback(() => {

    }, []);

    return (
        <CommentFormStyled>
            {post.Comments.length !== 0 && (
                <div className='comment-count' onClick={onoClickPostDetail}><button>댓글 <span>{post.Comments.length}</span>개 모두 보기</button></div>
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
`;