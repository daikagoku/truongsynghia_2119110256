import "./index.css";
import React,{memo}   from 'react';
import {createContext}from 'react';
import PostThumbnail  from "./Thumbnail/";
import PostTitle      from "./Title/";
import PostDate       from "./Date/";
import PostView       from "./View/";
import PostComment    from "./Comment/";
import PostSummary    from "./Summary/";
export const PostContext = createContext({});
function PostCardVertical({data,...props}){
	return(
	<PostContext.Provider value ={data}>
		<div className="post-card row">
	   		<div className="post-card-head col col-12 col-lg-6">
	   			<PostThumbnail />
	   		</div>
	   		<div className="post-card-body col col-12 col-lg-6">
	   			<PostDate />
	   			<PostTitle />
	   			<div className="d-flex">
	   				<PostView /> / <PostComment/>
	   			</div>
	   			<PostSummary />
	   		</div>   			
		</div>
	</PostContext.Provider>
	)
};
export default memo(PostCardVertical);