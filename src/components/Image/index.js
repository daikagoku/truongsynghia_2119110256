import {useImperativeHandle,useEffect,useRef,forwardRef,memo,useMemo} from 'react';
import './index.css';

const Image = (function(){
	return function({src,alt,className,...props},ref){
		const thisRef = useRef();
		let _Attr = {
			...props,
			ref:thisRef,
			type:"image",
			className:"image",
			loading:"lazy",
			alt:'description of image'
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(alt !== undefined){
			_Attr.alt=alt;
		};
		_Attr['src'] = useMemo(function(){
			if(src){
				return src;
			}else{
				return "/img/default-no-img.jpg";
			};
		},[src]);
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