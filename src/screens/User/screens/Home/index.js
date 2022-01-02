
import Slide from './screens/Slide/';
import GroupFlashSale from './screens/GroupFlashSale/';
import GroupPost from './screens/GroupPost/';
import GroupPage from './screens/GroupPage/';
import './index.css';
export default function({props}) {
	return(
		<section id="home">
			<Slide />
			<GroupFlashSale />
			<GroupPage />
			<GroupPost />
		</section>

	)
}