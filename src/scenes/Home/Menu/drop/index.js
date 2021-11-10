import './index.css';
import {List,Button} from '../../../../components/tags';
export default function MainMenuDrop({listItem,open,...props}){
    const dropdown={
        className:"main-menu-dropdown-content"
    };
    if(open){
        dropdown.className+=" active";
    }
    const dropdownList={
        className:"main-menu-dropdown-list"
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
}