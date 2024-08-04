import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuiz, (state, action) => {
                const { id, topicId } = action.payload;
                state.topics[topicId].quizIds.push(id);
            })
    }
})

export const topicsSelector = state => state.topics.topics;

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
