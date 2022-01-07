import React,{memo,useContext,useMemo,useState,forwardRef,useEffect} from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';
import styles from './index.module.css';

import MessageBoxComponent from './Item';
import useMessageModel from "../../model/Message/";

function MessageBoxContainer({children,className,...props},ref){
  const [messages] = useMessageModel();
  return(
  	<div {...props}className={clsx(styles.container,{[className]:className})}>
      <div id="message-box"className={clsx(styles.content)}>
      	{
      		messages.reduce(function(results,message,index){
      			if(message){
      				if(results.length >= 5){
                results.pop();
              }
              results.unshift(<MessageBoxComponent {...message} index={index} key={index}/>)
      			};
      			return results;
      		},[])
      	}
      </div>
    </div>
  )
};
export default memo(forwardRef(MessageBoxContainer));
