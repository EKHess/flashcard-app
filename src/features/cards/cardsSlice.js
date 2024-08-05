import { createSlice, createSelector } from "@reduxjs/toolkit";

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

// Grab all the actual cards from state that looks like this:
// {
//   cards: {
//     cards: {
//         '123': {
//             id: '123',
//             front: 'front of card',
//             back: 'back of card',
//         }
//     }
//   }
// }
// Using an input of a cards 'id', return that specific card from state using createSelector()
export const cardIdSelector = createSelector(
    [
        // Usual first input - extract value from `state`
        state => state.cards.cards,
        // Take the second arg, `id`, and forward to the output selector
        (state, id) => id
    ],
    // Output selector gets (`cards, id)` as args
    (cards, id) => cards[id]
)

export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;

