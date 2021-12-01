import {Button,Input,Icon} from '../../../../../../../components/';
import {useState,useMemo,useEffect,useContext} from 'react';
import {ProductDetailContext} from '../../../init';
import "./index.css";
export default function() {
	const [state,dispatch] = useContext(ProductDetailContext);
	const [min,max] = useMemo(()=>([1,5]),[]);
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
	const inputAttr = {
		value:state.quantity,
		min:min,
		max:max,
		className:"input-quantity-input",
		size:"4",
		type:"number",
		onInput:function(event){
			if(event.target.value === ""){
				setValue(event.target.value);
			}else if(event.target.value < min){
				setValue(min);
			}else if(event.target.value > max){
				setValue(max);
			}else{
				setValue(event.target.value);
			}
		}

	}
	return(
		<div>
			<div className="input-quantity">
				<Input {...inputAttr}/>
				<Button className="input-quantity-btn minus"
					onMouseDown={handleDown}
					onClick={()=>(handleClick(-1))}
				>
					<Icon icon="fas fa-chevron-down"/>
				</Button>
				<Button className="input-quantity-btn plus"
					onMouseDown={handleDown}
					onClick={()=>(handleClick(1))}
				>
					<Icon icon="fas fa-chevron-up"/>
				</Button>
			</div>
		</div>
	)
}