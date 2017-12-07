import React from 'react';
import { Menu } from 'antd';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCLeft extends React.Component{
	render(){
		const moreMenu = {
			width:"110px",
			textAlign:"center"
		};
		return(
			<div>
			    <a href="#"><img src="https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png" /></a>
			    <Menu mode="vertical">
				    <MenuItem key="tuijian" className="tuijian">
				        推荐
				    </MenuItem>
				    <MenuItem key="redian">
				        热点
				    </MenuItem>
				    <MenuItem key="xiguashipin">
				        西瓜视频
				    </MenuItem>
				    <MenuItem key="tupian">
				        图片
				    </MenuItem>
				    <MenuItem key="keji">
				        科技
				    </MenuItem>
				    <MenuItem key="shehui">
				        社会
				    </MenuItem>
				    <MenuItem key="yule">
				        娱乐
				    </MenuItem>
				    <MenuItem key="youxi">
				        游戏
				    </MenuItem>
				    <MenuItem key="tiyu">
				        体育
				    </MenuItem>
				    <MenuItem key="qiche">
				        汽车
				    </MenuItem>
				    <MenuItem key="caijing">
				        财经
				    </MenuItem>
				    <MenuItem key="gaoxiao">
				        搞笑
				    </MenuItem>
				    <SubMenu key="more"  title={<span><span>更多</span></span>}>
				      <MenuItem key="more1" style={ moreMenu }>段子</MenuItem>
				      <MenuItem key="more2">国际</MenuItem>
				      <MenuItem key="more3">旅游</MenuItem>
				      <MenuItem key="more4">育儿</MenuItem>
				      <MenuItem key="more5">美文</MenuItem>
				      <MenuItem key="more6">美食</MenuItem>
				      <MenuItem key="more7">军事</MenuItem>
				      <MenuItem key="more8">时尚</MenuItem>
				      <MenuItem key="more9">探索</MenuItem>
				      <MenuItem key="more10">养生</MenuItem>
				      <MenuItem key="more11">历史</MenuItem>
				    </SubMenu>
			    </Menu>
			</div>
		);
	}
}
