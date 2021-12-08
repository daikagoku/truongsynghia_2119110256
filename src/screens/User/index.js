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
	console.log({history,location,match});
	return(
	<>
		<Route path ="/" component={Contact}/>
		<Route path ="/" component={Header}/>
		<Route path ="/" component={Menu}/>
		<Switch>
			<Route exact path ="/" component={Home}/>
			<Route path ="/productdetail" component={ProductDetail}/>
			<Redirect to="/error" />
		</Switch>
		<Route path ="/" component={Footer}/>
	</>
	)
}
{/*

		
		
		
*/}