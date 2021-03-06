import { forwardRef} from 'react';
const Form = (function(){
	return function({action,children,className,...props},ref){
		const _Attr= {
			...props,
			className:'form',
			action:"/#"
		};
		if(className !== undefined){
			_Attr.className+=" "+className;
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		if(action !== undefined){
			_Attr.action = action;
		};
		return(
			<form 
				{..._Attr}
			>
				{children}
			</form>
		);
	};	
})();
export default forwardRef(Form);