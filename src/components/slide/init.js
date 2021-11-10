import {createContext} from 'react';
export const SlideContext = createContext([]);
export const initData={
    index:0,
    totalIndex:0
};
function setIndex(nextIndex,totalIndex){
		if(nextIndex > totalIndex - 1){
			return 0;
		}else if(nextIndex < 0){
			return totalIndex - 1;
		}else{
			return nextIndex;
		}
};
export function reducer(prevState,action){
    switch(action.key){
    	case 'init_data':
    		return{
    			...prevState,
    			totalIndex:action.value
    		}
    	case 'set_index':
    		return{
    			...prevState,
    			index:setIndex(action.value,prevState.totalIndex)
    		}
	    default :
	        console.log(action.key,{prevState,action,error:"Không tồn tại action"});
	        return{
	          ...prevState
	        }
	        break;
	    }
};
