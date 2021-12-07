import './index.css';
import {memo} from 'react'
import useFetch from '../../../../../../core/useFetch';
import {Widget} from '../../../../../../components/';
import GroupPostTitle from './title/';

import PostCard from '../../../../components/CardPostHorizontal/';

export default memo(function GroupPost() {
	const [listItem] = useFetch({
        initData:[],
        keyApi:'post'
    });
	return(
	<section className="container-fluid">
		<div className="container">
			<div className="row group-post">
				<div className="col col-12">
					<div className="row group-post-head">
						<GroupPostTitle />
					</div>
					<div className="row group-post-body">
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
				</div>
			</div>
		</div>
	</section>
	)
})