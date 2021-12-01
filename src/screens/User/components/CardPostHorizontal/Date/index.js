import './index.css';
import {useContext} from 'react';
import {PostContext} from '../index';
import {Icon} from '../../../../../components/';
export default function PostDate(){
	const dataPost = useContext(PostContext) ?? {};
	let text = "Đang cập nhật";
	if(dataPost.date !== undefined){
		text = dataPost.date;
	};
	return(
		<div className={"post-date "}>
			<Icon className="post-icon fas fa-calendar-alt"/>
		 	<span className="post-date-text">{text}</span>
		</div>
	)
};