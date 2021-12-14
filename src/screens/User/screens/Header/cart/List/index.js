import {useContext,memo} from 'react';
import {List,Item} from '../../../../../../components/';
import HeaderCartListItem from './Item/';
import {HeaderCartContext} from '../init';
import './index.css';
export default memo(function HeaderCartList({children}) {
	const [store,handleStore] = useContext(HeaderCartContext);
	const itemAttr = {
		className:"d-flex w-12"
	}
	return (
	<div className="header-cart-content-list-container">
		<List className="header-cart-content-list">
			{
				store.map(function(item,index){
					return (
						<Item key={index} {...itemAttr}>
							<HeaderCartListItem data={item} index={index}/>
						</Item>
					);
				})
			}
		</List>
	</div>
	)
})