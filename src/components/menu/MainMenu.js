import {BrowserRouter, Route, Link } from "react-router-dom";
import {useState,useRef,useEffect} from 'react';
import './MainMenu.css';

import {List} from '../../tags/Tags';
import MainMenuItem from './MainMenuItem';
function MainMenu({history,location,match,...props}) {
  // console.log({history,location,match})
  const ref       = useRef(null);
  const [position,setPosition] = useState(0);
  useEffect(function(){
      const offsetTop = ref.current.offsetTop;
      function handleScroll(event){
        if(ref.current !== null){
            if(offsetTop <= document.documentElement.scrollTop){
                setPosition('fixed-md top-md-0');
            }else{
                setPosition('');
            };
        }
    };
    document.addEventListener('scroll',handleScroll);
    return ()=>(document.removeEventListener('scroll',handleScroll))
  },[]);
  return (
      <section ref={ref}id="main-menu"className={"container-fluid "+position}>
      		<div className="container">
      			<div className="row">
      				<List className="main-menu">	
                <MainMenuItem 
                      className="main-menu-brand"
                      buttonClass="fw-bold fs-4"
                      icon="fas fa-home"
                      text="Trang chủ"
                      to="/"
                />
                <MainMenuItem 
                    className   ="d-flex"
                    buttonClass = "d-flex d-md-none"
                    icon        ="fas fa-align-justify"
                >               
                  <List className="main-menu-content">                 
                    <MainMenuItem      
                      keyApi ="category"
                      filter ={(item)=>(item.parent==="mobile")}
                      icon   ="fas fa-mobile-alt"
                      text   ="Điện thoại"
                    />
                    <MainMenuItem 
                      keyApi ="category"
                      filter ={(item)=>(item.parent==="laptop")}
                      icon   ="fas fa-laptop"
                      text   ="Laptop"
                    />
                    <MainMenuItem 
                      icon ="fas fa-tablet-alt"
                      text ="Tablet"
                    />
                    <MainMenuItem 
                      keyApi ="category"
                      filter ={(item)=>(item.parent==="phu-kien")}
                      icon   ="fas fa-headphones-alt"
                      text   ="Phụ kiện"
                    />
                    <MainMenuItem 
                      to   ="/tool"
                      icon ="fas fa-tools"
                      text ="Sửa chữa"
                    />
                    <MainMenuItem 
                      to   ="/flash-sale"
                      icon ="fas fa-bolt"
                      text ="Flash Sale"
                    />
                    <MainMenuItem 
                      to   ="/post"
                      icon ="fas fa-clipboard-list"
                      text ="Tin tức"
                    />
                  </List>
                </MainMenuItem>
      				</List>
      			</div>
      		</div>
      </section>
  );
}

export default MainMenu;
