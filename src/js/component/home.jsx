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
		<Navbar/>
		<div className="container">
			<Hero/>
			<div className="row">
				<div className="col">

		<Cards />
		</div>
				<div className="col">

		<Cards/>
		</div>
				<div className="col">

		<Cards/>
		</div>
				<div className="col">

		<Cards/>
		</div>
		</div>
		
		</div>
		<Footer/>
		</>
	);
};

export default Home;
