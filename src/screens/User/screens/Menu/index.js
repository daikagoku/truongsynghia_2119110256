import {useState,useRef,useEffect,memo} from 'react';
import clsx from 'clsx';
import './index.css';
import {List} from '../../../../components/';
import MainMenuItem from './navbar/item/';
import MainMenuNavbar from './navbar/';
function MainMenu({history,location,match,...props}) {
  const ref       = useRef(null);
  const [fixed,setFixed] = useState(false);
  useEffect(function(){
      const offsetTop = ref.current.offsetTop;
      const body = document.querySelector("#App");
      function handleScroll(event){
        if(ref.current !== null){
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
      <section ref={ref}id="main-menu"className={clsx("container-fluid",{'active fixed top-0':fixed})}>
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
                    icon="fas fa-bars"
                >        
                  <MainMenuNavbar />       
                </MainMenuItem>
      				</List>
      			</div>
      		</div>
      </section>
  );
}

export default memo(MainMenu);
