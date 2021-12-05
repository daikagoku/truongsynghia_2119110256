import {useImperativeHandle,forwardRef,memo,useRef} from 'react';
import clsx from 'clsx';
function Admin({...props},ref){
	const thisRef = useRef({});
	useImperativeHandle(ref,function(){
		return{
			...thisRef.current
		}
	});
	return(
	)
}
export default memo(forwardRef(Admin));