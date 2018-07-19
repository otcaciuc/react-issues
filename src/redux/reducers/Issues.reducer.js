import * as types from '../types/Issues.types';

const issues = (state = [], action) => {
    switch (action.type) {
        case types.READ_ISSUES_SUCCESS:
            return action.payload.issues;

        default:
            return state;
    }
};

export default issues;