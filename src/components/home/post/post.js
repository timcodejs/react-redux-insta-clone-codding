import React, { useCallback, useState } from "react";
import styled from "styled-components";
import Ellipsis from 'react-ellipsis-component';
import moment from 'moment';
import CommentForm from './commentForm';
import AddComment from './addComment';
import { useDispatch } from "react-redux";
import { UPDATE_LIKE_POST_REQUEST } from "../../../reducer/post";
import { PUBLIC_URL } from "../../../modules/module";

moment.locale("ko");

const Post = ({post, setIsOpen}) => {
    const time = moment().startOf('day').fromNow();
    const dispatch = useDispatch();
    const [wordState, setWordState] = useState(false);
    const [wordDisplay, setWordDIsplay] = useState('flex');

    const onClickLikeBtn = useCallback((e) => {
        if (e.target.src === `${window.location.href}images/insta_heart_empty.png`) {
            e.target.src = PUBLIC_URL+"/images/insta_heart_red.png";
            dispatch({
                type: UPDATE_LIKE_POST_REQUEST,
                data: {
                    PostId: post.id,
                    likecount: 1
                }
            })
        } else if(e.target.src === `${window.location.href}images/insta_heart_red.png`) {
            e.target.src = PUBLIC_URL+"/images/insta_heart_empty.png";
            dispatch({
                type: UPDATE_LIKE_POST_REQUEST,
                data: {
                    PostId: post.id,
                    likecount: 0
                }
            })
        }
        
    }, []);

    const moreWord = useCallback(() => {
        setWordState(true);
        setWordDIsplay('block');
    }, []);

    const onClickMoreBtn = useCallback(() => {
        setIsOpen({state: true, post: post});
    }, [post]);

    return(
        <PostStyled>
            <div>
                <div>
                    <div className="section1">
                        <div className="section1-inner">
                            <div className="section1-avatar"><img src={post.User.avatar} alt="" /></div>
                            <div>
                                <h4>{post.User.nickname}</h4>
                                <p>{post.User.address}</p>
                            </div>
                        </div>
                        <div className="moreBtnimg" onClick={onClickMoreBtn}><img src={PUBLIC_URL+"/images/insta_morebtn.png"} alt="more button" /></div>
                    </div>
                    <div className="section2"><img src={post.content} alt="img" /></div>
                    <div className="section3">
                        <div>
                            <div className="section3-icon">
                                <div>
                                    <button><img src={PUBLIC_URL+"/images/insta_heart_empty.png"} alt="" onClick={onClickLikeBtn} /></button>
                                    <button><img src={PUBLIC_URL+"/images/insta_comment.png"} alt="" /></button>
                                    <button><img src={PUBLIC_URL+"/images/insta_send_empty.png"} alt="" /></button>
                                </div>
                                <div className="clip-img"><button><img src={PUBLIC_URL+"/images/profile_icon2.png"} alt="" /></button></div>
                            </div>
                            <div className="section3-like">좋아요 <span>{post.likecount}</span>개</div>
                            <div className="section3-content">
                                <div className="section3-user" style={{display: wordDisplay}}>
                                    <span>{post.User.nickname}</span>
                                    {!wordState ? (
                                    <Ellipsis
                                    text={post.words}
                                    maxLine="1"
                                    ellipsisNode={<button onClick={moreWord}> ... 더 보기</button>} 
                                    />
                                    ) : (
                                        <span>{post.words}</span>
                                    )}
                                </div>
                                <div><CommentForm post={post} /></div>
                                <div className="upload-time">{time}</div>
                            </div>
                            <AddComment post={post} />
                        </div>
                    </div>
                </div>
            </div>
        </PostStyled>
    )
}

export default Post;

const PostStyled = styled.div`
    background: rgba(var(--d87,255,255,255),1);
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    box-sizing: border-box;
    border-radius: 3px;
    margin-top: 24px;
    & ul, h4, p {
        margin: 0;
        padding: 0;
    }
    & .section1 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
    }
    & .section1-inner {
        display: flex;
    }
    & .section1-avatar {
        width: 32px;
        margin-right: 14px;
    }
    & .section1-avatar img {
        width: 100%;
        border-radius: 50%;
    }
    & .section1-inner p {
        font-size: 12px;
        line-height: 16px;
        font-weight: 400;
        color: rgba(var(--f52,142,142,142),1);
    }
    & .moreBtnimg img {        
        width: 15px;
        cursor: pointer;
    }
    & .section2 img {
        width: 100%;
    }
    & .section3-icon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 16px 8px 8px;
    }
    & .section3 img {
        width: 30px;
    }
    & .clip-img img {
        width: 23px;
    }
    & .section3-like {
        padding: 0 16px;
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & .section3-content {
        padding: 0 16px;
    }
    & .section3-user {
        margin-bottom: 4px;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color: rgba(var(--i1d,38,38,38),1);
    }
    & .section3-user > span:nth-child(1) {
        font-weight: 600;
        margin-right: 7px;
    }
    & .section3-user > span:nth-child(2) {
        
    }
    & .upload-time {
        font-size: 10px;
        line-height: 12px;
        font-weight: 400;
        color: rgba(var(--f52,142,142,142),1);
        margin-bottom: 16px;
    }
`;