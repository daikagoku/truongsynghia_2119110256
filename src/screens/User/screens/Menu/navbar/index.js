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
              params = {{parent_alias:'dien-thoai'}}
              icon   ="fas fa-mobile-alt"
              text   ="Điện thoại"
              to = "/product/category"
            />
            <MainMenuNavbarItem 
              keyApi ="category"
              params = {{parent_alias:'may-tinh'}}
              icon   ="fas fa-laptop"            
              text   ="Laptop"
              to = "/product/category"
            />
            <MainMenuNavbarItem 
              icon ="fas fa-tablet-alt"
              text ="Tablet"
              to = "/product/category"
            />
            <MainMenuNavbarItem 
              keyApi ="category"
              params = {{parent_alias:'phu-kien'}}
              to = "/product/category"
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
              keyApi ="topic"
              params = {{parent_alias:'tin-tuc'}}
              icon ="fas fa-clipboard-list"
              text ="Tin tức"
              to = "/post/topic"
            />
    </List>
	)
}
export default memo(forwardRef(MenuNavbar));