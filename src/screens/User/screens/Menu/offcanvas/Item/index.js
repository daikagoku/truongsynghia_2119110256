import {useState,memo,useMemo} from "react";
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import {Item,Button,Icon} from '../../../../../../components/';
import MainMenuOffcanvasDrop from './Drop/';
export default memo(function({api,keyApi,params,buttonClass,className,icon,text,children,...props}){
  const [hover,setHover] = useState(false);
  let [fetchData] = useFetch({
        initData :[],
        keyApi   :keyApi,
        position :"main-menu",
        params   :params
  });
  const itemAttr={
    className:"main-menu-offcanvas-item square-btn"
  };
  itemAttr.onClick = useMemo(function(){
    return function(_event){
      _event.target.scrollIntoView();
      setHover(!hover);
    }
  },[hover]);
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
  buttonTextAttr.className+=useMemo(function(){
    if(fetchData.results.length !== 0 ){
        return " dropdown-toggle";
    }else{
      return "";
    }
  },[fetchData.results])
  
  return(
    <Item {...itemAttr}>
        <Button {...buttonAttr}>
            <Icon hover={hover}icon={icon}className="fs-2 mx-3"/>
            <span {...buttonTextAttr}>{text}</span>
        </Button>
        <MainMenuOffcanvasDrop show={hover}listItem={fetchData.results}/>
    </Item>
	)
});