import {memo,useState,useMemo,useEffect,useContext} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import {ProductCategoryContext} from '../../../../init';
import {Item,Checkbox,Button} from "../../../../../../../../components/";
function CategoryItems({isCheck,setCheck,children,multiple,name,dataKey,dataValue,...props}){
	const [search,handleSearch] = useContext(ProductCategoryContext);
	const [thisCheck,setThisCheck] = useState();
  	useEffect(function(){
  		const newThisCheck  = handleSearch.has(dataKey,dataValue);
  		setThisCheck(newThisCheck && isCheck);
  	},[search,isCheck]);
	const checkboxAttr = {
		multiple:multiple,
		className:styles.checkbox
	};
	checkboxAttr.checked  = thisCheck;
	const buttonAttr = {
		className:styles.button
	}
	buttonAttr.onClick = function(){
			setCheck(!thisCheck,dataValue);
			if(thisCheck){
				handleSearch.remove(dataKey,dataValue)
			}else{
				handleSearch.add(dataKey,dataValue)
			}
	}
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