
import {useState,useEffect} from 'react';
import Fetch from '../../core/Fetch';
import Widget from '../widget/Widget';
import {
	ProductBookmask,
	ProductTitle,
	ProductCurrendPrice,
	ProductRootPrice,
	ProductOption,
	ProductRating
} from './Product';
import ProductDetailThumbnail from './ProductDetailThumbnail';
export default function ProductDetail({alias,...props}){
	const dataProduct = Fetch({
		keyApi:'product',
		initData:{},
		handle:function(data){
			return data.filter(function(item){
				return item.alias === alias;
			})[0];
		}
	})
	return(
		<div className="row">
   			<div className="col col-6 px-0">
   			<Widget className="h-100">
   				<ProductDetailThumbnail image={dataProduct.image}/>
   				<ProductBookmask className="fs-1x fs-4" price={dataProduct.price} salePrice={dataProduct.salePrice} />
   			</Widget>
   			</div>
   			<div className="col col-6">
	   			<Widget className="h-100">
	   				<div className="my-2 w-100">
		    			<ProductTitle title={dataProduct.title} alias={dataProduct.alias}/>
	    				<ProductRating className="mx-1"id={dataProduct.id}/>
	    			</div>
	    			<div className="my-2 w-100 d-flex  align-items-center">
						<ProductCurrendPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />
		    			<ProductRootPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />		    			
	    			</div>
    			</Widget>
   			</div>
		</div>
	)
};