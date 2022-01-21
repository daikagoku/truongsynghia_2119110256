
import {useReducer,useMemo,useRef,memo} from 'react';
import useStorage from '../../../../../core/useStorage';
import useSearchModel from '../../../../../model/Search/';
import {Form,Input,Button,Icon} from '../../../../../components/';
import './index.css';
import HeaderSearchRecomend from './Recomend';
import HeaderSearchInput from './Input';
import HeaderSearchSubmit from './Submit';
import {reducer,initData,SearchContext} from './init';
function HeaderSearch(props) {
  const formRef = useRef({});
  const [search,handleSearch] = useSearchModel();
  const [state,dispatch] = useReducer(reducer,initData);
  const [store,handleStore] = useStorage('header_search',[]);
  function newHistory(){
    let newHistory = store.filter(function(_item){
      return _item !== state.value;
    }).slice(0,1000);
    newHistory.unshift(state.value);
    return newHistory;
  }
  function handleSubmit(value){
    if(value !== ""){
          handleStore.set(newHistory());
          dispatch({
            key:'set_value',
            value:""
          });
          handleSearch.to("/product/category");
          handleSearch.set("query",value)
        }
  }
  const formAttr = useMemo(function(){
    return{
      ref:formRef,
      className:"header-search-drop",
      onSubmit:function(e){
        e.preventDefault();
        handleSubmit(state.value)
      }
    }
  },[state.value]);
  return (
    <SearchContext.Provider value={{
      state:state,
      form:formRef.current,
      dispatch:dispatch,
      store:store
    }}>
      <Form {...formAttr}>
        <HeaderSearchInput/>
        <HeaderSearchSubmit onClick={()=>(handleSubmit(state.value))}/>
        <HeaderSearchRecomend/>
      </Form>
    </SearchContext.Provider>
  );
}

export default memo(HeaderSearch);
