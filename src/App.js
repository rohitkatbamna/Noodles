import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./components/card";
import NavbarMain from "./components/navbar";
import { noodlesActions } from "./redux";
import "./scss/app.scss";
import { Fetching } from "./utils/utils";

function App() {
	const arrofobj = useSelector((state) => state.arrofobj);
	const dispatch = useDispatch();
	async function Putdatainstore() {
		let newValue = await Fetching();
		dispatch(noodlesActions.FirstAdditionofobj(newValue));
	}
	useEffect(() => {
		Putdatainstore();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	console.table(arrofobj);
	return (
		<>
			<NavbarMain />
			<div className="container-fluid">
				<div className="row">
					{arrofobj.map((obj) => {
						return (
							<div className="col m-3">
								<Cards obj={obj} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
