import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Brandcard({ brands }) {
	const images = useSelector((state) => state.ImagesArray);
	console.log(images);
	const RandomNumber = Math.floor(Math.random() * images.length);

	return (
		<>
			<Link to={brands}>
				<div className="card ms-auto me-auto mt-5" style={{ width: "18rem" }}>
					<img
						src={images[RandomNumber].Image}
						class="card-img-top"
						alt="Noodles"
					/>
					<div className="card-body">
						<h4 className="card-title fw-bold">{brands}</h4>
					</div>
				</div>
			</Link>
		</>
	);
}
export default Brandcard;
