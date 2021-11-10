import {createContext} from 'react';
export const AppContext = createContext({});
export const initData = {
  isDrag     : false,
  isClick    : false
}
export function reducer(prevState,action){
	console.log(action.key,{prevState,action})
    switch(action.key){
	    case 'start_drag':
	        return{
	            ...prevState,
	            isDrag:true
	    	}

      	case 'stop_drag':
          	return{
	            ...prevState,
	            isDrag:false
          	}
      	case 'toggle_click':
          	return{
            	...prevState,
            	isClick:!prevState.isClick
          	}
      default :
        console.log(action.key,{prevState,action,error:"Không tồn tại action"})
        return{
          ...prevState
        }
        break;
    }
};