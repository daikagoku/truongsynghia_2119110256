import {createContext,useReducer,useMemo} from 'react';
import useStorage from '../../core/useStorage';
import {initData,reducer} from './init';
export const CartContext = createContext([]);
export default function useCartModel(){
	const [store,handleStore] = useStorage('cart_product',[]);
	const [state,dispatch] = useReducer(reducer,initData);
	const handle = {
		add:function({productId,version,quantity}){
				const _newStore = [...store];
 				const _index = _newStore.findIndex(function(item){
					if(item){
						return item.productId === productId && item.version === version;
					}
				});
				if(_index === -1){
					_newStore.push({
						productId:productId,
						version:version,
						quantity:quantity
					})
				}else{
					_newStore[_index].quantity+=quantity;
				};
				handleStore.set(_newStore);
		},
		delete:function(carIds){
			const _newStore = [...store];
			if(Array.isArray(carIds)){
				carIds.forEach(function(carId){
					_newStore.splice(carId,1);
				})
			}else{
				_newStore.splice(carIds,1);
			}
			handleStore.set(_newStore);
		},update:function(carId,quantity){
			const _newStore = [...store];
			_newStore[carId].quantity=quantity;
			handleStore.set(_newStore);
		}
	};
	return [store,handle];
}
