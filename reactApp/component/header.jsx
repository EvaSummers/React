import React from 'react';
import Brand from './brand.jsx';
class Header extends React.Component{
    render(){
        return (
        	<nav className="navbar navbar-default navbar-static-top" role="navigation"> 
        		<Brand />
        	</nav>
        );
    }
}
export default Header;