import './index.css';
import {memo} from "react";
import useFetch from '../../../core/useFetch';
import {List,Link} from '../../tags';
function FooterMenu({keyApi,filter,className,...props}) {
	const [listItem] = useFetch({
		initData:[],
		keyApi:keyApi,
		filter:filter
	});
  return (
    <List className="footer-list"listItem={listItem}itemAttr={{className:"footer-list-item"}}>
    	{
    		(item,index)=>(
			  			<Link to={"/postdetail/"+item.alias}className="footer-list-button">
			  				{item.title}
			  			</Link>	
    		)
    	}
    </List>
  );
}

export default memo(FooterMenu);
