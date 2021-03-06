import './index.css';
import { SearchContext } from '../init';
import {useContext , useMemo,memo,useRef} from 'react';
import {Button,Icon} from '../../../../../../components/';
export default memo(function HeaderSearchSubmit({onClick}){
	const {state,dispatch,form} 		= useContext(SearchContext);
    const submitAttr = useMemo(function(){
	    return{
	      type:"button",
	      className:"header-search-btn square-btn submit",
	      onMouseDown:function(e){
	        e.preventDefault()
	      },onClick:onClick
	    }
	  },[state.value]);
	return(      	
		<Button {...submitAttr}>
      		<Icon className="fas fa-search"/>
      	</Button>
    )
})
