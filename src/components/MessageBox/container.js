import {memo,useContext,useMemo,useState,forwardRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from './container.module.css';

import MessageBoxComponent from './component';
import {MessageBoxContext} from './provider';

function MessageBoxContainer({children,className,...props},ref){
  const [list] = useContext(MessageBoxContext);
  return(
  	<div {...props}className={clsx(styles.container,{[className]:className})}>
      <div id="toast"className={clsx(styles.content)}>
      	{
      		list.reduce(function(results,toast,index){
      			if(toast){
      				if(results.length >= 5){
                results.pop();
              }
              results.unshift(<MessageBoxComponent {...toast} index={index} key={index}/>)
      			};
      			return results;
      		},[])
      	}
      </div>
    </div>
  )
};
export default memo(forwardRef(MessageBoxContainer));
