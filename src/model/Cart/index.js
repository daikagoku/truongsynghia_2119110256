import {createContext,useMemo,useState} from 'react';
import ProductModel from '../Product/';
import useStorage from '../../core/useStorage';
export const CartContext = createContext([]);
export default function useCartModel(){
	const [list] = ProductModel();
	const [store,handleStore] = useStorage('cart_product',[]);
	const listProduct = [];
		store.forEach(function(item){
			const product = list.find(function(_product){
				return _product.id === item.id;
			});
			if(typeof(product) === 'object'){
				product.quantity = item.quantity;
				listProduct.push(product);
			};
	});
	function handle(action){
		switch(action.key){
			case 'add_product':
				const newStore = [...store];
 				const index = newStore.findIndex(function(item){
					return item.id === action.value.id;
				});		
				if(index === -1){
					newStore.push({
						id:action.value.id,
						quantity:action.value.quantity
					})
				}else{
					newStore[index].quantity++;
				};
				handleStore({
					key:"set_value",
					value:newStore
				})
				break;
			case 'delete_product':	
				handleStore({
					key:"set_value",
					value:store.filter(function(item){
						return item.id !== action.value.id;
					})
				})
				break;
		}
	};
	return [listProduct,handle];
}
