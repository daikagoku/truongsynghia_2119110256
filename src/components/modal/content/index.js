import {Button,Icon} from '../../tags';
import {useContext} from 'react';
import {ModalContext} from '../index';
import './index.css'
export default function Modal({title,size,children}) {
	const [state,dispatch] = useContext(ModalContext);
	const contentAttr={
		className:"modal"
	};
	const viewAttr={
		className:"modal-view"
	};
	if(size!== undefined){
		viewAttr.className+=" "+size;
	}
	if(state.open){
		contentAttr.className+=" show";
	};
	function handleClick(){
		dispatch({
			key:'set_open',
			value:false
		})
	};
	return (
		<div {...contentAttr}>
			<Button onClick={handleClick} className="modal-overlay"></Button>
			<div {...viewAttr}>
				<div className="modal-head">
					<div className="modal-title">
						<span className="">{title}</span>
					</div>
					<Button 
						className="modal-close square-btn"
						onClick={handleClick}
					>
						<Icon icon="fas fa-times"/>
					</Button>
				</div>
				<div className="modal-bottom-body">
				 	{state.open === true && children}
				</div>
			</div>
		</div>
	)
}