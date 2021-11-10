/*------------------------------*/
/*	USE
		isRequired 	= true/false
		isFilter 	= funtion(value){ ... return 'mesage'||undefined}
		isType  	= type   		#{number,email,phone}
		minLength 	= length
		maxLength 	= length

		valueType (update)

*/
/*------------------------------*/
import {forwardRef,memo} from 'react';
const Input = (function(){
	return function({className,type,placeholder,...props},ref){
		const _Valid = {
			ruler:[]
		};
		const _Attr = {
			...props,
			className:'input',
			type:"text",
			placeholder:" "
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
		if(placeholder !== undefined){
			_Attr.placeholder = placeholder;
		};
		return(
			<input
				{..._Attr}
			/>
		)
	};	
})();
export default memo(forwardRef(Input));



