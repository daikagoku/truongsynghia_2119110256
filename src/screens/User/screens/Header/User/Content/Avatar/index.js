import {useContext} from 'react';
import {UserContext} from '../../init';
import {Thumbnail,Image} from '../../../../../../../components/';;
export default function UserThumbnail({imageAttr,thumbnailAttr,...props}){
	const [data] = useContext(UserContext);
	const _thumbnailAttr = {
		...props
	};
	_thumbnailAttr.thumbnailClass+=" circle";
	const _imageAttr = {...imageAttr};
	_imageAttr.className+=" user-avatar img-cover";
	if(data && data.avatar !== undefined){
		_imageAttr.src = data.avatar;
	};
	return(
		<Thumbnail {..._thumbnailAttr}>
    		<Image {..._imageAttr}/>
    	</Thumbnail>
	)
};