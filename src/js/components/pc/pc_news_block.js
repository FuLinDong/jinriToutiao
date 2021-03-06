import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
export default class PCNewsBlock extends React.Component{
	constructor(){
		super();
		this.state={
			news: "",
		}
	}
	componentWillMount(){
		const myFetchOptions = {
			method: "POST"
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			this.setState({news: json});
		});
	}
	
    render(){
    	const  styleImage = {
    		width: this.props.IamgeWidth,
    		height: this.props.ImageHeight,
    		overflow: 'hidden',
    	};
//  	const stypeH3 = {
//			whiteSpace: 'nowrap',
//			overflow: "hidden",
//			textOverflow: 'ellipsis'
//		};
        const {news} = this.state;
        const newsList = news.length 
        ?
        news.map((newsItem,index)=>(
            <div key={ index } >
	        	<div >
	        	    <Link to={`details/${ newsItem.uniquekey }`} target="_blank">
	        	        <div>
	        	            <img src={ newsItem.thumbnail_pic_s } alt={ newsItem.title } />
	        	        </div>
	        	        <div>
	        	            <h3>{ newsItem.title }</h3>
	        	            <p><span>{ newsItem.realtype }</span><span>{ newsItem.date }</span><span>{ newsItem.author_name }</span></p>
	        	        </div>
	        	    </Link>
	        	</div>
	        	<div className="divier"></div>
        	</div>
        ))
        :
        "未能获取到数据!";	
        
    	return(
    		<div className="NewsList">
    		    <Card title={this.props.title} className="NewsList">
    		       { newsList }
    		    </Card>
    		</div>
    	);
    }
}
