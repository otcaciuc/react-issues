import * as types from '../types/Generic.types';

export const genericActionError = error => ({
    type: types.GENERIC_ACTION_ERROR,
    payload: { error }
});
