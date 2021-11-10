import {createContext} from 'react';
export const SearchContext = createContext([]);
export const initData={
    value:"",
    focus:false
};
export function reducer(prevState,action){
    switch(action.key){
      case 'set_value':
          return{
            ...prevState,
            value:action.value
          };
      case 'set_focus':
          return{
            ...prevState,
            focus:action.value
          };
      default :
        console.log(action.key,{prevState,action,error:"Không tồn tại action"});
        return{
          ...prevState
        }
        break;
    }
};