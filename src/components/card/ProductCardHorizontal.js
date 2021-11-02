
import React from 'react';
import '../../style/Product.css'
import {ProductThumbnail,
	ProductBookmask,
	ProductTitle,
	ProductCurrendPrice,
	ProductRootPrice,
	ProductOption,
	ProductRating
} from './Product'
const ProductHorizontal = (function(){
	let count = 0;

	return function({dataProduct,...props}){
		return(
			<div key={count++}className="card product-card flex-row flex-grow-1">
    			<div className="card-head w-50 position-relative">
    				<ProductThumbnail img={dataProduct.img} />
    				<ProductBookmask price={dataProduct.price}salePrice={dataProduct.salePrice} />
    			</div>
    			<div className="card-left w-50">
    				<div className="px-2 py-1 card-body hs-2x hs-6em">
    					<ProductRating />
    					<ProductTitle title={dataProduct.title}/>
	    			</div>
	    			<div className="px-2 py-1 card-foot">
						<ProductCurrendPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />
	    				 <ProductRootPrice price={dataProduct.price}salePrice={dataProduct.salePrice} />	    			</div>
    			</div>
    			<ProductOption className="d-flex position-absolute bottom-0 end-0"/>
			</div>
		)
	};	
})();
export default ProductHorizontal;