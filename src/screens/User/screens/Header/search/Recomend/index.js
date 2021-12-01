import {List,Item,Button,Icon} from '../../../../../../components/';
import {useContext , useMemo,memo} from 'react';
import { SearchContext } from '../init';
import './index.css';
function HeaderRecomend({history}){
	const [state,dispatch] 		= useContext(SearchContext);
	function handleClick(value){
		dispatch({
	    key:'set_value',
	    value:value
	  });
	}
  const listAttr = useMemo(function(){
	    return{
	      className:"header-search-recomend-list",
	      onMouseDown:function(event){
	        event.preventDefault()
	      }
	    }
	},[]);
	listAttr.listItem = useMemo(function(){
		 return history.filter(function(_item){
	        return _item.includes(state.value) || _item==="";
	   }).slice(0,5);
	});
	const itemAttr = {className:"header-search-recomend-item"};
	const buttonAttr = useMemo(function(){
	    return{
	    	className:"header-search-recomend-button"
	    }
	},[state.value]);
	const recomendAttr = useMemo(function(){
		let show = ""
		if(state.focus === true){
			  show = " show";
		};
		return{
			className:"header-search-recomend"+show
		};
	},[state.focus]);
	function setViewValue(value){
		const index       = value.indexOf(state.value);
		const beforeValue = value.substring(0,index);
		const afterValue  = value.substring(state.value.length,value.length);
		return (
			<>
				{beforeValue}<b>{state.value}</b>{afterValue}
			</>
		)
	}
	return(
		<div {...recomendAttr}>
          <span className="header-search-recomend-title">Gợi ý tìm kiếm:</span>
          <List {...listAttr} itemAttr={itemAttr}>
          	{ 
          		state.focus === true &&
          		state.value!=="" && 
          		<Item {...itemAttr}>
	          	 	<Button {...buttonAttr}onClick={()=>(handleClick(state.value))}>
	                  <Icon className="fas fa-search"/>
	                  <span className="label">
	                  		Tìm kiếm:"<span className="text">{state.value}</span>"
	                  </span>
	              </Button>
            	</Item>
          	}
          	{
          		state.focus === true &&
          		listAttr.listItem.length <= 0 && 
          		<Item {...itemAttr}>
	          	 	<Button {...buttonAttr} disabled>
	                  <Icon className="fas fa-search"/>
	                  <span className="text">
	                  	Không có lịch sử tìm kiểm		
	                  </span>
	              </Button>
            	</Item>
          	}
            {
            		state.focus === true &&
                function(value,index){
                  return(
                    <Button {...buttonAttr} onClick={()=>(handleClick(value))}>
                        <Icon className="fas fa-search"/>
                        <span className="text">{setViewValue(value)}</span>
                    </Button>
                  )
                }
            }
          </List>
        </div>
	)
};
export default memo(HeaderRecomend);