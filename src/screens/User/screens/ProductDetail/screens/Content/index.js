import {memo,useReducer,useEffect} from 'react';
import {Widget} from '../../../../../../components/';
import useFetch from '../../../../../../core/useFetch';

import './index.css';
import Title from './Title/';
import Price from './Price/';
import Version from './Version/';
import Thumbnail from './Thumbnail/';
import InputNumber from './InputNumber/';
import AddToCartButton from './AddToCartButton/';
import {ProductContext,ProductDetailContext,initData,reducer} from './init';

export default memo(function ProductDetailContent({search,handleSearch,...props}) {
	const [state,dispatch] = useReducer(reducer,initData);
	const [dataFetch,handleFetch] = useFetch({
        initData:{},
        keyApi:'product',
        position:"product-detail"
    });
	useEffect(function(){
		handleFetch.get({
			handle:function(results){
	        	if(Array.isArray(results) && results.length > 0){
	        		return results[0];
	        	}
	        },params:{
	        	alias:handleSearch.get("alias"),
	        	version_alias:handleSearch.get("version_alias")
	        }
	    })
	},[search])
	return(
	<ProductDetailContext.Provider value={[state,dispatch]}>
		<ProductContext.Provider value={dataFetch.data}>
			<div className="row">
				<div className="col col-12 col-md-6">
					<Widget prefix="product-detail-content" className="h-12">
						<Thumbnail />	
					</Widget>
				</div>
				<div className="col col-12 col-md-6">
					<Widget prefix="product-detail-content" className="h-12">
						<Title />
						<Version search={search} handleSearch={handleSearch}/>
						<Price />
						<InputNumber />
						<AddToCartButton />	
					</Widget>
				</div>
			</div>
		</ProductContext.Provider>
	</ProductDetailContext.Provider>
	)
})
