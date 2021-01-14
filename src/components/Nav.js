import React from "react";
const Nav = ({handleLogout}) => {
	return (
		<section className="hero">
			<nav>
				<h2>Bonjour 😁 </h2>
				<button onClick={handleLogout}>Se Déconncter</button>
			</nav>
			</section>
		
	);
};
export default Nav;