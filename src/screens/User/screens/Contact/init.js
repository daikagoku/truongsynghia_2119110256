import {createContext} from 'react';
export const ContactContext = createContext({});
export const initData = {
	onMouse     : false,
  onDrag     : false,
  isShow    : false,
  positionX  : 0,
  positionY  : 0
}
export function reducer(prevState,action){
    switch(action.key){
    	  case 'toggle_show':
	        return{
	            ...prevState,
	            isShow:!prevState.isShow,
	            onMouse:false
	    	}
	    	case 'stop_show':
	        return{
	            ...prevState,
	            isShow:false,
	            onMouse:false
	    	}
	    	case 'start_mouse':
	        return{
	            ...prevState,
	            onMouse:true
	    	}
	    	case 'start_drag':
	        return{
	            ...prevState,
	            onDrag:true
	    	}
      	case 'stop_drag':
          	return{
	            ...prevState,
	            onDrag:false,
	            onMouse:false,
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