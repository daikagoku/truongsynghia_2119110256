import {Input,Icon} from '../../../../../../../../components/'
import clsx from 'clsx';
import {forwardRef,useRef,useImperativeHandle,useState} from 'react';
import './index.css';
export default forwardRef(function({prefix,label,icon,validate,...props},ref) {
	const inputRef = useRef();
	useImperativeHandle(ref,function(){
	    return{
	      ...inputRef.current
	    }
	});
	return (
		<div className={clsx("auth-input-container",{[prefix+"_auth-input"]:prefix})}>
			<div className="auth-input-content">
				<Input ref={inputRef} className="auth-input"{...props}/>
				<label className="auth-input-label text"htmlFor="">
					{label}
				</label>
				<label className="auth-input-label icon"htmlFor="">
					<Icon icon={icon}/>
				</label>
			</div>
			<div className="auth-input-validate"htmlFor="">
				
			</div>
		</div>
	)
})