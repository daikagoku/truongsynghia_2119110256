import {useContext} from 'react';
import {ProductContext} from '../index';
import Thumbnail from '../../thumbnail';
import {Image} from '../../tags';
export default function ProductThumbnail({imageAttr,thumbnailAttr,...props}){
	const data = useContext(ProductContext) ?? {};
	const _thumbnailAttr = {
		...thumbnailAttr,
		...props
	};
	_thumbnailAttr.thumbnailClass+=" inset-t-10";
	const _imageAttr = {...imageAttr};
	_imageAttr.className+=" product-img img-contain";
	if(data.image !== undefined){
		_imageAttr.src = data.image;
	};
	return(
		<Thumbnail {..._thumbnailAttr}>
    		<Image {..._imageAttr}/>
    	</Thumbnail>
	)
};