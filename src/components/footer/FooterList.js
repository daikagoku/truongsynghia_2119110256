import './FooterList.css';
import {memo} from "react";
import Fetch from '../../core/Fetch';
import {List,Item,Button,Link,Icon} from '../../tags/Tags';
function FooterMenu({keyApi,filter,className,...props}) {
	const listItem = Fetch({
		initData:[],
		keyApi:keyApi,
		filter:filter
	});
  return (
    <List className="footer-list"listItem={listItem}>
    	{
    		(item,index)=>(
    			<Item key={index}className="footer-list-item">
			  			<Link to={"/postdetail/"+item.alias}className="footer-list-button">
			  				{item.title}
			  			</Link>	
			  		</Item>
    		)
    	}
    </List>
  );
}

export default memo(FooterMenu);
