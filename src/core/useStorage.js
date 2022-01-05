import {useContext,useMemo} from 'react';
import {StoreContext} from './LocalStorage';
const useStorage = (function(){
    return function(nameSpace,initData){
        const store = useContext(StoreContext);
        let data = useMemo(function(){
            return store.get(nameSpace)??initData;
        },[store.get(nameSpace)]);
        let handle = useMemo(function(){
            return {
                set:function(value){
                    store.set(nameSpace,value);
                },
                remove:function(){
                    store.remove(nameSpace);
                }
            }
        },[nameSpace]);
        return [data,handle];
   }
})();
export default useStorage;