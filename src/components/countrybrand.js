import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Brandcard from "./Brandcard";

function Countrybrand() {
	const params = useParams();
	console.log(params);
	const arrofobj = useSelector((state) => state.arrofobj);
	console.log(arrofobj[1]);
	let countrybrand = [];
	for (let i = 0; i < arrofobj.length; i++) {
		if (arrofobj[i].Country === params.country) {
			countrybrand.push(arrofobj[i]);
		}
	}
	console.log(countrybrand);

	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col text-center">
					<h1 className="fw-bold">{params.country} Brands</h1>
				</div>
			</div>
			<div className="row">
				{countrybrand.map((obj) => {
					return (
						<div className="col">
							<Brandcard obj={obj} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Countrybrand;
