import {memo,useContext,useMemo,useState,forwardRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from './container.module.css';

import ToastComponent from './component';
import {ToastContext} from './provider';

function ToastContainer({children,className,...props},ref){
  const [list] = useContext(ToastContext);
  return(
  	<div {...props}className={clsx(styles.container,{[className]:className})}>
      <div id="toast"className={clsx(styles.content)}>
      	{
      		list.reduce(function(results,toast,index){
      			if(toast){
      				results.push(<ToastComponent {...toast} index={index} key={index}/>)
      			};
      			return results;
      		},[])
      	}
      </div>
    </div>
  )
};
export default memo(forwardRef(ToastContainer));
