import './index.css';
import {CommentContext} from 'react';
import {UserContext} from '../index';
import {Icon} from '../../../../../../../../index';
export default function UserFullname({...props}){
	const data = useContext(CommentContext) ?? {};
	let text = "Đang cập nhật";
	if(data.fullname !== undefined){
		text = data.fullname;
	};
	const attr={
		...props
	};
	attr.className+=" user-fullname";
	return(
		<span {...attr}>
			<Icon icon="far fa-user"/>
			<span className="text">{text}</span>
		</span>
	)
};