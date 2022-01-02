import {forwardRef,memo} from 'react';
import './index.css';
const Input = (function(){
	return function({children,className,radio,placeholder,...props},ref){
		const _Attr = {
			...props,
			className:'checkbox',
			type:"checkbox"
		};
		if(className !== undefined){
			_Attr.className +=" "+ className;
		};
		if(radio != undefined){
			_Attr.type = 'radio';
		}
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		return(
			<div className="checkbox-control">
		 		<input {..._Attr}/>
		 		<div className="checkbox-view"></div>
		 	</div>
		)
	};	
})();
export default memo(forwardRef(Input));



