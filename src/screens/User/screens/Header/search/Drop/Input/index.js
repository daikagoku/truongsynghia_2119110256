import './index.css';
import { SearchContext } from '../../init';
import {useContext , useMemo,memo,useRef} from 'react';
import {Input} from '../../../../../../../components/';
export default memo(function(){
	const {state,dispatch} 		= useContext(SearchContext);
  	const inputRef = useRef();
    const inputAttr = useMemo(function(){
	    return{
	        ref:inputRef,
	        value:state.value,
	        onChange:function(event){
	          const newValue = event.target.value.replace(/\s{1,}/," ");
	          dispatch({
	            key:'set_value',
	            value:newValue
	          });
	        },onFocus:function(e){
	          dispatch({
	            key:'set_focus',
	            value:true
	          })
	        },onBlur:function(e){
	          dispatch({
	            key:'set_focus',
	            value:false
	          })
	        },
	        className:"header-search-input",
	        placeholder:"Tìm kiếm sản phẩm"
	    }
  	},[state.value]);
	return(<Input {...inputAttr}/>)
})