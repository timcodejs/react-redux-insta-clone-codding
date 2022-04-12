import React, { useCallback } from 'react';
import styled from 'styled-components';

const AddPost = ({display, onClickAddPostExit}) => {
    const onClickExitBtn = useCallback(() => {
        onClickAddPostExit();
    }, [onClickAddPostExit])

    return ( 
        <AddPostStyled style={{display: display}}>
            <div>
                <div className='addpost-inner'>
                    <h3>새 게시물 만들기</h3>
                    <div className='addpost-section'>
                        <div>
                            <div><img src="/images/addpost_img.png" alt="이미지 추가" /></div>
                            <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                            <div><button>컴퓨터에서 선택</button></div>
                        </div>
                    </div>
                </div>
                <button onClick={onClickExitBtn}><img src="/images/cencle_white.png" alt="닫기 버튼" /></button>
            </div>
        </AddPostStyled>
    )
}

export default AddPost;

const AddPostStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.85);
    & > div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & > div > button {
        position: absolute;
        top: 10px;
        right: 10px;
    }
    & .addpost-inner {
        width: 604px;
        max-width: 855px;
        min-width: 348px;
        min-height: 391px;
        max-height: 898px;
        border: 0 solid #000;
        box-sizing: border-box;
        background-color: rgba(var(--f23,255,255,255),1);
        border-radius: 12px;
        text-align: center;
    }
    & .addpost-inner h3 {
        height: 42px;
        margin: 0;
        font-size: 16px;
        font-weight: 600;
        line-height: 42px;
        color: rgba(var(--i1d,38,38,38),1);
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & .addpost-inner p {
        font-size: 22px;
        line-height: 26px;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & .addpost-inner button {
        border-radius: 4px;
        font-size: 14px;
        font-weight: 600;
        padding: 5px 9px;
        color: rgba(var(--eca,255,255,255),1);
        background-color: rgba(var(--d69,0,149,246),1);
    }
    & .addpost-inner img {
        width: 96px;
    }
    & .addpost-section {
        height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;