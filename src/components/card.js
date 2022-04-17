import React from "react";
import { Link } from "react-router-dom";
import "../scss/card.scss";

function Cards({ con }) {
	return (
		<Link to={con}>
			<div className="card_all_of_it">
				<div className="card">
					<div className="card-body text-center">
						<h5 className="card-title fw-bold">{con}</h5>
					</div>
				</div>
			</div>
		</Link>
	);
}
export default Cards;
