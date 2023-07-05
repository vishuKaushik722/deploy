import React from 'react';
import NavbarComp from '../components/NavbarComponent';
import CarauselComp from '../components/CarauselComponent';
import FooterComp from '../components/FooterComponent';
import MiddleComp from '../components/MiddleComponent';
import NavbarComponent from '../components/NavbarComp';

function HomeScreen(props) {
	return(
		<>
		<div className='first'>
		<NavbarComponent />
		</div>
		<div className='second'>
		<NavbarComp />
		</div>
		<CarauselComp />
		<MiddleComp className='third' />
		<FooterComp />
		</>
	);
}


export default HomeScreen;