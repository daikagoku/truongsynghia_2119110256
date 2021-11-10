import {useImperativeHandle,useRef,forwardRef,memo,useEffect} from 'react';
import './Image.css';

const Image = (function(){
	return function({src,dataLazy,alt,className,onLoadStart,...props},ref){
		const thisRef = useRef();
		if(ref !== undefined){
			useImperativeHandle(ref,()=>({
				...thisRef
				})
			)
		};
		let _Attr = {
			...props,
			ref:thisRef,
			className:"image",
			alt:"Image",
			onLoadStart:function(e){
				if(onLoadStart !== undefined){
					onLoadStart(e);
				};
			}
		};
		if(className !== undefined){
			_Attr.className +=" "+className;
		};
		if(alt !== undefined){
			_Attr.alt=alt;
		};
		if(dataLazy !== undefined){
			_Attr['data-src']=src;
		}else if(src !== undefined){
			_Attr['src']=src;
		}else{
			_Attr['src']="/img/default-no-img.jpg";
		};
		return(
			<img
				{..._Attr}
			/>
		);
	};	
})();
export default memo(forwardRef(Image));