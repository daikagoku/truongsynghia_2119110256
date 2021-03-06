import {Switch,Route,Redirect} from 'react-router-dom';
import {createContext,memo,useState} from 'react';
import Contact from './screens/Contact/';
import Header from './screens/Header/';
import Menu from './screens/Menu/';
import Home from './screens/Home/';

import Cart from './screens/Cart/';
import ProductCategory from './screens/ProductCategory/';
import ProductDetail from './screens/ProductDetail/';

import PostDetail from './screens/PostDetail/';

import Footer from './screens/Footer/';
export const UserPageContext = createContext({});
export default function User({history,location,match,...props}) {
	return(
	<>
		<Route path ="/" component={Contact}/>
		<Route path ="/" component={Header}/>
		<Route path ="/" component={Menu}/>
		<Route path ="/" component={Cart}/>
		<Switch>	
			<Route exact path ="/" component={Home}/>
			<Route path ="/product/detail" component={ProductDetail}/>
			<Route path ="/product/category" component={ProductCategory}/>

			<Route path ="/post/detail" component={PostDetail}/>
			<Redirect to='/error'/>
		</Switch>
		<Route path ="/" component={Footer}/>
	</>
	)
}
{/*





		



			
		
		
				
		
		
*/}