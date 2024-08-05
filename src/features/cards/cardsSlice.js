import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {},
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            const { id, front, back } = action.payload;
            state.cards[id] = {
                id: id,
                front: front,
                back: back,
            }
        }
    }
});

export const cardIdSelector = (state, id) => state.cards.cards[id];

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;

