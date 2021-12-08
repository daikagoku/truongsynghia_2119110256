import './index.css';
import {memo,useRef,useEffect} from 'react';
import clsx from 'clsx';
import {List,Item,Button} from '../../../../../../../components/';
export default memo(function MainMenuDrop({listItem,open,...props}){
    const thisRef = useRef();
    const dropdown={
        ref:thisRef,
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
    useEffect(function(){
        if(open && thisRef.current){
            const height = thisRef.current.querySelector(".main-menu-navbar-dropdown-list").offsetHeight;
            console.log(height)
            thisRef.current.style.height = height + 'px';
        }
    },[open])
    if(listItem !== undefined && listItem.length > 0 ){
        return(
            <div  {...dropdown}>
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