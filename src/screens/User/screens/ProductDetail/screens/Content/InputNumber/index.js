import {useContext,memo,useMemo} from 'react';
import clsx from 'clsx';
import {Input,Button,Icon} from '../../../../../../../components/';
import {ProductDetailContext} from '../../../init';
import styles from './index.module.css';
export default memo(function(){
	const [state,dispatch] = useContext(ProductDetailContext);
	const [min,max] = useMemo(()=>([1,5]),[]);
	const inputAttr = {
		className :styles.input,
		type      :"number",
		value     :state.quantity,
		min       :min,
		max       :max,
		onBlur:function(event){
			if(state.quantity === ""){
				setValue(min);
			}
		}
	};
	function setValue(value){
		dispatch({
			key:'set_quantity',
			value:value
		})
	}
	function handleSetValue(newValue){
		newValue = Number(newValue);
		if(state.quantity === 0){
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
		handleSetValue(Number(state.quantity)+int);
	}
	inputAttr.onChange = useMemo(function(){
		return function(event){
			if(event.target.value === ""){
				setValue(event.target.value);
			}else{
				handleSetValue(event.target.value);
			}
		}
	},[state.quantity]) 
	return(
		<div>
			<div className={styles.container}>
				<Input {...inputAttr}/>
				<Button 
					onClick={()=>(handleClick(-1))}
					className={clsx(styles.btn,styles.btnMinus,{disabled:state.quantity <= min})}>
					<Icon className="fas fa-minus"></Icon>
				</Button>
				<Button 
					onClick={()=>(handleClick(1))}
					className={clsx(styles.btn,styles.btnPlus,{disabled:state.quantity >= max})}>
					<Icon className="fas fa-plus"></Icon>
				</Button>	
			</div>	
		</div>
	)
});