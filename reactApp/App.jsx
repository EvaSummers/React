import React from 'react';

/****
**积木的最底层，最大模块
**author:xiajiang@danlu.com
**data:2016-12-16 15:21:19
**description:the example of the React
**this jsx is made of four parts,including the Header,Sidebar,Content,Footer.
****/

import Header from './component/header.jsx';
/*import Sidebar from './component/sidebar.jsx';
import Content from './component/content.jsx';
import Footer from './component/footer.jsx';*/

//第一层react组件，大的框架
class App extends React.Component{
    render(){
        return (
        	<Header />
        );
    }
}
export default App;