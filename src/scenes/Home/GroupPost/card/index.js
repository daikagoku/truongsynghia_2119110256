import React,{memo} from 'react';
import "./index.css";
import {
	PostContext,
	PostThumbnail,
	PostDate,
	PostComment,
	PostView,
	PostTitle,
	PostSummary
} from '../../../../components/post/';
function PostCardVertical({data,...props}){
	return(
	<PostContext.Provider value ={data}>
		<div className="post-card row">
	   		<div className="post-card-head col col-12 col-lg-6">
	   			<PostThumbnail />
	   		</div>
	   		<div className="post-card-body col col-12 col-lg-6">
	   			<PostDate />
	   			<div className="d-flex">
	   				<PostView />/<PostComment />
	   			</div>
	   			<PostTitle />
	   			<PostSummary />
	   		</div>   			
		</div>
	</PostContext.Provider>
	)
};
export default memo(PostCardVertical);