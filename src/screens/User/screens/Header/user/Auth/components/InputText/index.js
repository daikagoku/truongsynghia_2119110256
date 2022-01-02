import {Input,Icon} from '../../../../../../../../components/'
import clsx from 'clsx';
import {useContext,forwardRef,useState,useMemo} from 'react';
import {AuthContext} from '../../init';
import './index.css';
export default forwardRef(function({prefix,name,label,icon,value,setValue,validate,children,type,...props},ref) {
	const [state,dispatch] = useContext(AuthContext);
	const [valid,setValid] = useState("");
	const inputAttr = useMemo(function(){
		return {
		...props,
		ref:ref,
		type:type,
		className:"auth-input",
		value:value
	}
	},[]);
	inputAttr.onFocus = useMemo(function(){
		return function(event){
			event.target.scrollIntoView({block:"center"});
			setValid("");
		}
	},[valid]);
	inputAttr.onBlur = useMemo(function(){
		return function(event){
			if(validate && typeof(validate) === 'function'){
				setValid(validate(event.target.value));
			}
		}
	},[valid]);
	inputAttr.onChange = useMemo(function(){
		return function(event){
			if(setValue && typeof(setValue) === 'function'){
				setValue(event.target.value);
			}
		}
	},[value])
	return (
		<div className={clsx("auth-input-container",{[prefix+"_auth-input"]:prefix})}>
			<div className="auth-input-content">
				<Input {...inputAttr}/>
				<label className="auth-input-label text"htmlFor="">
					{label}
				</label>
				<label className="auth-input-label icon"htmlFor="">
					<Icon icon={icon}/>
				</label>
			</div>
			<label className="auth-input-validate"htmlFor="">
				{valid}
			</label>
		</div>
	)
})