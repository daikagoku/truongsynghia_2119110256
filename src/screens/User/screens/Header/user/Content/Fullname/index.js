import './index.css';
import {useContext} from 'react';
import {UserContext} from '../../init';
import {Icon} from '../../../../../../../components/';
export default function UserFullname({...props}){
	const [data] = useContext(UserContext);
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