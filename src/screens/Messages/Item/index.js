import {memo,useRef,useContext,useState,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useMessageModel from "../../../model/Message/";

import {Icon} from '../../../components/';
export default memo(function MessageBoxComponent({type,id,title,text,index,time,...props}){
	const [isHidden,setHidden] = useState(false);
	const [isClear,setClear] = useState(false);
	const [messages,handleMes] = useMessageModel();
	const closeRef = useRef();
	const getType = useMemo(function() {
		const list = {
			warning:{
				icon:"far fa-exclamation-circle",
				title:"Cảnh báo"
			},
			success:{
				icon:"far fa-check-circle",
				title:"Thành công"
			},error:{
				icon:"fas fa-times-circle",
				title:"Gặp lỗi"
			},question:{
				icon:"far fa-question-circle",
				title:"Thông báo"
			},default:{
				icon:"fas fa-bell",
				title:"Thông báo"
			}
		}
		return function(type){
			if(list[type] === undefined){
				type = 'default';
			};
			return {
				...list[type],
				type:type
			};
		}
	},[]);
	function handleClick(){
		setHidden(true);
	};
	useEffect(function(){
		let timeClear;
		if(isHidden){
			timeClear = setTimeout(function(){
				setClear(true);
			},300)
		};
		return function(){
			clearTimeout(timeClear);
		}
	},[isHidden])
	if(!isClear){
		const mesType = getType(type);
		return(
			<div data-index={index} className={clsx(styles.container,mesType.type,{[styles.hidden]:isHidden})}>
				<div className={clsx(styles.head)}>
					<Icon className={clsx(styles.icon)} icon={mesType.icon}/>
					<span className={clsx(styles.title)}>{title ?? mesType.title}</span>
					<span className={clsx(styles.time)}>
						({time.h+":"+time.i+":"+time.s})
					</span>
					<Icon onClick={handleClick} icon="fas fa-times" className={clsx(styles.close)} />
				</div>
				<div className={clsx(styles.body)}>
					<span className={clsx(styles.content)}>{text}</span>
				</div>
			</div>
		)
	}else{
		return <></>
	}
})