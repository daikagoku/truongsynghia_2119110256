import {useRef} from 'react';
import {Button,Icon,Widget} from '../../../../../../components/';
import Offcanvas 
	from '../../../../../../components/Offcanvas/';
import UserAvatar from './Avatar/';
import UserFullname from './Fullname/';
import UserOption from './Option/';
export default function() {
	const OffcanvasRef= useRef();
	const buttonAttr = {
		onClick:function(e){
			if(OffcanvasRef.current){
				OffcanvasRef.current.handle.open()
			}
		}
	};
	return(
		<>
			<Button className="header-user-button circle-btn"{...buttonAttr}>
				<UserAvatar/>
			</Button>
			<Offcanvas ref={OffcanvasRef} title="Tài khoản"position="right">
				<Widget prefix="head header-user">
					<UserAvatar />
					<UserFullname />
				</Widget>
				<Widget prefix="body header-user">
					<UserOption />
				</Widget>				
			</Offcanvas>
		</>
	)
}