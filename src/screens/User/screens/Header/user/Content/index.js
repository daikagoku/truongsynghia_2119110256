import {useRef} from 'react';
import {Button,Icon,Widget,Offcanvas} from '../../../../../../components/';
import UserAvatar from './Avatar/';
import UserFullname from './Fullname/';
import UserOption from './Option/';
export default function() {
	const OffcanvasRef= useRef();
	const buttonAttr = {
		onClick:function(e){
			if(OffcanvasRef.current){
				OffcanvasRef.current.show()
			}
		}
	};
	return(
		<>
			<Button className="header-button circle-btn"{...buttonAttr}>
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