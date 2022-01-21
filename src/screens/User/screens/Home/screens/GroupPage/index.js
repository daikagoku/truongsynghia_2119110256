import {memo,useReducer,useRef,useMemo,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import GroupPageContent from './screens/Content/';
import GroupPageLoading from './screens/Loading/';
import GroupPagePagination from './screens/Pagination/';

import {HomePageContext,initData,reducer} from './init';
function GroupPage({...props}){
	const [state,dispatch] = useReducer(reducer,initData);
    const location = useLocation();
    const thisRef = useRef();
    const [fetchDataLength,handleFetchLength] = useFetch({
        initData:0,
        keyApi:'product',
        uriApi:'/count',
        position:"home-page"
    });
    useEffect(function(){
        function get(){
            handleFetchLength.get({
                handle:function(results){
                    dispatch({
                        key:"set_length",
                        value:results
                    })
                    return results;
                }
            })
        }
        get();
        const interval = setInterval(function(){
            get();
        },5000)
        return function(){
            clearInterval(interval);
        }
    },[])
	const [fetchDataList,handleFetchList] = useFetch({
        initData:[],
        keyApi:'product',
        position:"home-page"
    });
    useEffect(function(){
        function get(){
            handleFetchList.get({
                params:{
                    offset:state.index,
                    limit:state.limit
                }
            })
        }
        get();
        const interval = setInterval(function(){
            get();
        },5000)
        return function(){
            clearInterval(interval);
        }
    },[state.index,state.limit])
    useEffect(function(){
        dispatch({
            key:"set_index",
            value:0
        })
    },[location])
	return(
        <HomePageContext.Provider value={[{...state,this:thisRef.current},dispatch]}>
        	<section ref={thisRef} className="container-fluid home-page py-2">
            	<div className="container-lg">
            		<div className="row">
            			<div className="col col-12">
            				<div className="row home-page-head">
                            
                            </div>
                            <div className="row home-page-body">
                                <GroupPageContent listItem={fetchDataList.data}/>
                                <GroupPageLoading />
                            </div>
                            <div className="row home-page-footer">
                                <GroupPagePagination/>
                            </div>
                        </div>
            		</div>
            	</div>
            </section>
        </HomePageContext.Provider>
	)
}
export default memo(GroupPage);