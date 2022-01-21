import {useContext} from 'react';
import {UserContext} from '../../init';
import './index.css';
import {Thumbnail,Image,Icon,Button} from '../../../../../../../components/';;
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
		<div className="user-avatar-container">
			<Thumbnail {..._thumbnailAttr}>
	    		<Image {..._imageAttr}/>
	    	</Thumbnail>
	    	<Button className="user-avatar-btn circle-btn">
	    		<Icon className="user-avatar-icon" icon="fas fa-camera" />
	    	</Button>
    	</div>
	)
};