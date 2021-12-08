import './index.css';
import {memo,useRef,useEffect} from 'react';
import clsx from 'clsx';
import {List,Item,Button} from '../../../../../../../components/';
export default memo(function MainMenuDrop({listItem,show,...props}){
    const thisRef = useRef();
    const dropdown={
        className:clsx("main-menu-offcanvas-dropdown-container",{active:show})
    };
    const dropdownList={
        className:"main-menu-offcanvas-dropdown-list"
    };
    const dropdownItem={
        className:"main-menu-offcanvas-dropdown-item"
    };
    const dropdownBtn={
        className:"main-menu-offcanvas-dropdown-button"
    };
    useEffect(function(){
        if(thisRef.current){  
            if(show){     
                let height = thisRef.current.querySelector('.main-menu-offcanvas-dropdown-list').offsetHeight;
                thisRef.current.style.height = height+"px";
            }else{
                thisRef.current.style.height = "0px";
            }
        }
    },[show])
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