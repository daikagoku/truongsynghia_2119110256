import {memo,useRef,useContext,useState,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import styles from './component.module.css';
import {ToastContext} from './provider';

export default memo(function ComponentToast({text,index,...props}){
	const [isShow,setShow] = useState(true);
	const [list,handleList] = useContext(ToastContext);
	const closeRef = useRef();
	useEffect(function(){
		console.log("render "+index)
		const timeShow = setTimeout(function(){
			console.log(index);
			handleClick();
		},5000);
		return function(){
			clearTimeout(timeShow);
		}
	},[]);
	function handleClick(){
		handleList.remove(index);
	};
	return(
			<div data-index={index} className={clsx(styles.toast,{[styles.show]:isShow})}>
				<span className={clsx(styles.content)}>{text+index}</span>
				<span  className={clsx(styles.close)}></span>
			</div>
	)
})