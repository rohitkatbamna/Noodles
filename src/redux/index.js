import { configureStore, createSlice } from "@reduxjs/toolkit";
const firstState = {
	arrofobj: [{}],
	countries: [],
	ImagesArray: [{}],
};

const noodlesSlice = createSlice({
	name: "noodles",
	initialState: firstState,
	reducers: {
		FirstAdditionofobj(state, actions) {
			state.arrofobj = actions.payload;
		},
		Uniquecountries(state) {
			if (state.arrofobj[0].Country === undefined) {
				state.countries = [];
			} else {
				let allCountries = [];
				for (let i = 0; i < state.arrofobj.length; i++) {
					allCountries.push(state.arrofobj[i].Country);
				}
				let uniqueCountries = [...new Set(allCountries)];
				state.countries = uniqueCountries;
			}
		},
		AdditionOfImages(state, actions) {
			state.ImagesArray = actions.payload;
		},
	},
});

export const noodlesActions = noodlesSlice.actions;
export const store = configureStore(noodlesSlice);
