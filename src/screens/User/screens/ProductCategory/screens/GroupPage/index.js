import {memo,useReducer,useRef,useMemo,useEffect,useContext} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import GroupPageContent from './screens/Content/';
import GroupPageLoading from './screens/Loading/';
import GroupPagePagination from './screens/Pagination/';
import {ProductCategoryContext} from '../../init';
import {PageContext,initData,reducer} from './init';
function GroupPage({...props}){
	const [state,dispatch] = useReducer(reducer,initData);
    const [search,handleSearch] = useContext(ProductCategoryContext);
    const location = useLocation();
    const thisRef = useRef();
    const [fetchDataLength,handleFetchLength] = useFetch({
        initData:0,
        keyApi:'product',
        uriApi:'/category/count',
        position:"product-category-page"
    });
    useEffect(function(){
        function get(){
            handleFetchLength.get({
                params:{
                    parent_alias:handleSearch.get("parent_alias"),
                    alias:handleSearch.get("alias"),
                    query:handleSearch.get("query"),
                },
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
        },10000);
        return function(){
            clearInterval(interval)
        }
    },[search])
    const [fetchDataList,handleFetchList] = useFetch({
        initData:[],
        keyApi:'product',
        uriApi:'/category',
        position:"product-category-page"
    });
    useEffect(function(){
        function get(){
            handleFetchList.get({
                params:{
                    parent_alias:handleSearch.get("parent_alias"),
                    alias:handleSearch.get("alias"),
                    query:handleSearch.get("query"),
                    offset:state.index,
                    limit:state.limit
                }
            })
        }
         get()
        const interval = setInterval(function(){
            get()
        },2000);
        return function(){
            clearInterval(interval);
        }
    },[state.index,state.limit,search])
    useEffect(function(){
        dispatch({
            key:"set_index",
            value:0
        })
    },[location])
	return(
<PageContext.Provider value={[{...state,this:thisRef.current},dispatch]}>
	<section ref={thisRef} className="row">
    	<div className="col col-12">
    		<div className="row home-page-head">
            
            </div>
            <div className="row home-page-body">
                <GroupPageContent 
                    listItem={fetchDataList.data} 
                />
                <GroupPageLoading />
            </div>
            <div className="row home-page-footer">
                <GroupPagePagination/>
            </div>
        </div>
    </section>
</PageContext.Provider>
	)
}
export default memo(GroupPage);