
import {Thumbnail,Image} from '../../../../../components/';
import {useContext} from 'react';
import {PostContext} from '../index';
import './index.css';
export default function PostThumbnail(){
	const dataPost = useContext(PostContext) ?? {};
	return(
		<Thumbnail thumbnailClass="post-thumbnail inset-t-8">
    		<Image className="post-img img-cover"src={dataPost.image}/>
    	</Thumbnail>
	)
};
