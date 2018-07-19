import * as types from '../types/Issues.types';
import { genericActionError } from './Generic.actions';

export const readIssuesSuccess = issues => ({
    type: types.READ_ISSUES_SUCCESS,
    payload: { issues }
});

export const readIssues = () => async dispatch => {
    try {
        const apiUrl = `https://api.github.com/repos/facebook/react/issues`;
        const res = await fetch(apiUrl);
        const issues = await res.json();
        dispatch(readIssuesSuccess(issues));
    } catch (err) {
        dispatch(genericActionError(err));
    }
};
