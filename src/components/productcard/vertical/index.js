import React,{memo} from 'react';
import {
	ProductContext,
	ProductThumbnail,
	ProductBookmask,
	ProductTitle,
	ProductCurrentPrice,
	ProductRootPrice,
	ProductOption,
	ProductRating
} from '../../product';
import './index.css';
export default memo(function ProductCardVertical({data,prefix,...props}){
	const cardAttr= {
		...props,
		className:"card product-card action"
	};
	if(prefix!== undefined){
		cardAttr.className+=" "+prefix+'_product-card';
	};
	return(
		<ProductContext.Provider value ={data}>
			<div {...cardAttr}>
				<div className="product-card-head position-relative py-2 px-2">
	    			<ProductThumbnail />
	    			<ProductBookmask />
	    		</div>
	    		<div className="px-2 py-1 ">
	    			<ProductRating />
	    			<ProductTitle />
	    		</div>
	    		<div className="px-2 pt-1 pb-2 d-flex align-items-center">
	    			<ProductCurrentPrice />
	    			<ProductRootPrice />	
		    	</div>
		    	<ProductOption className="d-flex flex-column position-absolute top-0 end-0"/>
			</div>
		</ProductContext.Provider>
	)
});
