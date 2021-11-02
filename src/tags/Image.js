import React,{forwardRef} from 'react';
import './Image.css';
const Image = (function(){
	return function({src,dataLazy,alt,className,...props},ref){
		let _Attr = {
			...props,
			className:"image",
			alt:"Image"
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(src === undefined){
			src="/img/default-no-img.jpg";
		};
		if(ref !== undefined){
			_Attr.ref = ref;
		};
		if(alt !== undefined){
			_Attr.alt=alt;
		}
		if(dataLazy !== undefined){
			_Attr['data-src']=src;
		}else{
			_Attr['src']=src;
		};
		return(
			<img
				{..._Attr}
			/>
		);
	};	
})();
export default forwardRef(Image);