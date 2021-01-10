import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Sidebar extends Component {
	render() {
		return(
			<nav class="col-md-2 d-none d-md-block bg-light sidebar">
	  			
	    		<ul class="nav flex-column">
	    			<li className="nav-item">
	    				<NavLink to="/" onlyActiveOnIndex={true} className="nav-link" activeClassName="active">
	    					<i class="fas fa-home"></i>
	    					 Home
	    				</NavLink>
	    			</li>
	    			<li>
                		<NavLink to="/dashboard" className="nav-link" activeClassName="active">
                			<i class="fas fa-ticket-alt"></i>
                			Dashboard
                		</NavLink>
            		</li>
            		
	    		</ul>
			</nav>
		);
	}
}
