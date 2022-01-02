import {List,Item,Button,Icon,Offcanvas} from '../../../../../components/';
import {useRef,useEffect,memo,forwardRef} from 'react';
import useFetch from '../../../../../core/useFetch';
import './index.css';
import MenuItem from './Item/';
export default memo(forwardRef(function MainMenuOffcanvas(props,ref){
	return(
		<Offcanvas ref={ref} 
				title="Menu" 
				position="right"
				widthSize="w-9 w-sm-7 w-md-6 w-lg-5 w-xl-4 w-xxl-3"
			>
			 	<List className="main-menu-offcanvas">
					<MenuItem      
            keyApi ="category"
            params = {{parent_alias:'dien-thoai'}}
            icon   ="fas fa-mobile-alt"
            text   ="Điện thoại"
          />
          <MenuItem 
            keyApi ="category"
            params = {{parent_alias:'may-tinh'}}
            icon   ="fas fa-laptop"
            text   ="Laptop"
          />
          <MenuItem 
            keyApi ="category"
            params = {{parent_alias:'phu-kien'}}
            icon   ="fas fa-headphones-alt"
            text   ="Phụ kiện"
          />
          <MenuItem 
            icon ="fas fa-tablet-alt"
            text ="Tablet"
          />
          <MenuItem 
            to   ="/tool"
            icon ="fas fa-tools"
            text ="Sửa chữa"
          />
          <MenuItem 
            to   ="/flash-sale"
            icon ="fas fa-bolt"
            text ="Flash Sale"
          />
          <MenuItem 
            keyApi ="topic"
            icon ="fas fa-clipboard-list"
            text ="Tin tức"
          />
        </List>
			</Offcanvas>
	)
}))

