import {useContext,memo} from 'react';
import {CartProductContext} from '../init';
import {Thumbnail,Image} from '../../../../../../../../components/';
export default memo(function ProductThumbnail({imageAttr,thumbnailAttr,children,...props}){
	const {data} = useContext(CartProductContext);
	let version = {}
	if(Array.isArray(data.versions)){
		version=data.versions.find(function(_version,_index){
			return _version.id===data.version;
		})
	};
	const _thumbnailAttr = {
		...thumbnailAttr,
		...props
	};
	_thumbnailAttr.thumbnailClass+=" inset-t-10";
	const _imageAttr = {...imageAttr};
	_imageAttr.className+=" product-img img-contain";
	if(version !== undefined && version.image !== undefined){
		_imageAttr.src = version.image;
	};
	return(
		<Thumbnail {..._thumbnailAttr}>
    		<Image {..._imageAttr}/>
    		{children}
    	</Thumbnail>
	)
});