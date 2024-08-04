import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: {},
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[action.payload.id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds,
            }
        }
    }
})

export const quizzesSelector = state => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice;