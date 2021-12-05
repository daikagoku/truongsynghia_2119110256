import {useState,useRef,useEffect,memo} from 'react';
import clsx from 'clsx';
import './index.css';
import {List} from '../../../../components/';
import MainMenuItem from './item/';
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
      <section ref={ref}id="main-menu"className={clsx("d-none d-md-flex container-fluid",{'active fixed-md top-0':fixed})}>
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
                    buttonClass="main-menu-toggle"
                    icon="fas fa-bars"
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

export default memo(MainMenu);
