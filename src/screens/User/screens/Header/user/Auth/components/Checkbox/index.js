import {forwardRef,useRef} from 'react';
import clsx from 'clsx';
import {Button,Icon,Checkbox} from '../../../../../../../../components/';
import './index.css';
export default function({label,...props},ref) {
	const checkboxRef = useRef();
	function handleClickLabel(event){
		checkboxRef.current.click();
	}
	return (
		<div className="auth-checkbox-container">
		 	<div className="auth-checkbox-control">
		 		<Checkbox {...props} ref={checkboxRef} className="auth-checkbox"/>
		 		<div className="auth-checkbox-view"></div>
		 	</div>
		 	<label onClick={handleClickLabel} className="auth-checkbox-label text"htmlFor="">{label}</label>
		</div>
	)
}