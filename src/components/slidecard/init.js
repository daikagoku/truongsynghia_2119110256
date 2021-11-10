import {createContext} from 'react';
export const AppContext = createContext({});
export const initData = {
  isScroll     : false,
  scrollLength :0,
  scrollMove   :0,
  scrollWidth  :0,
  offsetWidth  :0
}
export function reducer(prevState,action){
    switch(action.key){
      case 'start_scroll':
          return{
            ...prevState,
            scrollMove:action.value,
            isScroll:true
          }
      case 'set_scroll':
          return{
            ...prevState,
            scrollLength:action.value
          }
      case 'init_width':
          return{
            ...prevState,
            scrollWidth:action.value
          }
      case 'init_offset':
          return{
            ...prevState,
            offsetWidth:action.value
          }
      case 'stop_scroll':
          return{
            ...prevState,
            isScroll:false
          }
      case 'move_scroll':
          return{
            ...prevState,
            scrollMove:action.value
          }
      default :
        console.log(action.key,{prevState,action,error:"Không tồn tại action"})
        return{
          ...prevState
        }
        break;
    }
};