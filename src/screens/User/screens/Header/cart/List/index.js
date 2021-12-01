import {useContext,memo} from 'react';
import {List} from '../../../../../../components/';
import HeaderCartListItem from './Item/';
import {HeaderCartContext} from '../init';
import './index.css';
export default memo(function HeaderCartList({children}) {
	const [store,handleStore] = useContext(HeaderCartContext);
	return (
	<div className="header-cart-content-list-container">
		<List className="header-cart-content-list" listItem={store} itemAttr={{className:"d-flex w-100"}}>
			{
				function(item,index){
					return (
						<HeaderCartListItem data={item}/>
					);
				}
			}
		</List>
	</div>
	)
})