
import {useReducer,useMemo,useRef,memo} from 'react';
import useStorage from '../../../../../core/useStorage';
import {Form,Input,Button,Icon} from '../../../../../components/';
import './index.css';
import HeaderSearchRecomend from './Recomend';
import HeaderSearchInput from './Input';
import HeaderSearchSubmit from './Submit';
import {reducer,initData,SearchContext} from './init';
function HeaderSearch(props) {
  const formRef = useRef();
  const [state,dispatch] = useReducer(reducer,initData);
  const [store,handleStore] = useStorage('header_search',[]);
  function newHistory(){
    let newHistory = store.filter(function(_item){
      return _item !== state.value;
    }).slice(0,1000);
    newHistory.unshift(state.value);
    return newHistory;
  }
  const formAttr = useMemo(function(){
    return{
      ref:formRef,
      action:"/search",
      className:"header-search",
      onSubmit:function(e){
        e.preventDefault();
        if(state.value !== ""){
          console.log({"search":state.value})
          handleStore.set(newHistory());
          dispatch({
            key:'set_value',
            value:""
          });
        }
      }
    }
  },[state.value]);
  return (
    <SearchContext.Provider value={[state,dispatch]}>
      <Form {...formAttr}>
        <HeaderSearchInput/>
        <HeaderSearchSubmit form = {formRef.current}/>
        <HeaderSearchRecomend  history={store}/>
      </Form>
    </SearchContext.Provider>
  );
}

export default memo(HeaderSearch);
