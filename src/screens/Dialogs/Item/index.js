import {memo,useRef,useContext,useState,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useDialogModel from "../../../model/Dialog/";

import {Button,Icon} from '../../../components/';
export default memo(function DialogComponent({type,title,text,index,time,yes,no,...props}){
	const [isHidden,setHidden] = useState(false);
	const [isClear,setClear] = useState(false);
	const [dialogs,handleDialog] = useDialogModel();
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
	function handleYesClick(){
		setHidden(true);
		if(yes && typeof(yes) === 'function'){
			yes();
		}
	};
	function handleNoClick(){
		setHidden(true);
		if(no && typeof(no) === 'function'){
			no();
		}
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
				</div>
				<div className={clsx(styles.body)}>
					<span className={clsx(styles.content)}>{text}</span>
				</div>
				<div className={clsx(styles.foot)}>
					<Button onClick={handleYesClick} className={clsx("square-btn",styles.btn,styles.yes)}>Có</Button>
					<Button onClick={handleNoClick} className={clsx("square-btn",styles.btn,styles.no)}>Không</Button>
				</div>
			</div>
		)
	}else{
		return <></>
	}
})