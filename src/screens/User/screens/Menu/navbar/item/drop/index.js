import './index.css';
import {memo,forwardRef,useRef,useEffect} from 'react';
import clsx from 'clsx';
import useFetch from '../../../../../../../core/useFetch';
import {List,Item,Button,Drop} from '../../../../../../../components/';
export default memo(forwardRef(function MainMenuDrop({keyApi,params,to,...props},ref){
    let [fetchData,handleFetch] = useFetch({
        initData :[],
        keyApi   :keyApi,
        position :"main-menu"
    });
    useEffect(function(){
        function get(){
            handleFetch.get({params});
        }
        get();
        const interval = setInterval(function(){
            get();
        },10000);
        return function(){
            get();
        }
    },[params])
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
    if(fetchData.data && fetchData.data.length > 0 ){
        return(
        <Drop ref={ref} position="bottom" >
            <div {...dropdown}>
                <List {...dropdownList}>
                    {
                        fetchData.data.map(function(_item,_index){
                            return(
                                <Item key={_index}{...dropdownItem}>
                                    <Button {...dropdownBtn} to={to} params={{...params,alias:_item.alias}}>
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