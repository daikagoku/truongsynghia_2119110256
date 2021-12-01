import {useState,memo} from "react";
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../core/useFetch';
import {Item,Button,Icon} from '../../../../../components/';
import MainMenuDrop from './drop';
export default memo(function MainMenuItem({api,keyApi,filter,sort,buttonClass,className,icon,text,children,...props}){
  const [hover,setHover] = useState(false);
  const [listItem] = useFetch({
        initData:[],
        api     :api,
        keyApi  :keyApi,
        filter  :filter,
        sort    :sort
  });
  const buttonAttr = {
      ...props,
      className:"main-menu-button"
  };
  if(buttonClass !== undefined){
    buttonAttr.className+=" "+buttonClass;
  };
  if(hover === true){
    buttonAttr.className+=" active";
  };
  const itemAttr={
    className:"main-menu-item"
  };
  if(className !== undefined){
    itemAttr.className+=" "+className;
  };
  itemAttr.onMouseOver=function(_event,_this){
        setHover(true);
    };
  itemAttr.onMouseOut=function(_event,_this){
        setHover(false);
    };
  if(Array.isArray(listItem) && listItem.length !== 0 ){
    buttonAttr.className+=" dropdown-toggle";
  }
  return(
    <Item {...itemAttr}>
        <Button {...buttonAttr}>
            <Icon hover={hover}icon={icon}className="d-none d-lg-flex fs-2 mx-1"/>
            <span className="text">{text}</span>
        </Button>
        <MainMenuDrop open={hover}listItem={listItem}/>
        {children}
    </Item>
	)
});