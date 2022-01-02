import './index.css';
import {memo,forwardRef,useRef,useEffect} from 'react';
import clsx from 'clsx';
import {List,Item,Button,Drop} from '../../../../../../../components/';
export default memo(forwardRef(function MainMenuDrop({listItem,to,...props},ref){
    const dropdown={
        className:clsx("main-menu-navbar-dropdown-content")
    };
    const dropdownList={
        className:"main-menu-navbar-dropdown-list"
    };
    const dropdownItem={
        className:"main-menu-navbar-dropdown-item"
    };
    const dropdownBtn={
        className:"main-menu-navbar-dropdown-button"
    };
    if(listItem !== undefined && listItem.length > 0 ){
        return(
        <Drop ref={ref} position="bottom" >
            <div {...dropdown}>
                <List {...dropdownList}>
                    {
                        listItem.map(function(_item,_index){
                            return(
                                <Item key={_index}{...dropdownItem}>
                                    <Button to={to+"/"+_item.alias}{...dropdownBtn}>
                                        {_item.title}
                                    </Button>
                                </Item>
                            )
                        })
                    }
                </List>
            </div>
         </Drop>
        )
    }else{
        return <></>
    }
}))