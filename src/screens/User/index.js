import {Switch,Route,Redirect} from 'react-router-dom';
import {createContext,memo,useState} from 'react';
import Contact from './screens/Contact/';
import Header from './screens/Header/';
import Footer from './screens/Footer/';
import Menu from './screens/Menu/';
import Home from './screens/Home/';
import ProductDetail from './screens/ProductDetail/';
export const UserPageContext = createContext({});
export default function User({history,location,match,...props}) {
	return(
	<>
		<Route path ="/" component={Contact}/>
		<Route path ="/" component={Header}/>
		<Route path ="/" component={Menu}/>
		<Switch>
			<Route path ="/productdetail" component={ProductDetail}/>
			<Route exact path ="/" component={Home}/>
			<Redirect to='/error'/>
		</Switch>
		<Route path ="/" component={Footer}/>
	</>
	)
}
{/*

		
		
		
*/}