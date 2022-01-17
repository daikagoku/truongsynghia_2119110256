import {createContext,useState,useMemo,useEffect} from 'react';
export const SessionStorage = (function(){
    const KEY  = 'GoShop';
    return function(){
        const [store,setStore] = useState(JSON.parse(sessionStorage.getItem(KEY)) ?? {});
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
            sessionStorage.setItem(KEY,JSON.stringify(store));
        },[store]);
        return [store,handle];
   }
})();
export default SessionStorage;