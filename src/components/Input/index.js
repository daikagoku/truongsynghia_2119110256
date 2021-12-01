import {forwardRef,memo,useRef,useImperativeHandle,useState,useEffect} from 'react';
import './index.css';
const Input = (function(){
	return function({className,type,placeholder,multiple,...props},ref){
		let Component = 'input';
		const thisRef = useRef();
		const _Attr = {
			...props,
			ref:thisRef,
			className:'input',
			type:"text",
			autoComplete:"false",
			placeholder:" "
		};
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
		const handleValidate = {
		}
		useImperativeHandle(ref,function(){
			return {
				...thisRef.current
			}
		});
		return(
			<Component
				{..._Attr}
			/>
		)
	};	
})();
export default memo(forwardRef(Input));



