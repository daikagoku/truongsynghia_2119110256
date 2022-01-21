import {memo,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import useFetch from '../../../../../../core/useFetch';
import {Widget} from '../../../../../../components/';
import ThumbnailContent from './screens/';
function ProductDetailThumbnail({search,handleSearch,...props}){
	const [dataFetch] = useFetch({
        initData:[],
        keyApi:'image',
        uriApi:'/product',
        position:"product-detail-thumbnail",
        params:{
        	position:["product-version","product-album"]
        },
        search:search
    });
	return(
		<div {...props}>
		<Widget prefix="product-detail-thumbnail" className="h-12">
			<ThumbnailContent listItem={dataFetch.data}/>
		</Widget>
		</div>
	)
}
export default memo(ProductDetailThumbnail);