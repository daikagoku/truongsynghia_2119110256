import {memo,useRef,useContext,useState,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useToastModel from "../../../model/Toast/";
export default memo(function ComponentToast({text,index,...props}){
	const [isHidden,setHidden] = useState(false);
	const [isClear,setClear] = useState(false);
	const [toasts,handleToast] = useToastModel();
	const closeRef = useRef();
	useEffect(function(){
		const timeHidden = setTimeout(function(){
			setHidden(true)
		},2000);
		const timeClear = setTimeout(function(){
			setClear(true)
		},2300);
		return function(){
			clearTimeout(timeHidden);
			clearTimeout(timeClear);
		}
	},[]);
	if(!isClear){
		return(
			<div data-index={index} className={clsx(styles.toast,{[styles.hidden]:isHidden})}>
				<span className={clsx(styles.content)}>{text}</span>
				<span  className={clsx(styles.close)}></span>
			</div>
		)
	}else{
		return <></>
	}
})