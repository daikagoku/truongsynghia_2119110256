import {useState,memo} from "react";
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import {Item,Button,Icon} from '../../../../../../components/';
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
    className:"header-menu-item"
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
  const buttonAttr = {
      ...props,
      className:"header-menu-button square-btn"
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
        {children}
    </Item>
	)
});