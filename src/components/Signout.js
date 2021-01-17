import React from "react";
const Nav = ({handleLogout}) => {
	return (
		<section className="nav">
				<button onClick={handleLogout}>Se Déconneter</button>
			</section>
		
	);
};
export default Nav;