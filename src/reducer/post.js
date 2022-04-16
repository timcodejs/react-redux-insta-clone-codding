import produce from "immer";
import faker from "@faker-js/faker";
import shortId from 'shortid';

const intialPosts = {
    allPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: faker.name.lastName(),
                avatar: faker.image.avatar(),
                address: faker.address.city(),
            },
            content: faker.image.avatar(),
            words: faker.lorem.paragraph(),
            Comments: []
        }
    ],
    allpostsLoading: false,
    allpostsDone: false,
    allpostsError: null,
    addpostsLoading: false,
    addpostsDone: false,
    addpostsError: null,
    removepostsLoading: false,
    removepostsDone: false,
    removepostsError: null,
    addcommentLoading: false,
    addcommentDone: false,
    addcommentError: null,
    removecommentLoading: false,
    removecommentDone: false,
    removecommentError: null,
    allpostsReset: false,
}

// 더미데이터
export const createDummyPosts = (number) => 
    Array(number).fill().map(() => ({
        id: shortId.generate(),
        User: {
            id: shortId.generate(),
            nickname: faker.name.lastName(),
            avatar: faker.image.avatar(),
            address: faker.address.city(),
        },
        content: faker.image.avatar(),
        words: faker.lorem.paragraph(),
        Comments: []
    }));

const dummyPost = (data) => ({
    id: shortId.generate(),
    User: {
        id: 1,
        nickname: data.nickname,
        avatar: data.avatar,
        address: faker.address.city(),
    },
    content: data.content,
    words: data.words,
    Comments: []
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    User: {
        id: 1,
        nickname: data.nickname,
        avatar: data.avatar,
    },
    words: data.words,
});

export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST";
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS";
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENTS_REQUEST = "ADD_COMMENTS_REQUEST";
export const ADD_COMMENTS_SUCCESS = "ADD_COMMENTS_SUCCESS";
export const ADD_COMMENTS_FAILURE = "ADD_COMMENTS_FAILURE";

export const REMOVE_COMMENTS_REQUEST = "REMOVE_COMMENTS_REQUEST";
export const REMOVE_COMMENTS_SUCCESS = "REMOVE_COMMENTS_SUCCESS";
export const REMOVE_COMMENTS_FAILURE = "REMOVE_COMMENTS_FAILURE";

export const ALLPOSTS_RESET = "ALLPOSTS_RESET";


const reducer = (state=intialPosts, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case LOAD_ALLPOSTS_REQUEST:
                draft.allpostsLoading = true;
                draft.allpostsDone = false;
                draft.allpostsError = null;
                draft.allpostsReset = false;
                break;

            case LOAD_ALLPOSTS_SUCCESS:
                draft.allpostsLoading = false;
                draft.allpostsDone = true;
                draft.allPosts = action.data.concat(draft.allPosts);
                break;

            case LOAD_ALLPOSTS_FAILURE:
                draft.allpostsLoading = false;
                draft.allpostsDone = false;
                draft.allpostsError = action.error;
                break;

            case ADD_POST_REQUEST:
                draft.addpostsLoading = true;
                draft.addpostsDone = false;
                draft.addpostsError = null;
                break;

            case ADD_POST_SUCCESS:
                draft.addpostsLoading = false;
                draft.addpostsDone = true;
                draft.allPosts.unshift(dummyPost(action.data));
                break;

            case ADD_POST_FAILURE:
                draft.addpostsLoading = false;
                draft.addpostsDone = false;
                draft.addpostsError = action.error;
                break;

            case ADD_COMMENTS_REQUEST:
                draft.addcommentLoading = true;
                draft.addcommentDone = false;
                draft.addcommentError = null;
                break;

            case ADD_COMMENTS_SUCCESS:
                draft.addcommentLoading = false;
                draft.addcommentDone = true;
                const post = draft.allPosts.find((v) => v.id === action.data.PostId);
                post.Comments.unshift(dummyComment(action.data));
                break;

            case ADD_COMMENTS_FAILURE:
                draft.addcommentLoading = false;
                draft.addcommentDone = false;
                draft.addcommentError = action.error;
                break;

            case ALLPOSTS_RESET:
                draft.allpostsReset = true;
                draft.allPosts = draft.allPosts.filter((v) => v.id === action.data);
                break;

            default: 
                return state;
        }
    });
}

export default reducer;