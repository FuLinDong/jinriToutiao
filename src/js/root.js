import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import PCIndex from './components/pc/pc_index';

class Root extends React.Component { 
    render(){
    	return(
    		<div>
    		    <MediaQuery query="(min-device-width:1224px)">
    		        <BrowserRouter>
    		            <Switch>
    		                <Route exact path="/" component={ PCIndex }></Route>
    		            </Switch>
    		        </BrowserRouter>
    		    </MediaQuery>
    		    <MediaQuery query="(max-device-width:1224px)">
    		        <PCIndex />
    		    </MediaQuery>
    		</div>
    	);
    }
}
ReactDOM.render(
	<Root />
	,
	document.getElementById('mainContainer')
);
