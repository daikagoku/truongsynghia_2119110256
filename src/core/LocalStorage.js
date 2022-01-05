import {createContext,useState,useMemo,useEffect} from 'react';
export const StoreContext = createContext();
const LocalStorage = (function(){
    const KEY  = 'GoShop';
    return function({children}){
        const [store,setStore] = useState(JSON.parse(localStorage.getItem(KEY)) ?? {});
        const handle = useMemo(function(){
            return {
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
        },[store]);
        useEffect(function(){
            localStorage.setItem(KEY,JSON.stringify(store));
        },[store]);
        return(
            <StoreContext.Provider value={handle}>
                {children}
            </StoreContext.Provider>
        )
   }
})();
export default LocalStorage;