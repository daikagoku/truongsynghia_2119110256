import {memo,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import useFetch from '../../../../../../core/useFetch';
import {Widget} from '../../../../../../components/';
import ThumbnailContent from './screens/';
function ProductDetailThumbnail({args,...props}){
	const [dataFetchVersion] = useFetch({
        initData:{},
        keyApi:'image',
        uriApi:'/product',
        position:"product-detail-thumbnail",
        params:{
        	position_alias:"product-version",
        	product_alias:args[2],
        	version_alias:args[3]
        }
    });
	const [dataFetch] = useFetch({
        initData:[],
        keyApi:'image',
        uriApi:'/product',
        position:"product-detail-thumbnail",
        params:{
        	position_alias:"product-album",
        	product_alias:args[3],
        	version_alias:args[4]
        }
    });
    const list = useMemo(function(){
    	let isArray1 = Array.isArray(dataFetchVersion.results);
    	let isArray2 = Array.isArray(dataFetch.results)
    	if(isArray1 && isArray2){
			return dataFetchVersion.results.concat(dataFetch.results);
    	}else if(isArray1){
    		return dataFetchVersion.results;
    	}else if(isArray2){
    		 return dataFetch.results;
    	}else {
    		return [];
    	}
    },[dataFetchVersion.results,dataFetch.results]);
	return(
		<div {...props}>
		<Widget prefix="product-detail-thumbnail" className="h-12">
			<ThumbnailContent listItem={list}/>
		</Widget>
		</div>
	)
}
export default memo(ProductDetailThumbnail);