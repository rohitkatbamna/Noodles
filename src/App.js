import React, { useEffect } from "react";
import NavbarMain from "./components/navbar";
import "./scss/app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countrybrand from "./components/countrybrand";
import { noodlesActions } from "./redux";
import { useDispatch } from "react-redux";
import { Fetching, FetchingImages } from "./utils/utils";
import Variety from "./components/variety";
import PageNotFound from "./404page";

function App() {
	const dispatch = useDispatch();
	async function Putdatainstore() {
		let newValue = await Fetching();
		console.log(newValue);
		let newImages = await FetchingImages();
		dispatch(noodlesActions.FirstAdditionofobj(newValue));
		dispatch(noodlesActions.Uniquecountries());
		dispatch(noodlesActions.AdditionOfImages(newImages));
	}

	useEffect(() => {
		Putdatainstore();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div>
				<Router>
					<Routes>
						<Route path="/" element={<NavbarMain />} exact />
						<Route path="/:country" element={<Countrybrand />} />
						<Route path="/:country/:variety" element={<Variety />} />
						<Route path="/404" element={<PageNotFound />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
