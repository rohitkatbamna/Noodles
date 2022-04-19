import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Brandcard from "./Brandcard";
import PageNotFound from "../404page";
function Countrybrand() {
	const params = useParams();
	console.log(params);
	const arrofobj = useSelector((state) => state.arrofobj);
	let countrybrand = [];
	for (let i = 0; i < arrofobj.length; i++) {
		if (arrofobj[i].Country === params.country) {
			countrybrand.push(arrofobj[i]);
		}
	}
	if (countrybrand[0] === undefined) {
		return (
			<>
				<div>
					<PageNotFound />
				</div>
			</>
		);
	}
	let brands = [];
	for (let i = 0; i < countrybrand.length; i++) {
		brands.push(countrybrand[i].Brand);
	}
	let uniquebrands = [...new Set(brands)];
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col text-center">
					<h1 className="fw-bold">{params.country} Brands</h1>
				</div>
			</div>
			<div className="row">
				{uniquebrands.map((brands) => {
					return (
						<div className="col">
							<Brandcard brands={brands} />
						</div>
					);
				})}
			</div>
		</div>
	);
}
export default Countrybrand;
