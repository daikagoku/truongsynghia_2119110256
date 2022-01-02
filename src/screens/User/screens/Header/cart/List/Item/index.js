import './index.css';
import {useContext,useMemo,memo} from 'react';
import {Button,Icon} from '../../../../../../../components/';
import useFetch from '../../../../../../../core/useFetch';
import {ProductContext,CartProductContext} from './init';
import ProductInputNumber from './InputNumber/';
import ProductThumbnail from './Thumbnail/';
import ProductTitle from './Title/';
import ProductPrice from './Price/';
import ProductOption from './Option/';
export default memo(function({data,index}){
	const [dataFetch] = useFetch({
		initData:{},
		keyApi:'product',
		uriApi:'/detail',
		position:'header-cart-item',
		params:{
			id:data.productId,
			version_id:data.versionId
		}
	});

	dataFetch.results.quantity = data.quantity;
	if(dataFetch.error === undefined){
		return(
		<ProductContext.Provider value={{data:dataFetch.results}}>
			<CartProductContext.Provider value={{data,index}}>
				<div className="row header-cart-list-card">
					<div className="col col-4 ">
						<ProductThumbnail />
					</div>
					<div className="col col-6 ">
						<ProductTitle />		
						<div className="d-flex">
							<ProductPrice sale/>
							<ProductPrice root/>
						</div>
						<ProductInputNumber />
					</div>
					<div className="col col-2 justify-content-center">
						<ProductOption />
					</div>
				</div>
			</CartProductContext.Provider>
		</ProductContext.Provider>
		)
	}else{
		return <></>
	}
})