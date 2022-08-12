import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {useDropzone} from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../../../reducer/post';
import { useInput } from '../../../hook/useinput';
import { PUBLIC_URL } from "../../../modules/module";

const AddPost = ({display, onClickAddPostExit}) => {
    const [innerWidth, setInnerWidth] = useState('604px');
    const [buttonDisplay, setButtonDisplay] = useState("none");
    const [postDisplay, setPostDisplay] = useState("none");
    const [next, setNext] = useState(false);
    const [wordcontent, onChangeWordcontent, setWordcontent] = useInput("");
    const { info } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    const [myFiles, setMyFiles] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
        setMyFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
    }, []);

    const remove = file => {
        const newFiles = [...myFiles];
        newFiles.splice(newFiles.indexOf(file), 1);
        setMyFiles(newFiles);
    };

    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop,
    });

    const files = myFiles.map(file => (
        <li className='file-list' key={file.path}>
            <img className='file-image' src={file.preview} alt="" />
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
        remove(file);
        setNext(false);
        setWordcontent("");
        setInnerWidth('604px');
    }, [onClickAddPostExit]);

    const nextAddPost = useCallback(() => {
        setPostDisplay((prev) => !prev);
        setNext((prev) => !prev);
        setInnerWidth('calc(100% - 340px)');
    }, []);

    const backPost = useCallback((file) => {
        remove(file);
        setNext(false);
        setPostDisplay("none");
        setInnerWidth('604px');
    }, []);

    const shareAddPost = useCallback(() => {
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                nickname: info.nickname,
                avatar: info.avatar,
                content: myFiles[0].preview,
                words: wordcontent,
            }
        });
        onClickExitBtn();
    }, [info, wordcontent, myFiles]);

    return ( 
        <AddPostStyled style={{display: display}}>
            <div>
                <div className='addpost-inner' style={{width: innerWidth}}>
                    <div className='addpost-top'>
                        {myFiles.length === 0 ? (
                            <div className='back-btn'></div>
                        ) : (
                            <div className='back-btn' onClick={backPost}><img src={PUBLIC_URL+"/images/back.png"} alt="back img" /></div>
                        )}
                        <h3>새 게시물 만들기</h3>
                        {!next 
                        ? (
                            <div className='next-btn' onClick={nextAddPost}><button style={{display: buttonDisplay}}>다음</button></div>
                        ) : (
                            <div className='next-btn' onClick={shareAddPost}><button>공유하기</button></div>
                        )}
                    </div>
                    <div className='addpost-bottom'>
                        <div className='addpost-section'>
                            <div>
                                <section className="container">
                                    {myFiles.length === 0 ? (
                                    <div {...getRootProps({className: 'dropzone'})}>
                                        <input {...getInputProps()} />
                                        <div className='addpost-img'><img src={PUBLIC_URL+"/images/addpost_img.png"} alt="이미지 추가" /></div>
                                        <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                                        <div className='addpost-btn'><button>컴퓨터에서 선택</button></div>
                                    </div>
                                    ) : (
                                    <aside>
                                        <ul className='file-list'>{files}</ul>
                                    </aside>
                                    )}
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
                <button onClick={onClickExitBtn}><img src={PUBLIC_URL+"/images/cencle_white.png"} alt="닫기 버튼" /></button>
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
    }
    & .back-btn img {
        width: 24px;
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