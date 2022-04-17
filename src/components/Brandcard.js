import React from "react";

function Brandcard({ obj }) {
	return (
		<>
			<div className="card ms-auto me-auto mt-5" style={{ width: "18rem" }}>
				<div className="card-body">
					<h4 className="card-title fw-bold">{obj.Brand}</h4>
					<h5 className="card-subtitle fw-bold">{obj.Variety}</h5>
				</div>
			</div>
		</>
	);
}
export default Brandcard;
