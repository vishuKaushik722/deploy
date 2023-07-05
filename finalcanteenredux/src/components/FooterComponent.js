import React from 'react';
import { Link } from 'react-router-dom';

const FooterComp = () => {
	return(
		<footer className="footer page-footer font-small stylish-color-dark pt-4">

		  <div className="container text-center text-md-left">

		    <div className="row">

		      <div style={{color: "#fff"}} className="col-md-4 mx-auto">

		        <h4  className="font-weight-bold text-uppercase mt-3 mb-4"> <span className="fa fa-cutlery"></span> AKGEC CANTEEN</h4>
		        <p>Welcome to the official AKGEC CANTEEN website. Here you can order online in sitting in your classNameroom. So have good food guys...</p>

		      </div>

		      <hr className="clearfix w-100 d-md-none" />

		      
		      <hr className="clearfix w-100 d-md-none" />

		      <div style={{color: "#fff"}} className="col-md-2 mx-auto">

		        <h4 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h4>

		        <ul className="list-unstyled">
		          <li>
		            <Link to={'/cs-it'}>CS/IT Canteen</Link>
		          </li>
		          <li>
		            <Link to={'/me'}>ME Canteen</Link>
		          </li>
		          <li>
		            <Link to={'/cs-it'}>About</Link>
		          </li>
		          <li>
		            <Link to={'/cs-it'}>Contact</Link>
		          </li>
		        </ul>

		      </div>

		      <hr className="clearfix w-100 d-md-none" />

		    </div>

		  </div>

		  <hr />

		  <ul className="list-unstyled list-inline text-center py-2">
		    <li className="list-inline-item">
		      <h5 style={{color: "#fff"}} className="mb-1">Order Online Here</h5>
		    </li>
		    <li className="list-inline-item">
		      <a href="#!" className="btn btn-danger btn-rounded">Sign up!</a>
		    </li>
		  </ul>

		  <hr />

		  <ul id="bottom-icons" className="list-unstyled list-inline text-center" >
		    <li className="list-inline-item">
		      <Link to={'/cs-it'} className="btn-floating btn-fb mx-1">
		        <i className="fa fa-facebook"></i>
		      </Link>
		    </li>
		    <li className="list-inline-item">
		      <Link to={'/cs-it'} className="btn-floating btn-tw mx-1">
		        <i className="fa fa-instagram"> </i>
		      </Link>
		    </li>
		    <li className="list-inline-item">
		      <Link to={'/cs-it'} className="btn-floating btn-dribbble mx-1">
		        <i className="fa fa-dribbble"></i>
		      </Link>
		    </li>
		  </ul>
		 
		<div id="lastFooter" className="container-fluid">
		  <div className="footer-copyright text-center py-3 ">© Copyright AKGEC Canteen Services. All Rights Reserved
		   
		  </div>
		</div>
	</footer>
	)
}

export default FooterComp;