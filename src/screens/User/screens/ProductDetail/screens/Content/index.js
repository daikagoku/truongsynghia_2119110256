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

export default memo(function ProductDetailContent({args,...props}) {
	const [state,dispatch] = useReducer(reducer,initData);
	const [dataFetch] = useFetch({
        initData:{},
        keyApi:'product',
        uriApi:'/detail',
        position:"product-detail",
        params:{
        	alias:args[3],
        	version_alias:args[4]
        }
    });

	return(
	<ProductDetailContext.Provider value={[state,dispatch]}>
		<ProductContext.Provider value={dataFetch.results}>
			<div {...props}>
				{
					<Widget prefix="product-detail-content" className="h-12">
						<Title />
						<Version />
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
