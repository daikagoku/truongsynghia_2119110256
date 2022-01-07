import {useContext,useMemo} from 'react';
import {AppContext} from '../AppInit';
function useApp(nameSpace,initData){
    const [appData,handleApp] = useContext(AppContext);
	let data = useMemo(function(){
        return appData[nameSpace]??initData;
    },[appData[nameSpace]]);
    let handle = useMemo(function(){
        return {
           	set:function(value){
                handleApp.set(nameSpace,value);
            },
            remove:function(){
                handleApp.remove(nameSpace);
            }
        }
    },[nameSpace]);

    return [data,handle]; 
}
export default useApp;