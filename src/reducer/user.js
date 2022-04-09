import produce from 'immer';

const initialState = {
    info: null,
    loginLoading: false,
    loginDone: false,
    loginError: null,
    logoutLoading: false,
    logoutDone: false,
    logoutError: null,
    registerLoading: false,
    registerDone: false,
    registerError: null,
}

const dummyUser = (data) => ({
    ...data,
});

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";

export const REGISTER_DONE_REQUEST = "REGISTER_DONE_REQUEST";

const reducer = (state=initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case LOG_IN_REQUEST:
                draft.loginLoading = true;
                draft.loginDone = false;
                draft.loginError = null;
                break;

            case LOG_IN_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.info = dummyUser(action.data); // 로그인 성공 시 더미데이터에 입력값 넣기
                break;

            case LOG_IN_FAILURE:
                draft.loginLoading = false;
                draft.loginDone = false;
                draft.loginError = action.error;
                break;

            case LOG_OUT_REQUEST:
                draft.loginLoading = true;
                draft.loginDone = false;
                draft.loginError = null;
                break;

            case LOG_OUT_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.info = null; // 로그아웃 성공 시 데이터 null 처리
                break;

            case LOG_OUT_FAILURE:
                draft.loginLoading = false;
                draft.loginDone = false;
                draft.loginError = action.error;
                break;

            case REGISTER_REQUEST:
                draft.loginLoading = true;
                draft.loginDone = false;
                draft.loginError = null;
                break;

            case REGISTER_SUCCESS:
                draft.loginLoading = false;
                draft.loginDone = true;
                // 회원가입은 넘어가도록 설정
                break;

            case REGISTER_FAILURE:
                draft.loginLoading = false;
                draft.loginDone = false;
                draft.loginError = action.error;
                break;

            default:
                return state;
        }
    });
}

export default reducer;