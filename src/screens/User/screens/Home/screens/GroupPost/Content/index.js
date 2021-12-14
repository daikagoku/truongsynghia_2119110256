import {memo} from 'react';
import clsx from 'clsx';

import {Widget} from '../../../../../../../components/';
import PostCard from '../../../../../components/CardPostHorizontal/';
function GroupPostContent({listItem,...props}){
	return(
		<div className="row">
			<div className="col col-12 col-md-6 px-1 py-0">
				<Widget prefix="group-post">
					<PostCard data ={listItem[0]}/>
				</Widget>
			</div>
			<div className="col col-12 col-md-6 px-1 py-0">
				<Widget prefix="group-post">
					<PostCard data ={listItem[1]}/>
				</Widget>
			</div>
			<div className="col col-12 col-md-6 px-1 py-0">
				<Widget prefix="group-post">
					<PostCard data ={listItem[2]}/>
				</Widget>
			</div>
			<div className="col col-12 col-md-6 px-1 py-0">
			 	<Widget prefix="group-post">
			 		<PostCard data ={listItem[3]}/>
			 	</Widget>
			</div>
		</div>
	)
}
export default memo(GroupPostContent);