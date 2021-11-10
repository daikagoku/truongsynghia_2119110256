import './index.css';
import useFetch from '../../../core/useFetch';
import Widget from '../../../components/widget/';
import GroupPostTitle from './title/';
import PostCard from './card/';
export default function GroupPost() {
	const [listItem] = useFetch({
        initData:[],
        keyApi:'post'
    });
	return(
		<section className="container-fluid group-post-section">
			<div className="container group-post">
						<div className="row group-post-head">
							<GroupPostTitle />
						</div>
						<div className="row group-post-body">
							<div className="col col-12 col-sm-6">
							 	<Widget prefix="group-post">
							 		<PostCard data ={listItem[0]}/>
							 	</Widget>
							</div>
							<div className="col col-12 col-sm-6">
							 	<Widget prefix="group-post">
							 		<PostCard data ={listItem[1]}/>
							 	</Widget>
							</div>
							<div className="col col-12 col-sm-6">
							 	<Widget prefix="group-post">
							 		<PostCard data ={listItem[2]}/>
							 	</Widget>
							</div>
							<div className="col col-12 col-sm-6">
							 	<Widget prefix="group-post">
							 		<PostCard data ={listItem[3]}/>
							 	</Widget>
							</div>
				</div>	
			</div>
		</section>
	)
}