import {memo,useContext,useMemo,useState,forwardRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from './index.module.css';

import ToastComponent from './Item';
import useToastModel from "../../model/Toast/";

function ToastContainer({children,className,...props},ref){
  const [toasts] = useToastModel();
  return(
  	<div {...props}className={clsx(styles.container,{[className]:className})}>
      <div id="toast"className={clsx(styles.content)}>
      	{
      		toasts.reduce(function(results,toast,index){
      			if(toast){
              if(results.length >= 5){
                results.pop();
              }
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
