import {forwardRef,memo} from 'react';
const Input = (function(){
	return function({className,type,placeholder,multiple,...props},ref){
		let Component = 'input';
		const _Attr = {
			...props,
			className:'input',
			type:"checkbox"
		};
		if(className !== undefined){
			_Attr.className = className;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		if(type!==undefined){
			_Attr.type=type;
		}
		return(
			<Component
				{..._Attr}
			/>
		)
	};	
})();
export default memo(forwardRef(Input));



