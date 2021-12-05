import {List,Item,Button,Icon} from '../../../../../components/';
import {useRef,memo,Offcanvas} from 'react';
import useFetch from '../../../../../core/useFetch';
import './index.css';
import MenuItem from './Item/';
export default memo(function HeaderMenu(){
	const OffcanvasRef = useRef({});
	const menuAttr = {
		className:"header-menu d-flex d-md-none"
	};
	if(OffcanvasRef.current && OffcanvasRef.current?.state?.open){
		menuAttr.className+=" active";
	};
	const buttonAttr = {
		className:"header-button circle-btn",
		onClick:function(){
			if(OffcanvasRef.current){
				OffcanvasRef.current.handle.open();
			}
		}
	};
	console.log(Offcanvas)
	return(
		<div {...menuAttr}>
			<Button {...buttonAttr}>
				<Icon icon="fas fa-bars"/>
			</Button>
			
		</div>
	)
})