import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useInput } from '../../hook/useinput';
import { useDispatch, useSelector } from 'react-redux';
import { REGISTER_REQUEST, REGISTER_DONE_REQUEST } from '../../reducer/user';

const RegisterMain = () => {
    const [email, onChangeEmail] = useInput("");
    const [name, onChangeName] = useInput("");
    const [nickname, onChangeNickname] = useInput("");
    const [password, onChangePassword] = useInput("");
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const { registerDone } = useSelector((state) => state.user);

    useEffect(() => {
        if(registerDone) {
            navigator('/login');
            dispatch({
                type: REGISTER_DONE_REQUEST
            })
        }
    }, [registerDone, navigator, dispatch]);

    const onSubmitRegister = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: REGISTER_REQUEST,
            data: {
                email,
                name,
                nickname,
                password
            }
        });
    }, [dispatch]);
    return(
        <>
            <RegisterMainStyled>
                <div className='logo'><button><img src="/images/logo_L.png" alt="logo" /></button></div>
                <h2>친구들의 사진과 동영상을 보려면 가입하세요.</h2>
                <div className='facebook-btn'><FacebookBtn>Facebook으로 로그인</FacebookBtn></div>
                <div className='section-line'>
                    <div className='line'></div>
                    <div className='linetext'>또는</div>
                    <div className='line'></div>
                </div>
                <form onSubmit={onSubmitRegister}>
                    <div>
                        <label htmlFor='user-email'></label>
                        <input 
                        type="text" 
                        placeholder="휴대폰 번호 또는 이메일 주소"
                        value={email}
                        onChange={onChangeEmail}
                        autoComplete="off"
                        required />
                    </div>
                    <div>
                        <label htmlFor='user-name'></label>
                        <input
                        type="text"
                        placeholder="성명" 
                        value={name}
                        onChange={onChangeName}
                        autoComplete="off"
                        required />
                    </div>
                    <div>
                        <label htmlFor='user-nickname'></label>
                        <input
                        type="text"
                        placeholder="사용자 이름" 
                        value={nickname}
                        onChange={onChangeNickname}
                        autoComplete="off"
                        required />
                    </div>
                    <div>
                        <label htmlFor='user-password'></label>
                        <input 
                        type="password" 
                        placeholder="비밀번호"
                        value={password}
                        onChange={onChangePassword}
                        autoComplete="off"
                        required  />
                    </div>
                    {email !== "" && name !== "" && nickname !== "" && password !== "" ? (
                        <BlueBtnConfirm type="submit">가입</BlueBtnConfirm>
                    ) : (
                        <BlueBtn type="submit">가입</BlueBtn>
                    )}
                    
                </form>
                <div className='register-info'>가입하면 Instagram의 약관, 데이터 정책 및 쿠키 정책에 동의하게 됩니다.</div>
            </RegisterMainStyled>
            <MoveLoginSection>
                <div>계정이 있으신가요? <Link to="/login"><SpanColor>로그인</SpanColor></Link></div>
            </MoveLoginSection>
        </>
    )
}

export default RegisterMain;

const RegisterMainStyled = styled.div`
    width: 350px;
    background-color: #fff;
    border: 1px solid rgb(219, 219, 219);
    margin: 25px auto 10px auto;
    padding: 10px 0 30px 0;
    & h2 {
        color: rgba(var(--f52,142,142,142),1);
        font-size: 17px;
        font-weight: 600;
        line-height: 20px;
        margin: 0 40px 10px;
    }
    & form button {
        color: rgb(255, 255, 255);
        font-weight: 600;
        width: 268px;
        height: 30px;
        margin: 8px 40px;
        padding: 5px 9px;
        line-height: 18px;
        font-size: 14px;
        border-radius: 4px;
    }
    & .facebook-btn {
        padding: 8px 40px;
    }
    & .logo img {
        width: 175px;
        max-width: 100%;
        margin: 36px 0 12px 0;
    }
    & input {
        width: 250px;
        height: 20px;
        font-size: 12px;
        font-weight: 400;
        color: rgb(38, 38, 38);
        background-color: rgb(251, 250, 250);
        border: 1px solid rgb(219, 219, 219);
        padding: 9px 0px 7px 8px;
        border-radius: 3px;
        margin: 0 40px 6px;
    }
    & .section-line {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-shrink: 0;
        margin: 10px 40px 18px;
    }
    & .section-line .linetext {
        flex-grow: 0;
        flex-shrink: 0;
        font-size: 13px;
        font-weight: 600;
        line-height: 15px;
        margin: 0 18px;
        color: rgba(var(--f52,142,142,142),1);
    }
    & .section-line .line {
        height: 1px;
        position: relative;
        flex-grow: 1;
        flex-shrink: 1;
        flex-direction: column;
        background-color: rgba(var(--b38,219,219,219),1);
    }
    & .register-info {
        color: rgba(var(--f52,142,142,142),1);
        font-size: 12px;
        line-height: 16px;
        margin: 10px 40px;
    }
`;

const MoveLoginSection = styled.div`
    width: 350px;
    background-color: #fff;
    border: 1px solid rgb(219, 219, 219);
    margin: 0 auto 10px auto;
    padding: 10px 0;
    font-size: 14px;
    & div {
        margin: 15px;
    }
`;

const BlueBtn = styled.button`
    background-color: rgba(0, 149, 246, 0.3);
`;

const BlueBtnConfirm = styled.button`
    background-color: rgba(var(--d69,0,149,246),1);
`;

const FacebookBtn = styled.button`
    border: 1px solid transparent;
    border-radius: 4px;
    color: #fff;
    width: 268px;
    font-size: 14px;
    font-weight: 600;
    padding: 7px 9px 7px 20px;
    background: url('/images/facebook_img_white.png') no-repeat center left 50px/16px rgba(var(--d69,0,149,246),1);
`;

const SpanColor = styled.span`
    color: rgb(0, 149, 246);
    font-weight: 600;
    font-size: 14px;
`;