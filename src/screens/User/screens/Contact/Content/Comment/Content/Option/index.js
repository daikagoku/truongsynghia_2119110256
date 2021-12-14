import './index.css';
import LikeButton from './LikeButton/';
import ReplyButton from './ReplyButton/';
import ShareButton from './ShareButton/';
import MoreButton from './MoreButton/';

export default function(){
	return(
		<div className="contact-content-option">
			<LikeButton />
			<ReplyButton />
			<ShareButton />
			<MoreButton />
		</div>
	)
}