import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Menu,Icon, Modal, Button, Tabs, Form, Input, Checkbox, message,  } from 'antd';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
class PCHeader extends React.Component{
	constructor(){
		super();
		this.state = {
			 current: 'mail',
			 modalVisible: false,
			 action: '',
			 hasLogined: false, 
			 userNickName: '',
			 userid: 0,
		}
	}
	componentWillMount(){
		if(localStorage.userid){
			this.setState({
				hasLogined: true,
			    userNickName: localStorage.userNickName,
			    userid: localStorage.userid
			});
		}
		console.log(this.state.userNickName);
	}
	setmodalVisible(value){
		this.setState( { modalVisible: value } );
	}
	handleOk(){
		this.setmodalVisible(false);
	}
	handleCancel(){
		this.setmodalVisible(false);
	}
	showModal(){
		this.setmodalVisible(true);
	}
	changeTab(key){
		if (key==1){
			this.setState({action: 'login'});
		}else if(key==2){
			this.setState({action: 'register'});
		}
	}
	handleSubmit(e){
		//页面开始向 API 进行提交数据
		e.preventDefault();
		var formData = this.props.form.getFieldsValue();
		const values = [{"username": formData.userName},{"password": formData.password}];
		const myFetchOptions = {
			method: 'POST',
//			body:values,
		};
//		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action,myFetchOptions)
//		.then(data=>{
//			this.setState({userNickName:data.NickUserName, userid: data.UserId});
//			localStorage.userid = data.UserId;
//			console.log(localStorage.userid);
//			localStorage.userNickName = data.NickUserName;
//			console.log(localStorage.userNickName);
//			
//			this.setState({hasLogined:true});
//		});
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+"&username="+formData.userName+"&password="+formData.password,myFetchOptions)
		.then(data=>{
			this.setState({userNickName: formData.userName, userid: data.UserId});
			localStorage.userid = formData.userName;
			console.log(localStorage.userid);
			localStorage.userNickName = formData.userName;
			console.log(localStorage.userNickName);
			
			this.setState({hasLogined:true});
		});
		if(this.state.action == "login"){
			this.setState({hasLogined: true});
			console.log(this.state.hasLogined);
		}
		message.success("登录成功！");
		this.setmodalVisible(false);

	}
	handleRegister(e){
		//页面开始向 API 进行提交数据
		e.preventDefault();
		let formData = this.props.form.getFieldsValue();
		const values = ["r_username":formData.r_userName,"r_password":formData.r_password,"r_confirmPassword":formData.r_confirmPassword];
		console.log(JSON.stringify(values));
		const myFetchOptions = {
			method: 'POST',
			body:JSON.stringify(values),
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action,myFetchOptions)
		.then(data=>{
			this.setState({userNickName:formData.r_userName, userid: data.UserId});
			localStorage.userid = formData.r_userName;
			localStorage.userNickName = formData.r_userName;
		});
		if(this.state.action == "register"){
			this.setState({hasLogined: true});
			console.log(this.state.hasLogined);
		}
		message.success("注册成功...等待自动登录...loading...！");
		this.setmodalVisible(false);
	};
	
	logout(){
		console.log('退出');
		localStorage.userNickName = "";
	    localStorage.userid = "";
		this.setState({ hasLogined: false });
	    
	}
	
	render(){
		const { getFieldDecorator } = this.props.form;
		const divier = {
			height:"1px",
			backgroundColor:"rgb(236, 246, 253)"
		};
		const faWenstyleN = {
			display:"none"
		};
		const faWenstyleI = {
			display:"block"
		};
		let faWenstyle = this.state.hasLogined ? faWenstyleI : faWenstyleN;
		
		const loginStylen = {
			backgroundColor:"#FFFFFF"
		};
		const loginStyler = {
			backgroundColor:"#F2F2F2"
		};
		let loginColor = this.state.hasLogined ? loginStylen : loginStyler;
		
		const userShow = this.state.hasLogined ?
		<SubMenu title={<span><Icon type="github" /> {`${ this.state.userNickName }` }</span>} >
			<MenuItemGroup> 
				<Menu.Item key="setting:1">我的收藏</Menu.Item>
				<Menu.Item key="setting:2">我的关注</Menu.Item>
				<Menu.Item key="setting:3">我的粉丝</Menu.Item>
				<Menu.Item key="setting:4" style={divier}></Menu.Item>
				<Menu.Item key="logout" >
				    <div onClick={this.logout.bind(this)}>&nbsp;退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</div>
				</Menu.Item>
			</MenuItemGroup>
        </SubMenu>
		:
		<MenuItem key="login" style={ loginColor }>
		    <div onClick={this.showModal.bind(this)} style={ loginColor }> 登录</div>  
	    </MenuItem >;
		
		
		return(
			<div>
			    <Row id="header">
			        <Col span={1}></Col>
			        <Col span={5}>
			            <Menu id="clearAfter1" mode="horizontal" selectedKeys={[this.state.current]}>
			                <MenuItem key="download" className="headerBack">
			                    下载APP
			                </MenuItem >
			                <MenuItem key="hangzhou" className="headerBack">
			                     杭州
			                </MenuItem >
			                <MenuItem key="tainqi" className="headerBack">
			                     天气
			                </MenuItem >
			            </Menu>
			        </Col>
			        <Col span={9}></Col>
			        <Col span={9}>
			            <Menu id="clearAfter2"  mode="horizontal" selectedKeys={[this.state.current]}>
			               <MenuItem key="fawen" style={faWenstyle}>
			                    发文
			                </MenuItem >
			               {userShow}
			                <Modal visible={this.state.modalVisible} onOk={()=>this.handleOk(false)} onCancel={()=>this.handleCancel(false)} okText="退出" >
						        <Tabs defaultActiveKey="1" onChange={this.changeTab.bind(this)}>
								    <TabPane tab={<span><Icon type="github" />登录</span>} key="1">
									    <Form onSubmit={ this.handleSubmit.bind(this) } className="login-form">
									        <FormItem>
									          {getFieldDecorator('userName', {
									            rules: [{ required: true, message: '手机号' }],
									          })(
									            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="手机号" />
									          )}
									        </FormItem>
									        <FormItem>
									          {getFieldDecorator('password', {
									            rules: [{ required: true, message: '验证码' }],
									          })(
									            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="验证码" />
									          )}
									        </FormItem>
									        <FormItem>
									          {getFieldDecorator('password', {
									            rules: [{ required: true, message: '手机验证码' }],
									          })(
									            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="手机验证码" />
									          )}
									        </FormItem>
									        <FormItem>
									          {getFieldDecorator('remember', {
									            valuePropName: 'checked',
									            initialValue: true,
									          })(
									            <Checkbox>我已阅读并同意用户协议和隐私条款</Checkbox>
									          )}
									        </FormItem>
									        <Button type="primary" htmlType="submit" className="login-form-button">
									            登录
									         </Button>
									         <div className="baseLogin">
										         <ul class="sns-login"> 
											         <li data-pid="mail_phone" class="sns  mail-login"> <span>帐号</span> </li> 
											         <li class="sns weibo-login" data-pid="sina_weibo"> <span>微博</span> </li> 
											         <li class="sns qq-login" data-pid="qzone_sns"> <span>QQ</span> </li> 
											         <li class="sns weixin-login" data-pid="weixin"> <span>微信</span> </li>
										         </ul>
									         </div>
									    </Form>
								    </TabPane>
								    <TabPane tab={<span><Icon type="usergroup-add" />注册</span>} key="2">
								      <Form onSubmit={ this.handleRegister.bind(this) } className="login-form">
									        <FormItem>
									          {getFieldDecorator('r_userName', {
									            rules: [{ required: true, message: '手机号' }],
									          })(
									            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="手机号" />
									          )}
									        </FormItem>
									        <FormItem>
									          {getFieldDecorator('r_password', {
									            rules: [{ required: true, message: '验证码' }],
									          })(
									            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="text" placeholder="验证码" />
									          )}
									        </FormItem>
									        <FormItem>
									          {getFieldDecorator('r_confirmPassword', {
									            rules: [{ required: true, message: '手机验证码' }],
									          })(
									            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="text" placeholder="手机验证码" />
									          )}
									        </FormItem>
									        <FormItem>
									          {getFieldDecorator('remember', {
									            valuePropName: 'checked',
									            initialValue: true,
									          })(
									            <Checkbox>我已阅读并同意用户协议和隐私条款</Checkbox>
									          )}
									        </FormItem>
									        <Button type="primary" htmlType="submit" className="login-form-button">
									            注册
									         </Button>
									          <div className="baseLogin">
									           <p>其他登录方式</p>
										         <ul class="sns-login"> 
											         <li data-pid="mail_phone" class="sns  mail-login"> <span>帐号</span> </li> 
											         <li class="sns weibo-login" data-pid="sina_weibo"> <span>微博</span> </li> 
											         <li class="sns qq-login" data-pid="qzone_sns"> <span>QQ</span> </li> 
											         <li class="sns weixin-login" data-pid="weixin"> <span>微信</span> </li>
										         </ul>
									         </div>
									    </Form>
								    </TabPane>
								</Tabs>
						    </Modal>
						    
			                <MenuItem key="fankui">
			                     反馈
			                </MenuItem >
			                <MenuItem key="qt" >
			                     侵权投诉
			                </MenuItem >
			                <SubMenu title={<span>头条产品</span>} >
					          <MenuItemGroup> 
					            <Menu.Item key="setting:1">问答</Menu.Item>
					            <Menu.Item key="setting:2">头条号</Menu.Item>
					            <Menu.Item key="setting:3">图虫</Menu.Item>
					            <Menu.Item key="setting:4">正版图案</Menu.Item>
					            <Menu.Item key="setting:5">广告投放</Menu.Item>
					            <Menu.Item key="setting:6">懂车帝</Menu.Item>
					          </MenuItemGroup>
					        </SubMenu>
			            </Menu>
			        </Col>
			    </Row>
			</div>
		);
	}
}
export default PCHeader = Form.create({})(PCHeader);
