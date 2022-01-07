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
    console.log(dataFetchVersion,dataFetch)
    const list = useMemo(function(){
    	const newList = [...dataFetch.data];
    	if(dataFetchVersion.data.id !== undefined){
    		newList.unshift(dataFetchVersion.data);
    	}
    	return newList;
    },[dataFetchVersion.data,dataFetch.data]);
	return(
		<div {...props}>
		<Widget prefix="product-detail-thumbnail" className="h-12">
			<ThumbnailContent listItem={list}/>
		</Widget>
		</div>
	)
}
export default memo(ProductDetailThumbnail);