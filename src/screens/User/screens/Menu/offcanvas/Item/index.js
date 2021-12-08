import {useState,memo} from "react";
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import {Item,Button,Icon} from '../../../../../../components/';
import MainMenuOffcanvasDrop from './Drop/';
export default memo(function({api,keyApi,filter,sort,buttonClass,className,icon,text,children,...props}){
  const [hover,setHover] = useState(false);
  const [listItem] = useFetch({
        initData:[],
        api     :api,
        keyApi  :keyApi,
        filter  :filter,
        sort    :sort
  });
  const itemAttr={
    className:"main-menu-offcanvas-item square-btn"
  };
  itemAttr.onClick = function(_event){
    setHover(!hover);
  }
  if(className !== undefined){
    itemAttr.className+=" "+className;
  };

  const buttonAttr = {
      ...props,
      className:"main-menu-offcanvas-button"
  };
  if(buttonClass !== undefined){
    buttonAttr.className+=" "+buttonClass;
  };
  if(hover === true){
    buttonAttr.className+=" active";
  };

  const buttonTextAttr = {
    className:"text"
  }
  if(Array.isArray(listItem) && listItem.length !== 0 ){
    buttonTextAttr.className+=" dropdown-toggle";
  }
  return(
    <Item {...itemAttr}>
        <Button {...buttonAttr}>
            <Icon hover={hover}icon={icon}className="fs-2 mx-3"/>
            <span {...buttonTextAttr}>{text}</span>
        </Button>
        <MainMenuOffcanvasDrop show={hover}listItem={listItem}/>
    </Item>
	)
});