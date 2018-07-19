import * as types from '../types/Generic.types';

const filter = (state = { error: '' }, action) => {
    switch (action.type) {
        case types.GENERIC_ACTION_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        default:
            return state;
    }
};

export default filter;
