import './index.css';
import {memo,useState} from "react";
import useFetch from '../../../../../core/useFetch';
import {List} from '../../../../../components/';
import FooterListItem from './Item/';
function FooterList({keyApi,params,filter,className,...props}) {
	const [fetchData] = useFetch({
		initData:[],
		keyApi:keyApi,
		params:params,
		position:"footer-list"
	});
  return (
    <List className="footer-list">
    	{
    		fetchData.results.map(function(item,index){
    			return(
			  		<FooterListItem item={item} key={index} />
    		)})
    	}
    </List>
  );
}

export default memo(FooterList);
/*
{
    		
    	}
    	*/