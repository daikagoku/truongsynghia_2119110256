import {createContext} from 'react';
export const ContactContext = createContext({});
export const initData = {
	isMouse     : false,
  isDrag     : false,
  isClick    : false,
  positionX  : 0,
  positionY  : 0
}
export function reducer(prevState,action){
    switch(action.key){
    	  case 'toggle_click':
	        return{
	            ...prevState,
	            isClick:!prevState.isClick,
	            isMouse:false
	    	}
	    	case 'stop_click':
	        return{
	            ...prevState,
	            isClick:false,
	            isMouse:false
	    	}
	    	case 'start_mouse':
	        return{
	            ...prevState,
	            isMouse:true
	    	}
	    	case 'start_drag':
	        return{
	            ...prevState,
	            isDrag:true
	    	}
      	case 'stop_drag':
          	return{
	            ...prevState,
	            isDrag:false,
	            isMouse:false,
	            positionX:action?.value?.x,
	            positionY:action?.value?.y
          	}
      default :
        console.log(action.key,{prevState,action,error:"Không tồn tại action"})
        return{
          ...prevState
        }
    }
};