import {forwardRef,memo} from 'react';
import './index.css';
const Thumbnail = function({children,className,thumbnailClass,prefix,...props},ref){
		const thumbnailAttr = {
			...props,
			className:"thumbnail"
		};
		if(className !== undefined){
			thumbnailAttr.className+=" "+className;
		};
		if(prefix !== undefined){
			thumbnailAttr.className+=" "+prefix+"_thumbnail";
		}
		return(
			<div ref={ref}{...thumbnailAttr}>
				<div className={"thumbnail-container "+thumbnailClass}>
					<div className="thumbnail-content ">
						{children}
					</div>
				</div>
			</div>
		);
};
export default memo(forwardRef(Thumbnail));