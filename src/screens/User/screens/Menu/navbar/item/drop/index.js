import './index.css';
import {memo} from 'react';
import clsx from 'clsx';
import {List,Item,Button} from '../../../../../../../components/';
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