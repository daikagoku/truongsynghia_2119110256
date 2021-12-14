import {createContext,memo,useRef}from 'react';
import	ProductThumbnail          from './Thumbnail/';
import	ProductBookmask           from './Bookmask/';
import	ProductTitle              from './Title/';
import	ProductPrice       	      from './Price/';
import	ProductOption             from './Option/';
import	ProductRating             from './Rating/';
import './index.css';
export const ProductContext = createContext({});
export default memo(function ProductCardVertical({data,prefix,...props}){
	const thisRef = useRef();
	const cardAttr= {
		...props,
		ref:thisRef,
		className:"card product-card action",
		onDragStart:function(event){
			event.preventDefault()
		},onMouseDown:function(event){
			if(event.target.closest('.button') || event.target.closest('.link')){
				event.preventDefault();
			}else{
				thisRef.current.style.cursor="grab"
			}
		},onMouseUp:function(event){
			thisRef.current.style.cursor=""
		},onMouseLeave:function(event){
			thisRef.current.style.cursor=""
		}
	};
	if(prefix!== undefined){
		cardAttr.className+=" "+prefix+'_product-card';
	};
	return(
		<ProductContext.Provider value = {data}>
			<div {...cardAttr}>
				<div className="product-card-head">
					<ProductBookmask />
					<ProductThumbnail/>
		   		</div>
		   		<div className="px-2 py-1 ">
	    			<ProductRating />
	    			<ProductTitle />
	    		</div>
	    		<div className="px-2 pt-1 pb-2 d-flex align-items-center">
	    			<ProductPrice sale/>
	    			<ProductPrice root/>	
		    	</div>
		    	<ProductOption className="vertical"/>
			</div>
		</ProductContext.Provider>
	)
});	
		