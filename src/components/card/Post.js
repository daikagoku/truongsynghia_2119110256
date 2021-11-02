import Fetch from '../../core/Fetch';
import {Image,Link,Icon} from '../../tags/Tags';
import Thumbnail from '../thumbnail/Thumbnail';
export function PostThumbnail({image,...props}){
	return(
		<Thumbnail thumbnailClass="inset-t-8">
    		<Image className="post-img img-cover"src={image}/>
    	</Thumbnail>
	)
};
export function PostTitle({title,alias,...props}){
	let text = "Đang cập nhật";
	if(title !== undefined){
		text = title;
	};
	return(
		<Link to={"/postdetail/"+alias}className="my-1 post-title">{text}</Link>
	)
};
export function PostSummary({content,...props}){
	let text = "Đang cập nhật";
	if(content !== undefined){
		text = content;
	};
	return(
		<p className="my-1 post-summary">{text}</p>
	)
};
export function PostDate({className,date,...props}){
	let text = "Đang cập nhật";
	if(date !== undefined){
		text = date;
	};
	return(
		<div className={"d-flex align-items-center "+className}>
			<Icon className="post-icon mx-1 fas fa-calendar-alt"/>
		 	<span className="mx-1 post-date">{text}</span>
		</div>
	)
};
export function PostComment({className,id,...props}){
	const comments = Fetch({
		initData:[],
		keyApi :'comment',
		filter:(item)=>(item.position === 'post' && item.positionId === id)
	});
	const comment = comments.length;
	return(
		<div className={"d-flex align-items-center "+className}>
			<Icon className="post-icon mx-1 far fa-comment-dots"/>
		 	<span className="mx-1 post-date">{comment}</span>
		</div>
	)
};
export function PostView({className,view,...props}){
	if(view === undefined){
		view = 0;
	};
	return(
		<div className={"d-flex align-items-center "+className}>
			<Icon className="post-icon mx-1 fas fa-eye"/>
		 	<span className="mx-1 post-date">{view}</span>
		</div>
	)
};
export function PostLike({className,id,...props}){
	return(
		<div className={"d-flex align-items-center "+className}>
			<Icon className="post-icon mx-1 fas fa-eye"/>
		 	<span className="mx-1 post-date">{}</span>
		</div>
	)
};
export function PostDislike({className,id,...props}){
	return(
		<div className={"d-flex align-items-center "+className}>
			<Icon className="post-icon mx-1 fas fa-eye"/>
		 	<span className="mx-1 post-date">{}</span>
		</div>
	)
};