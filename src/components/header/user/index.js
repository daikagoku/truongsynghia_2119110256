import {useContext,useReducer} from 'react';
import {Button,Icon} from '../../tags';
import useFetch from '../../../core/useFetch';
import Widget from '../../widget/';
import {UserContext,UserAvatar,UserFullname} from '../../user/';
import './index.css';
import {Offcanvas,
	initData as initOffcanvas,
	reducer as reducerOffcanvas,
	OffcanvasContext} 
	from '../../offcanvas/';
import HeaderUserList from './list/';
export default function HeaderUser(){
	const [stateOffcanvas,dispatchOffcanvas] = useReducer(reducerOffcanvas,initOffcanvas);
	const [user] = useFetch({
	    initData:[],
	    keyApi:'user'
	});
	const buttonAttr = {
		className:"header-user-button circle-btn",
		onClick:function(e){
			dispatchOffcanvas({
				key:'set_open',
				value:!stateOffcanvas.open
			})
		}
	};
	return(
	<OffcanvasContext.Provider value={[stateOffcanvas,dispatchOffcanvas]}>
		<UserContext.Provider value={user}>
			<div className="header-user">
				<Button {...buttonAttr}>
					{
						user === undefined && <Icon icon="fas fa-user"/>
						||
						user !== undefined && <UserAvatar/>
					}
				</Button>
				<Offcanvas title="Tài khoản"position="right">
					<Widget prefix="head header-user">
						<UserAvatar prefix="header-user-avatar"/>
						<UserFullname />
					</Widget>
					<Widget prefix="body header-user">
						<HeaderUserList />
					</Widget>				
				</Offcanvas>
			</div>
		</UserContext.Provider>
	</OffcanvasContext.Provider>
	)
}