import {useContext,useMemo} from 'react';
import {ProductContext} from '../init';
import {Thumbnail,Image} from '../../../../../../../components/';
export default function ProductThumbnail({imageAttr,thumbnailAttr,children,...props}){
	const data = useContext(ProductContext);
	const _thumbnailAttr = {
		...thumbnailAttr,
		...props
	};
	_thumbnailAttr.thumbnailClass+=" inset-t-10";
	const _imageAttr = {...imageAttr};
	_imageAttr.className+=" product-img img-contain";
	_imageAttr.src = data.image;
	return(
		<Thumbnail {..._thumbnailAttr}>
    		<Image {..._imageAttr}/>
    		{children}
    	</Thumbnail>
	)
};