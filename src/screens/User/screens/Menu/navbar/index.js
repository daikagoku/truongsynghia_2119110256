import {useImperativeHandle,forwardRef,memo,useRef} from 'react';
import clsx from 'clsx';
import {List} from '../../../../../components/';
import MainMenuNavbarItem from './item/';
import './index.css';
function MenuNavbar({...props},ref){
	return(
		<List ref={ref} className="main-menu-navbar d-none d-md-flex">                 
            <MainMenuNavbarItem      
              keyApi ="category"
              filter ={(item)=>(item.parent==="mobile")}
              icon   ="fas fa-mobile-alt"
              text   ="Điện thoại"
            />
            <MainMenuNavbarItem 
              keyApi ="category"
              filter ={(item)=>(item.parent==="laptop")}
              icon   ="fas fa-laptop"
              text   ="Laptop"
            />
            <MainMenuNavbarItem 
              icon ="fas fa-tablet-alt"
              text ="Tablet"
            />
            <MainMenuNavbarItem 
              keyApi ="category"
              filter ={(item)=>(item.parent==="phu-kien")}
              icon   ="fas fa-headphones-alt"
              text   ="Phụ kiện"
            />
            <MainMenuNavbarItem 
              to   ="/tool"
              icon ="fas fa-tools"
              text ="Sửa chữa"
            />
            <MainMenuNavbarItem 
              to   ="/flash-sale"
              icon ="fas fa-bolt"
              text ="Flash Sale"
            />
            <MainMenuNavbarItem 
              to   ="/post"
              icon ="fas fa-clipboard-list"
              text ="Tin tức"
            />
    </List>
	)
}
export default memo(forwardRef(MenuNavbar));