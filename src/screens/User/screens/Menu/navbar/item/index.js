import {useState,useMemo,memo,useRef} from "react";
import clsx from 'clsx';
import './index.css';
import {Item,Button,Icon} from '../../../../../../components/';
import DropContent from './drop/';
export default memo(function MainMenuNavbarItem({to,keyApi,params,buttonClass,className,icon,text,children,...props}){
  const dropRef = useRef();
  const itemAttr={
    className:"main-menu-navbar-item"
  };
  if(className !== undefined){
    itemAttr.className+=" "+className;
  };
  itemAttr.onMouseOver = useMemo(function(){
      return function(){
        if(dropRef.current){
          dropRef.current.show();
        }
      }
  })
  itemAttr.onMouseOut = useMemo(function(){
      return function(){
        if(dropRef.current){
          dropRef.current.close();
        }
      }
  })

  const buttonAttr = {
      ...props,
      className:"main-menu-navbar-button flex-column flex-lg-row"
  };
  if(buttonClass !== undefined){
    buttonAttr.className+=" "+buttonClass;
  };
  if(keyApi === undefined){
    buttonAttr.to = to;
    buttonAttr.params = params;
  }
  const buttonTextAttr = {
    className:"text fs-0_8em fs-md-0_9em fs-lg-1em"
  }
  if(keyApi !== undefined){
    buttonTextAttr.className+=" dropdown-toggle";
  }
  return(
    <Item {...itemAttr}>
        <Button {...buttonAttr}>
            <Icon icon={icon}className="fs-2 mx-1"/>
            <span {...buttonTextAttr}>{text}</span>
        </Button>
        {keyApi && <DropContent 
            keyApi={keyApi} 
            params={params} 
            ref={dropRef} 
            to={to} 
            />
        }
    </Item>
	)
});