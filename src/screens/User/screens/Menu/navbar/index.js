import {useImperativeHandle,forwardRef,memo,useRef} from 'react';
import clsx from 'clsx';
import {List} from '../../../../../components/';
import MainMenuItem from './item/';
import './index.css';
function MenuNavbar({...props},ref){
	const thisRef = useRef({});
	useImperativeHandle(ref,function(){
		return{
			...thisRef.current
		}
	});
	return(
		<List ref={thisRef} className="main-menu-navbar d-none d-md-flex">                 
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
	)
}
export default memo(forwardRef(MenuNavbar));