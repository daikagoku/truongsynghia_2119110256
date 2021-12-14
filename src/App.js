import './App.css';
import {Switch,Route,useLocation} from 'react-router-dom';
import * as ReactRouter from 'react-router-dom';
import {memo,useRef,useEffect} from 'react'
import clsx from 'clsx';
import useThemeModel from './model/Theme/';
import ErrorPage from "./screens/Error";
import UserPage from "./screens/User";
import {Toast} from "./components/";
function App({...props}) {
  const [theme] = useThemeModel();
  const location = useLocation();
  const thisRef = useRef();
  useEffect(function(){
    if(thisRef.current){
      thisRef.current.scrollTop = 0;
    }
  },[location]);
  return (
    <section ref = {thisRef} id="App" className={clsx(theme.default,theme.current)}>
      <Switch>
        <Route path="/error"component={ErrorPage} />
        <Route path="/"component={UserPage} />
      </Switch> 
      <Toast />
    </section>
  );
}
export default memo(App);