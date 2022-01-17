import './App.css';
import {Switch,Route,useLocation} from 'react-router-dom';
import {memo,useRef,useEffect,useState} from 'react';
import clsx from 'clsx';
import useThemeModel from './model/Theme/';
import ErrorPage from "./screens/Error";
import UserPage from "./screens/User";
import MessageContainer from "./screens/Messages/";
import ToastContainer from "./screens/Toasts/";
import DialogContainer from "./screens/Dialogs/";
import AuthContainer from "./screens/Auth/";
function App({...props}) {
  const [theme] = useThemeModel();
  const location = useLocation();
  const thisRef = useRef();
  useEffect(function(){
    if(thisRef.current){
      thisRef.current.scrollTop = 0;
    };
  },[location]);
  return (
  <section ref = {thisRef} id="App" className={clsx(theme.default,theme.current)}>
      <MessageContainer />
      <ToastContainer />
      <DialogContainer />
      <AuthContainer />
      <Switch>
        <Route path="/error"component={ErrorPage} />
        <Route path="/"component={UserPage} />
      </Switch> 
  </section>
  );
}
export default memo(App);