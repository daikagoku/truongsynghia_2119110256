import {
	ProductThumbnail
} from './Product';
import {useRef} from 'react';
export default function ProductDetailThumbnail({image,...props}) {
	const imageRef = useRef();
	const thumbnailRef = useRef();
	const thumbnailAttr = {
		ref:thumbnailRef,
		onMouseMove:function(event){
			const zoom = 4;
			thumbnailRef.current.style.cursor="zoom-in";
			const thumbnailRect = thumbnailRef.current.getBoundingClientRect();
			 let posX = (event.clientX - thumbnailRect.left) * 100 / thumbnailRect.width ;
			 if(posX > (100 - 100/zoom)){
			 	posX =100-100/zoom;
			 }
			 let posY = ((event.clientY - thumbnailRect.top ) * 100 / thumbnailRect.height) ;
			 if(posY > (100 - 100/zoom)){
			 	posY =100-100/zoom;
			 }
			let x = (zoom - 1)*50 / zoom - posX;
			let y = (zoom - 1)*50 / zoom - posY;
			imageRef.current.style.transform=`scale(${zoom}) translate(${x}%,${y}%)`;
		},onMouseLeave:function(event){
			thumbnailRef.current.style.cursor="";
			imageRef.current.style.transform="";
		}
	};
	const imageAttr = {
		ref:imageRef,	
   		src:image
	};
	return(
   		<ProductThumbnail 
   			thumbnailAttr={thumbnailAttr}
   			imageAttr={imageAttr}
   		/>
	)
}