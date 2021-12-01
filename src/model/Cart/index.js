import {createContext,useMemo,useState} from 'react';
import useStorage from '../../core/useStorage';
export const CartContext = createContext([]);
export default function useCartModel(){
	const [store,handleStore] = useStorage('cart_product',[]);
	const handle = {
		add:function({productId,version,quantity}){
				const _newStore = [...store];
 				const _index = _newStore.findIndex(function(item){
					return item.productId === productId && item.version === version;
				});		
				if(_index === -1){
					let id = 0;
					if(_newStore.length > 0){
						id = _newStore[_newStore.length - 1].id + 1; 
					};
					_newStore.push({
						id:id,
						productId:productId,
						version:version,
						quantity:quantity
					})
				}else{
					_newStore[_index].quantity+=quantity;
					if(_newStore[_index].quantity >5){
						_newStore[_index].quantity = 5
					};
				};
				handleStore.set(_newStore);
			return true;
		},
		delete:function(carId){
				const _newStore = store.filter(function(item){
					if(item){
						return Number(item.id) && item.id !== carId;
					}
				})
				handleStore.set(_newStore);
				return true;
			}
	};
	return [store,handle];
}
