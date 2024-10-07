import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Cards from "./Cards";
import Hero from "./Hero";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Hero />

				<Cards />

			</div>
			<Footer />
		</>
	);
};

export default Home;
