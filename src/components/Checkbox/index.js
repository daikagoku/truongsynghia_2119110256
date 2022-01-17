import {forwardRef,memo,useMemo} from 'react';
import './index.css';
const Input = (function(){
	return function({checked,disabled,onChange,validate,children,className,type,multiple,placeholder,...props},ref){
		const _Attr = {
			...props,
			className:'checkbox',
			type:"checkbox"
		};
		if(checked === true){
			_Attr.className += " checked";
			_Attr.checked = true;
		}else{
			_Attr.checked = false;
		}
		if(disabled === true){
			_Attr.className += " disabled";
		}
		if(className !== undefined){
			_Attr.className +=" "+ className;
		};
		if(multiple === undefined){
			_Attr.type = 'radio';
		}
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		_Attr.onChange = useMemo(function(){
			return function(event){
				if(validate && typeof(validate) === 'function'){
					validate(event.target.checked);
				}
				if(onChange && typeof(onChange) === 'function'){
					onChange(event);
				}
			}
		},[checked])

		return(
			<div className="checkbox-control">
		 		<input {..._Attr}/>
		 		<div className="checkbox-view"></div>
		 	</div>
		)
	};	
})();
export default memo(forwardRef(Input));



