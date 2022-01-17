import {useContext,useMemo,useEffect} from 'react';
import {AppContext} from '../AppInit';
function useApp(nameSpace){
    const dataApp = useContext(AppContext);
    console.log(dataApp)
}
export default useApp;