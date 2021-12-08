import {useState,useRef,useEffect,memo} from 'react';
import clsx from 'clsx';
import './index.css';
import {List} from '../../../../components/';
import MainMenuItem from './item/';
import MainMenuNavbar from './navbar/';
import MainMenuOffcanvas from './offcanvas/';
function MainMenu({history,location,match,...props}) {
  const ref       = useRef({});
  const [fixed,setFixed] = useState(false);
  const [show,setShow] = useState(false);
  const sectionAttr = {
    ref:ref,
    id:"main-menu",
    className:clsx("container-fluid",{'active fixed top-0':fixed}),
    onLoad:function(event){
      console.log("meni load");
    }
  }
  useEffect(function(){
      const offsetTop = ref.current.offsetTop;
      const body = document.querySelector("#App");
      function handleScroll(event){
        if(ref.current){
            if(offsetTop < body.scrollTop){
                setFixed(true);
            }else{
                setFixed(false);
            };
        }
    };
    body.addEventListener('scroll',handleScroll);
    return ()=>(body.removeEventListener('scroll',handleScroll))
  },[]);
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
                    onClick = {()=>(setShow(!show))}
                    buttonClass="main-menu-toggle d-flex d-md-none"
                    icon="fas fa-bars"
                >        
                  <MainMenuNavbar />  
                  <MainMenuOffcanvas show={show}/>       
                </MainMenuItem>
      				</List>
      			</div>
      		</div>
      </section>
  );
}

export default memo(MainMenu);
