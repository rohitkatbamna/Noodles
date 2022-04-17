import { configureStore, createSlice } from "@reduxjs/toolkit";
const firstState = { arrofobj: [{}] };

const noodlesSlice = createSlice({
	name: "noodles",
	initialState: firstState,
	reducers: {
		FirstAdditionofobj(state, actions) {
			state.arrofobj = actions.payload;
		},
	},
});

export const noodlesActions = noodlesSlice.actions;
export const store = configureStore(noodlesSlice);
