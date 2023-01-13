import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    client: { toggleForm: false, formId: undefined },
};

export const ReducerSlice = createSlice({
    name: 'cruduapp',
    initialState,
    reducers: {
        toggleChangeAction: (state) => {
            state.client.toggleForm = !state.client.toggleForm;
        },
        updateAction: (state, actions) => {
            state.client.formId = actions.payload;
        },
    },
});

export const { toggleChangeAction, updateAction } = ReducerSlice.actions;

export default ReducerSlice.reducer;
