import './index.css';
import {memo,useRef,useEffect} from 'react';
import clsx from 'clsx';
import {List,Item,Button} from '../../../../../../../components/';
export default memo(function MainMenuDrop({listItem,open,...props}){
    const thisRef = useRef();
    const dropdown={
        className:clsx("main-menu-navbar-dropdown-content",{active:open})
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
            <div ref={thisRef} {...dropdown}>
                <List {...dropdownList}>
                    {
                        listItem.map(function(_item,_index){
                            return(
                                <Item key={_index}{...dropdownItem}>
                                    <Button to={"/category/"+_item.alias}{...dropdownBtn}>
                                        {_item.title}
                                    </Button>
                                </Item>
                            )
                        })
                    }
                </List>
            </div>
        )
    }else{
        return <></>
    }
})