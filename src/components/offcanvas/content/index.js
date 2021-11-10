import {Button,Icon} from '../../tags';
import {useContext} from 'react';
import {OffcanvasContext} from '../index';
import './index.css'
export default function OffcanvasRight({title,position,children}) {
	const [state,dispatch] = useContext(OffcanvasContext);
	const contentAttr={
		className:"offcanvas offcanvas-right"
	};
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
			<Button onClick={handleClick} className="offcanvas-overlay"></Button>
			<div className={"offcanvas-view "+position}>
				<div className="offcanvas-head">
					<div className="offcanvas-title">
						<span className="">{title}</span>
					</div>
					<Button 
						className="offcanvas-close square-btn"
						onClick={handleClick}
					>
						<Icon icon="fas fa-times"/>
					</Button>
				</div>
				<div className="offcanvas-body">
				 	{state.open === true && children}
				</div>
			</div>
		</div>
	)
}