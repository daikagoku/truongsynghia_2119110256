import {useState,useEffect} from "react";
import Fetch from '../../core/Fetch';
import {List,Item,Button,Icon} from '../../tags/Tags';
import MainMenuDrop from './MainMenuDrop';
export default function MainMenuItem({api,keyApi,filter,sort,buttonClass,className,icon,text,children,...props}){
  const [hover,setHover] = useState(false);
  const listItem = (api || keyApi) && Fetch({
        initData:[],
        api     :api,
        keyApi  :keyApi,
        filter  :filter,
        sort    :sort
  });
  const buttonAttr = {
        ...props,
        className:"main-menu-button py-1"
  };
  if(buttonClass !== undefined){
    buttonAttr.className+=" "+buttonClass;
  };
  if(hover === true){
    buttonAttr.className+=" active";
  };
  const itemAttr={
    className:"w-fit-content flex-grow-1 main-menu-item d-flex justify-content-center fs-0 fs-lg-1 fs-lg-0 position-relative"
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
            <Icon hover={hover}className={icon+" fs-2 mx-1"}/>
            <span className="text d-none d-md-flex fs-md-8 fs-md-0x fs-xl-1x fs-xl-0">{text}</span>
        </Button>
        <MainMenuDrop open={hover}listItem={listItem}/>
        {children}
    </Item>
	)
}