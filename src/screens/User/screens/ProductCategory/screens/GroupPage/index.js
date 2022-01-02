import {memo,useReducer,useRef,useMemo,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import GroupPageContent from './screens/Content/';
import GroupPageLoading from './screens/Loading/';
import GroupPagePagination from './screens/Pagination/';

import {PageContext,initData,reducer} from './init';
function GroupPage({args,...props}){
	const [state,dispatch] = useReducer(reducer,initData);
    const location = useLocation();
    const thisRef = useRef();
    const [fetchDataLength] = useFetch({
        initData:0,
        keyApi:'product',
        uriApi:'/category/count',
        params:{
            alias:args[3]
        },
        position:"product-category-page",
        handle:function(results){
            dispatch({
                key:"set_length",
                value:results
            })
            return results;
        }
    });
	const [fetchDataList] = useFetch({
        initData:[],
        keyApi:'product',
        uriApi:'/category',
        params:{
            alias:args[3],
            offset:state.index,
            limit:state.limit
        },
        position:"product-category-page"
    });
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
                        <GroupPageContent listItem={fetchDataList.results}/>
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