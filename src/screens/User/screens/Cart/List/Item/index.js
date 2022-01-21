import './index.css';
import {useContext,useEffect,useMemo,memo} from 'react';
import {Button,Icon} from '../../../../../../components/';
import useFetch from '../../../../../../core/useFetch';
import {ProductContext,CartProductContext} from './init';
import ProductInputNumber from './InputNumber/';
import ProductThumbnail from './Thumbnail/';
import ProductTitle from './Title/';
import ProductPrice from './Price/';
import ProductOption from './Option/';
export default memo(function({data,index}){
	const [dataFetch,handleFetch] = useFetch({
		initData:{},
		keyApi:'product',
		position:'cart-item'
	});
	useEffect(function(){
		handleFetch.get({
			params:{
				id:data.productId,
				version_id:data.versionId
			},handle:function(results){
	        	if(Array.isArray(results) && results.length > 0){
	        		return results[0];
	        	}
	        }
		})
	},[data])
	if(dataFetch.error === ""){
		return(
			<ProductContext.Provider value={{data:dataFetch.data}}>
				<CartProductContext.Provider value={{data}}>
					<div className="row cart-list-card">
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