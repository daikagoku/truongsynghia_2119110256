import './index.css';
import {
	Widget,List
} from '../../../../components/';
import {
	UserContext,
	UserAvatar,
	UserFullname
} from '../../../../components/user/';
import CommentEmoji from './Emoji/';
export default function() {
	return(
		<div className="col col-12 product-card-detail-comments">
			<div className="product-card-detail-comment row">
				<div className="col col-2">
					<UserAvatar />
				</div>
				<div className="col col-10">
					<div className="product-card-detail-comment-head">
						<UserFullname />
					</div>
					<div className="product-card-detail-comment-body"></div>
					<div className="product-card-detail-comment-foot">
						<CommentEmoji/>
					</div>
				</div>
			</div>
		</div>
	)
}