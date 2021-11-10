import {useContext} from 'react';
import {UserContext} from '../index';
import Thumbnail from '../../thumbnail';
import {Image} from '../../tags';
export default function UserThumbnail({imageAttr,thumbnailAttr,...props}){
	const data = useContext(UserContext);
	const _thumbnailAttr = {
		...thumbnailAttr,
		...props
	};
	_thumbnailAttr.thumbnailClass+=" circle";
	const _imageAttr = {...imageAttr};
	_imageAttr.className+=" user-avatar img-cover";
	if(data.avatar !== undefined){
		_imageAttr.src = data.avatar;
	};
	return(
		<Thumbnail {..._thumbnailAttr}>
    		<Image {..._imageAttr}/>
    	</Thumbnail>
	)
};