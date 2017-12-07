import React from 'react';
import { Row, Col, BackTop } from 'antd';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PC_NewsContainer from './pc_newscontainer';

export default class PCIndex extends React.Component{
	render(){
		return(
			<div>
			    <PCHeader></PCHeader>
			    <div className="pc_newsContainer">
			        <PC_NewsContainer ></PC_NewsContainer>
			    </div> 
			    <PCFooter></PCFooter>
			    <BackTop ></BackTop >
			</div>
		);
	}
}
