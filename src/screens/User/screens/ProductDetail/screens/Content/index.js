import {memo,useReducer} from 'react';
import {Widget} from '../../../../../../components/';
import useFetch from '../../../../../../core/useFetch';

import './index.css';
import Title from './components/Title/';
import Price from './components/Price/';
import Version from './components/Version/';
import InputNumber from './components/InputNumber/';
import AddToCartButton from './components/AddToCartButton/';
import {ProductContext,ProductDetailContext,initData,reducer} from './init';

export default memo(function ProductDetailContent({search,handleSearch,...props}) {
	const [state,dispatch] = useReducer(reducer,initData);
	const [dataFetch] = useFetch({
        initData:{},
        keyApi:'product',
        position:"product-detail",
        handle:function(results){
        	if(Array.isArray(results) && results.length > 0){
        		return results[0];
        	}
        },
        search:search
    });

	return(
	<ProductDetailContext.Provider value={[state,dispatch]}>
		<ProductContext.Provider value={dataFetch.data}>
			<div {...props}>
				{
					<Widget prefix="product-detail-content" className="h-12">
						<Title />
						<Version handleSearch={handleSearch}/>
						<Price />
						<InputNumber />
						<AddToCartButton />	
					</Widget>
				}
			</div>
		</ProductContext.Provider>
	</ProductDetailContext.Provider>
	)
})
