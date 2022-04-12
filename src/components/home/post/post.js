import React from "react";
import styled from "styled-components";

const Post = ({post}) => {
    
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
                        <div className="moreBtnimg"><img src="/images/insta_morebtn.png" alt="more button" /></div>
                    </div>
                    <div className="section2"><img src={post.content} alt="img" /></div>
                    <div className="section3">
                        <div>
                            <div className="section3-icon">
                                <div>
                                    <button><img src="/images/insta_heart_empty.png" alt="" /></button>
                                    <button><img src="/images/insta_comment.png" alt="" /></button>
                                    <button><img src="/images/insta_send_empty.png" alt="" /></button>
                                </div>
                                <div className="clip-img"><button><img src="/images/profile_icon2.png" alt="" /></button></div>
                            </div>
                            <div className="section3-like">좋아요 <span>1</span>개</div>
                            <div className="section3-content">
                                <div className="section3-user"><span>{post.User.nickname}</span> {post.words}</div>
                                <div className="upload-time">1시간 전</div>
                            </div>
                            <div className="section3-comment">
                                <div>
                                    <div>
                                        <img src="/images/insta_smile.png" alt="smileimage" />
                                        <input type="text" placeholder="댓글 달기..." />
                                    </div>
                                    <button>게시</button>
                                </div>
                            </div>
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
    }
    & .section2 img {
        width: 100%;
        height: 764px;
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
    }
    & .upload-time {
        font-size: 10px;
        line-height: 12px;
        font-weight: 400;
        color: rgba(var(--f52,142,142,142),1);
        margin-bottom: 16px;
    }
    & .section3-comment {
        border-top: 1px solid rgba(var(--ce3,239,239,239),1);
    }
    & .section3-comment > div {
        padding: 6px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    & .section3-comment > div div {
        display: flex;
        align-items: center;
    }
    & .section3-comment input {
        border: 0;
        margin: 0 16px;
        width: 470px;
        height: 30px;
    }
    & .section3-comment button {
        color: rgba(var(--d69,0,149,246),1);
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        opacity: .3;
    }
    input:focus {
        outline: none;
    }
`;