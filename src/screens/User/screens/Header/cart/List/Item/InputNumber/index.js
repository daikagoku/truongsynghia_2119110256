import {useContext,memo,useMemo} from 'react';
import clsx from 'clsx';
import {Input,Button,Icon} from '../../../../../../../../components/';
import {CartProductContext} from '../init';
import {HeaderCartContext} from '../../../init';
import styles from './index.module.css';
export default memo(function(){
	const [store,handleStore] = useContext(HeaderCartContext);
	const {data,index} = useContext(CartProductContext);
	const [min,max] = useMemo(()=>([1,5]),[])
	const inputAttr = {
		className :styles.input,
		type      :"number",
		value     :data.quantity,
		min       :min,
		max       :max
	};
	function setValue(value){
		handleStore.update(index,value);
	}
	function handleSetValue(newValue){
		newValue = Number(newValue);
		if(data.quantity === 0){
			setValue(min);
		}else if(newValue < min){
			setValue(min);
		}else if(newValue > max){
			setValue(max);
		}else{
			setValue(newValue);
		}
		
	}
	function handleDown(event){
		event.preventDefault();
	}
	function handleClick(int){
		handleSetValue(Number(data.quantity)+int);
	}
	inputAttr.onChange = useMemo(function(){
		return function(event){
			if(event.target.value === ""){
				setValue(event.target.value);
			}else{
				handleSetValue(event.target.value);
			}
		}
	},[data.quantity]);
	return(
		<div>
			<div className={styles.container}>
				<Input {...inputAttr}/>
				<Button 
					onClick={()=>(handleClick(-1))}
					className={clsx(styles.btn,styles.btnMinus,{disabled:data.quantity <= min})}>
					<Icon className="fas fa-minus"></Icon>
				</Button>
				<Button 
					onClick={()=>(handleClick(1))}
					className={clsx(styles.btn,styles.btnPlus,{disabled:data.quantity >= max})}>
					<Icon className="fas fa-plus"></Icon>
				</Button>	
			</div>	
		</div>
	)
});