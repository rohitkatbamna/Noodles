import React from "react";
import "../scss/card.scss";

function Cards({ obj }) {
	return (
		<div className="card card_all_of_it">
			<div className="card-body">
				<h5 className="card-title fw-bold">{obj.Variety}</h5>
				<h6 className="card-subtitle mb-2">Brand : {obj.Brand}</h6>
				<h6 className="card-subtitle mb-2">Style : {obj.Style}</h6>
				<h6 className="card-subtitle mb-2">
					Country Of Origin : {obj.Country}
				</h6>
			</div>
		</div>
	);
}
export default Cards;
