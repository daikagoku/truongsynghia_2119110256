import {useState,useEffect} from "react";
import {BASE_URL} from '../../core/Config'
import Fetch from '../../core/Fetch';
import {List,Item,Button,Icon} from '../../tags/Tags';
export default function MainMenuDrop({listItem,open,...props}){
    const dropdown={
        className:"main-menu-dropdown w-min-12 w-fit-content dropdown-content position-absolute top-12 d-flex flex-column px-2 py-2"
    };
    const dropdownItem={
        className:"main-menu-dropdown-item flex-grow-1 d-flex  position-relative"
    };
    const dropdownBtn={
        className:"main-menu-dropdown-button justify-content-start py-1 px-3 w-min-12 w-fit-content"
    };

 	if(open===true){
        dropdown.transform  ="translateY(0.1rem)";
        dropdown.transition ="transform 0.5s linear,visibility 0s";
        dropdown.visibility ="visible";
	}else{
        dropdown.transform  ="translateY(-0.5rem)";
        dropdown.transition ="transform 0.5s linear,visibility 0s 0.25s";
        dropdown.visibility ="hidden";
	};
    if(listItem !== undefined && listItem.length > 0 ){
        return(
            <List {...dropdown}listItem={listItem}>
                {function(_item,_index){
                    return(
                        <Item key={_index}{...dropdownItem}>
                            <Button to={"/category/"+_item.alias}{...dropdownBtn}>{_item.title}</Button>
                        </Item>
                    )
                }}
            </List>
        )
    }else{
        return <></>
    }
}