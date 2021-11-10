import {useReducer,useMemo,useRef} from 'react';
import useStorage from '../../../core/useStorage';
import {Form,Input,Button,Icon} from '../../tags';
import './index.css';
import HeaderSearchRecomend from './recomend';
import {reducer,initData,SearchContext} from './init';
function HeaderSearch(props) {
  const formRef = useRef();
  const inputRef = useRef();
  const [state,dispatch] = useReducer(reducer,initData);
  const [store,handleStore] = useStorage('header_search',[]);
  function addHistory(){
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
          handleStore({
            key:'set_value',
            value:addHistory()
          });
          dispatch({
            key:'set_value',
            value:""
          });
        }
      }
    }
  },[state.value]);
  const inputAttr = useMemo(function(){
    return{
        ref:inputRef,
        value:state.value,
        onChange:function(event){
          const newValue = event.target.value.replace(/\s{1,}/," ");
          dispatch({
            key:'set_value',
            value:newValue
          });
        },onFocus:function(e){
          dispatch({
            key:'set_focus',
            value:true
          })
        },onBlur:function(e){
          dispatch({
            key:'set_focus',
            value:false
          })
        },
        className:"header-search-input",
        placeholder:"Tìm kiếm sản phẩm"
    }
  },[state.value]);
  const submitAttr = useMemo(function(){
    return{
      type:"button",
      className:"header-search-btn square-btn submit",
      onMouseDown:function(e){
        e.preventDefault()
      },onClick:function(e){
        formRef.current.submit();
      }
    }
  },[state.value]);
  return (
    <SearchContext.Provider
        value={[state,dispatch]}
      >
      <Form {...formAttr}>
      	<Input {...inputAttr}/>
      	<Button {...submitAttr}>
      		<Icon className="fas fa-search"/>
      	</Button>
        <HeaderSearchRecomend  history={store}/>
      </Form>
    </SearchContext.Provider>
  );
}

export default HeaderSearch;
