import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {useDropzone} from 'react-dropzone';
import { useSelector } from 'react-redux';


const AddPost = ({display, onClickAddPostExit}) => {
    const [buttonDisplay, setButtonDisplay] = useState("none");
    const [postDisplay, setPostDisplay] = useState("none");
    const { info } = useSelector((state) => state.user);
    const [myFiles, setMyFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setMyFiles([...myFiles, ...acceptedFiles]);
    }, [myFiles]);

    const remove = file => {
        const newFiles = [...myFiles]
        newFiles.splice(newFiles.indexOf(file), 1)
        setMyFiles(newFiles)
    };

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
    });

    const files = myFiles.map(file => (
        <li className='file-list' key={file.path}>
            <span>{file.path} - {file.size} bytes</span>
            <button className='file-delete' onClick={() => remove(file)}>remove</button>
        </li>
    ));

    useEffect(() => {
        if(myFiles.length !== 0) {
            setButtonDisplay('block');
        } else {
            setButtonDisplay('none');
        }
    }, [myFiles]);

    const onClickExitBtn = useCallback((file) => {
        onClickAddPostExit();
        setPostDisplay("none");
        if(myFiles.length > 0) {
            remove(file);
        }
    }, [onClickAddPostExit]);

    const nextAddPost = useCallback(() => {
        setPostDisplay((prev) => !prev);
    }, []);

    return ( 
        <AddPostStyled style={{display: display}}>
            <div>
                <div className='addpost-inner'>
                    <div className='addpost-top'>
                        <div></div>
                        <h3>새 게시물 만들기</h3>
                        <div onClick={nextAddPost}><button style={{display: buttonDisplay}}>다음</button></div>
                    </div>
                    <div className='addpost-bottom'>
                        <div className='addpost-section'>
                            <div>
                                <section className="container">
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <div className='addpost-img'><img src="/images/addpost_img.png" alt="이미지 추가" /></div>
                                        <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                                        <div className='addpost-btn'><button>컴퓨터에서 선택</button></div>
                                    </div>
                                    <aside>
                                        <ul className='file-list'>{files}</ul>
                                    </aside>
                                </section>
                            </div>
                        </div>
                        <div className='addpost-cont' style={{display: postDisplay}}>
                            {info && (
                                <div className='addpost-cont-inner'>
                                    <span><img src={info.avatar} alt="user avatar" /></span>
                                    <span>{info.nickname}</span>
                                </div>
                            )}
                            <div className='addpost-cont-text'>
                                <textarea cols="60" rows="15" placeholder='문구입력...' />
                            </div>
                            <div className='addpost-cont-setting'>
                                <div>위치추가</div>
                                <div>접근성</div>
                                <div>고급설정</div>
                            </div>
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
    & > div > button img {
        width: 30px;
    }
    & .addpost-inner {
        width: 604px;
        width: calc(100% - 340px);
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
    & .addpost-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;
        border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    & .addpost-top div {
        width: 50px;
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
        align-items: center;
        font-size: 20px;
    }
    & .file-delete {
        border-radius: 4px;
        font-size: 13px;
        font-weight: 600;
        margin-left: 5px;
        padding: 4px 7px;
        color: rgba(var(--eca,255,255,255),1);
        background-color: rgba(var(--d69,0,149,246),1);
    }
`;