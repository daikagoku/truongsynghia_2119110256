import './App.css';
import {Switch,Route} from 'react-router-dom';
import {memo} from 'react'
import clsx from 'clsx';
import useThemeModel from './model/Theme/';
import UserContent from "./screens/User";
function App() {
  const [theme] = useThemeModel();
  return (
    <section id="App" className={clsx(theme.current)}>
      <Switch>
        <Route path="/"component={UserContent} />
      </Switch> 
    </section>
  );
}
export default memo(App);