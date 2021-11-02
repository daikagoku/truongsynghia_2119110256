import React,{memo} from 'react';
import "./Post.css";
import {
	PostThumbnail,
	PostDate,
	PostComment,
	PostView,
	PostTitle,
	PostSummary,
	// ProductCurrendPrice,
	// ProductRootPrice,
	// ProductOption,
	// ProductRating
} from './Post'
function PostCardVertical({dataProduct,...props}){
		const cardAttr= {
			...props,
			className:"card post-card action flex-grow-1",
            onDragStart:function(event){
                event.preventDefault();     
            }
		};
		return(
				<div {...cardAttr}>
	    			<div className="post-card-head position-relative py-2 px-1">
	    				<PostThumbnail  image={dataProduct.image}title={dataProduct.title}/>
	    			</div>
	    			<div className="px-2">
	    				<div className="d-flex">
	    					<PostView className="mx-1"/>
	    					/
	    					<PostComment className="mx-1" id={dataProduct.id}/>
	    				</div>
	    				<PostTitle title={dataProduct.title} alias={dataProduct.alias}/>
	    			</div>
	    			<div className="px-2 pt-1 pb-2 d-flex  align-items-center">
	    				<PostSummary content={dataProduct.summary}/>
		    		</div>
	    			
				</div>
		)
	};
export default memo(PostCardVertical);