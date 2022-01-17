import {useState,useReducer,useRef,useEffect,useContext,memo} from 'react';
import clsx from 'clsx';
import './index.css';
import useReponsive from '../../../../core/useReponsive';
import {List} from '../../../../components/';
import MainMenuItem from './item/';
import MainMenuNavbar from './navbar/';
import {MainMenuContext,initData,reducer} from './init';
function MainMenu({history,location,match,...props}) {
  const thisRef       = useRef({});
  const offcanvasRef       = useRef({});
  const [state,dispatch] = useReducer(reducer,initData);
  const [reponsive] = useReponsive();
  const sectionAttr = {
    ref:thisRef,
    id:"main-menu",
    className:clsx("container-fluid",{'active fixed top-0':state.isFixed})
  }
  useEffect(function(){
      const offsetTop = thisRef.current.offsetTop;
      const height = thisRef.current.offsetHeight;
      const body = document.querySelector("#App");
      function handleScroll(event){
        if(thisRef.current){
            if(offsetTop < body.scrollTop){
                dispatch({
                  key:'set_fixed',
                  value:true
                })
                body.dataset.offsetTop=height;
            }else{
                dispatch({
                  key:'set_fixed',
                  value:false
                })
                body.dataset.offsetTop=0;
            };
        }
    };
    body.addEventListener('scroll',handleScroll);
    return ()=>(body.removeEventListener('scroll',handleScroll))
  },[]);
  useEffect(function(){
    switch(reponsive.state.width){
            case "none":
            case "xs":
            case "sm":
                dispatch({
                  key:'set_reponsive',
                  value:'mobile'
                })
                break;
            case "md":
            case "lg":
            case "xl":
            case "xxl":
                dispatch({
                  key:'set_reponsive',
                  value:'desktop'
                })
                break;
        }
  },[reponsive.state.width])
  return (
      <section {...sectionAttr}>
      		<div className="container-lg">
      			<div className="row">
      				<List className="main-menu">	
                <MainMenuItem 
                      className="main-menu-brand"
                      icon="fas fa-home"
                      text="Trang chủ"
                      to="/"
                />
                <MainMenuItem 
                    buttonClass="main-menu-toggle d-flex d-md-none"
                    onClick=""
                    icon="fas fa-bars"
                >                        
                  {
                    <MainMenuNavbar /> 
                  }      
                </MainMenuItem>
      				</List>
      			</div>
      		</div>
      </section>
  );
}

export default memo(MainMenu);
/*
state.reponsive === 'mobile' && <MainMenuOffcanvas ref={offcanvasRef}/> 
                    || state.reponsive === 'desktop' && 
                    */