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
            },
            content: faker.image.avatar(),
            words: faker.lorem.word(),
            Comments: [
                {
                    id: shortId.generate(),
                    User: {
                        id: shortId.generate(),
                        nickname: faker.name.lastName(),
                        avatar: faker.image.avatar(),
                    },
                    content: faker.image.avatar(),
                    words: faker.lorem.word(),
                }
            ]
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
}

// 더미데이터
export const createDummyPosts = (number) => 
    Array(number).fill().map(() => ({
        id: shortId.generate(),
        User: {
            id: shortId.generate(),
            nickname: faker.name.lastName(),
            avatar: faker.image.avatar(),
        },
        content: faker.image.avatar(),
        words: faker.lorem.word(),
        Comments: []
    }));

export const LOAD_ALLPOSTS_REQUEST = "LOAD_ALLPOSTS_REQUEST";
export const LOAD_ALLPOSTS_SUCCESS = "LOAD_ALLPOSTS_SUCCESS";
export const LOAD_ALLPOSTS_FAILURE = "LOAD_ALLPOSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

const reducer = (state=intialPosts, action) => {
    return produce(state, (draft) => {
        switch(action.type) {
            case LOAD_ALLPOSTS_REQUEST:
                draft.allpostsLoading = true;
                draft.allpostsDone = false;
                draft.allpostsError = null;
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

            default: 
                return state;
        }
    });
}

export default reducer;