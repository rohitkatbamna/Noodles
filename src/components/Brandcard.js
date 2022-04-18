import React from "react";

function Brandcard({ brands }) {
	return (
		<>
			<div className="card ms-auto me-auto mt-5" style={{ width: "18rem" }}>
				<div className="card-body">
					<h4 className="card-title fw-bold">{brands}</h4>
				</div>
			</div>
		</>
	);
}
export default Brandcard;
