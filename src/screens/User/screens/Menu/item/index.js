import {useState,memo} from "react";
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../core/useFetch';
import {Item,Button,Icon} from '../../../../../components/';
export default memo(function MainMenuItem({buttonClass,className,icon,text,children,...props}){
  const [hover,setHover] = useState(false);
  const buttonAttr = {
      ...props,
      className:"main-menu-button flex-row flex-md-column flex-lg-row"
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
  const buttonTextAttr = {
    className:"text fs-1em fs-md-0_9em fs-lg-1em"
  }
  return(
    <Item {...itemAttr}>
        <Button {...buttonAttr}>
            <Icon hover={hover}icon={icon}className="fs-2 mx-1"/>
            <span {...buttonTextAttr}>{text}</span>
        </Button>
        {children}
    </Item>
	)
});