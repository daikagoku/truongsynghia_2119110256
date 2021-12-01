import GroupFlashSale from './screens/GroupFlashSale/';
import GroupPost from './screens/GroupPost/';
import Slide from './screens/Slide/';
import './index.css';
export default function() {
	return(
		<div id="home">
			<Slide />
			<GroupFlashSale />
			<GroupPost />
		</div>

	)
}