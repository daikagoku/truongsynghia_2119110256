import {Input,Icon} from '../../../../../../../../components/'
import clsx from 'clsx';
import {forwardRef,useRef,useImperativeHandle,useReducer} from 'react';
import {initData,reducer} from './init';
import './index.css';
export default forwardRef(function({prefix,name,label,icon,validate,...props},ref) {
	const inputRef = useRef();
	const [state,dispatch] = useReducer(reducer,initData);
	useImperativeHandle(ref,function(){
	    return{
	      ...inputRef.current,
	      validate:validate
	    }
	});
	const inputAttr = {
		...props,
		ref:inputRef,
		className:"auth-input",
		onFocus:function(event){
			if(validate && typeof(validate) === 'function'){
				dispatch({
					key:'set_validity',
					value:undefined
				})
			}
		},
		onBlur:function(event){
			if(validate && typeof(validate) === 'function'){
				dispatch({
					key:'set_validity',
					value:validate(event.target.value)
				})
			}
		}
	}
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
				{state.validity}
			</label>
		</div>
	)
})