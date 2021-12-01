import './index.css';
import {useContext} from 'react';
import {PostContext} from '../index';
export default function PostSummary(){
	const data = useContext(PostContext) ?? {};
	let text = "Đang cập nhật";
	if(data.summary !== undefined){
		text = data.summary;
	};
	return(
		<p className="post-summary">{text}</p>
	)
};