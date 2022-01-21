import './index.css';
import {memo,useState,useEffect} from "react";
import useFetch from '../../../../../core/useFetch';
import {List} from '../../../../../components/';
import FooterListItem from './Item/';
function FooterList({keyApi,params,filter,className,...props}) {
	const [fetchData,handleFetch] = useFetch({
		initData:[],
		keyApi:keyApi,
		position:"footer-list"
	});
	useEffect(function(){
		handleFetch.get({params})
	},[params])
  return (
    <List className="footer-list">
    	{
    		fetchData.data.map(function(item,index){
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