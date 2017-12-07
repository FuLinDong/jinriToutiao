import React from 'react';
import { Row, Col, Carousel } from 'antd';
import PCLeft from './pc_left';
import RightNewComponent from './pc_right';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';
import PCNewsBlock from './pc_news_block';

export default class PC_NewsContainer extends  React.Component{
	render(){
		return(
			<Row>
			    
			    <Col span={1} class="pc_left" id="menuLeft">
			        <PCLeft></PCLeft>
			    </Col>
			    <Col span={5}></Col>
			    <Col span={10} class="carousel">
			    <Carousel autoplay>
				    <div><img src="./src/images/carousel_1.jpg" /><span>足球</span></div>
				    <div><img src="./src/images/carousel_2.jpg" /><span>普京</span></div>
				    <div><img src="./src/images/carousel_3.jpg" /><span>冷</span></div>
				    <div><img src="./src/images/carousel_4.jpg" /><span>共享单车</span></div>
				    <div><img src="./src/images/carousel_5.jpg" /><span>送老兵,情谊深</span></div>
				</Carousel>
				    <PCNewsBlock type={ "keji" } count={ 5 }  ></PCNewsBlock>
				    <PCNewsBlock type={ "guonei" } count={ 5 }  ></PCNewsBlock>
				    <PCNewsBlock type={ "yule" } count={ 5 }  ></PCNewsBlock>
				    <PCNewsBlock type={ "caijing" } count={ 5 }  ></PCNewsBlock>
				    <PCNewsBlock type={ "guoji" } count={ 5 }  ></PCNewsBlock>
				    <PCNewsBlock type={ "shehui" } count={ 5 }  ></PCNewsBlock>
			    </Col>
			    <Col span={1}></Col>
			    <Col span={6}>
			        <RightNewComponent ></RightNewComponent> 
			        <PCNewsImageBlock title={"24小时热文"} type={ "top" } count={ 20 }  IamgeWidth = "60px" ImageHeight="60px" />
			        <PCProduct title={ "友情链接" } ></PCProduct>
			    </Col>
			    <Col span={1}></Col>
			</Row>
		);
	}
}
