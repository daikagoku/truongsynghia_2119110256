import './index.css';
import {useContext} from 'react';
import {PostContext} from '../index';
export default function PostSummary(){
	const dataPost = useContext(PostContext) ?? {};
	let text = "Đang cập nhật";
	if(dataPost.summary !== undefined){
		text = dataPost.summary;
	};
	return(
		<p className="post-summary">{text}</p>
	)
};