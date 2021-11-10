import {createContext} from 'react';
export const HeaderCartContext = createContext([]);
export const initData={
    open:false
};
export function reducer(prevState,action){
    switch(action.key){
      case 'set_open':
          return{
            ...prevState,
            open:action.value
          };
      default :
        console.log(action.key,{prevState,action,error:"Không tồn tại action"});
        return{
          ...prevState
        }
        break;
    }
};