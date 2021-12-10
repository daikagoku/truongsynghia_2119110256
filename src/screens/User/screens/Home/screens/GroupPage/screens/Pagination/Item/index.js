import {memo} from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import {Item,Button,Icon} from '../../../../../../../../../components/';
function HomePagePaginationItem({active,index,text,icon,...props}){
	return(
		<Item key={index}className={clsx("mx-1",styles.item)}>
			<Button className={clsx("square-btn",styles.button,{[styles['button-active']]:active})} {...props}>
				{
					text && text
					|| icon && <Icon icon={icon}/>

				}
			</Button>
		</Item>
	)
}
export default memo(HomePagePaginationItem);