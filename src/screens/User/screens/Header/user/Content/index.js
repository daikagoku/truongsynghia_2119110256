import {useRef,useEffect} from 'react';
import {Button,Icon,Widget} from '../../../../../../components/';
import UserAvatar from './Avatar/';
import UserFullname from './Fullname/';
import UserOption from './Option/';
import './index.css';

export default function UserContent() {

	return(
		<>
				<Widget prefix="head header-user">
					<UserAvatar />
					<UserFullname />
				</Widget>
				<Widget prefix="body header-user">
					<UserOption />
				</Widget>				
		</>
	)
}