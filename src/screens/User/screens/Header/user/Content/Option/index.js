import {List,Item,Button,Icon} from '../../../../../../../components/';
import './index.css';
export default function() {
	function RenderItem({icon,text}){
		return(
			<Item className="header-user-list-item">
				<Button to="/"className="header-user-list-button">
					<Icon icon={icon}></Icon>
					<span className="text">{text}</span>
				</Button>	
			</Item>
		)
	}
	return(
	<div className="header-user-list-container">
		<List className="header-user-list">
			<RenderItem icon="far fa-address-book"  text="Tài khoản"/>
			<RenderItem icon="fas fa-shopping-cart" text="Giỏ hàng"/>
			<RenderItem icon="far fa-bell"			text="Thông báo"/>
			<RenderItem icon="fas fa-sign-in-alt"	text="Đăng xuất"/>
	    </List>
    </div>
	)
}