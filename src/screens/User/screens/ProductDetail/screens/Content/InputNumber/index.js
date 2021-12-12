import {useContext,useEffect,memo,useMemo,useState} from 'react';
import clsx from 'clsx';
import {Input,Button,Icon} from '../../../../../../../components/';
import {ProductDetailContext} from '../../../init';
import styles from './index.module.css';
export default memo(function(){
	const [state,dispatch] = useContext(ProductDetailContext);
	const [value,setValue] = useState(state.quantity);
	const [min,max] = useMemo(()=>([1,20]),[])
	const inputAttr = {
		className :styles.input,
		type      :"number",
		value     :value,
		min       :min,
		max       :max
	};
	function handleSetValue(newValue){
		newValue = Number(newValue);
		if(newValue > max) newValue = max;
		else if(newValue < min) newValue = min;
		dispatch({
			key:'set_quantity',
			value:newValue
		})
	};
	function handleDown(event){
		event.preventDefault();
	};
	function handleClick(int){
		if(value === "" || Number(value) === 0){
			handleSetValue(int);
		}else{
			handleSetValue(Number(value)+int);
		}
	};
	inputAttr.onChange = useMemo(function(){
		return function(event){
			if(event.target.value === ""){
				setValue("");
			}else{
				let newValue = Number(event.target.value);
				if(value === "" || Number(value) === 0){
					event.target.value="";
					newValue = event.nativeEvent.data;
				}
				setValue(newValue);
			}
		}
	},[value]);
	inputAttr.onBlur = useMemo(function(){
		return function(event){
			if(value === "" || Number(value) < min){
				handleSetValue(min);
			}else if(Number(value) > max) {
				handleSetValue(max);
			}
		}
	},[value]);
	useEffect(function () {
		setValue(state.quantity);
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