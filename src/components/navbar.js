import React from "react";

function NavbarMain() {
	return (
		<div className="mt-3 mb-3">
			<ul className="nav fs-5 justify-content-center">
				<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">
						Active
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">
						Link
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled">Disabled</a>
				</li>
			</ul>
		</div>
	);
}
export default NavbarMain;
