import {useContext} from 'react';

import {Button} from '../../../../../../../../components/';
import {FormContext} from '../../init';
import './index.css';
export default function({className,label,title,to,...props}){
	const [state,handle] = useContext(FormContext);
	function handleClick(){
		handle.setAction(to);
	}
	return (
		<span className="auth-text-link-container">
			<span className="auth-text-link-label">{label}</span>
			<Button onClick={handleClick} className="auth-text-link"{...props}>{title}</Button>
		</span>
	)
}