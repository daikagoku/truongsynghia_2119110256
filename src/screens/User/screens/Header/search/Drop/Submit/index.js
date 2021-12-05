import './index.css';
import { SearchContext } from '../../init';
import {useContext , useMemo,memo,useRef} from 'react';
import {Button,Icon} from '../../../../../../../components/';
export default memo(function HeaderSearchSubmit(){
	const {state,dispatch,form} 		= useContext(SearchContext);
    const submitAttr = useMemo(function(){
	    return{
	      type:"button",
	      className:"header-search-btn square-btn submit",
	      onMouseDown:function(e){
	        e.preventDefault()
	      },onClick:function(e){
	        form.submit();
	      }
	    }
	  },[state.value]);
	return(      	
		<Button {...submitAttr}>
      		<Icon className="fas fa-search"/>
      	</Button>
    )
})
