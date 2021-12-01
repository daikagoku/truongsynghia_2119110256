import {createContext,useState} from 'react';
export const StoreContext = createContext();
const LocalStorage = (function(){
    const KEY  = 'GoShop';
    const initData = {};
    return function({children}){
        const [store,setStore] = useState(JSON.parse(localStorage.getItem(KEY)) ?? {});
        function save(){
            localStorage.setItem(KEY,JSON.stringify(store));
        };
        const handle = {
            get:function(key){
                return store[key];
            },set:function(key,value){
                setStore(function({...prevStore}){
                    prevStore[key] = value;
                    return prevStore;
                });
            },remove:function(key){
                setStore(function({...prevStore}){
                    delete prevStore[key];
                    return prevStore;
                });
            }
        };
        save();
        return(
            <StoreContext.Provider value={handle}>
                {children}
            </StoreContext.Provider>
        )
   }
})();
export default LocalStorage;