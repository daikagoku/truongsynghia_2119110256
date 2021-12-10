
import Slide from './screens/Slide/';
import GroupFlashSale from './screens/GroupFlashSale/';
import GroupPost from './screens/GroupPost/';
import GroupPage from './screens/GroupPage/';
import './index.css';
export default function() {
	return(
		<div id="home">
			<Slide />
			<GroupFlashSale />
			<GroupPage />
			<GroupPost />
		</div>

	)
}