import React,{memo} from 'react';
import './ProductCardVertical.css';
import {
	ProductThumbnail,
	ProductBookmask,
	ProductTitle,
	ProductCurrendPrice,
	ProductRootPrice,
	ProductOption,
	ProductRating
} from './Product'
export default memo(function ProductCardVertical({dataProduct,...props}){
		const cardAttr= {
			...props,
			className:"card product-card action flex-grow-1"
		};
		return(
				<div {...cardAttr}>
	    			<div className="product-card-head position-relative py-2 px-2">
	    				<ProductThumbnail image={dataProduct.image} />
	    				<ProductBookmask price={dataProduct.price} salePrice={dataProduct.salePrice} />
	    			</div>
	    			<div className="px-2 py-1 ">
	    				<ProductRating id={dataProduct.id}/>
	    				<ProductTitle title={dataProduct.title} alias={dataProduct.alias}/>
	    			</div>
	    			<div className="px-2 pt-1 pb-2 d-flex align-items-center">
	    				<ProductCurrendPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />
	    				<ProductRootPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />	
		    		</div>
	    			<ProductOption className="d-flex flex-column position-absolute top-0 end-0"/>
				</div>
		)
	});
