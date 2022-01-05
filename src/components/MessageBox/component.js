import {memo,useRef,useContext,useState,useEffect,useMemo} from 'react';
import clsx from 'clsx';
import styles from './component.module.css';
import {MessageBoxContext} from './provider';

import Icon from '../Icon/';
export default memo(function MessageBoxComponent({type,title,text,index,time,...props}){
	const [isHidden,setHidden] = useState(false);
	const [list,handleList] = useContext(MessageBoxContext);
	const closeRef = useRef();
	const getType = useMemo(function() {
		const list = {
			info:{
				icon:"fas fa-info-circle"
			},warning:{
				icon:"fas fa-exclamation-circle",
				title:"Cảnh báo"
			},
			success:{
				icon:"fas fa-check-circle",
				title:"Thành công"
			},error:{
				icon:"fas fa-times-circle",
				title:"Lỗi"
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
		//setHidden(true);
		handleList.remove(index);
	};
	const mesType = getType(type);

	return(
		<div data-index={index} className={clsx(styles.container,mesType.type,{[styles.hidden]:isHidden})}>
			<div className={clsx(styles.head)}>
				<Icon className={clsx(styles.icon)} icon={mesType.icon}/>
				<span className={clsx(styles.title)}>{title ?? mesType.title}</span>
				<Icon onClick={handleClick} icon="fas fa-times" className={clsx(styles.close)} />
			</div>
			<div className={clsx(styles.time)}>
				{
					time.h+":"+time.i+":"+time.s
				}
			</div>
			<div className={clsx(styles.body)}>
				<span className={clsx(styles.content)}>{text}</span>
			</div>
		</div>
	)
})