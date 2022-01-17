import {useContext,useMemo,useEffect} from 'react';
import {StoreContext} from '../AppInit';
const useStorage = (function(){
    return function(nameSpace,initData){
        const storeData = useContext(StoreContext);
        const [store,handleStore] = storeData['session'];
        useEffect(function(){
        if(handleStore.get(nameSpace) === undefined){
            handleStore.set(nameSpace,initData);
        }
        },[nameSpace])
        let data = useMemo(function(){
            return handleStore.get(nameSpace)??initData;
        },[handleStore.get(nameSpace)]);
        let handle = useMemo(function(){
            return {
                set:function(value){
                    handleStore.set(nameSpace,value);
                },
                remove:function(){
                    handleStore.remove(nameSpace);
                }
            }
        },[nameSpace]);
        return [data,handle];
   }
})();
export default useStorage;