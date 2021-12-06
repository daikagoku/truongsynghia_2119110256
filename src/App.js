import './App.css';
import {Switch,Route} from 'react-router-dom';
import {memo} from 'react'
import clsx from 'clsx';
import useThemeModel from './model/Theme/';


import ErrorPage from "./screens/Error";
import UserPage from "./screens/User";
function App() {
  const [theme] = useThemeModel();
  return (
    <section id="App" className={clsx(theme.current)}>
      <Switch>
        <Route path="/error"component={ErrorPage} />
        <Route path="/"component={UserPage} />
      </Switch> 
    </section>
  );
}
export default memo(App);