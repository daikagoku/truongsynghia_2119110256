import {useState,useMemo,memo,useRef} from "react";
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import {Item,Button,Icon} from '../../../../../../components/';
import DropContent from './drop/';
export default memo(function MainMenuNavbarItem({to,keyApi,params,buttonClass,className,icon,text,children,...props}){
  const dropRef = useRef();
  let [fetchData] = useFetch({
        initData :[],
        keyApi   :keyApi,
        position :"main-menu",
        params   :params
  });
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


  const buttonTextAttr = {
    className:"text fs-0_8em fs-md-0_9em fs-lg-1em"
  }
  buttonTextAttr.className+=useMemo(function(){
    if(fetchData.data.length !== 0 ){
        return " dropdown-toggle";
    }else{
      return "";
    }
  },[fetchData.results])
  return(
    <Item {...itemAttr}>
        <Button {...buttonAttr}>
            <Icon icon={icon}className="fs-2 mx-1"/>
            <span {...buttonTextAttr}>{text}</span>
        </Button>
        <DropContent ref={dropRef} to={to} listItem={fetchData.results}/>
    </Item>
	)
});