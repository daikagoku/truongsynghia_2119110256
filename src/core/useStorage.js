import {useReducer,createContext} from 'react';
import LocalStorage from './LocalStorage';
export const StoreContext = createContext({});
const useStorage = (function(){
    const KEY  = 'GoShop';
    return function(nameSpace,initData){
        let store = LocalStorage(nameSpace,initData);
        function reducer(prevState,action){
            switch(action.key){
                case 'set_value':             
                    store.set(action.value);
                    return store.get();
                case 'reset_value':      
                    store.reset();
                    return store.get();
                case 'remove_value':        
                    store.remove();
                    return store.get();
                default:
                    console.log(action.key,{prevState,action,error:"Không tồn tại action"})
                    return prevState;
    
            }
        };
        const [data,dispatch] = useReducer(reducer,store.get());
        return [data,dispatch];
   }
})();
export default useStorage;