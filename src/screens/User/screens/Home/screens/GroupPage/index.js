import {memo,useReducer,useRef,useMemo,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import clsx from 'clsx';
import './index.css';
import useFetch from '../../../../../../core/useFetch';
import GroupPageContent from './screens/Content/';
import GroupPagePagination from './screens/Pagination/';

import {HomePageContext,initData,reducer} from './init';
function GroupPage({...props}){
	const [state,dispatch] = useReducer(reducer,initData);
    const location = useLocation();
    const thisRef = useRef();
	const [listItem] = useFetch({
        initData:[],
        keyApi:'product',
        handle:function(data){
            const newProducts = data.reduce(function(results,{versions,..._product}){
                versions.forEach(function({id,...__version},__index){
                    const __product = {..._product};
                        __product.version=id;
                        __product.versions=versions;
                    results.push(__product);
                });
                return results;
            },[]);
            return newProducts;
        }
    });
    const products = useMemo(function(){
        const newList = [...listItem].splice(state.index,state.limit);
        return newList;
    },[listItem,state.index,state.limit]);
    useEffect(function(){
        dispatch({
            key:"set_index",
            value:0
        })
    },[location])
	return(
<HomePageContext.Provider value={[{...state,length:listItem.length,this:thisRef.current},dispatch]}>
	<section ref={thisRef} className="container-fluid home-page py-2">
    	<div className="container-lg">
    		<div className="row">
    			<div className="col col-12">
    				<div className="row home-page-head">
                    
                    </div>
                    <div className="row home-page-body">
                        <GroupPageContent listItem={products}/>
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