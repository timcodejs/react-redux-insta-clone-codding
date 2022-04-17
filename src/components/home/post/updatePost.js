import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useInput } from '../../../hook/useinput';
import { UPDATE_POST_REQUEST } from '../../../reducer/post';

const UpdatePost = ({display, onClickAddPostExit, onClickCencleBtn, post}) => {
    const dispatch = useDispatch();
    const [wordcontent, onChangeWordcontent] = useInput(post.words);

    const onClickExitBtn = useCallback(() => {
        onClickAddPostExit();
        onClickCencleBtn();
    }, [onClickAddPostExit, onClickCencleBtn]);

    const shareAddPost = useCallback(() => {
        dispatch({
            type: UPDATE_POST_REQUEST,
            data: {
                PostId: post.id,
                words: wordcontent,
            }
        });
        onClickExitBtn();
    }, [wordcontent]);

    return (
        <UpdatePostStyled style={{display: display}}>
            <div>
                <div className='addpost-inner'>
                    <div className='addpost-top'>
                        <div className='back-btn' onClick={onClickExitBtn}>취소</div>
                        <h3>정보 수정</h3>
                        <div className='next-btn' onClick={shareAddPost}><button>완료</button></div>
                    </div>
                    <div className='addpost-bottom'>
                        <div className='addpost-section'>
                            <div>
                                <section className="container">
                                    <aside>
                                        <ul className='file-list'>
                                            <li><img src={post.content} alt="이미지" className='file-image' /></li>
                                        </ul>
                                    </aside>
                                </section>
                            </div>
                        </div>
                        <div className='addpost-cont'>
                            <div className='addpost-cont-inner'>
                                <span><img src={post.User.avatar} alt="user avatar" /></span>
                                <span>{post.User.nickname}</span>
                            </div>
                            <div className='addpost-cont-text'>
                                <textarea cols="60" rows="15" placeholder='문구입력...' value={wordcontent} onChange={onChangeWordcontent} />
                            </div>
                            <div className='addpost-cont-setting'>
                                <div>위치추가</div>
                                <div>접근성</div>
                                <div>고급설정</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UpdatePostStyled>
    )
}

export default UpdatePost;

const UpdatePostStyled = styled.div`
    position: fixed;
    top: 40%;
    left: 0;
    width: 100%;
    height: 100%;
    & > div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .addpost-inner {
        max-width: 855px;
        min-height: 391px;
        max-height: 898px;
        border: 0 solid #000;
        box-sizing: border-box;
        background-color: rgba(var(--f23,255,255,255),1);
        border-radius: 12px;
        text-align: center;
    }
    & .addpost-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & .next-btn {
        width: 100px;
        display: flex;
        justify-content: right;
        padding-right: 10px;
    }
    & .back-btn {
        width: 100px;
        display: flex;
        justify-content: left;
        padding-left: 16px;
        cursor: pointer;
    }
    & .addpost-top button {
        font-size: 14px;
        font-weight: 600;
        color: rgba(var(--d69,0,149,246),1);
    }
    & .addpost-top h3 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 42px;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & .addpost-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .addpost-cont {
        position: relative;
        width: 340px;
        height: 550px;
        border-left: 1px solid rgba(var(--b6a,219,219,219),1);
        
    }
    & .addpost-cont-text {
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & .addpost-cont textarea {
        width: 90%;
        border: 0;
        resize: none;
        outline: none;
    }
    & .addpost-cont-inner {
        display: flex;
        align-items: center;
        margin: 20px 20px 10px 20px;
    }
    & .addpost-cont-inner img {
        width: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }
    & .addpost-cont-setting {
        text-align: left;
    }
    & .addpost-cont-setting div {
        padding: 10px 10px;
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & .addpost-inner p {
        font-size: 22px;
        line-height: 26px;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & .addpost-btn button {
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        padding: 5px 9px;
        color: rgba(var(--eca,255,255,255),1);
        background-color: rgba(var(--d69,0,149,246),1);
    }
    & .addpost-img img {
        width: 96px;
    }
    & .addpost-section {
        width: 450px;
        height: 550px;
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & .file-list {
        padding: 0;
        padding-bottom: 10px;
    }
    & .file-list li {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
    & .file-image {
        width: 93%;
    }
`;