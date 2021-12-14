import {memo} from 'react';
import clsx from 'clsx';
import {Item,Link} from '../../../../../../components/';
function FooterListItem({item,index,...props}){
	return(
		<Item key={index}className={"footer-list-item"}>
			<Link to={"/postdetail/"+item.alias} className="footer-list-button">
				{item.title}
			</Link>
		</Item>
	)
}
export default memo(FooterListItem);