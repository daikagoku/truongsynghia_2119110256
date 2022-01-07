import React,{memo,useContext,useMemo,useState,forwardRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from './index.module.css';

import DialogComponent from './Item';
import useDialogModel from "../../model/Dialog/";

function DialogContainer({children,className,...props},ref){
  const [dialogs] = useDialogModel();
  return(
  	<div {...props}className={clsx(styles.container,{[className]:className})}>
      <div id="dialog"className={clsx(styles.content)}>
      	{
      		dialogs.reduce(function(results,message,index){
      			if(message){
      				results.unshift(<DialogComponent {...message} index={index} key={index}/>)
              
      			};
      			return results;
      		},[])
      	}
      </div>
    </div>
  )
};
export default memo(forwardRef(DialogContainer));
