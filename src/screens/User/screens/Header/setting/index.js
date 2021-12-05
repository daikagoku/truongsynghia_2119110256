import {useRef,memo} from 'react';
import {Button,Icon,Modal} from '../../../../../components/';
import CustomTheme from './CustomTheme/';
import './index.css';
export default memo(function HeaderSetting(){
	const modalRef = useRef();
	const buttonAttr = {
		className:"header-button circle-btn",
		onClick:function(e){
			if(modalRef.current){
				modalRef.current.handle.open();
			}
		}
	};
	return(
			<div className="header-setting">
				<Button {...buttonAttr}>
					<Icon icon="fas fa-tools"/>
				</Button>
				<Modal ref={modalRef} widthSize="w-12 w-md-11 w-lg-10"heightSize="h-12" title="Cài đặt">
					<CustomTheme />
				</Modal>
			</div>
	)
})