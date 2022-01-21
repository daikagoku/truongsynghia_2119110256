import {List,Item,Button,Icon} from '../../../../../../../components/';
import useAuthModel from '../../../../../../../model/Auth/';
import {ActionContext} from '../../init';
import {useContext} from 'react';
import './index.css';
function UserOptionItem({onClick,icon,text}){
		return(
			<Item className="header-user-list-item">
				<Button onClick={onClick} to="/"className="header-user-list-button">
					<Icon icon={icon}></Icon>
					<span className="text">{text}</span>
				</Button>	
			</Item>
		)
	}
export default function UserOption() {
	const [auth,handleAuth] = useAuthModel();
	const [action,setAction] = useContext(ActionContext);
	function handleClickOut(){
		handleAuth.logout();
	}
	return(
	<div className="header-user-list-container">
		<List className="header-user-list">
			<UserOptionItem onClick={()=>(setAction("info"))} icon="far fa-address-book"  text="Tài khoản"/>
			<UserOptionItem onClick={()=>(setAction("message"))}icon="far fa-bell"			text="Thông báo"/>
			<UserOptionItem onClick={handleClickOut} icon="fas fa-sign-in-alt"	text="Đăng xuất"/>
	    </List>
    </div>
	)
}