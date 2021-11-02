import './FooterInfo.css';
import {memo} from 'react';
import Fetch from '../../core/Fetch';
import {List,Item,Button,Link,Icon} from '../../tags/Tags';
function FooterInfo({listItem,className,...props}) {
	const infos = Fetch({
    initData:{},
    keyApi:"info",
    handle:function(data){
       const newData = {};
       data.forEach(function({key,...item},index){
        	if(!Array.isArray(newData[key])){
							newData[key]          = []
        	};
        	newData[key].push(item);
       })
       return newData;
    }
  });
  const attr = {
  	copyright:{
  		title:"Copyright",
  		icon:"far fa-copyright"
  	},
    address:{
    	title:"Địa chỉ",
      icon:"fas fa-map-marker-alt"
    },
    phone:{
    	title:"Hotline",
    	icon:"fas fa-phone-alt"
    }
  };
  function InfoItem({className,buttonClass,icon,title,info,...props}){
    const itemAttr={
    	...props,
      className:"footer-info-item"
    };
    if(className!== undefined){
      itemAttr.className+=" "+className;
    };
    const buttonAttr={
      className:"footer-info-button"
    };
    if(buttonClass!== undefined){
      buttonAttr.className+=" "+buttonClass;
    };
    return(
        <Item {...itemAttr}>
        	<Icon icon={icon} className="footer-info-icon"/>
        	<span className="d-flex me-1">{title}:</span>
			  	<span className="d-flex flex-column">
			  			{info.map(function({title,src},i){
			  				return(
				  					<Link to={src}key={i}{...buttonAttr}>
								  		{title}
								  	</Link>
							  )
			  			})}
			  	</span>	
			  </Item>
    )
  };
  return (
    <List className="m-0 p-0 w-100 footer-info">
    	{
    		Object.keys(attr).map(function(key,index){
          if(infos[key] !== undefined){
              return InfoItem({
                ...attr[key],
                info:infos[key],
                buttonClass : key,
                key:index

            });
          }else{
            return (<></>)
          }
      	})
    	}
    </List>
  );
}

export default memo(FooterInfo);
