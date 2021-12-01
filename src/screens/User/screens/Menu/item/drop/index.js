import './index.css';
import {memo} from 'react';
import clsx from 'clsx';
import {List,Button} from '../../../../../../components/';
export default memo(function MainMenuDrop({listItem,open,...props}){
    const dropdown={
        className:clsx("main-menu-dropdown-content",{active:open})
    };
    const dropdownList={
        
    };
    const dropdownItem={
        className:"main-menu-dropdown-item"
    };
    const dropdownBtn={
        className:"main-menu-dropdown-button"
    };
    if(listItem !== undefined && listItem.length > 0 ){
        return(
            <div  {...dropdown}>
                <List {...dropdownList}listItem={listItem} itemAttr={dropdownItem}>
                    {function(_item,_index){
                        return(
                            <Button to={"/category/"+_item.alias}{...dropdownBtn}>{_item.title}</Button>
                        )
                    }}
                </List>
            </div>
        )
    }else{
        return <></>
    }
})