import React from 'react';
class Brand extends React.Component{
    render(){
        return (
        	<a className="navbar-brand" href="#">
        		<img className={styles.brand} src="http://static.danlu.com/mall/optimization/resources/image/serchlogo.jpg" alt="brand" />
        	</a>
        );
    }
}
//自定义样式
const styles = {
	brand:{
		'height':'10px',
	}
}
export default Brand;