import './index.css';
import {memo} from 'react'
import useFetch from '../../../../../../core/useFetch';
import GroupPostTitle from './Title/';
import GroupPostLoading from './Loading/';
import GroupPostContent from './Content/';

export default memo(function GroupPost() {
	const [listItem] = useFetch({
        initData:[],
        position:"home-post",
        keyApi:'post'
    });
	return(
	<section className="container-fluid">
		<div className="container-lg">
			<div className="row group-post">
				<div className="col col-12">
					<div className="group-post-head">
						<GroupPostTitle />
					</div>
					<div className="group-post-body">
						{
							listItem.length > 0 && <GroupPostContent listItem={listItem}/>
											|| <GroupPostLoading />
						}
					</div>	
				</div>
			</div>
		</div>
	</section>
	)
})