import React from "react";
import { useSelector } from "react-redux";
import Cards from "./card";

function NavbarMain() {
	const countries = useSelector((state) => state.countries);
	return (
		<div className="mt-3 mb-3">
			<ul className="nav fs-5 justify-content-center">
				{countries.map((con) => {
					return (
						<li className="nav-item">
							<p className="nav-link active" aria-current="page" href="#">
								<Cards con={con} />
							</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default NavbarMain;
