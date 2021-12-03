import {useImperativeHandle,useRef,forwardRef,useState,useEffect,memo,useMemo} from 'react';
import './index.css';

const Image = (function(){
	return function({src,alt,className,...props},ref){
		const thisRef = useRef();
		let _Attr = {
			...props,
			ref:thisRef,
			className:"image",
			loading:"lazy",
			alt:" "
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(alt !== undefined){
			_Attr.alt=alt;
		};
		if(src !== undefined){
			_Attr['src']=src;
		}else{
			_Attr['src']="/img/default-no-img.jpg";
		};
		useImperativeHandle(ref,()=>({
				...thisRef.current
			})
		);
		return(
			<img
				{..._Attr}
			/>
		);
	};	
})();
export default memo(forwardRef(Image));