import './GroupCard.css';
import {useState,useEffect,useRef} from "react";
import Fetch from '../../core/Fetch';
import {List,Item,Button,Icon} from '../../tags/Tags';
import DragToScroll from '../../core/DragToScroll';
import ScrollToView from '../../core/ScrollToView';
export default function GroupCard({api,keyApi,title,filter,sort,children,...props}) {
  	const listItem = Fetch({
        initData:[],
        api:api,
        keyApi:keyApi,
        filter:filter,
        sort:sort
    });
    if(listItem.length !== 0 ){
        return (
            <div className=" row my-1">
            	<div className="group-card d-flex flex-column">
            		<div className="row group-card-head px-2">
    	                   <div className="group-card-title fs-4 h-100 d-flex align-items-center ms-5">
                                {title??""}
                            </div>
    	            </div>
    	            <div className="row group-card-body pb-2">
    			        {children(listItem)}
    	            </div>
            	</div>
            </div>
        );
    }else{
        return <></>
    }
  };
