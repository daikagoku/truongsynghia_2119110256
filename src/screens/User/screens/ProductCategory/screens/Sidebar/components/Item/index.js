import {memo,useState,useMemo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useFetch from "../../../../../../../../core/useFetch";
import {Item,Checkbox,Button} from "../../../../../../../../components/";
function CategoryItems({isCheck,setCheck,children,multiple,...props}){
	const checkboxAttr = {
		checked:isCheck, 
		className:styles.checkbox
	}
	checkboxAttr.onChange = useMemo(function(){
		return function(event){
			setCheck(event.target.checked);
		}
	},[isCheck]);
	if(multiple === undefined){
		checkboxAttr.radio = true;
	}
	const buttonAttr = {
		className:styles.button
	}
	buttonAttr.onClick = useMemo(function(){
		return function(){
			setCheck(!isCheck);
		}
	},[isCheck]);
	return (
			<Item className={styles.item}>
				<Button {...buttonAttr}>
					<Checkbox {...checkboxAttr}/>
					<span className={styles.text}>{children}</span>
				</Button>
			</Item>
	)
}
export default memo(CategoryItems);