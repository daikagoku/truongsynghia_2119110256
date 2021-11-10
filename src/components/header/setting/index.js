import {useReducer} from 'react';
import {Button,Icon} from '../../tags';
import {Modal as Modal,initData as initModal,
	reducer as reducerModal,
	ModalContext} 
	from '../../modal/';
import CustomTheme from './CustomTheme/';
import './index.css';
export default function HeaderSetting(){
	const [stateModal,dispatchModal] = useReducer(reducerModal,initModal);
	const buttonAttr = {
		className:"header-user-button circle-btn",
		onClick:function(e){
			dispatchModal({
				key:'set_open',
				value:!stateModal.open
			})
		}
	};
	return(
	<ModalContext.Provider value={[stateModal,dispatchModal]}>
		<div className="header-setting">
			<Button {...buttonAttr}>
				<Icon icon="fas fa-tools"/>
			</Button>
			<Modal size="col-12 col-lg-10" title="Cài đặt">
				<CustomTheme />
			</Modal>
		</div>
	</ModalContext.Provider>
	)
}