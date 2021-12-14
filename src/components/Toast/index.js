import {useImperativeHandle,useState,forwardRef,memo,useRef,useEffect} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
function Toast({text,parent,...props},ref){
	const thisRef = useRef({});
	const [show,setShow] = useState(false);
	useEffect(function(){
		let timeout;
		let time = Number(text?.length || 0)*100;
		if(show){
			timeout = setTimeout(function(){
				setShow(false)
			},time)
		}
		return function(){
			clearTimeout(timeout);
		}
	},[show])
	useImperativeHandle(ref,function(){
		return{
			...thisRef.current,
			handle:{
				show:setShow(true)
			}
		}
	});
	if(show){
		return(
			<div data-parent={parent}className={clsx(styles.container)}>
				<span className={clsx(styles.content)}>{text}</span>
			</div>
		)
	}else{
		return(
			<></>
		)
	}
}
export default memo(forwardRef(Toast));