import {memo,createContext,useMemo,useState,forwardRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';

import ToastComponent from './component';
export const ToastContext = createContext([]);
function ToastProvider({children,className,...props},ref){
  const [list,setList] = useState([]);
  console.log(list);
  const handleList = useMemo(function(){
    return {
      add:function(item){
        setList(function([...prevList]){
          prevList.push(item);
          return prevList;
        });
      },
      remove:function(index){
        const prevList = [...list];
        prevList.splice(index,1);
        setList(prevList);
      }
    }
  },[list]);
  return(
  <ToastContext.Provider value={[list,handleList]}>
    {children}
  </ToastContext.Provider>
  )
};
export default memo(forwardRef(ToastProvider));
