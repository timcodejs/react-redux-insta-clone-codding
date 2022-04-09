import React, { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useInput } from '../../hook/useinput';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../../reducer/user';

const LoginMain = () => {
    const [email, onChangeEmail] = useInput("");
    const [password, onChangePassword] = useInput("");
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const { info } = useSelector((state) => state.user);

    useEffect(() => {
        if(info) {
            navigator('/');
        }
    }, [info, navigator]);

    const onSubmitLogin = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                email: email,
                password: password
            }
        });
    }, [dispatch, email, password]);

    return(
        <>  
            <LoginMainStyled>
                <div className='logo'><button><img src="/images/logo_L.png" alt="logo" /></button></div>
                <form onSubmit={onSubmitLogin}>
                    <div>
                        <label htmlFor="user-email"></label>
                        <input 
                        name="user-email"
                        type="text" 
                        placeholder="전화번호, 사용자 이름 또는 이메일"
                        value={email}
                        onChange={onChangeEmail}
                        autoComplete="off"
                        required />
                    </div>
                    <div>
                        <label htmlFor="user-password"></label>
                        <input 
                        name="user-password"
                        type="password" 
                        placeholder="비밀번호"
                        value={password}
                        onChange={onChangePassword}
                        autoComplete="off"
                        required />
                    </div>
                    {email !== "" && password !== "" ? (
                        <BlueBtnConfirm type="submit">로그인</BlueBtnConfirm>
                    ) : (
                        <BlueBtn type="submit">로그인</BlueBtn>
                    )}
                </form>
                <div className='section-line'>
                    <div className='line'></div>
                    <div className='linetext'>또는</div>
                    <div className='line'></div>
                </div>
                <div className='facebook-login'><FacebookBtn>Facebook으로 로그인</FacebookBtn></div>
                <div className='forget-password'><button>비밀번호를 잊으셨나요?</button></div>
            </LoginMainStyled>
            <MoveRegisterSection>
                <div>계정이 없으신가요? <Link to="/register"><SpanColor>가입하기</SpanColor></Link></div>
            </MoveRegisterSection>
        </>
    )
}

export default LoginMain;

const LoginMainStyled = styled.div`
    width: 350px;
    background-color: #fff;
    border: 1px solid rgb(219, 219, 219);
    margin: 0 auto 10px auto;
    padding: 10px 0;
    & form {
        margin-top: 24px;
    }
    & form button {
        color: rgb(255, 255, 255);
        font-weight: 600;
        width: 260px;
        height: 30px;
        margin: 8px 40px;
        padding: 5px 9px;
        line-height: 18px;
        font-size: 14px;
        border-radius: 4px;
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
    & .facebook-login {
        margin: 8px 40px;
    }
    & .forget-password button {
        font-size: 12px;
        line-height: 16px;
        margin: 12px 0 10px 0;
        color: rgba(var(--fe0,0,55,107),1);
    }
`;

const MoveRegisterSection = styled.div`
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
    color: #385185;
    font-weight: 600;
    font-size: 14px;
    background: url('/images/facebook_img.png') no-repeat center left/16px;
    padding-left: 25px;
`;

const SpanColor = styled.span`
    color: rgb(0, 149, 246);
    font-weight: 600;
`;