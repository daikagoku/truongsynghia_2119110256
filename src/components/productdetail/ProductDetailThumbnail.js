import {
	ProductThumbnail
} from '../card/Product';
export default function ProductDetailThumbnail({image,...props}) {
	const thumbnailAttr = {
		'data-type':"thumbnailAttr",
		onMouseMove:function(event){
		}
	};
	return(
   		<ProductThumbnail {...thumbnailAttr}image={image}/>
	)
}