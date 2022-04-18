import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Variety() {
	const params = useParams();
	const arrofobj = useSelector((state) => state.arrofobj);
	console.log(params);
	console.log(arrofobj);
	const filterObj = arrofobj.filter(
		(obj) => obj.Country === params.country && obj.Brand === params.variety
	);
	console.log(filterObj);
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col text-center">
					<h1 className="fw-bold mb-5">{params.variety} Brand Varieties</h1>
				</div>
			</div>
			<div className="row">
				{filterObj.map((obj) => {
					return (
						<div className="col text-center">
							<div
								className="card ms-auto me-auto mt-5"
								style={{ width: "18rem" }}>
								<div className="card-body">
									<h4 className="fw-bold">{obj.Variety}</h4>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Variety;
