import React from 'react';

export default class RightNewComponent extends React.Component{
  render() {
    return (
        <div className="tt-autocomplete">
	        <div className="tt-input tt-input-group tt-input-group--append">
		        <input type="text" placeholder="大家都在搜：吴尊被批没才华" autoComplete="off" className="tt-input__inner" /> 
		        <div className="tt-input-group__append">
		      	    <button type="button" className="tt-button">
		      	       <span>搜索</span>
		      	    </button>
		      	</div>
	      	</div> 
	      	<a href="http://report.12377.cn:13225/toreportinputNormal_anis.do" target="_blank" class="bui-box report">
		      	<div class="bui-left img-holder">
		      	    <img src="//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png" alt="" />
		      	</div> 
		      	<div class="bui-left info">
			      	<p class="title">网上有害信息举报专区</p>
			      	<p class="tel">举报电话：12377</p>
		      	</div>
	      	</a>
      	</div>	
    );
  }
};