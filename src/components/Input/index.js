import {forwardRef,memo,useRef,useMemo} from 'react';
import './index.css';
const Input = (function(){
	return function({isHidden,value,setValue,setValid,className,type,placeholder,multiple,validate,onFocus,onBlur,onChange,...props},ref){
		let Component = 'input';
		const thisRef = useRef();
		const _Attr = {
				...props,
				ref:ref,
				className:'input',
				type:isHidden ? "password" : "text",
				autoComplete:"off",
				placeholder:" "
			};
		_Attr.value = useMemo(function(){
			return value;
		},[value])
		_Attr.onFocus = useMemo(function(){
			return function(event){
				event.target.scrollIntoView({block:"center"});
				event.valid="";
				if(setValid && typeof(setValid) === 'function'){
					setValid(event.valid);
				}
				if(onFocus && typeof(onFocus) === 'function'){
					onFocus(event);
				}
			}
		},[]);
		_Attr.onBlur = useMemo(function(){
			return function(event){
				if(validate && typeof(validate) === 'function'){
					event.valid=validate(event.target.value);
				}
				if(setValid && typeof(setValid) === 'function'){
					setValid(event.valid);
				}
				if(onBlur && typeof(onBlur) === 'function'){
					onBlur(event);
				}
			}
		},[]);
		_Attr.onChange = useMemo(function(){
			return function(event){
				if(setValue && typeof(setValue) === 'function'){
					setValue(event.target.value);
				}
				if(onChange && typeof(onChange) === 'function'){
					onChange(event);
				}
			}
		},[value])
		if(className !== undefined){
			_Attr.className +=" " + className;
		};
		if(type!==undefined){
			_Attr.type=type;
		}
		if(placeholder !== undefined){
			_Attr.placeholder = placeholder;
		};
		if(_Attr.type === 'text' && multiple !== undefined && Number(multiple)){
			Component = 'textarea';
			_Attr.rows = multiple;
		};
		return(
			<Component
				{..._Attr}
			/>
		)
	};	
})();
export default memo(forwardRef(Input));



