import { RANDOM_SUCCESS } from "../actions/actions";

export default function reducerQuote(state = {}, action) {
    switch (action.type) {
        case RANDOM_SUCCESS:
            return {
                ...state,
                response: action.response
            };
        default:
            return state;
    }
}