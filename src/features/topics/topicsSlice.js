import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {
                id: action.payload.id,
                name: action.payload.name,
                icon: action.payload.icon,
                // add an empty array of quizzes associated with topic when that topic is created
                quizIds: [],  
            }
        }
    }
})

export const topicsSelector = (initialState) => {
    initialState.topics
}

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
