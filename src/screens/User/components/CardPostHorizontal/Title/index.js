import {Link} from '../../../../../components/';
import {useContext} from 'react';
import {PostContext} from '../index';
import './index.css';
export default function PostTitle({...props}){
	const dataPost = useContext(PostContext) ?? {};
	let text = "Đang cập nhật";
	let alias= "";
	if(dataPost.title !== undefined){
		text = dataPost.title;
	};
	if(dataPost.alias !== undefined){
		alias = dataPost.alias;
	};
	return(
		<Link to={"/postdetail/"+alias}className="post-title">{text}</Link>
	)
};