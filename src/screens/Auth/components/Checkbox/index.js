import {useState,useContext,useMemo,memo} from 'react';
import clsx from 'clsx';
import {Button,Icon,Checkbox} from '../../../../components/';
import './index.css';
import {AuthContext} from '../../init';
function AuthCheck({label,name,validate,...props}){
	const [valid,setValid] = useState("");
	const [data,handleData] = useContext(AuthContext);
	const handleClickLabel = function(){
		const check = data.value[name] ?? false;
		console.log(check)
		handleSetCheck(!check)
	}
	function handleSetCheck(check){
		handleData.set(name,check);
	}
	return (
		<div className="auth-checkbox-container">
		 	<Checkbox 
		 		className="auth-checkbox"
		 		validate={validate} 
		 		value = ""
		 		checked={data.value[name] ?? false} 
		 		{...props} 
		 	/>
		 	<label 
		 		onClick={handleClickLabel} 
		 		className="auth-checkbox-label text"
		 		htmlFor=""
		 	>
		 			{label}
		 	</label>
		</div>
	)
}
export default memo(AuthCheck);