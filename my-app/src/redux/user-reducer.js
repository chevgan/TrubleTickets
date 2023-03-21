const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const REMOVE_USER = "REMOVE_USER";

let initialState = {
    email: null,
    token: null,
    id: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id,
            };
        case REMOVE_USER:
            return {
                ...state,
                email: null,
                token: null,
                id: null,
            };
        default:
            return state;
    }
};

export const loginUser = (email, id, token) => ({
    type: LOGIN_SUCCESS,
    payload: { email, id, token }
});
export const removeUser = () => ({
    type: REMOVE_USER
});