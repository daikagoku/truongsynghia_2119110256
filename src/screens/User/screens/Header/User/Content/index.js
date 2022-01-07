import {useRef} from 'react';
import {Button,Icon,Widget,Offcanvas} from '../../../../../../components/';
import UserAvatar from './Avatar/';
import UserFullname from './Fullname/';
import UserOption from './Option/';
import './index.css';
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
			<Offcanvas 
				ref={OffcanvasRef} 
				title="Tài khoản"
				position="right"
				widthSize="w-12 w-xs-10 w-sm-8 w-md-7 w-lg-5 w-xl-4 w-xxl-3"
			>
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