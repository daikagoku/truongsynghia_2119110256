import './index.css';
import {memo,useState} from "react";
import useFetch from '../../../../../core/useFetch';
import {List} from '../../../../../components/';
import FooterListItem from './Item/';
function FooterList({keyApi,filter,className,...props}) {
	const [listItem] = useFetch({
		initData:[],
		keyApi:keyApi,
		filter:filter
	});
	const [state,setState] = useState();
  return (
    <List className="footer-list">
    	{
    		listItem.map(function(item,index){
    			return(
			  		<FooterListItem onClick={()=>(setState(index))} item={item} key={index} />
    		)})
    	}
    </List>
  );
}

export default memo(FooterList);